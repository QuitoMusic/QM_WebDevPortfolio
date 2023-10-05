import React from 'react';
import Stasios from '../assets/Stasios.png';
import TakeAHike from '../assets/TakeAHike.png';
import Catchbreathe from '../assets/catchbreathe.png';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Catchbreathe,
      href: 'https://willzealot.github.io/Catchmybreathe/',
      href2: 'https://github.com/WillZealot/Catchmybreathe',
    },
    {
      id: 2,
      src: TakeAHike,
      href: 'https://take-a-hike-quito-2bdfd3666c8e.herokuapp.com/',
      href2: 'https://github.com/QuitoMusic/Take_A_Hike',
    },
    {
      id: 3,
      src: Stasios,
      href: 'https://stasios-7fcd485311cd.herokuapp.com/',
      href2: 'https://github.com/NickSweet1/Stasios',
    },
  ];

  return (
    <div name="portfolio" className="bg-gradient-to-b from-gray-950 via-black to-gray-900 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="text-center sm:pb-8 sm:mt-20">
          <p className="text-4xl font-bold inline border-b-4 border-slate-50 my-4 sm:text-left">Portfolio</p>
          <p className="py-6">Here are some examples of my work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href, href2 }) => (
            <div key={id} className="shadow-xl shadow-blue-900 rounded-xl">
              <a href={href} className="flex justify-between items-center w-full text-white">
                <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />
              </a>
              
              

              <div className="flex item-center justify-center">
              <a href={href}>
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-125">Demo</button>
              </a>
              <a href={href2}>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-125">Code</button>
            </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
