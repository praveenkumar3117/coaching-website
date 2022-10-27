import React from 'react'
import { storage } from '../../firebase'
import { useState,useEffect } from 'react'
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'
import { v4 as uuidv4 } from 'uuid';

const Upload = () => {

  const [video, setVideo] = useState(null)
  const [url, setUrl] = useState([])
  const videoListRef = ref(storage, 'videos/')
 
  const uploadVideo = () => {
    if (video == null) {
      return;
    }
    const videoRef = ref(storage, `videos/${video.name + uuidv4()}`)
    uploadBytes(videoRef, video).then((snaphshot) => {
      getDownloadURL(snaphshot.ref).then((ulr) => {
        setUrl((prev) => [...prev, url])
      })
    })
   console.log(url) 
  }

  useEffect(() => {
    listAll(videoListRef).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setUrl((prev) => [...prev, url])
        })
      })
    })
  }, [])


  return (
    <div className="App">
    <input type="file" onChange={(e) => { setVideo(e.target.files[0]) }} />
    <button onClick={uploadVideo}>Upload video</button>
    {url.map((item) => {
      return <img src={item} />
    })}
  </div>
  )
}

export default Upload