import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
      
      <div className='pt-32 flex justify-center items-center'>
        <form onSubmit={goToThisYear}>
          <div className='flex flex-col justify-center items-center border border-black rounded mx-auto'>
            <label htmlFor="Enter Year" className='text-2xl m-4 p-4'>Enter Year</label>
            <input required type="number" name="year" id="year" className='m-4 p-4 rounded border border-black' onChange={(e)=>{setYear(e.target.value)}}/>
            <input type="submit" name="submit" id="submit" className='m-4 p-4 rounded border border-black hover:bg-[#5F9DF7] active:bg-[#1746A2]' value={'GO'}/>
          </div>
        </form>
  
      </div>

  );
}

export default ViewSuper