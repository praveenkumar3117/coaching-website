import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ShowTestCards = () => {

    const [formUrl, setFormUrl] = useState(false);
    const [testArr, setTestArr] = useState([]);
    const [error, setError] = useState('');
    const params = useParams();
    const {batchYear, batch } = params;

  
    useEffect(() => {
        // fetch the form URL from the backend API
        fetch('http://localhost:5000/api/test/view/superuser', {
          method:'post',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({batchYear, batch})
        })
          .then(response => 
            response.json().then((test)=>{
              if(test!==null){
                setFormUrl(true);
                setTestArr(test);
              }else{
                setFormUrl(false);
              }

              if(test.length===0){ // empty array
                setFormUrl(false);
                setError('No data Found');
              }
    
              test.sort((a,b)=>{
                if(a.batchYear<b.batchYear){
                  
                  return -1;
                }else{
                  return 1;
                }
              })
    
            }))
          .catch(error => {
            setError('Something Went Wrong: Error fetching form URL');
          });
    
    }, [batch, batchYear]); // the empty array ensures that the effect only runs once
  
    return (
    <div className='pt-32 lg:grid lg:grid-cols-3 lg:grid-row-3'>
        {
            formUrl?(
            testArr.map((item, index)=>{
                return (
                    <Link to={`/admin/test`} state={item.testUrl}>
                        <div key={index} className="max-w-sm m-4 p-4 hover:bg-blue-400 active:bg-[#5F9DF7] rounded overflow-hidden shadow-lg bg-[#5F9DF7]">
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Subject: {item.subject}</div>
                                <p className="text-gray-700 text-xl">
                                    Chapter: {item.chapterName}
                                </p>
                                <p className="bg-gray-200 rounded my-2 py-2 text-gray-700 text-sm">
                                    Start: {new Date(item.startTime).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'})}
                                </p>
                                <p className="bg-gray-200 rounded my-2 py-2 text-gray-700 text-sm">
                                    End: {new Date(item.endTime).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'})}
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Year: {batchYear}</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{batch}</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Test: {item.testNum}</span>
                            </div>
                        </div>
                    </Link>
                )
            })
            
            ): error? (
                <p>{error}</p>
            ):
            <p>Loading...</p>

            
        }
        
    </div>
  )
}

export default ShowTestCards;