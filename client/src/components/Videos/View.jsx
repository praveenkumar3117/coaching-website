import React from 'react'
import ReactPlayer from 'react-player'

const View = () => {
  return (
    <div className='my-24 mx-auto border border-black'>
      <div className='mx-auto border-4 border-red-400'>
        <ReactPlayer url="https://firebasestorage.googleapis.com/v0/b/coaching-website-c1223.appspot.com/o/videos%2FVID_20220917_205521.mp46432b52d-46be-4fa7-af55-39992515f4a7?alt=media&token=c05e903c-b66c-41cc-9f42-1f0c55acceb7" controls={true}/>
      </div>

    </div>
  )
}

export default View