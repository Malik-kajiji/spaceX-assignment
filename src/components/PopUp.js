import React from 'react';
import '../styles/PopUp.scss';
import { PopUpData } from '../context/PopUpContext';


const PodUp = () => {
    const {active,setActive,Info,name,statusColor,status,serial}=PopUpData();
    const InfoKeys = Object.keys(Info);

    return ( 
        <>
            {active && <section className='PopUp'>
                <article className='PopUp-card'>
                    <h2 className='TXT-heading name'>{name}</h2>
                    <p className={`TXT-heading status ${statusColor}`}>{status}</p>
                    <button className='BTN' onClick={()=>setActive(false)}>Hide</button>
                </article>
                <article className='PopUp-AllInfo'>
                    <p className='TXT-normal'>{InfoKeys[0]} : {Info[InfoKeys[0]]}</p>
                    <p className='TXT-normal'>{InfoKeys[4]} : {Info[InfoKeys[4]]}</p>
                    <p className='TXT-normal'>{InfoKeys[3]} : {Info[InfoKeys[3]]}</p>
                    <p className='TXT-normal'>{InfoKeys[InfoKeys.length-1]} : {Info[InfoKeys[InfoKeys.length-1]]}</p>
                </article>
            </section>
            }
        </>
    );
}

export default PodUp;