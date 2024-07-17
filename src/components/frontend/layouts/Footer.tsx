import { useAppSelector } from "@/redux/hooks";
import { FaGithub } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const theme = useAppSelector((state) => state.theme.value);
  return (
    <>
      <div
        className={`${
          theme ? "bg-white/30" : "bg-[#18181D]/30"
        }bg-white/30 relative z-10`}
      >
        <div className="bg-[url('/assets/img/Shape.png')] bg-contain bg-no-repeat bg-top">
          <div className="flex flex-col justify-center">
            <div className="flex justify-center mt-8 lg:mt-24">
              <div
                className={`${
                  theme
                    ? "bg-[#F6F6F6] border-[#EBEBEB]"
                    : "bg-[#181818] border-[#383737]"
                } w-2/3 py-10 px-2 lg:px-5 rounded-lg shadow-md`}
              >
                <div className="flex flex-col justify-center items-center gap-3 lg:flex-row lg:gap-10">
                  <div className="w-full lg:w-1/3">
                    <h2
                      className={`text-sm font-medium lg:text-2xl text-center ${
                        theme ? "text-black" : "text-white"
                      }`}
                    >
                      Subscribe Newsletters
                    </h2>
                  </div>
                  <div
                    className={`relative flex h-10 w-full min-w-[200px] max-w-[24rem] ${
                      theme ? "text-black" : "text-white"
                    }`}
                  >
                    <button
                      className="!absolute right-1 top-1 z-10 select-none rounded bg-pink-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
                      type="button"
                      data-ripple-light="true"
                    >
                      Invite
                    </button>
                    <input
                      type="email"
                      className="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      placeholder=" "
                      required
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Email Address
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-20">
              <div className="container flex flex-col lg:flex-row lg:justify-start justify-center items-center gap-5">
                <ul
                  className={`flex gap-3 justify-center lg:justify-start text-sm lg:text-md lg:gap-8 w-full lg:w-1/2 ${
                    theme ? "text-[#808080]" : "text-white"
                  }`}
                >
                  <li>
                    <a href="">About Us</a>
                  </li>
                  <li>
                    <a href="">Portfolio</a>
                  </li>
                  <li>
                    <a href="">Service</a>
                  </li>
                  <li>
                    <a href="">Contact Us</a>
                  </li>
                </ul>
                <div className="w-full lg:w-1/2">
                  <ul className="flex gap-3 justify-center lg:justify-end">
                    <li className="transition-all bg-gray-900 h-10 w-10 rounded-full flex justify-center items-center hover:bg-gray-300 text-white hover:text-black cursor-pointer">
                      <span className="">
                        <FaGithub />
                      </span>
                    </li>
                    <li className="transition-all bg-gray-900 h-10 w-10 rounded-full flex justify-center items-center hover:bg-gray-300 text-white hover:text-black cursor-pointer">
                      <span className="">
                        <FaSkype />
                      </span>
                    </li>
                    <li className="transition-all bg-gray-900 h-10 w-10 rounded-full flex justify-center items-center hover:bg-gray-300 text-white hover:text-black cursor-pointer">
                      <span className="">
                        <FaLinkedin />
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="py-10 container">
                <hr className="" />
              </div>
              <div
                className={`container flex flex-col lg:flex-row pb-10 ${
                  theme ? "text-[#808080]" : "text-white"
                }`}
              >
                <div className="w-full lg:w-1/3 text-center lg:text-left">
                  <h2 className="text-sm lg:text-md">© 2019 TorahWeb. All</h2>
                </div>
                <div className="w-full lg:w-1/3 flex justify-center max-md:hidden">
                  <h3>Logo</h3>
                </div>
                <div className="w-full lg:w-1/3">
                  <ul className="flex justify-center lg:justify-end gap-5">
                    <li>
                      <a className="text-sm lg:text-md" href="">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="" className="text-sm lg:text-md">
                        Trams & Condition
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[400px] bg-[url('/assets/img/footer-background.png')] absolute bottom-0 bg-contain bg-no-repeat z-[-1]"></div>
      </div>
    </>
  );
}
