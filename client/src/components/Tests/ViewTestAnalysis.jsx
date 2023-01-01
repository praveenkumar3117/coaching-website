import React, { useState,useEffect } from 'react'
import {IoIosArrowDropdownCircle} from 'react-icons/io'

const ViewTestAnalysis = () => {

    const [testInfo, setTestInfo] = useState({
        batch:null,
        batchYear:null,
        startTime:null,
        endTime:null
    });

    const [show, setShow] = useState(false);
    const [subject, setSubject] = useState(null);

    useEffect(()=>{
        setTestInfo({
            batch:null,
            batchYear:null,
            startTime:null,
            endTime:null
        })
        setShow(false);

    }, [])

    const setMyTestInfo = (e)=>{
        if(e.target.name!=="JEE" ||e.target.name!=="NEET"||e.target.name!=="Foundation" ){
            setTestInfo(existingValues=>({
                ...existingValues,
                [e.target.name]: e.target.value
            }));
        }else if(e.target.name==="startTime" || e.target.name==="endTime"){
            const date = new Date(e.target.value);
            setTestInfo(existingValues =>({
            ...existingValues,
            [e.target.name] : date
            }));
        }else{
            setTestInfo(existingValues=>({
                ...existingValues,
                batch: e.target.value
            }));
        }
    }

    const createTest=()=>{

    }
    
    const setMySubject = (e)=>{
        setSubject(e.target.name);
        setShow(!show);
    }

  return (
    <div className='pt-32'>
        <form onSubmit={createTest} method='post' className='border border-black bg-[#FFF7E9] rounded w-fit px-8 py-8 mb-8 select-none mx-auto'>
            <div className='flex flex-col justify-center items-center'>

                <div class="flex justify-center">
                    <div class="mb-3 xl:w-96">
                        <label for="year" class="form-label inline-block mb-2 text-gray-700"
                        >Enter Year</label
                        >
                        <input required
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
                        >Choose</label
                        >
                        <div className='mx-auto my-2 lg:my-0 w-full'>
                            <div className='bg-blue-300 p-4 rounded w-full'>
                                <button type='button' onClick={()=>{setShow(!show)}} className="w-full flex flex-row justify-center items-center">{subject}<IoIosArrowDropdownCircle/></button>
                            </div>
                            <div className={show?`absolute flex flex-col bg-gray-300 `:`hidden`}>

                                <button type='button' onClick={setMySubject} className='p-2 border border-black' name='JEE'>JEE</button>
                                <button type='button' onClick={setMySubject} className='p-2 border border-black' name='NEET'>NEET</button>
                                <button type='button' onClick={setMySubject} className='p-2 border border-black' name='Foundation'>Foundation</button>
                            </div> 
                        </div>
                    </div>
                </div>

                <div class="flex justify-center">
                    <div class="mb-3 xl:w-96">
                        <label for="batchlabel" class="form-label inline-block mb-2 text-gray-700"
                        > Enter Start of Test </label
                        >
                        <input required
                        onChange={setMyTestInfo}
                        type="datetime-local"
                        class="
                            form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                        "
                        id="startTime"
                        name='startTime'
                        placeholder="StartTime"
                        />
                    </div>
                </div>

                <div class="flex justify-center">
                    <div class="mb-3 xl:w-96">
                        <label for="batchlabel" class="form-label inline-block mb-2 text-gray-700"
                        > Enter End of Test </label
                        >
                        <input required
                        onChange={setMyTestInfo}
                        type="datetime-local"
                        class="
                            form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                        "
                        id="endTime"
                        name='endTime'
                        placeholder="endTime"
                        />
                    </div>
                </div>

                <div className='w-2/3 my-4 flex justify-center'>
                    <button type='submit' className='bg-[#1746A2] text-white p-4 rounded text-2xl hover:bg-[#5F9DF7] active:bg-[#1746A2]'> 
                        Go
                    </button>
                </div>



            </div>




        </form>
    </div>
  )
}

export default ViewTestAnalysis