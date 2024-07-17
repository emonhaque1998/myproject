import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useAppSelector } from "@/redux/hooks";

export default function HomeLayout({ children }: { children: ReactNode }) {
  const theme = useAppSelector((state) => state.theme.value);
  console.log(theme);
  return (
    <>
      <div className={`bg-[${theme ? "white" : "#0D0D0D"}]`}>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}
