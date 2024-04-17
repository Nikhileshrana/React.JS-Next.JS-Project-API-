"use client"
import React, { useState } from 'react'
import Header from "@/Components/Header";
import Footer from '@/Components/Footer';
import Container from '@/Components/Container';
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
      setOutput([]);
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
      <div>
        <Container 
        content_up="About the Project x Nikhilesh Rana"
        content_down="API to bring humor to users through a React.js/Next.js application. With its sleek design and user-friendly interface, it offers a delightful experience for users seeking a good laugh." url="HEMLO" jokes="jokes"></Container>
      </div>
      <div>
        <Container content_up="In need of a good chuckle?" content_down="Look no further! Explore an array of hilarious jokes with just a click of a button. Whether you're in need of a pick-me-up or just want to share a laugh with friends, this section has got you covered." data={data} mydata={mydata} output={output} showoutput={showoutput}></Container>
      </div>
    </div>


      <Footer />
    </>
  );
}

export default page