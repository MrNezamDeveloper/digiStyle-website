import React from 'react';
import Header from "./components/Header";
import './App.css';
import Products from "./components/Products";



export default class App  extends React.Component {
    state = {
        products : [
            {
                id : 1,
                name : "پیراهن مردانه زی مدل 153113872",
                brand : "Zi",
                hasDiscount : true,
                discountValue : 235000,
                hasOff : true,
                offValue : 51,
                image  : "/images/products/1.jpg",
                price : 90000
            },
            {
                id : 2,
                name : "پیراهن مردانه ال سی وایکیکی مدل 9SJ537G8-CRP",
                brand : "LC Waikiki",
                hasDiscount : true,
                discountValue : 206000,
                hasOff : true,
                offValue : 30,
                image  : "/images/products/111356841.jpg",
                price : 144000
            },
            {
                id : 3,
                name : "پیراهن جین مردانه - مانگو",
                brand : "Mango",
                hasDiscount : false,
                discountValue : 0,
                hasOff : false,
                offValue : 0,
                image  : "/images/products/105705191.jpg",
                price : 890000
            },
            {
                id : 4,
                name : "پیراهن مردانه فرد کد p.baz.244 ",
                brand : "FRED",
                hasDiscount : true,
                discountValue : 59000,
                hasOff : true,
                offValue : 51,
                image  : "/images/products/113013122.jpg",
                price : 29000
            },

        ],
        basket : {
            basket_items : [{
                id : 4,
                name : "پیراهن مردانه فرد کد p.baz.244 ",
                brand : "FRED",
                hasDiscount : true,
                discountValue : 59000,
                hasOff : true,
                offValue : 51,
                image  : "/images/products/113013122.jpg",
                price : 29000,
                count : 0,
            }],
            basket_items_id : [4],

        }
    }
  readStateFromAppComponent = (item) =>{
  {/*this filter index for access to id*/}
     let index = this.state.products.findIndex((product)=>item === product.id)
     {/* no more one select product*/}
     if(this.state.basket.basket_items.findIndex(product => this.state.products[index].id === product.id) >= 0){
        }
      else{
        {/* update state*/}
        this.setState({
            basket : {
                basket_items: [...this.state.basket.basket_items, this.state.products[index]  ],
                basket_items_id: [...this.state.basket.basket_items_id, this.state.products[index].id]
            }
     })
  }}


 removeStateFromAppComponent = (item) =>{
     {/* finde index and get id*/}
    let index = this.state.basket.basket_items_id.findIndex(para => para ===item)
    if (index >=0) {
        let basketItems = this.state.basket.basket_items;
        let basketItemsID = this.state.basket.basket_items_id;
    {/* delet this index element*/}
        basketItems.splice(index , 1 ) 
        basketItemsID.splice(index , 1 ) 
    {/* update state*/}
        this.setState({
            basket_items: basketItems,
            basket_items_id : basketItemsID 
        })
    } else {
        
    }


}
    render() {
        return (
            <div>
                <Header 
                basket={this.state.basket} 
                removeOnBaskets={this.removeStateFromAppComponent}/>
                
                <Products 
                products={this.state.products}
                sendToProductsProps={this.readStateFromAppComponent}/>
                
            </div>
        );
    }
};