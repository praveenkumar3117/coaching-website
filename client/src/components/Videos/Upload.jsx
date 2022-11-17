import React from 'react'
import { storage } from '../../firebase'
import { useState,useEffect } from 'react'
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

const Upload = () => {

  const [video, setVideo] = useState(null)
  const [url, setUrl] = useState([])
  const [showWarning, setWarning] = useState(false);
  const [show, setShow] = useState(false);
  const [batchName, setbatchName] = useState('')
  const [fileName, setFileName ] = useState('None');
  const videoListRef = ref(storage, 'videos/')
 

  const navigate = useNavigate();


  const uploadVideo = (e) => {
    e.preventDefault();
    console.log("uploading")

    if (video === null) {
      console.log("no video found")
      setWarning(true);
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

  // useEffect(() => {
  //   listAll(videoListRef).then((res) => {
  //     res.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         setUrl((prev) => [...prev, url])
  //       })
  //     })
  //   })
  //   console.log(url)
  // }, [])

  const handleFile = (e)=>{
    setVideo(e.target.files[0]);
    setFileName(e.target.files[0].name);
    setWarning(false);
  }


  const fillBatch=(enteredbatchName)=>{
    setShow(!show);
    setbatchName(enteredbatchName);
    console.log(batchName);
  }
  useEffect(()=>{
    setbatchName('');
    console.log(batchName)
  }, [])


  return (
    <form className='w-4/5 flex flex-col mx-auto justify-center my-24 py-12 border border-black' onSubmit={uploadVideo}>

        <div className="flex flex-col justify-center items-center w-full">
          <label htmlFor="dropzone-file" className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div className="flex flex-col justify-center items-center pt-5 pb-6">
              <svg aria-hidden="true" className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Video</p>
            </div>
            <input id="dropzone-file" type="file" accept="video/mp4,video/x-m4v,video/*" className="hidden" onChange={handleFile}/>
          </label>

          <div>
            {showWarning?"Please select a file":""}
          </div>
          <label htmlFor="fileName" className='bg-orange-400 p-2 rounded m-2'>
            File selected : {fileName}
          </label>

          <div className='flex flex-col md:flex-row lg:flex-row p-2 mx-2'>

            <div className='mx-4'>
            <label htmlFor="subject" className='mt-4 mx-4 '>Title</label>
            <input type="text" name="subject" id="subject" placeholder='Title'  className="p-4 rounded border border-black"/>
            </div>

            <div className='mx-4'>
            <label htmlFor="subject" className='mt-4 mx-2'>Subject</label>
            <input type="text" name="subject" id="subject" placeholder='Subject' className="p-4 rounded border border-black"/>
            </div>

          </div>

          <div className='flex flex-col md:flex-row lg:flex-row p-2 mx-2'>
            <div className='m-2'>
              <label htmlFor="teacher" className='mt-4 mx-2'>Teacher's Code</label>
              <input type="text" name="teacher-name" id="teacher" placeholder="Teacher's Code" className="p-4 rounded border border-black"/>
            </div>
            <div className='m-2'>
              <label htmlFor="Chapter Number" className='mt-4 mx-2'>Chapter Number</label>
              <input type="number" name="chapter-num" id="chapter" placeholder="Chapter Number" className="p-4 rounded border border-black"/>
            </div>
          </div>

          {/* <label htmlFor="subject">Batch</label> */}
          <div className='w-2/3 flex justify-center'>
            {/* Batch menu button */}
            <div className='w-full items-center justify-center select-none flex flex-row bg-slate-300 p-4 mx-4 mt-4 rounded hover:bg-slate-400' onClick={()=>{setShow(!show)}}>
              
              { batchName===''? 
              <div>
                Batch
                <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                </svg> 
              </div> : batchName}
            </div>
            <div className={show?"w-fit border border-black absolute bg-slate-300 p-4 rounded my-0":"hidden" }>
              <div className='m-2 p-2 select-none text-black hover:text-white rounded hover:bg-slate-500' onClick={()=>fillBatch('JEE')}>
                JEE
              </div>
              <div className='m-2 p-2 select-none text-black hover:text-white rounded hover:bg-slate-500' onClick={()=>fillBatch('NEET')}>
                NEET
              </div>
              <div className='m-2 p-2 select-none text-black hover:text-white rounded hover:bg-slate-500' onClick={()=>fillBatch('Foundation')}>
                Foundation
              </div>
            </div>
          </div>

          <div className='flex justify-center items-center'>
            <input className='px-4 py-2 m-4 hover:bg-blue-300 active:bg-blue-500 focus:pointer-events-auto bg-blue-400 rounded' type="submit" value="Upload" />
            <input type="reset"  className='px-4 py-2 m-4 hover:bg-slate-300 rounded'  value="Cancel" onClick={()=>{setFileName("None")}}/>

          </div>
          
        </div>







        {/* <div className='m-4'>
          <label htmlFor="files" className="m-8 p-4 bg-gray-500 rounded">+</label>
          <input onClick={conlog} required accept = "video/*" id="files" onChange={(e) => { setVideo(e.target.files[0]) }} className='hidden' type="file"/>
          {
            <img src={video} />
          }
        </div>


        <input type="text" name="title" id="title" placeholder="Video Name" className='m-2 p-2'/>
        <input type="text" name="subject" id="subject" placeholder="Subject Name" className='m-2 p-2'/>
        <input type="text" name="chapter" id="chapter" placeholder="Chapter Name" className='m-2 p-2'/>
        <input type='submit' className='p-4 rounded text-white bg-blue-500 hover:bg-blue-400 active:bg-blue-500' value="Upload"/>
          {url.map((item) => {
            return <img src={item} />
          })} */}

    </form>
  )
}

export default Upload