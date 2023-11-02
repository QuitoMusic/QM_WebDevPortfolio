import React, { useState } from 'react';
import {FaBars, FaTimes, FaGithub} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import {Link} from 'react-scroll';
import pineTree from "../assets/pineTree.png";


const links = [
  {
    id: 1,
    link: 'home'
  },
  {
    id: 2,
    link: 'about'
  },
  {
    id: 3,
    link: 'portfolio'
  },
  {
    id: 4,
    link: 'experience'
  },
  {
    id: 5,
    link: 'contact'
  },
]

const Navigation = () => {

  const [nav, setNav] = useState(false);

  return (
    <div className='flex justify-between items-center w-full h-25 text-white opacity-90 bg-yellow-950 fixed z-20'>
      <div>
        <a href="https://www.linkedin.com/in/francisco-gonz%C3%A1lez-7a9735271/">
          <div>
            <img
              src={pineTree}
              alt="pineTree"
              className='z-30 d-flex right-[0.5rem] relative md:w-[70px] lg:left-[-1rem] w-[60px] top-[-0.3rem] opacity-[60%] 2xl:w-[90px] md:top-[-0.5rem] 2xl:top-[-0.3rem] rounded-full mx-auto leaf-animation-1'
            />
          </div>
          <h2 className='absolute z-40 text-shadow-lg shadow-slate-950 opacity-[100%] text-[1.5rem] xl:text-3xl 2xl:text-4xl xl:top-[1.2rem] 2xl:top-[2.2rem] 2xl:left-[1.5rem] xl:left-[1rem] text-white font-signature top-[1.1rem] left-5'>
                    F.González
                </h2>
        </a>
        <a className='absolute md:hidden z-40 d-flex left-[8.5rem] top-[1.5rem] opacity-[100%]' href="mailto:f86gonzalez@outlook.com">
          <div>
            <HiOutlineMail size={21} /> 
          </div>
        </a>
      </div>
      
<ul className='hidden md:flex'>
{links.map(({id, link}) => (
<li key={id} className='px-10 cursor-pointer capitalize font-medium text-white hover:scale-150 duration-200 glow-on-hover'>
<Link to={link} smooth duration={500}>{link}</Link>
</li>
))}
</ul>

<div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-white md:hidden"> 
  {nav ? <FaTimes size={25}/>: <FaBars size={25}/>}
</div>

{nav &&(
  <ul className='flex flex-col justify-center items-center 
  absolute top-0 w-full h-screen bg-yellow-950'>
    {links.map(({id, link}) => (
        <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-110 duration-200'>
        <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
            </li>
          ))}
      </ul>
)}
</div>
  )
}

export default Navigation;


