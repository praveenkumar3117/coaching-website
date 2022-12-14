import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Lectures from '../Subject/Lectures'

const ViewFaculty = () => {
    
    const [array, setArray] = useState([]);
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
            lectureArr.sort((vid1, vid2)=>{
              if(vid1.chapter>vid2.chapter){
                return 1;
              }else{
                return -1;
              }
            })

            setArray([...lectureArr])
          }
        )
      })
      .catch((err)=>{
        console.log("Error is ",err)
      })
    }

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
          <Lectures key={index} chapter={item.chapter} lecture = {item.lecture} subject={item.subject} batch={item.batch} title={item.title} pic={item.pic} link={item.vidurl}/>
        ))
      }



    </div>
  )
}

export default ViewFaculty