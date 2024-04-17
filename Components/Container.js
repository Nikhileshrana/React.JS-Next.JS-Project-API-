import React from 'react'

const Container = (props) => {
  return (
    <>
      <div className='Container' id={props.url}>
        <div className='Container-up'>{props.content_up}</div>
        <div className='Container-down'>{props.content_down}</div>

        <div id={props.jokes} Style="padding:1vw">
          <div>
            <div Style="font-size:3vh">{props.data}</div>
            <br></br>
            <div><button onClick={props.mydata}>START/NEXT</button></div>
          </div>
          <br></br>
          <div>
            <div Style="font-size:3vh">{props.output}</div>
            <br></br>
            <div><button onClick={props.showoutput}>View Why?</button></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Container