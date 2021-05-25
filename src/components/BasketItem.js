import React from "react";
import './BasketItem.css';

class BasketItem extends React.Component {

    render() {
        return (
            <div className="BasketItem">
                <div 
                className="BasketItem-close-btn c-ui-icon c-ui-icon--remove" 
                onClick={()=>{this.props.removeFromBaste(this.props.id)}}> 
                </div>
                <div className="BasketItem-image">
                    <div className="BasketItem-image--wrapper">
                        <div className="BasketItem-image--overlay"></div>
                        <img 
                        src={this.props.basketInfo['image']} 
                        alt={this.props.basketInfo['name']}/>
                    </div>
                </div>
                <div className="BasketItem-detailed">
                    <div className="BasketItem-brand">{this.props.basketInfo['brand']}</div>
                    <div className="BasketItem-info" data-lable="">{this.props.basketInfo['name']}</div>
                    <div className="BasketItem-info" data-lable="تعداد:">{this.props.basketInfo['count']}</div>
                    <div className="BasketItem-price-container">
                        <div 
                        className="BasketItem-price" 
                        data-currency="تومان">
                            {(this.props.basketInfo['price']).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</div>
                            {(this.props.basketInfo['hasDiscount'] && this.props.basketInfo['discountValue'] > 0) && (<div className="BasketItem-discount" data-currency="تومان">{(this.props.basketInfo['discountValue']).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</div>)}
                        </div>
                </div>
            </div>
        );
    }

}


export default BasketItem;