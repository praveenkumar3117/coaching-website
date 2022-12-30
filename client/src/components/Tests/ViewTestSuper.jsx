import React from 'react'
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ViewSuper = () => {

  const [year, setYear] = useState(null);

  // navigating function
  const navigate = useNavigate();
  const goToThisYear = ()=>{
    if(year){
      navigate(`/viewtest/admin/${year}`);
    }else{
      alert("Fill the year");
    }
  }

  return (
      
      <div className='pt-32 flex justify-center items-center select-none'>
        {/* <form onSubmit={goToThisYear}>
          <div className='flex flex-col justify-center items-center border border-black rounded mx-auto'>
            <label htmlFor="Enter Year" className='text-2xl m-4 p-4'>Enter Year</label>
            <input required type="number" name="year" id="year" className='m-4 p-4 rounded border border-black' onChange={(e)=>{setYear(e.target.value)}}/>
            <input type="submit" name="submit" id="submit" className='m-4 p-4 rounded border border-black hover:bg-[#5F9DF7] active:bg-[#1746A2]' value={'GO'}/>
          </div>
        </form> */}
        <a href='https://vulture.ezexam.in/staff#!' target="_blank">
          <div className='p-4 m-4 bg-[#5F9DF7] text-xl hover:bg-[#1746A2] active:bg-[#5F9DF7] rounded text-white'>
              Past Exams
          </div>
        </a>

        <div className='p-4 m-4 bg-[#FF731D] hover:text-black active:text-white text-xl hover:bg-orange-300 active:bg-[#FF731D] rounded text-white'>
          Upcoming Exams
        </div>

      </div>

  );
}

export default ViewSuper