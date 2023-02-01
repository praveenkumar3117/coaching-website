import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import Lectures from './Lectures'

const Maths = (props) => {
  const {batch} = props;
  const [lectures, setLectures] = useState([]);
  const [chapters, setChapters] = useState(()=>new Set());
  const [chapterArr, setChapterArr] = useState([]);
  const location = useLocation();

  useEffect(()=>{
    const fetchVideos = async()=>{

      try{
        
        const subject = "Maths";
        const batch = JSON.parse(localStorage.getItem('data')).result.batch;
        const category = location.state.courseCategory;

        fetch(`http://localhost:5000/api/fetchVideos/view-video`, {
          method:'post',
          body:JSON.stringify({subject, batch, category}),
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

    fetchVideos();
  }, []);

  return (
    <main className='py-32 flex flex-col lg:grid-cols-3 lg:grid-rows-3 lg:mx-4 lg:grid gap-4 justify-center items-center'>
    {
      chapterArr.map((item, index)=>(
        <Lectures key={index} lectures = {lectures} chapter={item} subject="Physics"/>
      ))
    }
    </main>
  )
}

export default Maths