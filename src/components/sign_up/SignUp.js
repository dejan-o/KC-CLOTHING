import React,{Component} from 'react';
import FormInput from '../form_input/FormInput';
import CustomButton from '../customButton/CustomButton';
import './SignUp.scss';
import {signUpStart} from '../../redux/user/userActions';
import {connect} from 'react-redux';

class SignUp extends Component {

    constructor(props){
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = event => {
        const {name,value} = event.target;
        this.setState({[name]:value})
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName,email,password,confirmPassword} = this.state;
        const {signUpStart} = this.props; 
        if(password !== confirmPassword){
            alert('pw and confirm pw doesnt match');
            return;
        }
    
        signUpStart({displayName, email, password});
        
    }



    render(){
        return (
        <div className="sign-up">
            <h2 className="title">I dont have a account</h2>
            <span>Sign Up with your email and password</span>
            <form className="sign-up-form" onSubmit={this.handleSubmit}>
                <FormInput label="Display name" type="text" name="displayName" value={this.state.displayName} required onChange={this.handleChange} />
                <FormInput label="Email" type="email" name="email" value={this.state.email} required onChange={this.handleChange} />
                <FormInput label="Password" type="password" name="password" value={this.state.password} required onChange={this.handleChange} />
                <FormInput label="Confirm password" type="password" name="confirmPassword" value={this.state.confirmPassword} required onChange={this.handleChange} />

                <CustomButton type="submit">Sign Up</CustomButton>
            </form>
        </div>



        );
    }
} 

const mapDispatchToProps = dispatch => {
    return {
        signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
    }
}

export default connect(null, mapDispatchToProps)(SignUp);