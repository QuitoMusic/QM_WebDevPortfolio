import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [emailError, setEmailError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false); 

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    setEmailError('');

    const formSubmissionUrl = "https://getform.io/f/6ffbc22e-bc4c-4553-b731-7db867bf3d5a";

    const MAX_RETRIES = 3;
    let retryCount = 0;

    const makeSubmissionRequest = async () => {
      try {
        const response = await fetch(formSubmissionUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          
          console.log('Form submitted successfully');
          setSubmitting(false);
          setSubmissionSuccess(true); 
        } else if (response.status === 429 && retryCount < MAX_RETRIES) {
          
          const delay = Math.pow(2, retryCount) * 1000;
          retryCount++;
          setTimeout(makeSubmissionRequest, delay);
        } else {
          
          console.error('Form submission failed');
          setSubmitting(false);
        }
      } catch (error) {
        console.error('Error:', error);
        setSubmitting(false);
      }
    };

    setSubmitting(true);
    makeSubmissionRequest();
  };

  useEffect(() => {
  
  }, [submitting]);

  return (
    <div name="contact" className="w-full h-screen p-4 text-white pt-[13rem] md:pt-[5rem]">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
         <div className='d-flex justify-center text-center'>
          <p className="text-5xl xl:text-7xl font-bold inline font-signature text-shadow-lg shadow-yellow-950">Let 's work together!</p>
          <p className="py-6 text-md md:text-3xl font-extrabold text-shadow-lg shadow-yellow-950">Submit the form to get in contact with me:</p>
          </div>
          <div className="pb-2 pt-3 bg-slate-100 bg-opacity-[90%] md:pb-[0rem] rounded-2xl d-flex text-center justify-center font-extrabold">
          {submissionSuccess ? ( 
            <div className="text-yellow-950 text-lg p-3 text-shadow-lg shadow-yellow-950">
              Thank you for submitting the form. We'll be in touch soon!
            </div>
          ) : (
            <div className="flex justify-center items-center">
              <form
                action="https://getform.io/f/6ffbc22e-bc4c-4553-b731-7db867bf3d5a"
                method="POST"
                className="flex flex-col w-full md:w-1/2 p-2"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="p-2 bg-transparent border-2 rounded-md text-yellow-950 focus:outline-none border-yellow-950"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />

                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  className={`my-4 p-2 bg-transparent border-2 rounded-md text-yellow-950 focus:outline-none border-yellow-950 ${
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
                  className="p-2 bg-transparent border-2 rounded-md text-yellow-950 focus:outline-none border-yellow-950"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />

                <button
                  type="submit"
                  className="text-white font-signature  bg-yellow-950 md:mb-[0rem] opacity-[90%] px-6 py-3 my-8 mx-auto text-2xl flex items-center rounded-md hover:scale-125 duration-300"
                  disabled={submitting}
                >
                  {submitting ? 'Submitting...' : 'Let \'s Talk!'}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;