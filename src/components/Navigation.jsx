import React, { useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import {Link} from 'react-scroll';
import Leave1 from "../assets/Leave1.png";
import Leave2 from "../assets/Leave2.png";


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
  <h1 className="ml-[6.5rem] md:ml-[4.5rem] 2xl:ml-[4rem] p-3 text-4xl sm:text-5xl font-signature glow-on-hover">F.González</h1>
  </a>
</div>
      
      <div>
       <img src= {Leave1} alt="Leaves" className='d-flex absolute md:w-[110px] w-[80px] top-[0.5rem] right-[4rem] 2xl:w-[100px] xl:top-[0.5em] 2xl:top-[0rem]  md:right-[66rem] 2xl:right-[97rem]  rounded-full mx-auto saturate-0 brightness-[-1%] invert leaf-animation-1'/>
      </div>

      <div>
      <img src= {Leave2} alt="Leaves" className='d-flex absolute md:w-[110px] w-[80px] top-[0.5rem] right-[15.5rem] 2xl:w-[100px] xl:top-[0.5rem] 2xl:top-[0rem]  md:right-[82rem] 2xl:right-[112.5rem]  rounded-full mx-auto saturate-0 brightness-[-1%] invert leaf-animation-2'/>
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


