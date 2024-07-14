"use client";
import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { useRouter } from "next/navigation";

export default function ClientAreaStatic() {
  const [open, setOpen] = useState(true);
  const [signIn, setSignIn] = useState(true);
  const router = useRouter();

  const signUpChangeHnaddler = () => {
    setSignIn(false);
  };

  const signInChangeHandler = () => {
    setSignIn(true);
  };

  const cancleRredirectHome = () => {
    router.push("/");
  };

  return (
    <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
      <div className="flex gap-5 justify-center w-full">
        <div className="w-full">
          <h1 className="text-center text-xl font-medium">
            Welcome To Our World
          </h1>
          <h1 className="mt-3 font-normal text-center">Login with Social</h1>
          <div className="mb-5">
            <div className="flex justify-center py-3 gap-3">
              <button className="flex bg-black px-4 py-2 rounded-full gap-2 items-center">
                <FcGoogle size="24" />
                <span className="text-white">Google Accounts</span>
              </button>
              <button className="flex bg-black px-4 py-2 rounded-full gap-2 items-center">
                <SiFacebook size="24" color="blue" />
                <span className="text-white">Facebook</span>
              </button>
            </div>
          </div>
          <div className="flex justify-center gap-5">
            <button
              onClick={signInChangeHandler}
              className={
                signIn
                  ? "bg-black text-white px-3 py-2 rounded-lg transition-all"
                  : ""
              }
            >
              Sign In
            </button>
            <button
              className={
                !signIn
                  ? "bg-black text-white px-3 py-2 rounded-lg transition-all"
                  : ""
              }
              onClick={signUpChangeHnaddler}
            >
              Sign Up
            </button>
          </div>
          {signIn ? (
            <form action="" className="flex flex-col gap-3 mt-5 transition-all">
              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="street-address"
                    name="email"
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                  />
                </div>
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="street-address"
                    name="password"
                    type="password"
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-3 mt-2">
                <button className="rounded-full bg-black text-white px-5 py-1.5 my-2">
                  Sign In
                </button>
                <button
                  type="button"
                  onClick={cancleRredirectHome}
                  className="rounded-full bg-black text-white px-5 py-1.5 my-2"
                >
                  Cancle
                </button>
              </div>
            </form>
          ) : (
            <form action="" className="flex flex-col gap-3 mt-5 transition-all">
              <div className="flex gap-3 flex-col lg:flex-row">
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
              <div className="col-span-full">
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
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                  />
                </div>
              </div>
              <div className="flex gap-3 flex-col lg:flex-row">
                <div className="w-full">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="conpassword"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Confrom Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="conpassword"
                      name="conformPassword"
                      type="password"
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-3 mt-2">
                <button className="rounded-full bg-black text-white px-5 py-1.5 my-2">
                  Sign Up
                </button>
                <button
                  type="button"
                  onClick={cancleRredirectHome}
                  className="rounded-full bg-black text-white px-5 py-1.5 my-2"
                >
                  Cancle
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
