import React, { useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
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
            <img src= {pineTree} alt="pineTree" className='z-40 d-flex right-[1rem] relative md:w-[105px] w-[80px] top-[0rem] opacity-[100%] 2xl:w-[115px] md:top-[0] 2xl:top-[0rem]  rounded-full mx-auto leaf-animation-1'/>
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
  {nav ? <FaTimes size={30}/>: <FaBars size={30}/>}
</div>

{nav &&(
  <ul className='flex flex-col justify-center items-center 
  absolute top-0 w-full h-screen bg-yellow-950 opacity-90'>
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

export default Navigation


