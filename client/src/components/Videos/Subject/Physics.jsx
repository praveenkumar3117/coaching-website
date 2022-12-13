import React, { useState } from 'react'
import { useEffect } from 'react';
import Lectures from './Lectures'

const Physics = (props) => {

  // List all chapters here of a particular subject
  const {batch} = props;
  const [lectures, setLectures] = useState([]);
  

  useEffect(()=>{
    const fetchVideos = async()=>{

      fetch(`http://localhost:5000/api/fetchVideos/${batch}/Physics`, {
        method:'get',
        headers:{
          'Content-Type':'application/json'
        }
      }).then((response)=>{
        response.json().then(
          (lectureArr)=>{
            lectureArr.sort((vid1, vid2)=>{
              if(vid1.chapter>vid2.chapter){
                return 1;
              }else{
                return -1;
              }
            })

            setLectures([...lectureArr])
          }
        )
      })
      .catch((err)=>{
        console.log("Error is ",err)
      })

      if(lectures.length===0){
        setLectures([{
          subject:"Physics",
          batch:batch,
          title:"No Videos Uploaded",
          pic:"../../../images/user.png"
        }]);
      }
      
    }

    fetchVideos();
  }, []);


  return (
    <main className='py-32 flex flex-col lg:grid-cols-3 lg:grid-rows-3 lg:mx-4 lg:grid gap-4 justify-center items-center'>
    {
      lectures.map((item, index)=>(
        <Lectures chapter={item.chapter} lecture = {item.lecture} key={index} subject="Physics" link={item.vidurl}e title={item.title} pic={item.pic} batch = {batch}/>
      ))
    }
    </main>


  )
}

export default Physics