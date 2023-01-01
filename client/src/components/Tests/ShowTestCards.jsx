import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import shortid from 'shortid'

const ShowTestCards = () => {

    // const [formUrl, setFormUrl] = useState(false);
    const [testArr, setTestArr] = useState(null);
    const [error, setError] = useState('');
    const params = useParams();
    const { batchORsubject } = params;
  
    useEffect(() => {
        // fetch the form URL from the backend API
        fetch('http://localhost:5000/api/test/view/superuser', {
          method:'post',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({batchORsubject})
        })
          .then(response => 
            response.json().then((test)=>{

              console.log(test)
              test.forEach(element => {
                if(element.testUrl.slice(0, 8)!=="https://"){
                  element.testUrl = ("https://") + element.testUrl;
                  console.log(element)
                }
                // console.log(element.testUrl) 
              });
              
              console.log(test===null)
              if(test!==null){
                // setFormUrl(true);
                setTestArr([...test]);

                console.log(test);
                console.log(testArr);

              }

              if(test.length===0){ // empty array
                // setFormUrl(false);
                setError('No data Found');
              }else{

                
              testArr.sort((a,b)=>{
            
                if(a.batchYear<b.batchYear){    
                  return -1;
                }else if(a.batchYear===b.batchYear){
                  if(new Date(a.startTime)<new Date(b.startTime)){
                    return -1;
                  }else if(new Date(a.startTime)===new Date(b.startTime)){
                    return 0;
                  }else{
                    return 1;
                  }
                }
                else{
                  return 1;
                }
                
              })
                
              }
              console.log(testArr);
            }))
          .catch(error => {
            setError('Something Went Wrong: Error fetching form URL');
          });
        console.log(batchORsubject)
    }, [batchORsubject]); // the empty array ensures that the effect only runs once
  
    return (
    <div className='select-none pt-32 lg:grid lg:grid-cols-3 lg:grid-row-3 flex flex-col justify-center items-center'>
        {
            testArr?(
            testArr.map((item, index)=>{
                return (
                    <a key={shortid.generate()} href={''+item.testUrl} rel="noreferrer" target={'_blank'} >
                      {/* Test Card */}
                        <div key={index} className="max-w-sm m-4 p-4 hover:bg-blue-400 active:bg-[#5F9DF7] rounded overflow-hidden shadow-lg bg-[#5F9DF7]">
                            <div className = "px-6 py-4">
                                <div className = "font-bold text-xl mb-2">Subject: {item.subject}</div>
                                <p className = "text-gray-700 text-xl">
                                    Chapter: {item.chapterName}
                                </p>
                                <p className = "bg-gray-200 rounded my-2 py-2 text-gray-700 text-sm">
                                    Start: {new Date(item.startTime).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'})}
                                </p>
                                <p className = "bg-gray-200 rounded my-2 py-2 text-gray-700 text-sm">
                                    End: {new Date(item.endTime).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'})}
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Year: {item.batchYear}</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{batchORsubject}</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Test: {item.testNum}</span>
                            </div>
                        </div>
                    </a>
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