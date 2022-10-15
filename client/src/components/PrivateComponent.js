import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';


function PrivateComponent() {
    const authenticationStr = localStorage.getItem('data');
    const authentication = JSON.parse(authenticationStr);

  return (
    authentication.loggedin?<Outlet/>:<Navigate to='/login'/>
  )
}

export default PrivateComponent;