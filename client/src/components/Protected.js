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
          fetch(`http://localhost:5000/api/auth/${user}`, {
              method:'get',
              headers:{
                  'Content-Type':'application/json',
                  'authorization':'Bearer '+Token
              }
          }).then(response=>{
            response.json().then(message=>{
              if(!(message.success)){
                navigate('/login');
                window.location.reload(true);
              }
              setProgress(100);
            })
          })

          setProgress(0);
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