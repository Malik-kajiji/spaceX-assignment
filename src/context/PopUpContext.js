import React, {useState,useContext,createContext} from "react";

const Context = createContext()

const PopUpContext = ({children}) =>{
    const [active,setActive]=useState(false);
    const [Info,setInfo]=useState({});
    const [name,setName]=useState('');
    const [statusColor,setStatusColor]=useState('grey');
    const [status,setStatus]=useState('');
    const [serial,setSerial]=useState('');

    return <Context.Provider
        value={{
            active,
            Info,
            name,
            statusColor,
            status,
            serial,
            setActive,
            setInfo,
            setName,
            setStatusColor,
            setStatus,
            setSerial
        }}
    >
        {children}
    </Context.Provider>
}

export default PopUpContext;

export const PopUpData = ()=>useContext(Context)