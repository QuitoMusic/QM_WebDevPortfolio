import React from 'react'
import weatherDashboard from '../assets/weatherDashboard.png';
import TakeAHike from '../assets/TakeAHike.png';
import NoteTaker from '../assets/NoteTaker.png';
import JATE from '../assets/JATE.png';
import CodingQuiz from '../assets/CodingQuiz.png';
import Catchbreathe from '../assets/catchbreathe.png';

const Portfolio = () => {
    const portfolios = [
        {
            id:1,
            src: Catchbreathe
        },
        {
            id:2,
            src: TakeAHike
        },
        {
            id:3,
            src: JATE
        },
        {
            id:4,
            src: weatherDashboard
        },
        {
            id:5,
            src: CodingQuiz
        },
        {
            id:6,
            src: NoteTaker
        },
    ]
  return (
    <div name= 'Portfolio' className='bg-gradient-to-b from-gray-950 via-black to-gray-900 w-full text-white md:h-screen'>
        <div className = 'max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className="text-center sm:pb-8 sm:mt-20">
                <p className='text-4xl font-bold inline border-b-4 border-slate-50 my-4 sm:text-left'>Portfolio</p>
                <p className='py-6'>Here are some examples of my work</p>
            </div>

           
            
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {
                portfolios.map(({id, src}) => (
                    <div key={id} className='shadow-xl shadow-blue-900 rounded-xl'>
                    <img src= { src } alt="" className='rounded-md duration-200 hover:scale-105' />
                    <div className='flex item-cente justify-center'>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-125'>Demo</button>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-125'>Code</button>
                    </div>
                </div>   
             ))
            }
                
            </div>
        </div>
    </div>
  )
}

export default Portfolio