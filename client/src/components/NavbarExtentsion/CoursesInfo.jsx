import React from 'react'
import { FcBusinesswoman } from 'react-icons/fc'
import { GiBrain, GiCaduceus } from 'react-icons/gi'
import Card from './CoursesInfo'

const CoursesInfo = () => {

  const CardInfo = [
    {
      'title':'IIT-JEE',
      'content':'Courses for JEE Main and Advanced',
      'iconName':FcBusinesswoman,
      'bgColor': 'bg-red-300'
    },
    {
      'title':'NEET',
      'content':'Courses for NEET',
      'iconName':GiCaduceus,
      'bgColor': 'bg-white'
    },
    {
      'title':'Foundation',
      'content':'Courses for NTSE and Olympiads',
      'iconName':GiBrain,
      'bgColor': 'bg-black'
    }

  ];

  return (
    <div className='flex flex-col md:flex-row mt-16'>
    {
    CardInfo.map((cardItem, index)=>(
      <Card key={index} title={cardItem.title} content={cardItem.content} iconName = {cardItem.iconName} bgColor = {cardItem.bgColor} />
    ))
    }
  </div>
  )
}

export default CoursesInfo;