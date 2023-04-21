import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi';

const Home = () => {
  return (
    <div name="home" className='w-full h-screen bg-[#0a192f]'>
         <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#ccd6f6] text-4xl sm:text-3xl'>Hi , My Name is </p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>sandaru De Silva</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Developer</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>React web developer with a passion for QA and PM. Hardworking, self-motivated, and eager to learn new skills</p>

            <div>
            <button className='group border-2 px-6 py-3 my-2 flex flex-center hover:bg-[#8892b0] duration-500 hover:border-[#0a192f] text-gray-100'>View Work 
              <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 hover'/>
              </span>
            </button>
        </div>
        

        </div> 

       
    </div>
  )
}

export default Home