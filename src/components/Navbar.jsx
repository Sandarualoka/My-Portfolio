import React , {useState} from 'react'
import logo1 from '../assests/logo1.png';
import {FaBars , FaTimes , FaGithub , FaLinkedin , FaWhatsapp} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

const Navbar = () => {
    const [nav , setNav] = useState(false);

    const handleClick = ()=>{
        setNav(!nav)
    }

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div className='shadow-md shadow-[#040c16]'>
            <img src={logo1} alt='logo' style={{width: "150px"}}/>
        </div>
        
            <ul className='hidden md:flex text-2xl'>
                <li className='hover:scale-110 duration-500 hover:font-bold'>Home</li>
                <li className='hover:scale-110 duration-500 hover:font-bold'>About</li>
                <li className='hover:scale-110 duration-500 hover:font-bold'>Skills</li>
                <li className='hover:scale-110 duration-500 hover:font-bold'>Contact</li>
            </ul>
       
            {/* menuIcon */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>

        {/* mobileMenu */}
        <ul className={!nav ? "hidden" : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Works</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Contact</li>
                
        </ul>

        {/* icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
           <ul>
           <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
                <a className='flex justify-between items-center w-full text-gray-300' href='/'>
                    Linkedin <FaLinkedin size={30}/>
                </a>
            </li>

            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                <a className='flex justify-between items-center w-full text-gray-300' href='/'>
                    Github <FaGithub size={30}/>
                </a>
            </li>

            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-500'>
                <a className='flex justify-between items-center w-full text-gray-300' href='/'>
                    Email <HiOutlineMail size={30}/>
                </a>
            </li>

            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                <a className='flex justify-between items-center w-full text-gray-300' href='/'>
                    Resume <BsFillPersonLinesFill size={30}/>
                </a>
            </li>

            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-500'>
                <a className='flex justify-between items-center w-full text-gray-300' href='/'>
                    Whatsapp <FaWhatsapp size={30}/>
                </a>
            </li>

           </ul>
        </div>
    </div>
  )
}

export default Navbar