import React,{Component} from 'react';
import './Sign_in.scss';
import FormInput from '../form_input/FormInput';
import CustomButton from '../customButton/CustomButton';
class Sign_in extends Component{

    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }



    }

    onHandleChange = event => {
        const {value,name} = event.target;
        this.setState({[name]:value})
    }

    onHandleSubmit = event => {
        event.preventDefault();

        this.setState({ email:'', password:'' });
    }


    render(){
        return (

            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.onHandleSubmit}>
                    <FormInput 
                    name="email"
                    value={this.state.email}
                    required
                    label="email"
                    handleChange={this.onHandleChange}
                    />
                   

                    <FormInput
                    name="password"
                    value={this.state.password}
                    required
                    handleChange={this.onHandleChange}
                    label="password"
                    />
                    

                    <CustomButton type="submit">Sing In</CustomButton>
                </form>
            </div>

        );
    }
}

export default Sign_in;