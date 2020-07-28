import React,{Component} from 'react';
import './Sign_in.scss';
import FormInput from '../form_input/FormInput';
import CustomButton from '../customButton/CustomButton';
import {auth, signInWithGoogle} from '../../firebase/firebase';
class Sign_in extends Component{

    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }



    }

    onHandleChange = (event) => {
        const {value,name} = event.target;
        this.setState({[name]:value})
    }

    onHandleSubmit = async event => {
        event.preventDefault();

        const {email,password} = this.state;

        try{
        await auth.signInWithEmailAndPassword(email,password)
        this.setState({ email:'', password:'' });
        }catch(error){
            console.log(error);
        }

    }


    render(){
        return (

            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.onHandleSubmit}>
                    <FormInput 
                    name="email"
                    type="email"
                    value={this.state.email}
                    required
                    label="Email"
                    handleChange={this.onHandleChange}
                    />
                   

                    <FormInput
                    type="password"
                    name="password"
                    value={this.state.password}
                    required
                    handleChange={this.onHandleChange}
                    label="Password"
                    />
                    
                    <div className="buttons">
                    <CustomButton type="submit">Sing In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSingIn>Sing In with Google</CustomButton>
                    </div>
                </form>
            </div>

        );
    }
}

export default Sign_in;