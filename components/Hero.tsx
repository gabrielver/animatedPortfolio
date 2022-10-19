import Link from 'next/link'
import React from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle'

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: ["Hy, my name is Elon", "Guy-who-loves-coffee.tsx", "<ButLoveToCodeMore />"],
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden' >
        <BackgroundCircle />
        <img className='relative rounded-full h-32 w-32 mx-ato object-cover' src="https://imgs.search.brave.com/csyq4TgjhVzZ970w0ZOv63-aFvnFYrrMFB_IGtEJqp8/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9tZWRp/YS52YW5pdHlmYWly/LmNvbS9waG90b3Mv/NjA5ZDUxMjg4ZmVl/MGUyZDIwNGE4NmVh/L21hc3Rlci93XzI1/NjAlMkNjX2xpbWl0/L0Vsb241LjEzLmpw/Zw" alt="" />
    <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Engieneer</h2>
    <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
            <span className='mr-3'>{text}</span>
            <Cursor cursorColor='#F7ABBA' />
        </h1>
        <div className='pt-5'>
            <Link href="#about"><button className='heroButton'>About</button></Link>
            <Link href="#experience"><button className='heroButton'>Experience</button></Link>
            <Link href="#skills"><button className='heroButton'>Skills</button></Link>
            <Link href="#projects"><button className='heroButton'>Projects</button></Link>            
        </div>
    </div>
    </div>
  )
}

