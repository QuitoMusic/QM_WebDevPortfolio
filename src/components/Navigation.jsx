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
    <div className='flex justify-between items-center w-full h-25 text-white bg-yellow-950 md:opacity-90 fixed z-20'>

<div>
  <a href="https://www.linkedin.com/in/francisco-gonz%C3%A1lez-7a9735271/">
  <h1 className="ml-[0rem] md:ml-[0.57rem] 2xl:ml-[0.5rem] p-6 2xl:pt-[1.9rem] pb-0 text-3xl sm:text-5xl font-signature glow-on-hover">F.González</h1>
  </a>
</div>
      
      <div>
       <img src= {pineTree} alt="pineTree" className='d-flex absolute md:w-[87px] w-[70px] top-[-.5rem] right-[20.8rem] 2xl:w-[100px] md:top-[-1rem] 2xl:top-[-1.2rem]  md:right-[84.4rem] 2xl:right-[114rem]  rounded-full mx-auto leaf-animation-1'/>
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

export default Navigation


