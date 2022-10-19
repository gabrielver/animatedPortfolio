import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function Projects({}: Props) {
    const projects = [1,2,3,4,5];
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>
       
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
                {projects.map((project, i) => (
                    <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'> 
                        <img src="https://imgs.search.brave.com/1G4qsRkVD-dj2d-D4UBJW9lCAAsKwPz4cbe65KEaSNA/rs:fit:653:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5q/d1pZQ29rQUtZN0x0/czZTNkt1aWpBSGFG/WSZwaWQ9QXBp" alt="" />
                
                        <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'>
                            <span className='underline decoration-[#F7AB0A]/50'>Casse study {i + 1} of {projects.length}:</span> Netflix clone</h4>
                            <p className='text-lg text-center md:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, corporis voluptate! Ullam, magnam explicabo eos provident veniam dolores illo recusandae ab quasi quis ea at ipsum magni officiis eum nulla?</p>
                        </div>
                    </div>
                ))}
            </div>
       
        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'></div>
    </div>
  )
}

 