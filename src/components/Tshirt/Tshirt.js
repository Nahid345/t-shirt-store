import React from 'react';
import './Tshirt.css'

const Tshirt = ({tshirt,handleAddToCart}) => {
   
    const{name,picture,price} =tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <h2>Price:{price}</h2>
            <button onClick={()=>handleAddToCart(tshirt)}>Buy This</button>
        </div>
    );
};

export default Tshirt;