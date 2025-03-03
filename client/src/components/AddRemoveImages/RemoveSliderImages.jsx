import { deleteObject, ref } from 'firebase/storage'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import shortid from 'shortid'
import { storage } from '../../firebase';


const RemoveSliderImages = ({setProgress}) => {

  const [images, setImages]=useState([]);
  const [error, setError]=useState(null);
  const [imageDel, setImageDel]=useState(false);
  
  

  
  const getData = ()=>{
    fetch(`http://localhost:5000/api/images/slider-images`, {
      method:'get',
      headers:{
        'Content-Type':'application/json'
      }
    }).then(response=>{
      response.json().then((data)=>{
        setImages([...data]);
      })
    })
  }

  const deleteImage = async(id, url)=>{

    try{
      const confirmation = window.confirm("Are you sure you want to delete this image?");
      if(!confirmation){
        return;
      }
      setProgress(10);
      // delete the image from firebase storage
      await deleteObject(ref(storage, url));

      // delete the image from the database
      fetch(`http://localhost:5000/api/images/remove-slider-images`, {
        method:'delete',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({_id: id})
      }).then(response=>{
        response.json().then((data)=>{
          if(data.success){
            setError(null);
          }else{
            setError(data.message);
          }
          setImageDel(!imageDel);
          setProgress(100);
        })
      })

    }catch(err){
      setProgress(100);
      setError("Something Went Wrong");
    }


  }

  useEffect(()=>{
    setProgress(0);
    getData();
    // eslint-disable-next-line
  }, [imageDel])

  return (
    <div className='pt-32 p-4'>
      {
        error?
        <label className='bg-red-600 p-2 m-4 text-2xl text-white px-8' htmlFor="error">{error}</label>
        :
        null
      }
      <div className='flex flex-col lg:grid-cols-3 lg:mx-4 lg:grid gap-4 justify-center items-center my-4'>
        {(images.length===0)?
          <p className='text-3xl'>No data found</p>

          :
          
          (
            images.map((image, index)=>(
              <div key={shortid.generate()}>
                <img  src={image.url} alt="Images" className=''/>
                <div className='select-none p-2 m-2 rounded bg-red-500 text-white hover:bg-red-600 active:bg-red-500' onClick={()=>{deleteImage(image._id, image.url) }}>Delete</div>
              </div>
            ))
          )
        }
        </div>
    </div>
  )
}

export default RemoveSliderImages