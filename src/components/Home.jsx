import React from 'react';
import Portrait from "../assets/Portrait.jpeg";
import {Link} from 'react-scroll';


import { HiArrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b  from-gray-950 via-black to-gray-900'>
        <div className='max-w-screen-lg mx-auto my- flex flex-col items-center justify-center h-full px-4 md:flex-row pt-'>
            <div className='flex flex-col justify-center items-center h-full pt-20'>
            <div className='w-[250px]'>
             <img src= {Portrait} alt="Portrait" className='rounded-full mx-auto'/>
            </div>
                <h2 className='text-2xl xl:text-3xl text-white'>
                    My name is
                </h2>
                <h2 className='text-5xl xl:text-7xl font-extrabold text-white font-signature pt-2'>
                    Francisco González
                </h2>
                <p className='py-4 text-white max-w-md text-center'>
                I'm a dedicated full-stack web developer with a passion for crafting immersive digital experiences 
                by staying at the forefront of web development trends and enjoying collaboration with diverse teams to create 
                innovative digital products. 
                Let's connect and build something incredible together! 
                </p>
                
                <div>
                    <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-yellow-950 to-yellow-800 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowRight size={25} className="ml-2"/>
                        </span>
                    </Link>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Home