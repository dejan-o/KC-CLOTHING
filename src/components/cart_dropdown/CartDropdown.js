import React from 'react';
import './CartDropdown.scss';
import {connect} from 'react-redux';
import CustomButton from '../customButton/CustomButton';
import CartItem from '../cart_item/CartItem';
import {selectCartItems} from '../../redux/cart/cartSelectors';
const CartDropdown = ({cartItems})=> {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                { cartItems.map(item => <CartItem key={item.id} item={item} />) }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        cartItems: selectCartItems(state)
    }
}

export default connect(mapStateToProps)(CartDropdown);