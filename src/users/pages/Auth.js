import React, { useState } from 'react';

import Card from '../../shared/components/UIElements/Card';
import Input from '../../shared/components/FormElements/Input';
import {VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from '../../shared/components/util/validators';

import { useForm } from '../../shared/components/hooks/form-hook';
import Button from '../../shared/components/FormElements/Button';

import './Auth.css';


const Auth = () => {
    const [isLoginMode, setIsLoginMode]= useState(true);
    const [formState, inputHandler, setFormData] = useForm({
        email:{
            value: '',
            isValid: false,
        },
        password: {
            value: '',
            isValid: false
        }
    },false);

    const submitLogin = (event) => {
        event.preventDefault();
        console.log(formState.inputs);
    }
    const handleSwitchToSignUp = () => {
        if(!isLoginMode){
            setFormData(
                {
                    ...formState.inputs, 
                    name: undefined,

                }, formState.inputs.email.isValid, formState.inputs.password.isValid);
        }else {
            setFormData(
                {
                    ...formState.inputs,
                     name: {
                        value: '',
                        isValid:false,
                    }
                },false);
        }
        setIsLoginMode(prevMode => !prevMode);
    }

    return (
    <div className='authentication'>
      <Card>
            <form onSubmit={submitLogin}>
               {!isLoginMode && <Input 
                    id='name'
                    type='text'
                    element='input'
                    label='Name'
                    onInput={inputHandler}
                    errorText={'please enter the name'}
                    validators={[VALIDATOR_REQUIRE()]}
                      />}
                <Input 
                    id='email'
                    type='text'
                    element='input'
                    label='Email'
                    onInput={inputHandler}
                    errorText={'please enter a valid email address'}
                    validators={[VALIDATOR_EMAIL()]}
                      />
                <Input 
                    id='password'
                    type='password'
                    element='input'
                    label='Password'
                    onInput={inputHandler}
                    errorText={'please enter minimum 5 characters'}
                    validators={[VALIDATOR_MINLENGTH(5)]}
                      />

                <Button type='submit' disabled={!formState.isValid}>{isLoginMode? 'Login': 'Sign up'}</Button>
                <Button inverse onClick={handleSwitchToSignUp}>Switch to {isLoginMode? 'Sign up' :'Login'}</Button>

            </form>
        </Card>
    </div>)
}

export default Auth;