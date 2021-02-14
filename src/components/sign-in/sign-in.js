import React, { Component } from 'react';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import CustomButton from '../custom-buttom/custom-button';
import FormInput from '../form-input/form-input';
import './sign-in.scss';

class SignIn extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();

        const {email, password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password)
            
            this.setState({email: '', password: ''})
        }catch(error){
            console.error(error)
        }
    }

    handleChange = e => {
        const {value, name} = e.target;

        this.setState({ [name]: value });

    }
    render() {
        return (
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    
                    <FormInput 
                        handleChange={this.handleChange} 
                        name="email" 
                        type="email" 
                        label="email"
                        value={this.state.email} 
                    />
                    <FormInput
                        handleChange={this.handleChange} 
                        name="password" 
                        type="password"
                        label="password" 
                        value={this.state.password} 
                    />
                    <div className="buttons">
                        <CustomButton type="submit"> 
                            Sign In
                        </CustomButton>
                        <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn> 
                        {' '}
                            Sign In with google {' '}
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
export default SignIn;