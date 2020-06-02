import React from 'react';
import {useParams} from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH} from '../../shared/components/util/validators'

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
        title: 'Empire State Building',
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
    const indentifiedPlace = DUMMY_PLACES.find(p => p.id === placeId );

    if(!indentifiedPlace){
        return(
            <div className='center'>
                <h2>Could not find the place</h2>
            </div>
        )
    }

    return(
        <form className='place-form'>
            <Input 
                type='text'
                id='title'
                label='Title'
                element='input'
                onInput={() => {}}
                validators={[VALIDATOR_REQUIRE()]}
                errorText='please enter a valid title'
                value={indentifiedPlace.title}
                valid={true}
                >
            </Input>
            <Input 
                id='description'
                element='textarea'
                onInput={() => {}}
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText='please enter a valid description'
                value={indentifiedPlace.description}
                valid={true}
                />
            <Button type='submit' disabled={true}>UPDATE PLACE</Button>
        </form>
    )
}
export default UpdatePlace;