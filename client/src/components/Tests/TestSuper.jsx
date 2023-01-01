import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ViewTestSuper = () => {

  const location = useLocation();
  let testUrl = location.state;
  const [error, setError] = useState('');

  useEffect(()=>{
    testUrl = location.state;
    if(!testUrl){
      setError("Error fetching url from the server");
    }
  }, [])

  return (
    
    <div className='pt-32 flex justify-center items-center'>
      {testUrl ? (
        // if the form URL has been fetched, render an iframe with the URL
        <iframe className='w-4/5 mx-4 min-h-screen ' title={testUrl} src={testUrl} />
      ) : error ? (
        // if an error has occurred, display the error message
        <p>{error}: Something Went Wrong</p>
      ) : (
        // otherwise, display a loading message
        <p>Loading form...</p>
      )}
    </div>
  );
};

export default ViewTestSuper;
