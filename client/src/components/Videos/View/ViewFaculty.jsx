import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Chapters from '../Chapters.jsx/Chapters'
import Lectures from '../Subject/Lectures'

const ViewFaculty = () => {
    
    const [lectures, setArray] = useState([]);
    const [chapters, setChapters] = useState(()=>new Set());

    useEffect(()=>{
      const fetchVideos = async()=>{
        let localdata = localStorage.getItem("data");
        localdata = JSON.parse(localdata)
        
        fetch(`http://localhost:5000/api/fetchVideos/faculty`, {
        method:'post',
        body:JSON.stringify({"email":localdata.result.email}),
        headers:{
          'Content-Type':'application/json'
        }
      }).then((response)=>{
        response.json().then(
          (lectureArr)=>{
            lectureArr.forEach(element => {
              if(!chapters.has(element.chapter)){
                setChapters(prev => new Set(prev).add(element.chapter));
                chapters.add(element.chapter);
                console.log("Chpater is ", chapters)
              }
            });

            setArray([...lectureArr])
          }
        )
      })
      .catch((err)=>{
        console.log("Error is ",err)
      })
    }

      fetchVideos();
      if(lectures.length===0){
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
    <div className='py-32 flex flex-col lg:grid-cols-3 lg:mx-4 lg:grid gap-4 justify-center items-center'>

      {
        Array.from(chapters).map((item, index) =>(
          <Chapters key={index} lectures = {lectures} chapter={item} subject={"Physics"}/>
        )) 
      }



    </div>
  )
}

export default ViewFaculty