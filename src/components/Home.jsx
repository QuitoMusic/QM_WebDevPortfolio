import React from 'react';
import Portrait from "../assets/Portrait.jpeg";
import Leave1 from "../assets/Leave1.png";
import Leave2 from "../assets/Leave2.png";
import {Link} from 'react-scroll';


import { HiArrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b  from-gray-950 via-black to-gray-900'>
        <div className='max-w-screen-lg mx-auto my- flex flex-col items-center justify-center h-full px-4 md:flex-row pt-'>
            <div className='flex flex-col justify-center items-center h-full pt-20'>
            <div className='md:w-[250px] w-[170px] absolute'>
             <img src= {Portrait} alt="Portrait" className='rounded-full mx-auto md:mb-[20rem] mb-[25rem]'/>
            </div>
            <div className='w-[250px]'>
             <img src= {Leave1} alt="Leaves" className='d-flex absolute md:w-[170px] w-[120px] 2xl:w-[280px] xl:top-[16rem] md:top-[22rem] 2xl:top-[18rem] top-[11.5rem] md:right-[32rem] 2xl:right-[42rem] right-[4rem] rounded-full mx-auto saturate-0 brightness-[-1%] invert leaf-animation-2'/>
            </div>
            <div className='w-[250px]'>
             <img src= {Leave2} alt="Leaves" className='d-flex absolute md:w-[170px] w-[120px] 2xl:w-[280px] xl:top-[16rem] md:top-[22rem] 2xl:top-[18rem] top-[11.5rem] md:right-[46.5rem] 2xl:right-[60rem] right-[13rem] rounded-full mx-auto invert saturate-0 brightness-[-1%] leaf-animation-1'/>
            </div>
                <h2 className='text-2xl xl:text-xl text-white pb-2 md:pt-[21rem] pt-[12rem] 2xl:pt-[25rem] font-extrabold'>
                    My name is
                </h2>
                <h2 className='text-5xl xl:text-4xl text-white font-signature pt-2'>
                    Francisco González
                </h2>
                <p className='py-4 text-white max-w-md text-center'>
                I'm a dedicated full-stack web developer with a passion for crafting immersive digital experiences 
                by staying at the forefront of web development trends and enjoying collaboration with diverse teams to create 
                innovative digital products. 
                Let's connect and build something incredible together! 
                </p>
                
                <div className='z-10'>
                    <Link to="portfolio" smooth duration={500} className='font-signature text-3xl xl:text-4xl group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md  bg-yellow-950 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300 xl:px-2'>
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