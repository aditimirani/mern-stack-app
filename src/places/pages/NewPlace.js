import React from 'react';

import Button from '../../shared/components/FormElements/Button';
import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/components/util/validators';
import {useForm} from '../../shared/components/hooks/form-hook';

import './PlaceForm.css';



const NewPlace = () => {
    const [formState, inputHandler] = useForm({
        title: {
            value:'',
            isValid:false,
        },
        description: {
            value:'',
            isValid:false,
        }
        ,
        address: {
            value:'',
            isValid:false
        }
    }, false);

    
    const placeSubmitHandler = (event) => {
        event.preventDefault();
        console.log(formState.inputs);
    }

    return(
    <form className='place-form' onSubmit={placeSubmitHandler}>
        <Input 
            id='title'
            element='input' 
            type='text' 
            label='Title' 
            validators={[VALIDATOR_REQUIRE()]} 
            errorText='please enter a valid title'
            onInput={inputHandler}
            />

        <Input 
            id='description'
            element='textarea' 
            label='Description' 
            validators={[VALIDATOR_MINLENGTH(5)]} 
            errorText='please enter a valid description (at least 5 characters)'
            onInput={inputHandler}
            />
        <Input 
            id='address'
            element='input' 
            type='text' 
            label='address' 
            validators={[VALIDATOR_REQUIRE()]} 
            errorText='please enter a valid title'
            onInput={inputHandler}
            />
        <Button type='submit' disabled={!formState.isValid}> ADD PLACE</Button>
    </form>)
}

export default NewPlace;