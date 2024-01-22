import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ring}) => {

    const ringEasyWay = useContext(RingContext)
    return (
        <div>
            <h2>Special</h2>
            <p><small>Ring: {ringEasyWay}</small></p>
        </div>
    );
};

export default Special;