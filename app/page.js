"use client"
import React, { useState } from 'react'

const page = () => {
  const [marks, setmarks] = useState(80);
  return (
    <>
    <div>Your Marks are  : {marks}</div>
    <button onClick={()=>{setmarks(90)}}>Update Marks to 90</button>
    <button onClick={()=>{setmarks(80)}}>Revert The Action</button>
    </>
  )
}

export default page