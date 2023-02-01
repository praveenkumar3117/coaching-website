import React from 'react'
import {GoBeaker } from 'react-icons/go';
import {BiAtom} from 'react-icons/bi';
import {TbMathSymbols} from 'react-icons/tb'
import { GiCaduceus } from 'react-icons/gi'

const ViewOptions = () => {
    const subjects =[
        {
            subject:'Physics',
            icon: BiAtom
        },
        {
            subject:'Chemistry',
            icon: GoBeaker
        },
        {
            subject:'Maths',
            icon:TbMathSymbols
        },
        {
            subject:'Biology',
            icon: GiCaduceus
        }
    ]
   
   
   
   
    return (
    <div>
        
    </div>
  )
}

export default ViewOptions