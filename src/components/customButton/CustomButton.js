import React from 'react';
import './CustomButton.scss';

const CustomButton = ({ children, isGoogleSingIn, inverted, ...props }) => {
	return (<button className={`${inverted ? 'inverted' : ''} ${isGoogleSingIn ? 'google-sign-in' : ''} custom-button`} {...props}>{children}</button>);
};



export default CustomButton;