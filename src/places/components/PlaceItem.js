import React, { useState, useContext } from 'react';

import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';
import {AuthContext} from '../../shared/components/context/auth-context';

import './PlaceItem.css'

const PlaceItem = (props) => {
    const [showMap, setShowMap] = useState(false);
    const [showModal, setShowModal]=  useState(false);
    const auth = useContext(AuthContext);

    const openMapHandler = () => setShowMap(true);

    const closeMapHandler = () => setShowMap(false);

    const showDeleteWarningHandler = () => {
            setShowModal(true);
    }
    
    const cancelDeleteHandler = () => {
            setShowModal(false);
    }

    const confirmDeleteHandler = () => {
        setShowModal(false);
        console.log('deleting in progress');
    }

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
            <Modal  show={showModal} onCancel={cancelDeleteHandler} header="are you sure?" footerClass='place-item__modal-actions' footer={
                <>
                    <Button inverse onClick={cancelDeleteHandler}>Cancel</Button>
                    <Button danger onClick={confirmDeleteHandler}>Confirm</Button>
                </>
            } >
                <p> Do you want to proceed and delete this place? Please note that it cant be undone thereafter.</p>
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
                    {auth.isLoggedIn && (
                     <>
                        <Button to={`/places/${id}`}>Edit</Button>
                        <Button danger onClick={showDeleteWarningHandler}>Delete</Button>
                    </>
                    )
                }
                </div>
                </Card>
            </li>
    </>
    )
}
export default PlaceItem;