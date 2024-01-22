import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemoveFromCart}) => {
    let message;
    if(cart.length === 0){
        message = <p>Please add some products</p>
    }
    else{
        message = <div>
            <h4>Thanks For Purchasing</h4>
            <p>Happy Shopping With Us</p>
        </div>
    }
    return (
        <div>
            <h2 className={cart.length <= 2 ? 'red' : 'green'}>Order Summary: {cart.length}</h2>
            <p className={`bold bordered ${cart.length === 3 ? 'blue' : 'purple'}`}>Something is Coming</p>
            {cart.length > 2 ? <span className='purple'>Buy More Products</span> : <span>Don't you have money?</span>} {/* 2 */}
            {message}  {/* 1 */}
            {
                cart.map(tshirt => <p key={tshirt._id}>{tshirt.name} <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button></p>)
            }
            { cart.length === 2 && <p>Double Bonanza!!</p>} {/* 3 */}
            { cart.length === 3 || <p>It's Either Less or Greater Than Three!!</p>} {/* 4 */}
        </div>
    );
};

export default Cart;

/**
 * CONDITIONAL RENDERING
 * 1. use if or if else to set a variable that will contain an element, components
 * 2. ternary: condition ? 'for true' : 'for false'
 * 3. Logical &&: (if the condition is true then the next thing will be displayed)
 * 4. Logical || (if the condition is false then the next thing will be displayed)
 */


/**
 * CONDITIONAL STYLES CSS
 * 1. use ternary
 * 2. ternary inside template string
 */