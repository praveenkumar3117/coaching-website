import React, {useEffect, useState} from 'react'
import Lectures from './Lectures'

const Chemistry = (props) => {
  
  const {batch} = props;
  const [lectures, setLectures] = useState([]);
  const fetchVideos = async()=>{

    let result = await fetch(`http://localhost:5000/api/fetchVideos/${batch}/Chemistry`, {
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
        <Lectures key={index} subject="Chemistry" title={item.title} pic={item.pic} batch = {batch}/>
      ))
    }
    </main>
  )
}

export default Chemistry