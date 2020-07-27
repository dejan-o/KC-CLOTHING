import React from 'react';
import './Sign_in_and_sign_up.scss';
import Sign_in from '../../components/sign_in/Sign_in';
import SignUp from '../../components/sign_up/SignUp';

const Sign_in_and_sign_up = ()=> {
	return (
		<div className="sign-in-and_sign-up-page">
			<Sign_in />
			<SignUp />
		</div>
	);
};

export default Sign_in_and_sign_up;