import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import { IoIosArrowDropdownCircle } from 'react-icons/io';

const AddTests = () => {

    const [testInfo, setTestInfo] = useState({
        JEE:false, 
        NEET:false, 
        Foundation:false,
        "chapterName":null,
        subject:null,
        batchYear:null,
        "testUrl":null
    });

    useEffect(()=>{
        setTestInfo({
            JEE:false, 
            NEET:false, 
            Foundation:false,
            "chapterName":null,
            subject:null,
            batchYear:null,
            "testUrl":null
        })
    }, [])

    const navigate = useNavigate();
    
    const setMyTestInfo = (e)=>{
        if(e.target.value ==="on" && (e.target.name ==="JEE" || e.target.name ==="NEET" || e.target.name ==="Foundation")){
            setTestInfo(existingValues=>({
                ...existingValues,
                [e.target.name]: e.target.checked
            }));
        }else{
            setTestInfo(existingValues =>({
            ...existingValues,
            [e.target.name] : e.target.value
            }));

        }
        console.log(testInfo)
    }


    const createTest = (e)=>{
        e.preventDefault();
        console.log(testInfo)
        
        if(testInfo.testUrl===null){
            console.log("Url not filled");
            return;
        }
        if(testInfo.chapterName===null){
            console.log("Chapter not filled");
            return;
        }
        fetch("http://localhost:5000/api/test/create", {
            method:'post',
            body:JSON.stringify(testInfo),
            headers:{
                'Content-Type':'application/json'
            }
        }).then((response)=>{
            response.json().then(
                (result)=>{
                    if(result.success){
                        navigate('/mailsent')
                    }else{
                        // mail not sent
                    }
                }
            ).catch((err)=>{
                console.log(err)
            })
        }).catch((err)=>{
            console.log(err)
        })

    }

  return (
    <div className='pt-32'>
        <form onSubmit={createTest} method='post' className='border border-black bg-[#FFF7E9] rounded w-fit px-8 py-8 mb-8 select-none mx-auto'>
            <div className='flex flex-col justify-center items-center'>

                <div class="flex justify-center">
                    <div class="mb-3 xl:w-96">
                        <label for="testlabel" class="form-label inline-block mb-2 text-gray-700"
                        >Enter Google Form URL</label
                        >
                        <input
                        onChange={setMyTestInfo}
                        type="text"
                        class="
                            form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                        "
                        id="url"
                        name='testUrl'
                        placeholder="URL"
                        />
                    </div>
                </div>
                <div class="flex justify-center">
                    <div class="mb-3 xl:w-96">
                        <label for="batchlabel" class="form-label inline-block mb-2 text-gray-700"
                        >Enter Batch Year</label
                        >
                        <input
                        onChange={setMyTestInfo}
                        type="number"
                        class="
                            form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                        "
                        id="batchYear"
                        name='batchYear'
                        placeholder="Year"
                        />
                    </div>
                </div>
                <div class="flex justify-center">
                    <div class="mb-3 xl:w-96">
                        <label for="batchlabel" class="form-label inline-block mb-2 text-gray-700"
                        >Enter Chapter Name </label
                        >
                        <input
                        onChange={setMyTestInfo}
                        type="text"
                        class="
                            form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                        "
                        id="chapterNum"
                        name='chapterName'
                        placeholder="Chapter Name"
                        />
                    </div>
                </div>
                <div class="flex justify-center">
                    <div class="mb-3 xl:w-96">
                        <label for="batchlabel" class="form-label inline-block mb-2 text-gray-700"
                        > Enter Subject </label
                        >
                        <input
                        onChange={setMyTestInfo}
                        type="text"
                        class="
                            form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                        "
                        id="subject"
                        name='subject'
                        placeholder="Subject"
                        />
                    </div>
                </div>

                <div className='w-2/3 my-4 flex justify-center flex-col md:flex-row lg:flex-row'>
                    {/* Batch menu button */} 
                    <label for="batchlabel" class="form-label inline-block mb-2 text-gray-700"
                        > Select Batches </label
                    >

                    <div className='mx-2 px-2'>  
                        <label className='mx-2' htmlFor="JEE">JEE</label>
                        <input type="checkbox" onChange={setMyTestInfo} name="JEE" id="JEE" />
                        </div>

                        <div className='mx-2 px-2'>
                        <label htmlFor="NEET" className='mx-2'>NEET</label>
                        <input type="checkbox" onChange={setMyTestInfo} name="NEET" id="NEET" />
                        </div>

                        <div className='mx-2 px-2'>
                        <label htmlFor="Foundation" className='mx-2'>Foundation</label>
                        <input type="checkbox" onChange={setMyTestInfo} name="Foundation" id="Foundation" />
                    </div>

                    
                </div>

                <div className='w-2/3 my-4 flex justify-center'>
                    <button type='submit' className='bg-[#1746A2] text-white p-4 rounded text-2xl hover:bg-[#5F9DF7] active:bg-[#1746A2]'> 
                        Create Test
                    </button>
                </div>



            </div>




        </form>
    </div>
  )
}

export default AddTests;