import React, { useState } from 'react';
import { PopUpData } from '../context/PopUpContext';
import '../styles/card.scss';
const Card = (props) => {
    const {setActive,setInfo,setName,setStatusColor,setStatus,setSerial} = PopUpData()
    const {AllInfo,chosenWord}=props;
    const singularWord =  chosenWord.slice(0,chosenWord.length-1)
    const serial = AllInfo[`${singularWord}_serial`]
    const Status = AllInfo.status || AllInfo.name || AllInfo.title || AllInfo[`${singularWord}_name`] || AllInfo[`${singularWord}_type`];
    const name = serial || AllInfo.id || AllInfo[`${singularWord}_id`]
    let statusColor;
    if(AllInfo.status === 'active'){
        statusColor='green'
    }else if(AllInfo.status === 'destroyed' || AllInfo.status === 'lost'){
        statusColor='red'
    }else {
        statusColor='grey'
    }

    function handleClick(){
        setActive(true)
        setInfo(AllInfo)
        setName(name)
        setStatusColor(statusColor)
        setStatus(Status)
        setSerial(serial)
    }
    return ( 
        <>
            <article className='card'>
                <h2 className='TXT-heading name'>{name}</h2>
                <p className={`TXT-heading status ${statusColor}`}>{Status}</p>
                <button className='BTN' onClick={handleClick}>show more</button>
            </article>
        </>
    );
}

export default Card;