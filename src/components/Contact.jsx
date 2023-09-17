import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-gradient-to-b  from-gray-950 via-black to-gray-900 p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8 text-center'>
                <p className='text-4xl font-bold inline border-b-4 border-slate-50'>Let's work together!</p>
                <p className='py-6'>Submit the form to get in contact with me:</p>
                <div className='flex justify-center items-center'>
                    <form action="https://getform.io/f/6ffbc22e-bc4c-4553-b731-7db867bf3d5a" method= "POST" className='flex flex-col w-full md:w-1/2'>
                        <input type="text" name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                       
                        <input type="text" name='email' placeholder='Enter your email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                         
                         <textarea name="message" placeholder='Enter your message' rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                         
                         <button className='text-white bg-gradient-to-b from-yellow-950 to-yellow-800 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-125 duration-300'>Let's Talk!</button>
                    </form>

                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact