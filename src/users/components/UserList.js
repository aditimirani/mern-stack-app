import React from 'react';

import UserItem from './UserItem';
import Card from '../../shared/components/UIElements/Card';

 import './UserList.css'

const UserList = props => {

    if(props.item.length === 0){
        return(
            <div className='center'>
            <Card>
                <h2 className='center'>No User Found</h2>
            </Card>
            </div>
        )
    }
    return(
        <ul className='users-list'>
            {props.item.map(user => {
                const {id, name, image, places} = user;
                return <UserItem key={id} id={id} name={name} image={image} placeCount={places}/>
            })}
        </ul>
        
    )
}
export default UserList;