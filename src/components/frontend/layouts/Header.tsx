"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setTheme } from "@/redux/features/themeModeSlice";
import { BsMoonStarsFill } from "react-icons/bs";
import { FaUserShield } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

export default function Header() {
  const theme = useAppSelector((state) => state.theme.value);
  const dispatch = useAppDispatch();
  const [mobileNav, setMobileNav] = useState(false);

  const changeNavHandler = () => {
    setMobileNav(!mobileNav);
  };

  const changeThemeModHandler = () => {
    dispatch(setTheme());
  };

  return (
    <div className="flex justify-center max-md:relative">
      <div className="container max-md:px-5 absolute top-10 z-10">
        <div
          className={`${
            theme ? "bg-white/30" : "bg-[#18181D]/30"
          } flex py-5 items-center px-5 rounded-xl`}
        >
          <div className={`${theme ? "text-black" : "text-white"} w-2/12`}>
            logo
          </div>
          <div
            className={`max-md:transition-all max-md:animate-fadeIn w-7/12 max-md:absolute ${
              mobileNav
                ? "max-md:top-[100%] max-md:opacity-100"
                : "max-md:top-[-100%] max-md:opacity-0"
            } max-md:w-full max-md:left-0 max-md:px-6 max-md:-z-10`}
          >
            <ul
              className={`flex gap-5 max-md:flex-col ${
                theme
                  ? "max-md:text-white text-black font-normal"
                  : "max-md:text-black text-white font-normal"
              }  ${
                theme ? "max-md:bg-black/50" : "max-md:bg-white/80"
              } max-md:rounded-xl`}
            >
              <li
                className={`max-md:py-1 max-md:px-3 max-md:rounded-t-xl ${
                  theme
                    ? "hover:max-md:bg-white hover:max-md:text-black"
                    : "hover:max-md:bg-black hover:max-md:text-white"
                }`}
              >
                Home
              </li>
              <li
                className={`max-md:py-1 max-md:px-3 ${
                  theme
                    ? "hover:max-md:bg-white hover:max-md:text-black"
                    : "hover:max-md:bg-black hover:max-md:text-white"
                }`}
              >
                About
              </li>
              <li
                className={`max-md:py-1 max-md:px-3 max-md:rounded-b-xl ${
                  theme
                    ? "hover:max-md:bg-white hover:max-md:text-black"
                    : "hover:max-md:bg-black hover:max-md:text-white"
                }`}
              >
                Contact
              </li>
            </ul>
          </div>
          <div
            className={`${
              theme ? "text-black" : "text-white"
            } text-xl max-md:text-lg w-10/12 flex gap-5 max-md:gap-3 justify-end`}
          >
            <div>
              <FaLinkedin />
            </div>
            <div>
              <BsTwitterX />
            </div>
            <div className="">
              <FaGithub />
            </div>
            <div className="border-r-2"></div>
            <div>
              {!theme ? (
                <IoSunnyOutline
                  onClick={changeThemeModHandler}
                  className="cursor-pointer transition-all"
                />
              ) : (
                <BsMoonStarsFill
                  onClick={changeThemeModHandler}
                  className="cursor-pointer transition-all"
                />
              )}
            </div>
            <Link href="/login">
              <FaUserShield />
            </Link>
            <div className="hidden max-md:block">
              <FiMenu onClick={changeNavHandler} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
