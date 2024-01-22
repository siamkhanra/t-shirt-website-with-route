import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css'
import toast from 'react-hot-toast';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart = tshirt => {
        // when we will click on buy btn total tshirt info will be save 
        // so where we will save since useState is state we can't save it directly
        // for this reason we will declare a array then we will set the value for save

        // to take a product single time this condition and have to use find
        const exist = cart.find(ts => ts._id === tshirt._id);
        if(exist){
            // for giving like alert i have used the related things in Main.jsx and Home.jsx
            toast('You have already added this t-shirt');
        }

        // if we don't want to add this condition that we will add a product only one time then we will use only this else lines
        else{
            const newCart = [...cart, tshirt];
            setCart(newCart);
        }

    }

    const handleRemoveFromCart = id =>{
        // filter will use not to take that product that means to exclude
        const remaining = cart.filter(ts => ts._id !== id);
        setCart(remaining);
    }

    return (
        <div className='home-container'>
            <div className='tshirts-container'>
                {
                    tshirts.map(tshirt => <TShirt key={tshirt._id} tshirt={tshirt} handleAddToCart={handleAddToCart}></TShirt>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            </div>
        </div>
    );
};

export default Home;