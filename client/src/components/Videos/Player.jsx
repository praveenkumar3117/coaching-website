import React from 'react'
import { useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useLocation, useParams } from 'react-router-dom'

const Player = () => {
    const params = useParams();
    const location = useLocation();
    useEffect(()=>{
      console.log("Link is ", location?.state);
      console.log("params == ", params);
    }, [])

  return (
    <div className='pt-32 flex justify-center items-center px-2'>
      <ReactPlayer url={location?.state} controls={true}/>
    </div>
  )
}

export default Player