import React, { useEffect } from 'react'
import { useContext } from 'react';
import { LoginContext } from '../Contexts/LoginContext';

const Logout = () => {

    const {setSuperUserloggedIn} = useContext(LoginContext);
    
    localStorage.removeItem("data");
    
    useEffect(()=>{
        setSuperUserloggedIn(false);
    }, []);
  
    return (
    <div className='text-4xl bg-red-400 text-black'>

      Logout Successful

    </div>
  )
}

export default Logout;