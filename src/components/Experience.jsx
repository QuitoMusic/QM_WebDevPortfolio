import React from 'react'
import Javascript from '../assets/icons/javascript.png';
import CSS from '../assets/icons/css.png';
import HTML from '../assets/icons/html.png';
import MongoDb from '../assets/icons/mongo.png';
import NodeJs from '../assets/icons/node.png';
import ReactIcon from '../assets/icons/react.png';

const Experience = () => {
    const portfolios = [
        {
            id:1,
            src: HTML,
            title: 'HTML',
            style: 'shadow-slate-900 bg-slate-200 bg-opacity-[70%]'
        },
        {
            id:2,
            src: CSS,
            title: 'CSS',
            style: 'shadow-slate-900 bg-slate-200 bg-opacity-[70%]'
        },
        {
            id:3,
            src: Javascript,
            title: 'Javascript',
            style: 'shadow-slate-900 bg-slate-200 bg-opacity-[70%]'
        },
        {
            id:4,
            src: NodeJs,
            title: 'NodeJs',
            style: 'shadow-slate-900 bg-slate-300 bg-opacity-[70%] saturate-[110%]'
        },
        {
            id:5,
            src: MongoDb,
            title: 'MongoDb',
            style: 'shadow-slate-900 bg-slate-200 bg-opacity-[70%] saturate-[70%]'
        },
        {
            id:6,
            src: ReactIcon,
            title: 'React',
            style: 'shadow-slate-900 bg-slate-300 bg-opacity-[70%] saturate-[70%]'
        },
    ]
  return (
    <div name= 'experience' className='w-full h-screen pt-[12rem] md:pt-[0rem]'>
        <div className = 'max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white text-2xl'>
            <div className="text-center sm:pb-8 sm:mt-20 md:pt-[3rem]">
                <p className='text-7xl font-bold  inline p-2 font-signature text-shadow-lg shadow-yellow-950'>Experience</p>
                <p className='text-[1.1rem] md:text-3xl text-shadow-lg shadow-yellow-950 font-extrabold'>Technologies I've worked with</p>
            </div>
            
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 py-8 px-6 sm:px-0 justify-center text-center'>
            {
                portfolios.map(({id, src, title, style}) => (
            <div key={id} className={`shadow-md hover:scale-110 duration-500 py-2 rounded-lg ${style}`}>
                    <img src= { src } alt="" className='w-[10rem] mx-auto' />
                    <p className='text-yellow-950'>{title}</p>
                </div>   
             ))
            }
                
            </div>
        </div>
    </div>
  )
}

export default Experience;