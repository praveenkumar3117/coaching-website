import React, {useEffect, useState} from 'react'
import Chapters from '../Chapters.jsx/Chapters';
import Lectures from './Lectures'

const Chemistry = (props) => {
  
  const {batch} = props;
  const [lectures, setLectures] = useState([]);
  const [chapters, setChapters] = useState(()=>new Set());
  const [chapterArr, setChapterArr] = useState([]);

  useEffect(()=>{
    const fetchVideos = async()=>{

      fetch(`http://localhost:5000/api/fetchVideos/${batch}/Chemistry`, {
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
            setChapterArr([...chapters].sort((a,b)=>{
              console.log(a)
              if(parseInt(a)<parseInt(b)){
                return -1;
              }else{
                return 1;
              }
            }));
          }
        )
      })
      .catch((err)=>{
        console.log("Error is ",err)
      })
      
      console.log(lectures)

      if(lectures.length===0){
        setLectures([{
          subject:"Chemistry",
          batch:batch,
          title:"No Videos Uploaded",
          pic:"../../../images/user.png"
        }]);
      }
      
    }

    fetchVideos();
  }, []);
  
  return (
    <main className='pt-32 lg:grid lg:grid-cols-3 lg:grid-row-3'>
    {
      chapterArr.map((item, index)=>(
        <Chapters key={index} lectures = {lectures} chapter={item} subject={"Chemistry"}/>
      ))
    }
    </main>
  )
}

export default Chemistry