import React from 'react'
import Card from './coursecard';

function Hero() {

  const CardInfo = [
    {
      'title':'IIT-JEE',
      'content':'Courses for JEE Main and Advanced'
    },
    {
      'title':'NEET',
      'content':'Courses for NEET'
    },
    {
      'title':'Foundation',
      'content':'Courses for NTSE and Olympiads'
    }

  ]

  return (
    <div className='flex flex-col md:flex-row'>
      {
      CardInfo.map((cardItem)=>(
        <Card title={cardItem.title} content={cardItem.content} />
      ))
      }
    </div>
  )
}

export default Hero;