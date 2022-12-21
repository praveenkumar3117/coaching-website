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
                setLectures(prev => prev.concat(element))
                console.log(element)
                console.log(thisLectures)

            }
        });
        console.log("This lectures is ",thisLectures)


    }, [])


  return (
        <Link to='/lectures' state={thisLectures}>
            <div className='rounded my-2 mb-8 py-8 bg-gray-300 hover:bg-gray-400 text-black active:bg-gray-200 select-none w-2/3 mx-auto'>
                Chapter: {chapter}
            </div>
        </Link>
  )
}

export default Chapters