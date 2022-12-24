import React, { useState, useEffect } from 'react';

const Test = () => {
  const [formUrl, setFormUrl] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // fetch the form URL from the backend API
    fetch('/api/form-url')
      .then(response => response.json())
      .then(data => {
        if (data.url) {
          setFormUrl(data.url);
        } else {
          setError('No tests available');
        }
      })
      .catch(error => {
        setError('Error fetching form URL');
      });

  }, []); // the empty array ensures that the effect only runs once

  return (
    
    <div className='pt-32 flex justify-center items-center'>
      {formUrl ? (
        // if the form URL has been fetched, render an iframe with the URL
        <iframe src={formUrl} />
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

export default Test;


// https://docs.google.com/forms/d/e/1FAIpQLSdczMQYX6U5Ee_Vi3oWSMyug-nrc1l1mVERWM3kS-mLKbrixw/viewform?embedded=true