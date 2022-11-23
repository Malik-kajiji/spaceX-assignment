import React, { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import '../styles/cards.scss';
import Card from "./Card";
const Cards = ({chosenWord}) => {
    const {Data,loading,err} = useFetch(chosenWord)
    return ( 
        <section className="cards">
            <div className='cards-holder'>
                {Data.map(e=>{
                    return (
                        <Card 
                            key={Math.random()*100}
                            AllInfo={e}
                            chosenWord={chosenWord}
                        />
                    )
                })}
            </div>
            {loading && <h2 className='TXT-heading loading'>Loading</h2>}
            {err && <h2 className='TXT-heading err'>make sure to search something valid</h2>}
        </section>
    );
}

export default Cards;