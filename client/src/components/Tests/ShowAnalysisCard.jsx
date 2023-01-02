import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import shortid from 'shortid';

const ShowAnalysisCard = () => {

    const location = useLocation();
    const data = location.state;

    const [items, setItems] = useState(null);
    const [subject, setSubjects]=useState([]);


    
    useEffect(()=>{
        const findTest = ()=>{
            try{
                if(data===null){
                    alert("Data is absent");
                    return;
                }
    
                fetch('http://localhost:5000/api/test/view-CSV', {
                    method:'post',
                    body:JSON.stringify(data),
                    headers:{
                        'Content-Type':'application/json'
                    }
                }).then((response)=>{
                    response.json().then(data=>{
                        setItems(data);

                        if(data?.Physics){
                            console.log("hll")
                            setSubjects(subject => subject.concat("Physics"));
                        }

                        if(data?.Maths){
                            setSubjects(subject => subject.concat("Maths"));

                        }

                        if(data?.Bio){
                            setSubjects(subject => subject.concat("Bio"));
                        }

                        if(data?.Chem){
                            setSubjects(subject => subject.concat("Chem"));
                        }
                        console.log(subject)
                    })
                })
            }catch(err){
                alert("Something Went Wrong while fetching data")
                return;
            }
        }

        // Calling the function
        findTest();
    }, [data])

  return (

    <div className='pt-32 flex justify-center items-center'>
        {
            
            (items) ? (
                items.length!==0 ? (


                // items.map((item, index)=>{
                    // return (
                        <a key={shortid.generate()} href={''+items.url} rel="noreferrer" target={'_blank'} >
                            {/* Analysis Card */}
                            <div className="m-4 p-4 w-fit hover:bg-blue-400 active:bg-[#5F9DF7] rounded overflow-hidden shadow-lg bg-[#5F9DF7]">
                                <div className = "px-6 py-4">


                                    <div className = "font-bold text-xl mb-2">Subject: </div>
                                    <div className='flex flex-row justify-center items-center'>
                                    {
                                        subject.map((ele)=>(
                                            <div className='mx-2' key={shortid.generate()}>{ele}</div>
                                            
                                        ))

                                    }
                                    </div>
                                    <p className = "bg-gray-200 rounded my-2 py-2 text-gray-700 text-sm">
                                        Start: {new Date(items.startTime).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'})}
                                    </p>
                                    <p className = "bg-gray-200 rounded my-2 py-2 text-gray-700 text-sm">
                                        End: {new Date(items.endTime).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'})}
                                    </p>
                                </div>
                                <div className="px-6 pt-4 pb-2">
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Year: {data.batchYear}</span>
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Batch: {data.batch}</span>
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Test: {items.testNum}</span>
                                </div>
                            </div>
                        </a>
                    // )
                // })
            
            ):
            <p>
                Something Went Wrong
            </p>
            ):
            (
            <p>
                No Data Found, Your entered data may be incorrect.
            </p>
            )
        }   
    </div>
  )
}

export default ShowAnalysisCard