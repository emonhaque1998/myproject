"use client";
import Image from "next/image";
import LeftSideBarLayout from "./LeftSideBarLayout";
import LeftSideBarPart from "./LeftSideBarPart";
import { useState } from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { IoIosArrowForward } from "react-icons/io";

const sideLink = [
  { name: "Overview", href: "/dashboard/overview", dropDown: false },
  {
    name: "Project",
    href: "",
    dropDown: true,
    DropDownData: [
      { name: "All Project", href: "/dashboard/projects" },
      { name: "Add Project", href: "/dashboard/add-project" },
    ],
  },
];

export default function LeftSideBar() {
  const [position, setPosition] = useState("bottom");
  return (
    <>
      <LeftSideBarLayout>
        <LeftSideBarPart view="">
          <div>
            <Image
              src="/assets/img/ByeWind.png"
              height={28}
              width={28}
              alt="User Logo"
            />
          </div>
          <h2 className="text-lg">Eman H.</h2>
        </LeftSideBarPart>

        <LeftSideBarPart view="flex-col">
          <div className="">
            <h2 className="text-[#1C1C1C]/40">Dashboard</h2>
          </div>
          <ul className="flex flex-col gap-2">
            {sideLink.map((link) =>
              link.dropDown ? (
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger asChild>
                    <span className="cursor-pointer flex items-center gap-2">
                      <IoIosArrowForward className="text-[#1C1C1C]/40" />
                      {link.name}
                    </span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-52">
                    <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup
                      value={position}
                      onValueChange={setPosition}
                    >
                      {link.DropDownData?.map((data) => {
                        return (
                          <Link key={data.name} href={data.href}>
                            <DropdownMenuRadioItem value="top">
                              {data.name}
                            </DropdownMenuRadioItem>
                          </Link>
                        );
                      })}
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link href={link.href} key={link.name}>
                  {link.name}
                </Link>
              )
            )}
          </ul>
        </LeftSideBarPart>
      </LeftSideBarLayout>
    </>
  );
}
