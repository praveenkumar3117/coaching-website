import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Chapters = (props) => {

    const {subject, chapter, lectures}=props;

    const [thisLectures, setLectures] = useState([]);

    useEffect(()=>{
        console.log("Lectures are", lectures)
        // take all lectures that have this chapter number in them.
        lectures.forEach(element => {
            if(element.chapter==chapter){
                // console.log("YES for chapter",chapter)
                
                // setLectures(thisLectures.push(element));
                setLectures(prev => prev.concat(element))
                console.log(element)

                
                console.log(thisLectures)
                // console.log("For chapter ", chapter, " Element is ",element)
                // console.log("This lectures = ", thisLectures)

            }
        });
        // const arr = [...thisLectures];
        console.log("This lectures is ",thisLectures)
        // console.log(typeof thisLectures)
        // console.log("Arr type", typeof arr)




    }, [])


  return (
        <Link to='/lectures' state={thisLectures}>
            <div className='rounded my-2 bg-gray-300 hover:bg-gray-400 text-black active:bg-gray-200 select-none w-2/3 mx-auto py-4'>
                Chapter: {chapter}
            </div>
        </Link>
  )
}

export default Chapters