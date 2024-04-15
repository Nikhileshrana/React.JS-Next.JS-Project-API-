"use client"
import Link from 'next/link'
import { useState } from 'react';

const Header = (props) => {
  return (
    <>
    <div id='header-container'>
        <div>
            <div>
                {props.name}
            </div>
        </div>
        <div>
            <Link href='#'>Home</Link>
            <Link href='https://nikhileshrana.tech'>Portfolio</Link>
            <Link href='https://github.com/nikhileshrana'>Github</Link>
        </div>
    </div>
    </>
  )
}

export default Header