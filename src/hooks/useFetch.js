import { useEffect, useState } from 'react';
const useFetch = (chosenWord) => {
    const [Data,setData]=useState([]);
    const [err,setErr]=useState(false);
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        if(chosenWord !== ''){
            setLoading(true)
            fetch(`https://api.spacexdata.com/v3/${chosenWord}`)
            .then(res=>res.json())
            .then(data => setData(data))
            .catch(rej=>setErr(true))
            .finally(()=>{
                setLoading(false)
                setTimeout(() => {
                    setErr(false)
                }, 1500);
            })
        }
    },[chosenWord])
    return {Data,err,loading}
}

export default useFetch;