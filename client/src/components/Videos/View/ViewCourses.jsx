import React from 'react'
import shortid from 'shortid'

const ViewCourses = () => {

    // get all courses from database
    const item = 0;
    const index = 0;
    const batchORsubject=1
  return (
    <div className='select-none pt-32 lg:grid lg:grid-cols-3 lg:grid-row-3 flex flex-col justify-center items-center'>
        {/* show all courses from database */}
        <a key={shortid.generate()} href={''+item.testUrl} rel="noreferrer" target={'_blank'} >
            {/* Test Card */}
            <div key={index} className="max-w-sm m-4 p-4 hover:bg-blue-400 active:bg-[#5F9DF7] rounded overflow-hidden shadow-lg bg-[#5F9DF7]">
                <div className = "px-6 py-4">
                    <div className = "font-bold text-xl mb-2">Revaluate Yourself {item.courseName}</div>
                    <p className = "text-gray-700 text-xl">
                        {item.chapterName}
                    </p>
                    <p className = "bg-gray-200 rounded my-2 py-2 text-gray-700 text-sm">
                        Subject: Physics, Chemistry, Maths 
                    </p>
                    
                </div>
                {/* <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Year: {item.batchYear}</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{batchORsubject}</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Test: {item.testNum}</span>
                </div> */}
            </div>
        </a>
    </div>
  )
}

export default ViewCourses