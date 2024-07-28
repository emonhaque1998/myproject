import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useAppSelector } from "@/redux/hooks";
import Light from "../Light";
import Notice from "@/components/frontend/home/NoticeMarque";

export default function HomeLayout({
  children,
  headFood,
  notice,
}: {
  children: ReactNode;
  headFood?: Boolean;
  notice?: Boolean;
}) {
  const theme = useAppSelector((state) => state.theme.value);
  console.log(theme);
  return (
    <>
      <div className={`${theme ? "bg-white" : "bg-[#0D0D0D]"} relative`}>
        {headFood && <Light classProperty="z-0" />}
        {notice && <Notice />}
        {headFood && <Header />}

        {children}
        {headFood && <Footer />}
      </div>
    </>
  );
}
