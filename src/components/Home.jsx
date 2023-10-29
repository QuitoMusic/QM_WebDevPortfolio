import React from 'react';
import Portrait from "../assets/Portrait.jpg";
// import Leave1 from "../assets/Leave1.png";
// import Leave2 from "../assets/Leave2.png";
import {Link} from 'react-scroll';


import { HiArrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='h-screen w-full '>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center items-center h-full'>
            <div className='2xl:w-[350px] md:w-[300px] w-[200px] absolute'>
             <img src= {Portrait} alt="Portrait" className='rounded-full mx-auto md:mb-[20rem] mb-[25rem]'/>
            </div>
            {/* <div className='w-[250px]'>
             <img src= {Leave1} alt="Leaves" className='d-flex absolute md:w-[190px] w-[120px] 2xl:w-[280px] xl:top-[15.5rem] md:top-[22rem] 2xl:top-[18rem] top-[11.5rem] md:right-[33rem] 2xl:right-[43rem] right-[5rem] rounded-full mx-auto saturate-0 brightness-[-1%] invert leaf-animation-2'/>
            </div>
            <div className='w-[250px]'>
             <img src= {Leave2} alt="Leaves" className='d-flex absolute md:w-[190px] w-[120px] 2xl:w-[280px] xl:top-[15.5rem] md:top-[22rem] 2xl:top-[18rem] top-[11.5rem] md:right-[44rem] 2xl:right-[59rem] right-[12rem] rounded-full mx-auto invert saturate-0 brightness-[-1%] leaf-animation-1'/>
            </div> */}
            <div class="text-shadow-lg shadow-yellow-950 text-center justify-center bg-opacity-80 pt-[5rem] mt-[6rem] md:pt-[7rem] 2xl:p-[1rem] 2xl:pt-[9rem] 2xl:pb-[1rem] bg-slate-100 rounded-lg 2xl:mt-[13rem] md:mt-[10rem] 2xl:w-[42rem]">
            <h2 className='text-2xl xl:text-xl text-black md:text-yellow-950 pb-2 font-extrabold'>
                    My name is
                </h2>
                <h2 className='text-5xl xl:text-5xl text-yellow-950 font-signature'>
                    Francisco González
                </h2>
                <p className='p-4 text-black font-extrabold md:text-yellow-950 max-w-2xl text-center text-md'>
                I'm a dedicated full-stack web developer with a passion for crafting immersive digital experiences 
                by staying at the forefront of web development trends and enjoying collaboration with diverse teams to create 
                innovative digital products. 
                Let's connect and build something incredible together! 
                </p>
                
                </div>

                
                
                
                <div className='z-10'>
                    <Link to="portfolio" smooth duration={500} className='bg-opacity-90 font-signature text-3xl xl:text-4xl group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md  bg-yellow-950 cursor-pointer'>
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