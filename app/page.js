// https://learnreact-rho.vercel.app/

"use client"

import React, { useState } from 'react'
import Footer from "@/Components/Footer"
import Header from "@/Components/Header"

const page = () => {
  const [marks, setmarks] = useState(80);
  return (
    <>
    <Header></Header>

    <div>Your Marks are  : {marks}</div>
    <button onClick={()=>{setmarks(90)}}>Update Marks to 90</button>
    <button onClick={()=>{setmarks(80)}}>Revert The Action</button>
    
    <Footer></Footer>
    </>
  )
}

export default page