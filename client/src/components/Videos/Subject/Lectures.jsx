import React from 'react'

const Lectures = (props) => {
//   List all lectures here
    const {subject, batch, title, pic} = props;

    const getAllLectures = async()=>{
        console.log(subject)
        console.log(batch)
    }

            // {/* <img src="../../../images/user.png" alt="Thumbnail" className='w-32 m-4 lg:mx-8 border mx-auto border-black p-2'/> */}
    return (


    <div className='flex mx-4 justify-center my-4 lg:mx-4 md:mx-4 hover:bg-gray-200 active:bg-gray-300'>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={pic} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">
            {title}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Lecture 1</span>
        </div>
      </div>
    </div>
  )
}

export default Lectures