import React, { useState } from 'react'
import { useEffect } from 'react';
import Chapters from '../Chapters.jsx/Chapters';
import Lectures from './Lectures'

const Physics = (props) => {

  // List all chapters here of a particular subject
  const {batch} = props;
  const [lectures, setLectures] = useState([]);
  const [chapters, setChapters] = useState(()=>new Set());

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

            lectureArr.forEach(element => {
              if(!chapters.has(element.chapter)){
                setChapters(prev => new Set(prev).add(element.chapter));
                chapters.add(element.chapter);
                console.log(chapters)
              }
            });

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
    console.log(lectures)


  }, []);


  return (
    <main className='pt-32 lg:grid lg:grid-cols-3 lg:grid-row-3'>
    {
      Array.from(chapters).map((item, index) =>(
          <Chapters key={index} lectures = {lectures} chapter={item} subject={"Physics"}/>
      ))  
    }
    </main>


  )
}

export default Physics