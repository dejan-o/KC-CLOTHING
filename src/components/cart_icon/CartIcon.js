import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/cart.svg';
import './CartIcon.scss';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cartActions';
import { selectCartItemsCount } from '../../redux/cart/cartSelectors';
import { createStructuredSelector } from 'reselect';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
	return (
		<div className="cart-icon" onClick={toggleCartHidden}>
			<ShoppingIcon className="shopping-icon"/>
			<span className="item-count">{itemCount}</span>
		</div>


	);
};


const mapDispatchToProps = (dispatch) => {
	return {
		toggleCartHidden: () => dispatch(toggleCartHidden())
	};
};

const mapStateToProps = createStructuredSelector({
	itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);