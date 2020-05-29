import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';

import './PlaceItem.css'

const PlaceItem = (props) => {
    const {id,image, title,address, description} = props;
    return(
    <li className='place-item'>
        <Card>
        <div className='place-item__image'>
            <img src={image} alt={title} />
        </div>
        <div className='place-item__info'>
            <h2>{title}</h2>
            <h2>{address}</h2>
            <p>{description}</p>
        </div>
        <div className='place-item__actions'>
            <Button danger>View on map</Button>
            <Button to={`/places/${id}`}>Edit</Button>
            <Button danger>Delete</Button>
        </div>
        </Card>
    </li>)
}
export default PlaceItem;