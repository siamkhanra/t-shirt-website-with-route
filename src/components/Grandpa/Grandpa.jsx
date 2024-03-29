import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css'

export const RingContext = createContext('gold');
export const MoneyContext = createContext(0);

const Grandpa = () => {
    const ring = 'diamond';
    const [money, setMoney] = useState(0);

    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            {/* <section className='flex'>
                <Father ring={ring}></Father>
                <Uncle></Uncle>
                <Aunty ring={ring}></Aunty>
            </section> */} 
            {/*  Alternate easy way to pass ring value */}
            <p>Has Money: {money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <RingContext.Provider value='golden ring'>
                    <section className='flex'>
                        <Father ring={ring}></Father>
                        <Uncle></Uncle>
                        <Aunty ring={ring}></Aunty>
                    </section>
                </RingContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;

/**
 * ALTERNATE EASY WAY TO PASS DATA 
 * 1. Create a context and export
 * 2. Create a provider and pass a value
 * 3. Use useContext to receive the value
 */
