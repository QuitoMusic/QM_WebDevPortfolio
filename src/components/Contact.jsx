import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [emailError, setEmailError] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    

    
    setEmailError('');

  };

  return (
    <div name="contact" className="w-full h-screen bg-gradient-to-b from-gray-950 via-black to-gray-900 p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-slate-50">Let's work together!</p>
          <p className="py-6">Submit the form to get in contact with me:</p>
          <div className="flex justify-center items-center">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col w-full md:w-1/2"
            >
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                value={formData.name}
                onChange={handleInputChange}
                required
              />

              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                className={`my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none ${
                  emailError ? 'border-red-500' : ''
                }`}
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              {emailError && (
                <p className="text-white text-sm pb-3">{emailError}</p>
              )}

              <textarea
                name="message"
                placeholder="Enter your message"
                rows="10"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                value={formData.message}
                onChange={handleInputChange}
                required
              />

              <button
                type="submit"
                className="text-white bg-gradient-to-b from-yellow-950 to-yellow-800 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-125 duration-300"
              >
                Let's Talk!
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
