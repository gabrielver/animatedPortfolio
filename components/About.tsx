import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

// 

export default function About({}: Props) {
  return (
    <motion.div 
    initial={{opacity:0}}
    transition={{duration: 1.5}}
    whileInView={{opacity:1}}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
        <motion.img 
        initial={{x:-200,opacity:0
        }}
        transition={{ duration: 1.2
        }}
        whileInView={{x:0,opacity:1
        }}
        viewport={{once: true
        }}
        src='https://imgs.search.brave.com/QeP0kQv3kw0h4z-GNQKxeAXdKWA9lJVGcLJkfhwBsYA/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/aDI0aW5mby5tYS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMC8w/NS9FbG9uLU11c2st/cy1lbi1wcmVuZC1h/dXgtYXN0cm9ub21l/cy5qcGc'
        className='mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] '
        />
        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background</h4>
            <p className='text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sed vel eos laboriosam ducimus impedit, harum, voluptatem ullam maxime ut iure odio tempore repudiandae perspiciatis reiciendis illo inventore sequi consequatur nesciunt laudantium ipsa possimus minus veniam quo. Qui iure porro, recusandae odit unde debitis dicta cum quo non voluptatem rem?</p>
        </div>
    </motion.div>

  )
}

