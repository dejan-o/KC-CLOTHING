import React, { useState } from 'react';
import FormInput from '../form_input/FormInput';
import CustomButton from '../customButton/CustomButton';
import './SignUp.scss';
import { signUpStart } from '../../redux/user/userActions';
import { connect } from 'react-redux';

const SignUp = ({ signUpStart }) => {

	const [userCredentials, setUserCredentials] = useState(
		{
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		}
	);

	const { displayName, email, password, confirmPassword } = userCredentials; 

	const handleChange = event => {
		const { name, value } = event.target;
		setUserCredentials({ ...userCredentials, [name]: value });
	};

	const handleSubmit = async event => {
		event.preventDefault();
        
		if(password !== confirmPassword){
			alert('pw and confirm pw doesnt match');
			return;
		}
    
		signUpStart({ displayName, email, password });
        
	};



    
	return (
		<div className="sign-up">
			<h2 className="title">I dont have a account</h2>
			<span>Sign Up with your email and password</span>
			<form className="sign-up-form" onSubmit={handleSubmit}>
				<FormInput label="Display name" type="text" name="displayName" value={displayName} required onChange={handleChange} />
				<FormInput label="Email" type="email" name="email" value={email} required onChange={handleChange} />
				<FormInput label="Password" type="password" name="password" value={password} required onChange={handleChange} />
				<FormInput label="Confirm password" type="password" name="confirmPassword" value={confirmPassword} required onChange={handleChange} />

				<CustomButton type="submit">Sign Up</CustomButton>
			</form>
		</div>



	);
};


const mapDispatchToProps = dispatch => {
	return {
		signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
	};
};

export default connect(null, mapDispatchToProps)(SignUp);