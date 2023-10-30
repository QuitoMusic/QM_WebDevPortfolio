import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full h-screen text-white">
      <div className="max-w-screen p-4 mx-auto flex flex-col justify-center items-center w-full h-full mt-[4rem]">
        <div className="pb-4 text-center sm:pb-8"> 
          <p className="text-6xl md:text-7xl font-bold inline font-signature text-shadow-lg shadow-yellow-950">About</p> 
        </div>

        <div class="text-center bg-opacity-80 pt-3 bg-yellow-950 rounded-lg md:w-[80rem] mb-[10rem] md:mb-[0rem]">
        <div className="max-w-6xl mx-auto"> 
          <p className="text-lg p-2 md:text-xl text-center font-extrabold"> 
            Hello and welcome! My name is Francisco. I'm a passionate Full Stack Web Developer with a love for turning ideas into digital solutions. With a strong background in both front-end and back-end development, I thrive in the ever-evolving world of web technologies. I enjoy crafting seamless user experiences using HTML, CSS, and JavaScript, while also diving into server-side technologies like Node.js.
          </p>
          <br />
          <p className="text-lg p-2 md:text-xl text-center sm:mt-4 font-extrabold"> 
            My goal is to build robust, user-friendly web applications that not only meet but exceed client expectations. When I'm not coding, you'll find me exploring new technologies, collaborating with cross-functional teams, and continuously pushing the boundaries of what the web can offer.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};


    
    

export default About;
