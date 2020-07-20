import React, { useState, useContext } from 'react';

import Card from '../../shared/components/UIElements/Card';
import Input from '../../shared/components/FormElements/Input';
import {VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from '../../shared/components/util/validators';

import { useForm } from '../../shared/components/hooks/form-hook';
import Button from '../../shared/components/FormElements/Button';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';

import {AuthContext} from '../../shared/components/context/auth-context';

import './Auth.css';


const Auth = () => {
    const [isLoginMode, setIsLoginMode]= useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const auth = useContext(AuthContext);
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

    const authSubmitLoginHandler = async(event) => {
        event.preventDefault();

        if(isLoginMode){
            try{
                setIsLoading(true);
                const response = await fetch('http://localhost:5000/api/users/login', {
                    method: 'POST',
                    headers: {
                        'Content-type' : 'application/json'
                    },
                    body: JSON.stringify({
                        email: formState.inputs.email.value,
                        password: formState.inputs.password.value
                    })
                });
                setIsLoading(false);
                const responseData= await response.json();
                if(!response.ok){
                    throw new Error(responseData.message);
                }
                auth.login();
            }catch(err){
                console.log(err);
                setIsLoading(false);
                setError(err.message || 'something went wrong, please try again later');
            }
        }
        else{
            try{
                setIsLoading(true);
                const response = await fetch('http://localhost:5000/api/users/signup', {
                    method: 'POST',
                    headers: {
                        'Content-type' : 'application/json'
                    },
                    body: JSON.stringify({
                        name: formState.inputs.name.value,
                        email: formState.inputs.email.value,
                        password: formState.inputs.password.value
                    })
                });
                setIsLoading(false);
                const responseData= await response.json();
                if(!response.ok){
                    throw new Error(responseData.message);
                }
                auth.login();
            }catch(err){
                console.log(err);
                setIsLoading(false);
                setError(err.message || 'something went wrong, please try again later');
            }
        }
    }

    const handleSwitchToSignUp = () => {
        if (!isLoginMode) {
            setFormData(
              {
                ...formState.inputs,
                name: undefined
              },
              formState.inputs.email.isValid && formState.inputs.password.isValid
            );
          } else {
            setFormData(
              {
                ...formState.inputs,
                name: {
                  value: '',
                  isValid: false
                }
              },
              false
            );
          }
          setIsLoginMode(prevMode => !prevMode);
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
    <>
    <ErrorModal error={error} onClear={errorHandler} />
      <Card className='authentication'>
          {isLoading && <LoadingSpinner asOverlay />}
            <h2>Login Required</h2>
            <hr/>
            <form onSubmit={authSubmitLoginHandler}>
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
            </form>
            <Button inverse onClick={handleSwitchToSignUp}>Switch to {isLoginMode? 'Sign up' :'Login'}</Button>
        </Card>
    </>)
}

export default Auth;