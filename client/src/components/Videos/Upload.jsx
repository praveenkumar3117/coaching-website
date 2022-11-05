import React from 'react'
import { storage } from '../../firebase'
import { useState,useEffect } from 'react'
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

const Upload = () => {

  const [video, setVideo] = useState(null)
  const [url, setUrl] = useState([])
  const videoListRef = ref(storage, 'videos/')
 

  const navigate = useNavigate();
  const conlog = ()=>{
    console.log(video);
  }


  const uploadVideo = () => {
    if (video === null) {
      return;
    }
    const videoRef = ref(storage, `videos/${video.name + uuidv4()}`)
    uploadBytes(videoRef, video).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setUrl((prev) => [...prev, url])
      })
    })
    navigate('/');
   console.log(url);
  }

  useEffect(() => {
    listAll(videoListRef).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setUrl((prev) => [...prev, url])
        })
      })
    })
    console.log(url)
  }, [])


  return (
    <form className='flex flex-col m-24 py-12 border border-black' onSubmit={uploadVideo}>

        <div className='m-4'>
          <label htmlFor="files" className="m-8 p-4 bg-gray-500 rounded">+</label>
          <input onClick={conlog} required accept = "video/*" id="files" onChange={(e) => { setVideo(e.target.files[0]) }} className='hidden' type="file"/>
          {
            <img src={video} />
          }
        </div>


        {/* <input required accept = "video/*" type="file" onChange={(e) => { setVideo(e.target.files[0]) }} className='m-4'/> */}
        <input type="text" name="title" id="title" placeholder="Video Name" className='m-2 p-2'/>
        <input type="text" name="subject" id="subject" placeholder="Subject Name" className='m-2 p-2'/>
        <input type="text" name="chapter" id="chapter" placeholder="Chapter Name" className='m-2 p-2'/>
        <input type='submit' className='p-4 rounded text-white bg-blue-500 hover:bg-blue-400 active:bg-blue-500' value="Upload"/>
          {url.map((item) => {
            return <img src={item} />
          })}

    </form>
  )
}

export default Upload