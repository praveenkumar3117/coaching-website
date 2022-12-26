import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Protected = (props) => {
  
  const {Component, user, batch, setProgress} = props;
  const navigate = useNavigate();

  useEffect(()=>{
    try{
      setProgress(10);
      const isAuth = async()=>{
        const Token = JSON.parse(localStorage.getItem("data"))?.result.token;
          let check = await fetch(`http://localhost:5000/api/auth/${user}`, {
              method:'get',
              headers:{
                  'Content-Type':'application/json',
                  'authorization':'Bearer '+Token
              }
          })

          check = await check.json();
          
          if(!(check.success)){
            navigate('/login');
            window.location.reload(true);
          }
          setProgress(100);


        }
        isAuth();
  }catch(err){
    setProgress(100);
    navigate('/login');
  }

  }, [])

  return (
    
    <div>
      <Component setProgress={setProgress} batch={batch}/>    
    </div>
  )
}

export default Protected