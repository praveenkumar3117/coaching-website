import React, {useState, useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom';
import Lectures from './Lectures'
import {AiOutlinePlus} from 'react-icons/ai';
import Chapters from '../Chapters.jsx/Chapters';

const Maths = () => {

  const [lectures, setLectures] = useState([]);
  const [chapters, setChapters] = useState(()=>new Set());
  const [chapterArr, setChapterArr] = useState([]);
  const location = useLocation();
  const {type, courseName, courseCategory} = location.state;

  useEffect(()=>{
    const fetchVideosFaculty = async()=>{
      try{
          
        const subject = "Maths";
        const batch = JSON.parse(localStorage.getItem('data')).result.batch;
        const email = JSON.parse(localStorage.getItem('data')).result.email;

        fetch(`http://localhost:5000/api/fetchVideos/faculty`, {
          method:'post',
          body:JSON.stringify({email, courseName, subject}),
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

        if(lectures.length===0){
          setLectures([{
            subject:"Maths",
            batch:batch,
            title:"No Videos Uploaded",
            pic:"../../../images/user.png"
          }]);
        }
      }catch(err){}
      
    }

    const fetchVideos = async()=>{
      try{
          
        const subject = "Maths";
        const batch = JSON.parse(localStorage.getItem('data')).result.batch;
        const category = location.state.courseCategory;

        fetch(`http://localhost:5000/api/fetchVideos/view-video`, {
          method:'post',
          body:JSON.stringify({subject, batch, category, courseName}),
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

        if(lectures.length===0){
          setLectures([{
            subject:"Maths",
            batch:batch,
            title:"No Videos Uploaded",
            pic:"../../../images/user.png"
          }]);
        }
      }catch(err){}
      
    }

    const fetchVideosUser2 = async()=>{
      try{
          
        const subject = "Maths";
        const batch = JSON.parse(localStorage.getItem('data')).result.batch;
        const category = location.state.courseCategory;

        fetch(`http://localhost:5000/api/fetchVideos/course-video`, {
          method:'post',
          body:JSON.stringify({courseName, subject}),
          headers:{
            'Content-Type':'application/json'
          }
        }).then((response)=>{
          response.json().then(
            (lectureArr)=>{
              console.log(lectureArr)

              lectureArr.forEach(element => {
                if(!chapters.has(element.chapter)){
                  setChapters(prev => new Set(prev).add(element.chapter));
                  chapters.add(element.chapter);
                  console.log(chapters)
                }
              });

              setLectures([...lectureArr])
              setChapterArr([...chapters].sort((a,b)=>{
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

        if(lectures.length===0){
          setLectures([{
            subject:"Maths",
            batch:batch,
            title:"No Videos Uploaded",
            pic:"../../../images/user.png"
          }]);
        }
      }catch(err){}
      
    }

    if(type==="faculty"){
      fetchVideosFaculty();
    }else if(type==="category"){
      fetchVideos();
    }else if(type==="user2"){
      fetchVideosUser2();
    }
    //eslint-disable-next-line
  }, [type, courseName, location.state.courseCategory]);

  return (
    <main className='py-32 flex flex-col lg:grid-cols-3 lg:grid-rows-3 lg:mx-4 lg:grid gap-4 justify-center items-center'>
    {
      chapterArr.map((item, index)=>(
        <Chapters key={index} lectures = {lectures} user={type} chapter={item} subject="Physics"/>
      ))
    }

    {/* Add Video for faculty */}
    {type==="faculty"?
    (

      <Link to={`/upload-video/Maths/${courseName}/${courseCategory}`}>
        {/* Add Video Card */}
        <div className="max-w-sm m-4 p-4 hover:bg-blue-400 active:bg-[#5F9DF7] rounded overflow-hidden shadow-lg bg-[#5F9DF7]">
            <div className = "px-6 py-4 mx-auto flex justify-center items-center">
                <AiOutlinePlus className='text-9xl'/>
            </div>
        </div>
    </Link>
    ):null
    }

    </main>
  )
}

export default Maths