import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from "react-icons/bs";
import { saveAs } from 'file-saver';

const SocialLinks = () => {
    const handleDownload = () => {
        const pdfUrl = '/FranciscoGonzalezFullStackDeveloper.pdf';
        saveAs(pdfUrl, 'FranciscoGonzalezResume.pdf');
    };

    const links = [
        {
            id:1,
            child: (
                <>
                LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/francisco-gonz%C3%A1lez-7a9735271/',
            style: 'rounded-tr-md'
        },
        {
            id:2,
            child: (
                <>
                GitHub <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/QuitoMusic',
        },
        {
            id:3,
            child: (
                <>
                Email <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:f86gonzalez@outlook.com',
        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            onClick: handleDownload,
            style: 'rounded-tr-md',
        },
    ];

    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>
                {links.map(({ id, child, style, onClick }) => (
                    <li
                        key={id}
                        className={
                            "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] rounded-md hover:ml-[-10px] duration-300 bg-yellow-950 bg-opacity-80" +
                            " " +
                            style
                        }
                    >

                        <a
                            href="#"
                            className='flex justify-between items-center w-full text-white cursor-pointer'
                            onClick={onClick}
                        >
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SocialLinks;