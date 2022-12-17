import React from 'react'
import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Lectures = () => {
  
//   List all lectures here
    const location = useLocation();
    const lectures = location.state;

    
    useEffect(()=>{
      lectures.sort((vid1, vid2)=>{
        if(vid1.chapter>vid2.chapter){
          return 1;
        }else{
          return -1;
        }
      })
    }, [])


    // https://firebasestorage.googleapis.com/v0/b/coaching-website-c1223.appspot.com/o/videos%2F%5Bobject%20File%5Dda59d964-a912-4fb9-961d-6c733dcd9963?alt=media&token=32b918c3-c3cd-4d7b-b9a1-4a24aa56920e
    
    // https://www.youtube.com/watch?v=f7T48W0cwXM&ab_channel=CleverProgrammer

    return (
      <div className='pt-32 flex flex-col lg:grid lg:grid-cols-3 lg:grid-row-3'>

        {
          location.state.map((item, index)=>{
            return (
              <div key={index} className='flex mx-4 justify-center my-4 lg:mx-4 md:mx-4'>
                <Link to={'/videos'} state={item.vidurl}> 
                  <div className="max-w-sm rounded overflow-hidden shadow-lg hover:bg-gray-200 active:bg-gray-300">
                    <img className="w-full" src={item.pic} alt={item.title} />
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">{item.title}</div>
                      <p className="text-gray-700 text-base">
                        Chapter: {item.chapter}
                      </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Lecture: {item.lecture}</span>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })
        }


        
      </div>
  )
}

export default Lectures