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

export default function Header() {
  const theme = useAppSelector((state) => state.theme.value);
  const dispatch = useAppDispatch();

  const changeThemeModHandler = () => {
    dispatch(setTheme());
  };

  return (
    <div className="flex justify-center">
      <div className="container px-24 max-md:px-5 absolute top-5 z-10">
        <div className="bg-[#18181D]/30 flex py-5 items-center px-5 rounded-xl">
          <div className="text-white w-2/12">logo</div>
          <div className="w-7/12">
            <ul className="flex gap-5 text-white max-md:hidden">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="text-white text-xl max-md:text-lg w-3/12 flex gap-5 justify-end">
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
          </div>
        </div>
      </div>
    </div>
  );
}
