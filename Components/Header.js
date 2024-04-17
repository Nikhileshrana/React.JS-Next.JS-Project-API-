"use client"
import Link from 'next/link'
import { useState } from 'react';

const Header = (props) => {
  return (
    <>
    <div className='Header'>
        <div>
            <div className='header-right'>
                {props.name}
            </div>
        </div>
        <div className='header-right'>
            <Link href='https://nikhileshrana.tech'>Portfolio</Link>
            <Link href='https://github.com/nikhileshrana'>Github</Link>
        </div>
    </div>
    </>
  )
}

export default Header