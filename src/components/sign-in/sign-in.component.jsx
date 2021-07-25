import React from "react";
import './sign-in.styles.scss'
import FomInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {signInWithGoogle} from '../../firebase/firebase.utils'
class SignIn extends  React.Component{

    constructor() {
        super();
        this.state={
            email: '',
            password:''
        }
    }
    handleChange = event =>{
        const {value,name} = event.target

        this.setState({[name]:value})
    }
    handleSubmit = (event)=>{
        event.preventDefault()
    }
    render() {
        return(
            <div className={'sign-in'}>
                <h2> I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                   <FomInput
                       handleChange={this.handleChange}
                       label={'Email'}
                       name={'email'}
                       type={'email'}
                       value={this.state.email}
                       required/>
                    <FomInput
                        handleChange={this.handleChange}
                        label={'Password'}
                        name={'password'} type={'password'}
                        value={this.state.password}
                        required
                    />
                    <div className={'buttons'}>
                        <CustomButton type={'submit'} >
                            SIGN IN
                        </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            SIGN IN WITH GOOGLE
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
export default  SignIn
