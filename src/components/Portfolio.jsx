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
      name: 'Air Quality Vacation Website',
    },
    {
      id: 2,
      src: TakeAHike,
      href: 'https://take-a-hike-quito-2bdfd3666c8e.herokuapp.com/',
      href2: 'https://github.com/QuitoMusic/Take_A_Hike',
      name: 'Social Media For Hikers',
    },
    {
      id: 3,
      src: Stasios,
      href: 'https://stasios-7fcd485311cd.herokuapp.com/',
      href2: 'https://github.com/NickSweet1/Stasios',
      name: 'Italian Restaurant',
    },
  ];

  return (
    <div name="portfolio" className="bg-gradient-to-b from-gray-950 via-black to-gray-900 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="text-center sm:pb-8 sm:mt-20">
          <p className="text-5xl font-bold inline my-4 sm:text-left font-signature">Portfolio</p>
          <p className="py-6">Here are some examples of my work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href, href2, name }) => (
            <div key={id} className="rounded-xl relative overflow-hidden group">
              <a href={href} className="flex justify-between items-center w-full text-white group-hover:blur-md group-hover:text-opacity-100 transform transition-transform duration-1000">
                <img src={src} alt="" className="rounded-md" />
              </a>
              
              <div className="text-2xl w-[15rem] absolute top-[6rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-yellow-950 bg-opacity-80 text-white px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                {name}
              </div>

              <div className="flex item-center justify-center bg-yellow-950 bg-opacity-80">
                <a href={href}>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-125 font-signature text-[1.5rem]">Demo</button>
                </a>
                <a href={href2}>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-125 font-signature text-[1.5rem]">Code</button>
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

