import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart = tshirt => {
        const exists = cart.find(ts => ts._id === tshirt._id);
        if (exists) {
            alert('tshirt already added');
        }
        else {
            const newCart = [...cart, tshirt];
            setCart(newCart);
        }

    }

    const handleRomoveItem = (tshirt)=>{
        const remaining = cart.filter(ts=>ts._id !== tshirt._id);
        setCart(remaining);
    }
    return (


        <div className='home-container'>
            <div className='tshirt-container'>
                {
                    tshirts.map(tshirt => <Tshirt
                        key={tshirt._id}
                        handleAddToCart={handleAddToCart}
                        tshirt={tshirt}>


                    </Tshirt>)
                }
            </div>

            <div className="cart-container">
                <Cart 
                cart={cart}
                handleRomoveItem={handleRomoveItem}
                
                ></Cart>
            </div>

        </div>

    );
};

export default Home;