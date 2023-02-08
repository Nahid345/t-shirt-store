import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRomoveItem }) => {

    let message;
    if (cart.length === 0) {
        message = <p>please buy at least one item</p>
    }

    else if (cart.length === 1) {
        message = <div>
            <p>One more Buy for me</p>
            <p><small>one Buy for you</small></p>
        </div>
    }

    else {
        message = <p>Thanks for Buying</p>
    }
    return (
        <div>
            <h3 className={cart.length === 2 ? 'orange' :'blue'}>Order Summary</h3>
            <h5 className={`bold ${cart.length ===2 ? 'yellow' :'green'}`}>Order Quantity:{cart.length}</h5>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={() => handleRomoveItem(tshirt)}>X</button>

                </p>)
            }

            {
                message
            }

            {
                cart.length === 3 ? <p>Tin jon r jnno kinba?</p> : <p>kino kino</p>
            }
            <p>and operator</p>
            {
                cart.length === 2 && <p>double item</p>
            }
            <p>or operator</p>
            {
                cart.length === 4 || <p>charta kino</p>
            }

        </div>
    );
};

export default Cart;