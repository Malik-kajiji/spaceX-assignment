import React from 'react';
import '../styles/bunner.scss';
import {BiSearchAlt} from 'react-icons/bi';
const Bunner = () => {
    return ( 
        <section className="bunner">
            <header className='container main-header'>
                <div className='content'>
                    <h2 className='TXT-heading2 logo'> Space X</h2>
                    <a href="#Search-Box"><button className='BTN search'> {BiSearchAlt()}</button></a>
                </div>
            </header>
            <article className='text container'>
                <div className='content'>
                    <h2 className='TXT-heading'>space x informations</h2>
                    <p className='TXT-normal'>
                        you can search for space-x and get details about Capsules, Core, Dragons, History or
                        launches etc.   
                    </p>
                </div>
            </article>
            <div className='backGround'>
                <div className='overLay'></div>
                <img className='image' src="/Rocket-Transparent.png" alt="" />
            </div>
        </section> 
    );
}

export default Bunner;