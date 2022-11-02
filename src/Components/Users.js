import React, { useContext } from 'react';
import {Store} from '../App.js'
function Users() {
   const {token}=useContext(Store)
    return (
       <div>
          UserName:{token.username}

          
        </div>
    );
}

export default Users;