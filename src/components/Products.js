import React from 'react';
import './Products.css';
import Product from "./Product";



const Products = (props) => {
    
    return(
        <div className="Products">
            <div className="Products-wrapper">
                {props.products.map((product) => (<Product brand={product.brand} price={product.price} 
                name={product.name} image={product.image} hasOff={product.hasOff} offValue={product.offValue}
                hasDiscount={product.hasDiscount} discountValue={product.discountValue} key={product.id}
                id={product.id}
                sendToProductProps={props.sendToProductsProps}
                />))}

            </div>
    </div>
    )
    
};


export default Products;