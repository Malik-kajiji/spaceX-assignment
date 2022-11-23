import React, { useState } from 'react';
import '../styles/card.scss';
const Card = (props) => {
    const {AllInfo,chosenWord}=props;
    const singularWord =  chosenWord.slice(0,chosenWord.length-1)
    const serial = AllInfo[`${singularWord}_serial`]
    const [active,setActive]=useState(false)
    function handleClick(){
        setActive(prev=>!prev)
    }
    let statusColor;
    if(AllInfo.status === 'active'){
        statusColor='green'
    }else if(AllInfo.status === 'destroyed' || AllInfo.status === 'lost'){
        statusColor='red'
    }else {
        statusColor='grey'
    }
    return ( 
        <>
            <article className='card'>
                <h2 className='TXT-heading name'>{serial || AllInfo.id || AllInfo[`${singularWord}_id`]}</h2>
                <p className={`TXT-heading status ${statusColor}`}>{AllInfo.status || AllInfo.name || AllInfo.title || AllInfo[`${singularWord}_name`] || AllInfo[`${singularWord}_type`]}</p>
                <button className='BTN' onClick={handleClick}>show {active?'less':'more'}</button>
            </article>
            <article className={`AllInfo ${ active ? 'active':''}`}>
                <p className='TXT-normal'>original launch: {AllInfo.original_launch}</p>
                <p className='TXT-normal'>details : {AllInfo.details}</p>
                <p className='TXT-normal'>reuse count: {AllInfo.reuse_count}</p>
                <p className='TXT-normal'>landings: {AllInfo.landings}</p>
                <img className='image' src={AllInfo.image} alt="" />
            </article>
        </>
    );
}

export default Card;