// import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRef } from "react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_6u4ej1h', 
                    'template_a7420yv', 
                    form.current, {
            publicKey: 'Lgyh6bm8fP1EHesLt',
          })
          .then(
            (result) => {
              console.log(result);
              if(result.status === 200){
                toast.success("Message send successfully")
              }
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

    return (
       <div id='contact' className="w-10/12 mx-auto mt-14 pb-10">
            <h2 className="text-4xl font-bold text-center my-16">Keep in touch</h2>
            <div className=" flex flex-col-reverse md:flex-row gap-2">

                <div className="w-full md:w-2/3 flex flex-col space-y-7">
                    <form ref={form} onSubmit={sendEmail} className="w-full flex flex-col space-y-7">
                        <input name="from_name" type="text" placeholder="Name *" className="w-full md:w-3/4 rounded-lg p-2 text-black border-b-2 border-slate-900" required />
                        <input name="from_email" type="email" placeholder="Email *" className="w-full md:w-3/4 rounded-lg p-2 text-black border-b-2 border-slate-900" required />
                        <textarea name="message" type="text" placeholder="Message *" className="w-full md:w-3/4 rounded-lg p-2 text-black border-b-2 border-slate-900" required />
                        <input type="submit" value="Send Message"  className="bg-white border-2 p-2 w-40 cursor-pointer text-slate-900 text-center text-lg font-semibold rounded-3xl hover:bg-slate-900 hover:text-white hover:border-white hover:border-2" />

                    </form>
                    <ToastContainer />
                    {/* <p className="bg-slate-900 border-2 p-3 w-40 text-white text-center text-lg font-semibold rounded-3xl hover:text-slate-900 hover:bg-white hover:border-slate-900 hover:border-2">Send Message</p> */}
                </div>

                <div className=" w-1/3 space-y-5 mb-8 md:mb-0">
                    <div className="flex items-center gap-5">
                        <p className="text-3xl"><FaPhone /></p>
                        <p ><span className="text-xl font-bold">Phone</span> <br /> 01786510474</p>
                    </div>
                    <div className="flex items-center gap-5">
                        <p className="text-3xl"><MdEmail /></p>
                        <p ><span className="text-xl font-bold">Email</span> <br /> mahbub510474@gmail.com</p>
                    </div>
                    <div className="flex items-center gap-5">
                        <p className="text-3xl"><FaLocationDot /></p>
                        <p ><span className="text-xl font-bold">Address</span> <br /> Sylhet, Bangladesh</p>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Contact;