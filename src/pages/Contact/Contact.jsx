// import React from 'react';
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
    return (
        <div className="w-10/12 mx-auto mt-14 pb-10">
            <h2 className="text-4xl font-bold text-center my-10">Keep in touch</h2>
            <div className=" flex flex-col md:flex-row items-center gap-2">

                <div className="w-2/3 flex flex-col space-y-7">
                    <input type="text" placeholder="Name *" className="w-3/4 p-2 border-b-2 border-slate-900" required />
                    <input type="email" placeholder="Email *" className="w-3/4 p-2 border-b-2 border-slate-900" required />
                    <textarea type="text" placeholder="Message *" className="w-3/4 p-2 border-b-2 border-slate-900" required />
                    <p className="bg-slate-900 border-2 p-3 w-40 text-white text-center text-lg font-semibold rounded-3xl hover:text-slate-900 hover:bg-white hover:border-slate-900 hover:border-2">Send Message</p>
                </div>

                <div className=" w-1/3 space-y-5">
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