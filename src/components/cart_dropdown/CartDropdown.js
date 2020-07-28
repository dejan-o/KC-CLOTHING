import React from 'react';
import './CartDropdown.scss';
import {connect} from 'react-redux';
import CustomButton from '../customButton/CustomButton';
import CartItem from '../cart_item/CartItem';

const CartDropdown = ({cartItems})=> {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                { cartItems.map(item => <CartItem item={item} />) }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        cartItems: state.cart.cartItems
    }
}

export default connect(mapStateToProps)(CartDropdown);