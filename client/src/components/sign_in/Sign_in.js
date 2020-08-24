import React, { useState } from 'react';
import './Sign_in.scss';
import FormInput from '../form_input/FormInput';
import CustomButton from '../customButton/CustomButton';
import { connect } from 'react-redux';
import { googleSignInStart, emailSignInStart } from '../../redux/user/userActions';


const Sign_in = ({ signInWithEmail, signInWithGoogle }) => {

	const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });
   

	const { email, password } = userCredentials;

	const onHandleChange = (event) => {
		const { value, name } = event.target;
		setUserCredentials({ ...userCredentials, [name]: value });
	};

	const onHandleSubmit = async event => {
		event.preventDefault();

       
		signInWithEmail(email, password);
        
	};


	return (

		<div className="sign-in">
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={onHandleSubmit}>
				<FormInput 
					name="email"
					type="email"
					value={email}
					required
					label="Email"
					handleChange={onHandleChange}
				/>
                   

				<FormInput
					type="password"
					name="password"
					value={password}
					required
					handleChange={onHandleChange}
					label="Password"
				/>
                    
				<div className="buttons">
					<CustomButton type="submit">Sing In</CustomButton>
					<CustomButton type="button" onClick={signInWithGoogle} isGoogleSingIn>Sing In with Google</CustomButton>
				</div>
			</form>
		</div>

	);
};



const mapDispatchToProps = dispatch => {
	return {
		signInWithGoogle: () => dispatch(googleSignInStart()),
		signInWithEmail: (email, password) => dispatch(emailSignInStart({ email, password }))
	};
};



export default connect(null, mapDispatchToProps)(Sign_in);