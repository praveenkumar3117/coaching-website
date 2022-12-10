import React, { useState } from 'react'
import { useEffect } from 'react';
import Lectures from './Lectures'

const Physics = (props) => {

  // List all chapters here of a particular subject
  const {batch} = props;
  const [lectures, setLectures] = useState([]);
  

  useEffect(()=>{
    const fetchVideos = async()=>{

      let result = await fetch(`http://localhost:5000/api/fetchVideos/${batch}/Physics`, {
        method:'get',
        headers:{
          'Content-Type':'application/json'
        }
      })
  
      result = await result.json();
      console.log(result)
      setLectures([...result]);
      
    }
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

export default Physics