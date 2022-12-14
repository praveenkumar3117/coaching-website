import React from 'react'
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Player from '../Player';
import { generatePath } from 'react-router-dom';

const Lectures = (props) => {
//   List all lectures here
    const {subject, batch, title, pic, chapter, lecture} = props;
    let {link} = props;
    useEffect(()=>{
      console.log("Link is", link);
      console.log(partLink);
      console.log(partLink2);
    }, [])

    const partLink = link?.substr(44, link.length-44);
    const partLink2 = link?.substr(78, link.length-44);
    
    if(!link){
      link = "/";
    }

    // https://firebasestorage.googleapis.com/v0/b/coaching-website-c1223.appspot.com/o/videos%2F%5Bobject%20File%5Dda59d964-a912-4fb9-961d-6c733dcd9963?alt=media&token=32b918c3-c3cd-4d7b-b9a1-4a24aa56920e

    return (
    <div className='flex mx-4 justify-center my-4 lg:mx-4 md:mx-4'>
      <Link to={'/videos'} state={{link}}> 
        <div className="max-w-sm rounded overflow-hidden shadow-lg hover:bg-gray-200 active:bg-gray-300">
          <img className="w-full" src={pic} alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">
              Chapter: {chapter}
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Lecture: {lecture}</span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Lectures