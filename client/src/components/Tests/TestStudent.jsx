import React, { useState } from 'react';
import { useEffect } from 'react';

const TestStudent = () => {

  const [error, setError] = useState('');
  const [testObj, setTestUrl] = useState(null);
  
  
  useEffect(()=>{
    try{

    
      const data = JSON.parse(localStorage.getItem("data"))
      
      const batchYear = data.result.year;
      const batch = data.result.batch;
      
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
                  setTestUrl(test);
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

  }, [])

  return (
    
    <div className='pt-32 flex justify-center items-center'>
      {testObj?.testUrl ? (
        // if the form URL has been fetched, render an iframe with the URL
        <iframe className='w-4/5 mx-4 min-h-screen ' title={testObj.testUrl} src={testObj.testUrl} />
        // <></>
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
