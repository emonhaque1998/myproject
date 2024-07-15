import { FaGithub } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function ContactUs() {
  return (
    <div className="">
      <div className="flex justify-center py-10">
        <div className="flex flex-col gap-5">
          <h1 className="text-center font-bold text-4xl">Contact Us</h1>
          <p className="text-center">
            Any question or remarks? Just write us a message!
          </p>
        </div>
      </div>
      <div className="bg-white bg-opacity-70 shadow-lg">
        <div className="flex flex-row max-md:flex-col">
          <div className="w-2/5 bg-black shadow-sm lg:rounded-r-xl max-md:rounded-b-xl max-md:w-full">
            <div className="container py-10 bg-[url('/assets/img/contact-bg.png')] bg-no-repeat bg-right-bottom">
              <div>
                <h3 className="text-white font-medium text-3xl">
                  Contact Information
                </h3>
                <p className="text-white">
                  Say something to start a live chat!
                </p>
              </div>
              <div className="mt-24 max-md:mt-12">
                <ul className="flex flex-col gap-8">
                  <li className="text-white flex gap-2 items-center">
                    <IoCall />
                    <a href="" className="">
                      +880 18641 76956
                    </a>
                  </li>
                  <li className="text-white flex gap-2 items-center">
                    <MdEmail />
                    <a href="" className="">
                      emonhaque.net@gmail.com
                    </a>
                  </li>
                  <li className="text-white flex gap-2 items-center">
                    <FaLocationDot />
                    <a href="" className="">
                      Kushtiaa, Kumarkhali, Kushtia
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="flex gap-3 mt-32 max-md:mt-16">
                  <li className=" bg-gray-900 h-10 w-10 rounded-full flex justify-center items-center hover:bg-white text-white hover:text-black cursor-pointer">
                    <span className="">
                      <FaGithub />
                    </span>
                  </li>
                  <li className=" bg-gray-900 h-10 w-10 rounded-full flex justify-center items-center hover:bg-white text-white hover:text-black cursor-pointer">
                    <span className="">
                      <FaSkype />
                    </span>
                  </li>
                  <li className=" bg-gray-900 h-10 w-10 rounded-full flex justify-center items-center hover:bg-white text-white hover:text-black cursor-pointer">
                    <span className="">
                      <FaLinkedin />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="py-10 w-3/5 container max-md:w-full">
            <form action="" className="flex flex-col gap-6 max-md:gap-2">
              <div className="flex gap-10 max-md:gap-2 flex-col lg:flex-row">
                <div className="w-full">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    First Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Last Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-10 max-md:gap-2 flex-col lg:flex-row">
                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Phone Number
                  </label>
                  <div className="mt-2">
                    <input
                      id="phone"
                      name="phone"
                      type="text"
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-medium max-md:text-sm">
                  Select Subject?
                </h3>
                <div className="flex gap-8 flex-row max-md:gap-2">
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      name="subject"
                      id="subject"
                      className="cursor-pointer"
                    />
                    <label
                      htmlFor="subject"
                      className="cursor-pointer max-md:text-sm"
                    >
                      Genarel Inquary
                    </label>
                  </div>
                  <div className="flex gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="subject"
                      id="support"
                      className="cursor-pointer"
                    />
                    <label
                      htmlFor="support"
                      className="cursor-pointer max-md:text-sm"
                    >
                      Support
                    </label>
                  </div>
                  <div className="flex gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="subject"
                      id="support"
                      className="cursor-pointer"
                    />
                    <label
                      htmlFor="support"
                      className="cursor-pointer max-md:text-sm"
                    >
                      Support
                    </label>
                  </div>
                  <div className="flex gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="subject"
                      id="support"
                      className="cursor-pointer"
                    />
                    <label
                      htmlFor="support"
                      className="cursor-pointer max-md:text-sm"
                    >
                      Support
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="">Message</label>
                  <textarea
                    name=""
                    id=""
                    className="rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-black text-white px-3 py-2 rounded-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
