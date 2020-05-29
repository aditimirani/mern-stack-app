import React from 'react';

import UserList from '../components/UserList'

const Users = () => {
    const USER= [
        {
            id:'1',
            name: 'Aditi Thakkar',
            image:'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress',
            places:3
        }
        ];
    return(
        <div> 
            <UserList item={USER}/>
        </div>
    )
}
export default Users;