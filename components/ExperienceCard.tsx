import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
      initial={{y: -100, opacity:0}}
      transition={{duration: 1.2}}
      whileInView={{y:1, opacity:1}}
      viewport={{once:true}}
      className='w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center' 
      src="https://imgs.search.brave.com/Dd602h74d1FM6IZZVqJD-t_gHepAW0P95W3mg-foc-M/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5l/YzJiN2JRQ2NBcmo1/cGVzYjZqM1lBSGFF/SyZwaWQ9QXBp" alt="" />
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>CEO of SpaceX</h4>
        <p className='font-bold text-2xl mt-1'>Space X</p>
        <div className='flex space-x-2 my-2'>
          <img className='h-10 w-10 rounded-full' src="https://imgs.search.brave.com/eiG-Iwi1yOSFRR4BKRvmG0jZmVE0d67XPQH9JGkj0x0/rs:fit:155:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4y/a0hlUnJMWXNmSVpF/T3lkbTJzUjlnQUFB/QSZwaWQ9QXBp" alt="" />
          <img className='h-10 w-10 rounded-full' src="https://imgs.search.brave.com/eiG-Iwi1yOSFRR4BKRvmG0jZmVE0d67XPQH9JGkj0x0/rs:fit:155:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4y/a0hlUnJMWXNmSVpF/T3lkbTJzUjlnQUFB/QSZwaWQ9QXBp" alt="" />
          <img className='h-10 w-10 rounded-full' src="https://imgs.search.brave.com/eiG-Iwi1yOSFRR4BKRvmG0jZmVE0d67XPQH9JGkj0x0/rs:fit:155:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4y/a0hlUnJMWXNmSVpF/T3lkbTJzUjlnQUFB/QSZwaWQ9QXBp" alt="" />
        </div>
        <p className='uppercase py-5 text-gray-500'>Started work .... - Ended ...</p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>summary point summary point summary point</li>
          <li>summary point summary point summary point</li>
          <li>summary point summary point summary point</li>
          <li>summary point summary point summary point</li>
          <li>summary point summary point summary point</li>
        </ul>
      </div>
    </article>
  )
}

