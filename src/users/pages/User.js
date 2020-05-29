import React from 'react';

import UserList from '../components/UserList'

const Users = () => {
    const USER= [{id:'1', name: 'Aditi Thakkar', image:'https://images.app.goo.gl/WDKoohs3KcSdETvo6', places:3}];
    return(
        <div> 
            <UserList item={USER}/>
        </div>
    )
}
export default Users;