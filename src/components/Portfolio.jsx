import React from 'react';
import Stasios from '../assets/Stasios.png';
import TakeAHike from '../assets/TakeAHike.png';
import CatchMybreathe from '../assets/catchbreathe.png';
import WeatherDashboard from '../assets/WeatherDashboard.png';
import JATE from '../assets/Homepage.png';
import CQuiz from '../assets/CodingQuiz.png';
import PasswordGenerator from '../assets/PasswordGenerator.png';
import ECommerceMySQL from '../assets/MySqlECommerce.png';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: CatchMybreathe,
      href: 'https://willzealot.github.io/Catchmybreathe/',
      href2: 'https://github.com/WillZealot/Catchmybreathe',
      name: 'Air Quality Vacation Website',
    },
    {
      id: 2,
      src: WeatherDashboard,
      href: 'https://quitomusic.github.io/Weather_Dashboard/',
      href2: 'https://github.com/QuitoMusic/Weather_Dashboard',
      name: 'Weather Dashboard',
    },
    {
      id: 3,
      src: TakeAHike,
      href: 'https://take-a-hike-quito-2bdfd3666c8e.herokuapp.com/',
      href2: 'https://github.com/QuitoMusic/Take_A_Hike',
      name: 'Social Media For Hikers',
    },
    {
      id: 4,
      src: Stasios,
      href: 'https://stasios-7fcd485311cd.herokuapp.com/',
      href2: 'https://github.com/NickSweet1/Stasios',
      name: 'Italian Restaurant',
    },
    {
      id: 5,
      src: JATE,
      href: 'https://pwajate-text-editor-64e0b83af6c5.herokuapp.com/',
      href2: 'https://github.com/QuitoMusic/PWA_Text_Editor',
      name: 'PWA Text Editor',
    },
    {
      id: 6,
      src: CQuiz,
      href: 'https://quitomusic.github.io/UCF_Coding_Quiz_Challenge_/',
      href2: 'https://github.com/QuitoMusic/UCF_Coding_Quiz_Challenge_',
      name: 'Coding Quiz',
    },
    {
      id: 7,
      src: PasswordGenerator,
      href: 'https://quitomusic.github.io/UCF_JS_passwordgenerator_Challenge_3/',
      href2: 'https://github.com/QuitoMusic/UCF_JS_passwordgenerator_Challenge_3',
      name: 'Password Generator',
    },
    {
      id: 8,
      src: ECommerceMySQL,
      href: 'https://quitomusic.github.io/UCF_JS_passwordgenerator_Challenge_3/',
      href2: 'https://github.com/QuitoMusic/UCF_JS_passwordgenerator_Challenge_3',
      name: 'E-Commerce Site',
    },
  ];

  return (
    <div name="portfolio" className="w-full text-white md:h-screen pt-[5rem] xl:pt-[6rem]">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div  className="text-center pb-8">
          <p className="text-7xl font-bold inline my-4 sm:text-left font-signature text-shadow-lg shadow-yellow-950">Portfolio</p>
          <p className="py-6 text-xl md:text-3xl text-shadow-lg shadow-yellow-950 font-extrabold">Here are some examples of my work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href, href2, name }) => (
            <div key={id} className="rounded-xl relative overflow-hidden group">
              <a href={href} className="flex justify-between items-center w-full text-white group-hover:blur-md group-hover:text-opacity-100 transform transition-transform duration-1000">
                <img src={src} alt="" className="rounded-md" />
              </a>
              
              <div className="text-xl w-[15rem] absolute top-[4.5rem] md:top-[4rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-slate-100 bg-opacity-70 text-yellow-950 font-extrabold px-1 py-1 rounded-3xl shadow-2xl shadow-slate-100 opacity-0 group-hover:opacity-100 transition-opacity">
                {name}
              </div>

              <div className="flex item-center justify-center bg-yellow-950 bg-opacity-90">
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

