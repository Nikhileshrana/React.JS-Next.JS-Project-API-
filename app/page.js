"use client"
import React, { useState } from 'react'
import Header from "@/Components/Header";
import Footer from '@/Components/Footer';
import axios from "axios";

const page = () => {
  const [Logo, setLogo] = useState("Astrodude");
  const [data, setData] = useState([]);
  const [Punchline,setPunchline] = useState([]);
  const [output, setOutput] = useState([]);
  const [title, settitle] = useState("Daily Dose of Joke's");

  const mydata = async()=>{
    try
    {
      const response = await axios.get("https://official-joke-api.appspot.com/random_joke");      
      console.log(response.data.setup);
      setData(response.data.setup);
      setPunchline(response.data.punchline);
    }
    catch(error)
    {console.log(error)}
  }  


  const showoutput = () => {
    setOutput(Punchline);
  }

  return (
    <>
      <Header name={Logo} />
      <div id='container'>
        <div id='title'>{title}</div>
        <div>
          <div>{data}</div>
          <div><button onClick={mydata}>Click Me</button></div>
        </div>
        <div>
          <div>{output}</div>
          <div><button onClick={showoutput}>Refresh Answer / View Why?</button></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default page