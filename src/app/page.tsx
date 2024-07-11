"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [showHeader, setHeader] = useState(false);

  const menuShowHandeler = () => {
    setHeader(!showHeader);
  };

  const getData = async () => {
    try {
      const res = await fetch("/api/hello", {
        method: "GET",
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="bg-gradient-to-r from-rose-100 to-teal-100 h-screen">
        <div className="bg-white bg-opacity-60 drop-shadow max-md:relative">
          <div className="container flex justify-between py-5 items-center">
            <div>
              <a href="">Logo</a>
            </div>
            <div
              style={{ top: showHeader ? "100%" : "-300px" }}
              className={`max-lg:absolute max-lg:${
                showHeader ? "opacity-1" : "opacity-1"
              } max-lg:transition-all max-lg:bg-white max-lg:w-full max-lg:left-0 `}
            >
              <ul className="lg:flex lg:gap-5">
                <li className="hover:bg-black hover:text-white max-lg:py-1 max-lg:px-5 hover:cursor-pointer">
                  <a href="" className="font-nav font-bold">
                    Home
                  </a>
                </li>
                <li className="hover:bg-black hover:text-white max-lg:py-1 max-lg:px-5 hover:cursor-pointer">
                  <a href="" className="font-nav font-bold">
                    About
                  </a>
                </li>
                <li className="hover:bg-black hover:text-white max-lg:py-1 max-lg:px-5 hover:cursor-pointer">
                  <a href="" className="font-nav font-bold">
                    Portfolio
                  </a>
                </li>
                <li className="hover:bg-black hover:text-white max-lg:py-1 max-lg:px-5 hover:cursor-pointer">
                  <a href="" className="font-nav font-bold">
                    Service
                  </a>
                </li>
                <li className="hover:bg-black hover:text-white max-lg:py-1 max-lg:px-5 hover:cursor-pointer">
                  <a href="" className="font-nav font-bold">
                    News
                  </a>
                </li>
                <li className="hover:bg-black hover:text-white max-lg:py-2 max-lg:px-5 hover:cursor-pointer">
                  <a href="" className="font-nav font-bold">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:block hidden">
              <button className="font-nav bg-black px-5 py-2 rounded-lg text-white hover:drop-shadow font-bold">
                Contact Me
              </button>
            </div>
            <div className="lg:hidden block">
              {!showHeader ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                  onClick={menuShowHandeler}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                  onClick={menuShowHandeler}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
