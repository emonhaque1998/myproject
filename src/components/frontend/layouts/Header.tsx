"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [showHeader, setHeader] = useState(false);

  const menuShowHandeler = () => {
    setHeader(!showHeader);
  };

  return (
    <>
      <div className="container px-24">
        <div className="bg-[#18181D]/30">
          <div>logo</div>
          <div>
            <ul>
              <li>Home</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
