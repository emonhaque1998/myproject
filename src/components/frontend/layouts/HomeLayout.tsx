import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="bg-[#0D0D0D]">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}
