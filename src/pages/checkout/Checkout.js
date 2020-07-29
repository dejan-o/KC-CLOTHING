import React from 'react';
import './Checkout.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cartSelectors';
import CheckoutItem from '../../components/checkout_item/CheckoutItem';

const Checkout = ({ cartItems, cartTotal })=> {
	return <div className="checkout-page">
		<div className="checkout-header">
			<div className="header-block">
				<span>Product</span>
			</div>

			<div className="header-block">
				<span>Description</span>
			</div>

			<div className="header-block">
				<span>Quantity</span>
			</div>

			<div className="header-block">
				<span>Price</span>
			</div>

			<div className="header-block">
				<span>Remove</span>
			</div>
		</div>
		{cartItems.map(item => <CheckoutItem key={item.id} cartItem={item}/>)}
		<div className="total">
			<span>TOTAL: ${cartTotal}</span>
		</div>

	</div>;
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	cartTotal: selectCartTotal
});


export default connect(mapStateToProps)(Checkout);