import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Icons = [
  {
    id: 1,
    child: (
      <>
        <FaLinkedin size={30} />
      </>
    ),
    href: 'https://www.linkedin.com/in/francisco-gonz%C3%A1lez-7a9735271/',
    style: 'rounded-tr-md'
  },
  {
    id: 2,
    child: (
      <>
        <FaGithub size={30} />
      </>
    ),
    href: 'https://github.com/QuitoMusic',
  },
];

const Footer = () => {
  return (
    <footer className="bg-yellow-950 opacity-[90%] text-white flex justify-center items-center mt-3">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <ul className="flex flex-wrap">
            {Icons.map(({ child, href }) => (
              <li key={href} className="p-2">
                <a href={href}>{child}</a>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-center pb-">©2023 QuitoMusic</p>
      </div>
    </footer>
  );
};

export default Footer;
