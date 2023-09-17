import React from 'react';
import Portrait from "../assets/Portrait.jpeg";
import { HiArrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b  from-gray-950 via-black to-gray-900'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    My name is Francisco González
                </h2>
                <p className='py-4 text-white max-w-md'>
                I'm a dedicated full-stack web developer with a passion for crafting immersive digital experiences.
                 I'm committed to staying at the forefront of web development trends and enjoy collaborating with diverse teams to create innovative digital products. 
                 Let's connect and build something incredible together! 
                </p>
                <div>
                    <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-yellow-950 to-yellow-800 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowRight size={25} className="ml-2" />
                        </span>
                    </button>
                </div>
            </div>
<div>
    <img src= {Portrait} alt="Portrait" className='rounded-full mx-auto w-32 md:w-full'/>
</div>
        </div>
    </div>
  )
}

export default Home