import React from 'react';
import HTML from '../assests/html.png';
import react from '../assests/react.png';
import CSS from '../assests/css.png';
import Tailwind from '../assests/tailwind.png';
import Mongo from '../assests/mongo.png';
import Javascript from '../assests/javascript.png';
import Github from '../assests/github.png';

const Skills = () => {
  return (
    <div name="skills" className=' bg-[#0a192f]  text-gray-300'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex- flex-col justify-centerw-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                <p className='py-4'>This are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'> 
                    <img className='w-28 mx-auto' src={HTML} alt="HTML Icon" />
                    <p className='my-4'>HTML</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'> 
                    <img className='w-28 mx-auto' src={CSS} alt="CSS Icon" />
                    <p className='my-4'>CSS</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'> 
                    <img className='w-28 mx-auto' src={react} alt="React Icon" />
                    <p className='my-4'>React</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'> 
                    <img className='w-28 mx-auto' src={Tailwind} alt="Tailwind Icon" />
                    <p className='my-4'>Tailwind CSS</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'> 
                    <img className='w-28 mx-auto' src={Mongo} alt="MongoIcon" />
                    <p className='my-4'>MongoDB</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'> 
                    <img className='w-28 mx-auto' src={Javascript} alt="JS Icon" />
                    <p className='my-4'>JavaScript</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'> 
                    <img className='w-28 mx-auto' src={Github} alt="Git Icon" />
                    <p className='my-4'>GitHub</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Skills;