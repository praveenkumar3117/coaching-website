import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Chapters = (props) => {

    const {subject, chapter, lectures, user}=props;
    
    const [thisLectures, setLectures] = useState([]);

    useEffect(()=>{
        // take all lectures that have this chapter number in them.
        lectures.forEach(element => {
            if(element.chapter==chapter){
                thisLectures.push(element)
                setLectures(thisLectures)
                console.log("thisLectures is", thisLectures)

            }
        });
    }, [])


  return (
        <Link to='/lectures' state={{thisLectures, user}}>
            <div className='rounded px-8 mb-8 m-4 py-8 border border-red-300 bg-gray-300 hover:bg-gray-400 text-black active:bg-gray-200 select-none w-1/2'>
                Chapter: {chapter}
            </div>
        </Link>
  )
}

export default Chapters