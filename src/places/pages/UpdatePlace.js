import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

import Card from '../../shared/components/UIElements/Card'
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH} from '../../shared/components/util/validators';
import {useForm} from '../../shared/components/hooks/form-hook';

import './PlaceForm.css';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'one of the most famous sky scrapper in the world',
        imageUrl:"https://lh5.googleusercontent.com/p/AF1QipO1LQRpgc0tNHhxmbcWWUpv88yjuTZvcwh6VjcJ=w408-h272-k-no",
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u1'

    },
    {
        id: 'p2',
        title: 'Emp. State Building',
        description: 'one of the most famous sky scrapper in the world',
        imageUrl:"https://lh5.googleusercontent.com/p/AF1QipO1LQRpgc0tNHhxmbcWWUpv88yjuTZvcwh6VjcJ=w408-h272-k-no",
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u2'

    }
]

const UpdatePlace = () => {
    
    const placeId = useParams().placeId;
    const [isLoading, setIsLoading]= useState(true)
    
    const [formState, inputHandler, setFormData] = useForm({
        title: {
            value: '',
            isValid: false,
        },
        description: {
            value: '',
            isValid: false
        }
    },false);

    const indentifiedPlace = DUMMY_PLACES.find(p => p.id === placeId );

    useEffect(() => {
        if(indentifiedPlace){
        setFormData({
            title: {
                value: indentifiedPlace.title,
                isValid: true,
            },
            description: {
                value: indentifiedPlace.description,
                isValid: true
            }
        }, true);
        setIsLoading(false);
        }
    },[setFormData,indentifiedPlace]); 


    if(!indentifiedPlace){
        return(
            <div className='center'>
                <Card>
                    <h2>Could not find the place</h2>
                </Card>
            </div>
        )
    }
    const placeUpdateSubmitHandler = (event) => {
        event.preventDefault();
        console.log(formState.inputs);
    }

    if(isLoading){
        return(
            <div className='center'>
                <h2>Loading...</h2>
            </div>
        ) 
    }
    return(
        formState.inputs.title.value && (
            <form className='place-form' onSubmit={placeUpdateSubmitHandler}>
            <Input 
                type='text'
                id='title'
                label='Title'
                element='input'
                onInput={inputHandler}
                validators={[VALIDATOR_REQUIRE()]}
                errorText='please enter a valid title'
                initialValue={formState.inputs.title.value}
                initialValid={formState.inputs.title.isValid}
                >
            </Input>
            <Input 
                id='description'
                element='textarea'
                onInput={inputHandler}
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText='please enter a valid description'
                initialValue={formState.inputs.description.value}
                initialValid={formState.inputs.description.isValid}
                />
            <Button type='submit' disabled={!formState.isValid}>UPDATE PLACE</Button>
        </form>)
        
    )
}
export default UpdatePlace;