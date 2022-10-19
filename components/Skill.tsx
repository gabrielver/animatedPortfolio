import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    directionLeft?: boolean;
}

export default  function Skill({ directionLeft}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img 
        initial={{
            x: directionLeft ? -200 : 200,
            opacity:0
        }}
        transition={{duration: 1}}
        whileInView={{opacity:1, x:0}}
        src="https://imgs.search.brave.com/snHvePLfL8qEKcaQLBTIvahXXRZZ4vKYVxGAOhb1NMo/rs:fit:728:724:1/g:ce/aHR0cHM6Ly9jZG4u/aW1nYmluLmNvbS8y/MC84LzIxL2ltZ2Jp/bi1jYXItbG9nby10/ZXNsYS10ZXNsYS1s/b2dvLUM4MmRac0Nn/MGdqcDc5SEtwNWpL/SGFzV3UuanBn" alt=""
        className='rounded-full border border-gray-500 object-cover w-24 h-24  md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute rounded-full opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100 '>100%</p>
            </div>
        </div>
    </div>
  )
}

