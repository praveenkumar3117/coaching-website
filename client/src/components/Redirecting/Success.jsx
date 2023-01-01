import React from 'react'
import { useParams } from 'react-router-dom';

const Mailsent = () => {
  
  const params = useParams();
  const {message} = params;
  
  return (

    <div className='pt-32 lg:pt-24 '>
        <h1 className='text-4xl'>{message}</h1>
    </div>
  )
}

export default Mailsent;