import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useAppSelector } from "@/redux/hooks";

export default function HomeLayout({ children }: { children: ReactNode }) {
  const theme = useAppSelector((state) => state.theme.value);
  return (
    <>
      <div className={`${theme ? "bg-white" : "bg-[#0D0D0D]"} relative`}>
        <div className="w-full h-screen bg-[url('/assets/img/background.png')] absolute top-0 bg-contain bg-no-repeat z-1"></div>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}
