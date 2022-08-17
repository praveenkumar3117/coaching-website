import React from 'react'
import Card from './coursecard';
import {FcBusinesswoman} from 'react-icons/fc';
import { GiCaduceus, GiBrain } from 'react-icons/gi';

function Hero() {

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
    <div className='flex flex-col md:flex-row'>
      {
      CardInfo.map((cardItem)=>(
        <Card title={cardItem.title} content={cardItem.content} iconName = {cardItem.iconName} bgColor = {cardItem.bgColor} />
      ))
      }
    </div>
  );
}

export default Hero;