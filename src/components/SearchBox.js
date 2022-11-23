import React, { useEffect, useState } from 'react';
import '../styles/searchBox.scss';
const SearchBox = ({setChosenWord}) => {
    const suggestions = ['capsules','cores','dragons','history','landpads','lunchpads','missions','payloads','rockets','ships']
    const [matchedSuggestions,setMatchedSuggestions]=useState([])
    const [searchWord,setSearchWord]= useState('')
    function handleChange(e){
        const word = e.target.value
        setSearchWord(word);
        setMatchedSuggestions(suggestions.filter((e)=>{
            return e.startsWith(word)
        }))
    }
    function handleChose(e){
        setSearchWord(e.target.innerHTML)
        setMatchedSuggestions([])
    }
    function handleSearch() {
        setMatchedSuggestions([])
        setChosenWord(searchWord)
    }

    useEffect(()=>{
        document.querySelector('.search-input').addEventListener('blur',()=>{
            setTimeout(() => {
                setMatchedSuggestions([])
            }, 500);
        })
    },[])
    
    return ( 
        <article className="Search-Box container" id='Search-Box'>
            <input 
                className='TXT-normal search-input' 
                type="text" 
                placeholder='Type Here'
                onChange={(e)=>handleChange(e)}
                value={searchWord}
                />
            <ul className='suggestions' role='list'>
                {matchedSuggestions.map((e)=>{
                    return(
                        <li key={e} onClick={(e)=>handleChose(e)}>{e}</li>
                    )
                })}
            </ul>
            <button className='BTN' onClick={handleSearch}>search</button>
        </article>
    );
}

export default SearchBox;