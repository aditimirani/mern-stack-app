import React, { useState } from 'react';

import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';

import './PlaceItem.css'

const PlaceItem = (props) => {
    const [showMap, setShowMap] = useState(false);

    const openMapHandler = () => setShowMap(true);

    const closeMapHandler = () => setShowMap(false);

    const {id,image, title,address, description} = props;
    return(
        <>
            <Modal 
                show={showMap} 
                onCancel={closeMapHandler} 
                header={address} 
                contentClass='place-item__modal-content' 
                footerClass='place-item__modal-actions'
                footer={<Button onClick={closeMapHandler}>Close</Button>}
            >
                <div className="map-container">
                    <h2>The Map</h2>
                </div>
            </Modal>
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
                    <Button danger onClick={openMapHandler}>View on map</Button>
                    <Button to={`/places/${id}`}>Edit</Button>
                    <Button danger>Delete</Button>
                </div>
                </Card>
            </li>
    </>
    )
}
export default PlaceItem;