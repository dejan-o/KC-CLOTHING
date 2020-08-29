import React from 'react';
import './Checkout.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cartSelectors';
import CheckoutItem from '../../components/checkout_item/CheckoutItem';
import StripeButton from '../../components/stripe_button/StripeButton';

const Checkout = ({ cartItems, cartTotal })=> {
	return <div className="checkout-page">
		<div className="checkout-header">
			<div className="header-block">
				<span>Product</span>
			</div>

			<div className="header-block">
				<span>Description</span>
			</div>

			<div className="header-block padd">
				<span>Quantity</span>
			</div>

			<div className="header-block padd">
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
		<div className="test-warning">
			Please use following test credit card for payments <br/>
			4242 4242 4242 4242 - Exp: some date etc 01/25 - CVC: any 3 digits
		</div>
		<StripeButton price={cartTotal}/>
	</div>;
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	cartTotal: selectCartTotal
});


export default connect(mapStateToProps)(Checkout);