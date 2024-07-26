"use client";
import HomeLayout from "@/components/frontend/layouts/HomeLayout";
import Light from "@/components/frontend/Light";
import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { IoHomeSharp } from "react-icons/io5";

export default function login() {
  const theme = useAppSelector((state) => state.theme.value);
  return (
    <HomeLayout>
      <div className="container h-screen max-md:h-[100vh] w-full z-30 relative">
        <Light classProperty="-z-10" />
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center w-1/2 max-md:w-full max-md:px-1 px-32 max-md:mt-16">
            <div className="w-full flex flex-col items-start gap-5 max-md:gap-1">
              <h2
                className={`text-2xl font-bold ${
                  theme ? "text-black" : "text-white"
                }`}
              >
                Welcome Back &#128075;
              </h2>
              <p
                className={`font-light ${
                  theme ? "text-black" : "text-white"
                } max-md:text-sm`}
              >
                Today is a new day. It's your day. You shape it. <br />
                Sign in to start managing your project.
              </p>
            </div>
            <div className="w-full mt-8 max-md:mt-2">
              <form className="w-full">
                <div className="w-full flex flex-col gap-3">
                  <div className="w-full">
                    <label
                      htmlFor="email"
                      className={`block mb-2 text-sm font-medium ${
                        theme ? "text-black" : "text-white"
                      } dark:text-white`}
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      id="email"
                      className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Example@gmail.com"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="email"
                      className={`block mb-2 text-sm font-medium ${
                        theme ? "text-black" : "text-white"
                      } dark:text-white`}
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="At last 8 Characters"
                      required
                    />
                  </div>
                  <div className="flex justify-end">
                    <a
                      href=""
                      className={`${
                        theme ? "text-black" : "text-white"
                      } max-md:text-sm`}
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <button
                    type="submit"
                    className={`text-white bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
                  >
                    Sign In
                  </button>
                </div>
              </form>
              <div className="relative flex py-5 max-md:py-2 items-center">
                <div
                  className={`flex-grow border-t ${
                    theme ? "border-gray-400" : "border-white"
                  }`}
                ></div>
                <span className="flex-shrink mx-4 text-gray-400">Or</span>
                <div
                  className={`flex-grow border-t ${
                    theme ? "border-gray-400" : "border-white"
                  }`}
                ></div>
              </div>
              <div className="flex flex-col gap-5">
                <button
                  type="submit"
                  className={`bg-sky-300/20 ${
                    theme ? "text-black" : "text-white"
                  } max-md:text-sm focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
                >
                  Sign in with Google
                </button>
                <button
                  type="submit"
                  className={`bg-sky-300/20 ${
                    theme ? "text-black" : "text-white"
                  } focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
                >
                  Sign in with Facebook
                </button>
                <p
                  className={`text-center text-sm ${
                    theme ? "text-black" : "text-white"
                  }`}
                >
                  Don't you have account? <a href="">Sign Up</a>
                </p>
              </div>
            </div>
          </div>
          <div className="max-md:hidden ring-offset-8 ring-8 ring-white rounded-[30px] ring-inset w-1/2 h-screen max-md:h-[100vh] bg-[url('https://img.freepik.com/free-photo/natures-beauty-captured-colorful-flower-close-up-generative-ai_188544-8593.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721865600&semt=sph')] bg-no-repeat bg-cover"></div>
        </div>
      </div>
      <Link
        href="/"
        className={`z-50 cursor-pointer bg-opacity-5 text-xl absolute flex justify-center items-center top-5 max-md:top-2 max-md:left-2 left-5 p-5 rounded-full w-14 h-14 ${
          theme ? "bg-black text-black" : "bg-white text-white"
        }`}
      >
        <IoHomeSharp />
      </Link>
    </HomeLayout>
  );
}
