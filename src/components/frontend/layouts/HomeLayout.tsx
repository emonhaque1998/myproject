import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="bg-gradient-to-r from-rose-100 to-teal-100">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}
