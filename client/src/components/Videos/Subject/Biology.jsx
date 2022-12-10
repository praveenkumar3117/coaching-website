import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Lectures from './Lectures'

const Biology = (props) => {
  const {batch} = props;
  const [lectures, setLectures] = useState([]);
  const fetchVideos = async()=>{

    let result = await fetch(`http://localhost:5000/api/fetchVideos/${batch}/Biology`, {
      method:'get',
      headers:{
        'Content-Type':'application/json'
      }
    })

    result = await result.json();
    console.log(result)
    setLectures([...result]);
    
  }

  useEffect(()=>{
    fetchVideos();
  }, []);
  
  return (
    <main className='py-32 flex lg:flex-row md:flex-row lg:mx-4 flex-col justify-center items-center'>
    {
      lectures.map((item, index)=>(
        <Lectures key={index} subject="Physics" title={item.title} pic={item.pic} batch = {batch}/>
      ))
    }
    </main>
  )
}

export default Biology