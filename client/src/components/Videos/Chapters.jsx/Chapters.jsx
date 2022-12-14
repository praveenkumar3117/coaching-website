import React from 'react'

const Chapters = (props) => {

    const {subject}=props;
    const arr = [
        {
            "chapter":1
        },
        {
            "chapter":2
        },
        {
            "chapter":3
        },
        {
            "chapter":4
        }
    ]

  return (
    <div>
        {
            arr.map((item, index)=>{
                return (
                    <Lectures subject={subject} title={item.chapter} chapter = {item.chapter} lecture={item.chapter} link={}/>
                )
            })
        }
    </div>
  )
}

export default Chapters