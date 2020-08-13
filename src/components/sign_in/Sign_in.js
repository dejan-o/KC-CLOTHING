import React,{Component} from 'react';
import './Sign_in.scss';
import FormInput from '../form_input/FormInput';
import CustomButton from '../customButton/CustomButton';
import {connect} from 'react-redux';
import {googleSignInStart, emailSignInStart} from '../../redux/user/userActions';


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
        const {signInWithEmail} = this.props;

        signInWithEmail(email,password);
        

    }


    render(){
        const {signInWithGoogle} = this.props;

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
                    <CustomButton type="button" onClick={signInWithGoogle} isGoogleSingIn>Sing In with Google</CustomButton>
                    </div>
                </form>
            </div>

        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        signInWithGoogle: () => dispatch(googleSignInStart()),
        signInWithEmail: (email,password) => dispatch(emailSignInStart({email,password}))
    }
}



export default connect(null, mapDispatchToProps)(Sign_in);