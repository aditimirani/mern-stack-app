import React, { useEffect, useState } from 'react';

import UserList from '../components/UserList'
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';

const Users = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [loadedUsers, setLoadedUser] = useState();
    
     useEffect(() => {
         const sendRequest = async() => {
             try{
                 setIsLoading(true);
                  const response = await fetch('http://localhost:5000/api/users');
                  const responseData = await response.json();
                  if(!response.ok){
                      throw new Error("something went wrong")
                  }
                  setIsLoading(false);
                  setLoadedUser(responseData.users);
             }catch(error){
                 console.log('error', error);
                 setIsLoading(false);
                 setError(error.message || 'something went wrong, please try again later');
             }
         }
         sendRequest();
     }, []);
      
     const errorHandler = () => {
         setError(null);
     }
    return(
        <> 
            {isLoading && <LoadingSpinner asOverlay />}
            {error && <ErrorModal error={error} onClear={errorHandler}/>}
            {loadedUsers && <UserList item={loadedUsers}/>}
        </>
    )
}
export default Users;