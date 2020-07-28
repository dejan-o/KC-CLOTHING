import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/cart.svg';
import './CartIcon.scss';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cartActions';

const CartIcon = ({toggleCartHidden}) => {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>


    );
}


const mapDispatchToProps = (dispatch) => {
    return {
        toggleCartHidden: () => dispatch(toggleCartHidden())
    }
}


export default connect(null, mapDispatchToProps)(CartIcon);