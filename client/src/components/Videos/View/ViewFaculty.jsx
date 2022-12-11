import React from 'react'
import ViewNEET from './ViewNEET'
import ViewJEE from './ViewJEE'
import ViewFoundation from './ViewFoundation'
// import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import Lectures from '../Subject/Lectures'

const ViewFaculty = () => {
    
    const fetchVideos = async()=>{
      let localdata = localStorage.getItem("data");
      localdata = JSON.parse(localdata)
      // console.log("locadata", localdata.result.email);

      // console.log(localdata.result.email)
      
      let data = await fetch("http://localhost:5000/api/fetchVideos/faculty", {
        method:'post',
        body:JSON.stringify({"email":localdata.result.email}),
        headers:{
          'Content-Type':'application/json'
        }
      })
      data = await data.json();
      console.log(data)
      setArray(data);
    }

    const [array, setArray] = useState([]);
    useEffect(()=>{
      fetchVideos();
      if(array.length===0){
        const newArr = [{
          subject:'No Subject',
          batch:'No batch',
          title:'No Video found',
          pic:'No source',
          vidurl:'/'
        }]
        setArray(newArr)
      }
    }, [])
  

  return (
    <div className='py-32 flex flex-col lg:grid-cols-3 lg:grid-rows-3 lg:mx-4 lg:grid gap-4 justify-center items-center'>

      {
        array.map((item, index)=>(
          <Lectures key={index} subject={item.subject} batch={item.batch} title={item.title} pic={item.pic} link={item.vidurl}/>
        ))
      }



    </div>
  )
}

export default ViewFaculty