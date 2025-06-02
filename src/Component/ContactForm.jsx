import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import AbstractContact from "../Images/AbstractContact.jpg"


const ContactForm = () => {
 
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    reset();            
    setIsSubmitted(true); 
  };

  return (
    <div className="text-white mt-10 pb-20">
      <div>
        <div className="flex flex-col md:flex-row gap-10">
          <form onSubmit={handleSubmit(onSubmit)} className="flex-1 space-y-6">
            
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm mb-1">First Name *</label>
                <input
                  {...register("firstName", { required: true })}
                  placeholder="Jhon"
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg outline-none text-white placeholder-white"
                />
                {errors.firstName && <p className="text-red-500 text-xs mt-1">Required</p>}
              </div>
              <div className="flex-1">
                <label className="block text-sm mb-1">Last Name *</label>
                <input
                  {...register("lastName", { required: true })}
                  placeholder="Doe"
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg outline-none text-white placeholder-white"
                />
                {errors.lastName && <p className="text-red-500 text-xs mt-1">Required</p>}
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm mb-1">Phone *</label>
                <input
                  {...register("phone", { required: true })}
                  placeholder="+1 (234) 567 890 00"
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg outline-none text-white placeholder-white"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">Required</p>}
              </div>
              <div className="flex-1">
                <label className="block text-sm mb-1">Email *</label>
                <input
                  {...register("email", { required: true })}
                  placeholder="example@mail.com"
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg outline-none text-white placeholder-white"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">Required</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea
                {...register("message")}
                rows="4"
                placeholder="Hello there!"
                className="w-full px-4 py-2 bg-gray-800 rounded-lg outline-none text-white placeholder-white"
              />
            </div>

            <button
              type="submit"
              className="bg-[#ddff00] text-black px-6 py-3 rounded-full font-semibold hover:bg-lime-400 transition"
            >
              Submit Form
            </button>

           
            {isSubmitted && (
              <p className="mt-4 text-green-500 font-semibold">Successfully submitted!</p>
            )}
          </form>

          
         <div
          className="flex-1 rounded-2xl p-8 space-y-4 text-white"
          style={{
            backgroundImage: `url(${AbstractContact})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
          }}
>
            <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
            <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="font-bold mr-2" />
            1970 Schamberger Mount, Florida 26949
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} className="font-bold mr-2" />
            +1 (234) 567 890 00
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} className="font-bold mr-2" />
            fortnet.info@mail.com
          </p>


            <hr className="my-4 border-gray-500" />

            <h4 className="font-semibold mb-2">Follow Us</h4>
            <div className="flex gap-4 text-2xl cursor-pointer">
              <a href="#" aria-label="Instagram" className="hover:text-lime-300">
                <FaInstagram  />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-lime-300">
                <FaYoutube  />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-lime-300">
                <FaLinkedin  />
              </a>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
