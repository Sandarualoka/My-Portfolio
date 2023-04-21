import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4 '>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>

                <div></div>
                 
                    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                        <div className='sm:text-right text-4xl font-bold '>
                        <p>Hi , I'm Sandaru nice to meet you. Please take me look arround </p>
                        </div>
                    </div>

                    <div>
                        <p>
                        I am a driven and enthusiastic undergraduate student at the University of NSBM, pursuing a degree in Software Engineering. With a strong passion for web development, I have specialized in React JS and other web development technologies. Throughout my academic journey, I have honed my skills in designing developing implementing software solutions that meet industry standards. I am a quick learner and possess excellent problem-solving abilities, which allows me to adapt to new challenges with ease. With a keen eye for detail and a drive for excellence, I am committed to delivering high-quality work and exceeding expectations.
                        </p>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default About