import React, { useState } from 'react';
import { useEffect } from 'react';

const TestStudent = () => {

  const [error, setError] = useState('');
  const [testObj, setTestObj] = useState();
  const [batchYear, setBatchYear] = useState(null);
  const [batch, setBatch] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [name, setName]=useState('');
  
  useEffect(()=>{
    
    try{
    
      const data = JSON.parse(localStorage.getItem("data"))
      setBatchYear(data.result.year);
      setBatch(data.result.batch);
      setName(data.result.name);

      fetch('http://localhost:5000/api/test/view/student', {
            method:'post',
            headers:{
              'Content-Type':'application/json'
            },
            body:JSON.stringify({batchYear, batch})
          })
            .then(response => 
              response.json().then((test)=>{
                if(test!==null){
                  setTestObj(test);
                  setEndTime(new Date(test?.endTime));
                }
              }))
            .catch(error => {
              setError('No data found');

            });

      if(!(testObj?.testUrl)){
        setError("Error fetching URL from the server: No data present");
      }

    }catch(err){
      setError("Some problem has occured", err)
    }

  }, [testObj?.testUrl, batch, batchYear])


  useEffect(() => {
    if (endTime) {
      // Calculate the time remaining until the end time
      setTimeRemaining(endTime - Date.now());

      const timer = setInterval(() => {
        setTimeRemaining(timeRemaining => timeRemaining - 1000);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [endTime]);

  if (timeRemaining < 0) {
    return <div>Time's up!</div>;
  }

  // Hours, minutes and seconds
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return (
    
    <div className='pt-32 lg:pt-24 md:pt-24 flex justify-center items-center select-none'>
      <a href="https://vulture.ezexam.in/performance?months=24" target={'_blank'}>
        <div className='p-4 m-4 bg-[#5F9DF7] text-xl hover:bg-[#1746A2] active:bg-[#5F9DF7] rounded text-white'>
          Past Tests
        </div>
      </a>

      <div className='p-4 m-4 bg-[#FF731D] hover:text-black active:text-white text-xl hover:bg-orange-300 active:bg-[#FF731D] rounded text-white'>
        Upcoming Tests
      </div>
    </div>
  );
};

export default TestStudent;
