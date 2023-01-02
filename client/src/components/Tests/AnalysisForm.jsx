import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AnalysisForm = () => {

    // TestInfo object
    const [testInfo, setTestInfo] = useState({

        batch:null,
        batchYear:null,
        testUrl:null

    })

    // Initialize test object items to null 
    useEffect(()=>{
        setTestInfo({
            batch:null,
            batchYear:null,
            testUrl:null
        })
    }, [])

    // Set test information
    const setMyTestInfo = (e)=>{
        setTestInfo(existingValues =>({
        ...existingValues,
        [e.target.name] : e.target.value
        }));
    }

    // Find all tests
    const navigate = useNavigate();
    const createTest = (e)=>{
        e.preventDefault();
        navigate('/viewanalysis', {state:testInfo})
    }

  return (

    <div className='pt-32'>
        <form onSubmit={createTest} method='post' className='border border-black bg-[#FFF7E9] rounded w-fit px-8 py-8 mb-8 select-none mx-auto'>
            <div className='flex flex-col justify-center items-center'>


                <div class="flex justify-center">
                    <div class="mb-3 xl:w-96">
                        <label for="batchlabel" class="form-label inline-block mb-2 text-gray-700"
                        >Enter Test URL (Test Link from ezexam) </label>
                        <input required
                        onChange={setMyTestInfo}
                        type="text"
                        class="
                            form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                        "
                        id="testUrl"
                        name='testUrl'
                        placeholder="Test URL"
                        />
                    </div>
                </div>

                <div class="flex justify-center">
                    <div class="mb-3 xl:w-96">
                        <label for="batchlabel" class="form-label inline-block mb-2 text-gray-700"
                        >Enter Batch Year</label>
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


                <div className='w-2/3 my-4 flex justify-center flex-col md:flex-row lg:flex-row'>
                    {/* Batch menu button */} 
                    <label for="batchlabel" class="form-label inline-block mb-2 text-gray-700"
                        > Select Batches </label>
                        <div className='mx-2 px-2'>  
                        <label className='mx-2' htmlFor="JEE">JEE</label>
                        <input type="radio" onChange={setMyTestInfo} name="batch" id="JEE" value={'JEE'} />
                        </div>

                        <div className='mx-2 px-2'>
                        <label htmlFor="NEET" className='mx-2'>NEET</label>
                        <input type="radio" onChange={setMyTestInfo} name="batch" id="NEET" value={'NEET'}/>
                        </div>

                        <div className='mx-2 px-2'>
                        <label htmlFor="Foundation" className='mx-2'>Foundation</label>
                        <input type="radio" onChange={setMyTestInfo} name="batch" id="Foundation" value={'Foundation'} />
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

export default AnalysisForm