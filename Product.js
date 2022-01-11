import React from 'react';
import "./Product.css";

function Product(){
    return (
        <div className='product'>
            <div className='product__info'>
                <p> The lean startup</p>
                <p className='product__price'>
                    <small>RS</small>
                    <strong>699</strong>
                </p>
                <div className='product__rating'>
                    <p>⭐</p>
                    <p>⭐</p>
                    <p>⭐</p>  
                </div>
            </div>

            <img
            src=""
            alt=""/>

            <button> Add to Basket</button>

        </div>
    )
}

export default Product 

// import React from 'react';

// function Product(){
//     return (
//         <div className='product'>

//         </div>
//     )
// }

// export default Product