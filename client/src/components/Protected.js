import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Protected = (props) => {
  const {Component, user, batch} = props;
  // const {user} = props;
    const navigate = useNavigate();
    const isAuth = async()=>{
      const Token = JSON.parse(localStorage.getItem("data"))?.result.token;
      // console.log(Token);
      // console.log("Bearer "+Token);
        let check = await fetch(`http://localhost:5000/api/auth/${user}`, {
            method:'get',
            headers:{
                'Content-Type':'application/json',
                'authorization':'Bearer '+Token
            }
        })
        check = await check.json();
        // console.log("SO login check is ",check)
        if(!(check.success)){
          navigate('/login');
          window.location.reload(true);
        }
    }
    useEffect(()=>{

      isAuth();
    }, [])

  return (
    
    <div>
      <Component batch={batch}/>    
    </div>
  )
}

export default Protected