import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
      <Head>
        <title>Elon's Portfolio</title>
      </Head>
   {/* Header */}
   <Header/>
   {/* hero */}
    <section id='hero' className='snap-start'>
   <Hero/>
   </section>
   {/* about */}
   <section id='about' className='snap-center'>
   <About/>
   </section>
   {/* Experience */}
   <section id='experience' className='snap-center'>
   <WorkExperience/>
   </section>
   {/* skills */}
   <section id='skills' className='snap-start'>
   <Skills/>
   </section>
   {/* Projects */}
   <section id='projects' className='snap-start'>
   <Projects/>
   </section>
   {/* Contact Me */}
   <section id='contact' className='snap-start'>
   <ContactMe/>
   </section>
   <Link href='#hero'>
    <footer className='sticky bottom-5 w-full cursor-pointer'>
      <div className='flex items-center justify-center'>
        <img className='h-10 w-10 rounded-full filter grayscale jover:grayscale-0' src="https://i.imgur.com/e2yvD6A.png" alt="" />
      </div>
    </footer>
    </Link>
    </div>
  )
}

export default Home
