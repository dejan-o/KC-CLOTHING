import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_51HC0kAIKD8mQ0IAISETzeYis42K254m91bFXxIeZpuZdZooHxKz5q0RgvaArb01uXvUbfPT3YBlTwXI4bwBHTCQt0082cZnA7T';

	const onToken = token => console.log('payment completed');


	return <StripeCheckout 
		label="Pay Now"
		name="KC CLOTHING"
		billingAddress
		shippingAddress
		image="link"
		description={`your total price is $${price}`}
		amount={priceForStripe}
		panelLabel="Pay Now"
		token={onToken}
		stripeKey={publishableKey}
	/>;
};


export default StripeButton;
