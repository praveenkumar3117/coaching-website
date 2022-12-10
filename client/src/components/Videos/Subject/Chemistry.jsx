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
    <main className='py-32 flex flex-col lg:grid-cols-3 lg:grid-rows-3 lg:mx-4 lg:grid gap-4 justify-center items-center'>
    {
      lectures.map((item, index)=>(
        <Lectures key={index} link={item.vidurl} subject="Chemistry" title={item.title} pic={item.pic} batch = {batch}/>
      ))
    }
    </main>
  )
}

export default Chemistry