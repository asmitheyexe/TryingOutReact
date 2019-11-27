import React from 'react';
import useResources from './useResources';
// SIMPLE example how we can now resuse that hook function we created with useResources
const UserList = () =>{
    const users = useResources('users');

    return (
        <ul>
            {users.map( user => <li key={user.id} >{user.name}</li>)}
        </ul>
    );
    
};
export default UserList;
