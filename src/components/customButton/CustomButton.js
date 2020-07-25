import React from 'react';
import './CustomButton.scss';

const CustomButton = ({children,isGoogleSingIn, ...props}) => {
return (<button className={`${isGoogleSingIn ? 'google-sign-in' : ''} custom-button`} {...props}>{children}</button>);
}



export default CustomButton;