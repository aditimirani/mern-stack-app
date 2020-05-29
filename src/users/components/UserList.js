import React from 'react';
import UserItem from './UserItem'

 import './UserList.css'

const UserList = props => {

    if(props.item.length === 0){
        return(
            <div><h2 className='center'>No User Found</h2></div>
        )
    }
    return(
        <ul>
            {props.item.map(user => {
                const {id, name, image, places} = user;
                return <UserItem key={id} id={id} name={name} image={image} placeCount={places}/>
            })}
        </ul>
        
    )
}
export default UserList;