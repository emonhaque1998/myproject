export default function ContactUs() {
  return (
    <>
      <div className="flex justify-center py-10">
        <div>
          <h1 className="text-center">Contact Us</h1>
          <p className="text-center">
            Any question or remarks? Just write us a message!
          </p>
        </div>
      </div>
      <div className="bg-white bg-opacity-70">
        <div className="flex">
          <div className="w-2/5 bg-black shadow-sm rounded-r-xl">
            <div className="container py-10 bg-[url('/assets/img/contact-bg.png')] bg-no-repeat bg-right-bottom">
              <div>
                <h3 className="text-white font-medium text-3xl">
                  Contact Information
                </h3>
                <p className="text-white">
                  Say something to start a live chat!
                </p>
              </div>
              <div className="mt-10">
                <ul className="flex flex-col gap-5">
                  <li>
                    <a href="" className="text-white">
                      +880 18641 76956
                    </a>
                  </li>
                  <li>
                    <a href="" className="text-white">
                      emonhaque.net@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="" className="text-white">
                      Kushtiaa, Kumarkhali, Kushtia
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="flex gap-3 mt-32">
                  <li className=" bg-gray-900 h-10 w-10 rounded-full flex justify-center items-center hover:bg-white text-white hover:text-black cursor-pointer">
                    <span className="">A</span>
                  </li>
                  <li className=" bg-gray-900 h-10 w-10 rounded-full flex justify-center items-center hover:bg-white text-white hover:text-black cursor-pointer">
                    <span className="">A</span>
                  </li>
                  <li className=" bg-gray-900 h-10 w-10 rounded-full flex justify-center items-center hover:bg-white text-white hover:text-black cursor-pointer">
                    <span className="">A</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="py-10 w-3/5 container">
            <form action="" className="">
              <div className="flex gap-10 flex-col lg:flex-row">
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
                    First Name
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
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
