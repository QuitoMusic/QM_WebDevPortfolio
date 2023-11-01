import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full h-screen text-white">
      <div className="max-w-screen p-4 mx-auto flex flex-col justify-center items-center w-full h-full mt-[7rem]">
        <div className="pb-4 text-center sm:pb-8"> 
          <p className="text-6xl md:text-7xl font-bold inline font-signature text-shadow-lg shadow-yellow-950">About</p> 
        </div>

        <div className="text-center bg-opacity-80 pt-3 bg-yellow-950 rounded-lg md:w-[80rem] mb-[10rem] md:mb-[0rem]">
        <div className="max-w-6xl mx-auto"> 
          <p className="text-md p-2 md:text-xl text-center font-extrabold"> 
          Hello and welcome! I'm Francisco, a passionate Full Stack Web Developer with a strong background in 
          both front-end and back-end development. I love turning ideas into digital solutions, 
          crafting seamless user experiences with HTML, CSS, and JavaScript, and delving into server-side technologies
           like Node.js. My goal is to build robust, user-friendly web applications that exceed client expectations. 
           When I'm not coding, I explore new technologies, collaborate with cross-functional teams, and push the boundaries 
          of what the web can offer.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};


    
    

export default About;
