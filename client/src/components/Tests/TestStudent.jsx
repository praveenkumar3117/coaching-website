import React, { useState } from 'react';
import { useEffect } from 'react';

const TestStudent = () => {

  const [error, setError] = useState('');
  const [testObj, setTestObj] = useState(null);
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
    
    <div className='pt-32 lg:pt-24 md:pt-24 flex justify-center items-center'>
      {testObj?.testUrl ? (
        // if the form URL has been fetched, render an iframe with the URL
        <div className='w-full mx-auto'>
          <div className='flex flex-col lg:flex-row lg:justify-between items-center m-4 mt-0 bg-[#FFF7E9] p-4'>
            
            {/* For user info */}
            <div className='flex flex-col mx-4 my-2 bg-black text-white p-4 rounded'>
                <div className='text-xl'>
                  TestID: {batchYear}-{batch}-{testObj.testNum}
                </div>
                <div className='text-xl '>
                  Name: {name}
                </div>
            </div>

            {/* For timer */}
            <div className='text-xl bg-black text-white p-4 rounded'>
              Time Left: {hours}:{minutes}:{seconds}
            </div>
          </div>

        <iframe className='w-4/5 mx-auto min-h-screen' title={testObj.testUrl} src={testObj.testUrl} />
        </div>

      ) : error ? (
        // if an error has occurred, display the error message
        <p>{error}</p>
      ) : (
        // otherwise, display a loading message
        <p>Loading form...</p>
      )}
    </div>
  );
};

export default TestStudent;
