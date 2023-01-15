import React from 'react'
import {uploadBytes, ref, getDownloadURL} from 'firebase/storage';
import {storage} from '../../firebase';
import {v4 as uuidv4} from 'uuid'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const AddTeacherImages = () => {

    const [image, setImage]=useState(null);
    const [name, setName] = useState(null);

    const setFile = (e)=>{
        setImage(e.target.files[0]);
    }
    const setTeacherName =(e)=>{
        setName(e.target.value)
    }
    
    const navigate = useNavigate();
    const PostImage = async(e)=>{
        e.preventDefault();
        
        if(name===null || name===undefined || name===""){
            return;
        }
        
        if(image==null){
            return;
        }
        
        const teacherIMGref = ref(storage, `teacherImages/${uuidv4() + image.name}`)
        await uploadBytes(teacherIMGref, image).then((snap)=>{
            getDownloadURL(snap.ref).then((URL)=>{
                // uploading to database
                fetch('http://localhost:5000/api/images/add-teacher-images', {
                    method:'post',
                    body:JSON.stringify({url:URL, tName:name}),
                    headers:{
                        'Content-Type':'application/json'
                    }
                }).then((response)=>{
                    response.json().then((data)=>{
                        navigate('/success/Teacher-Added-Successfully')
                    })
                })
            })
        })
    }


  return (
    <div className='pt-32'>
        <form onSubmit={PostImage} method='post' className='border border-black bg-[#FFF7E9] rounded w-fit px-8 py-8 mb-8 select-none mx-auto'>
            <div className='flex flex-col justify-center items-center'>
                <div class="flex justify-center">
                    <div class="mb-3 xl:w-96">
                        <label for="batchlabel" class="form-label text-3xl text-bold mb-4 inline-block text-gray-700"
                        >Add Teacher Image</label>
                        <input required
                        accept="image/*"
                        onChange={setFile}
                        type="file"
                        class="
                            form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                        "
                        id="image"
                        name='image'
                        placeholder="Teacher Image"
                        />
                    </div>
                </div>

                <div class="flex justify-center">
                    <div class="mb-3 xl:w-96">
                        <label for="batchlabel" class="form-label text-3xl text-bold mb-4 inline-block text-gray-700"
                        >Teacher Name</label>
                        <input required
                        onChange={setTeacherName}
                        type="text"
                        class="
                            form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                        "
                        id="name"
                        name='name'
                        placeholder="Teacher's Name"
                        />
                    </div>
                </div>

                

                <div className='w-2/3 my-4 flex justify-center'>
                    <button type='submit' className='bg-[#1746A2] text-white p-4 rounded text-2xl hover:bg-[#5F9DF7] active:bg-[#1746A2]'> 
                        Add
                    </button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default AddTeacherImages