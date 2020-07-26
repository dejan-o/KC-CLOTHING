import React,{Component} from 'react';
import FormInput from '../form_input/FormInput';
import CustomButton from '../customButton/CustomButton';
import {auth,createUserProfileDocument} from '../../firebase/firebase';
import './SignUp.scss';


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
        if(password !== confirmPassword){
            alert('pw and confirm pw doesnt match');
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user, {displayName});
            this.setState({displayName: '',
            email: '',
            password: '',
            confirmPassword: ''});

        } catch (error) {
            console.log(error);
        }
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

export default SignUp;