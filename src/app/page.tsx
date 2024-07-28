"use client";

import GetToKnow from "@/components/frontend/home/GetToKnow";
import Hero from "@/components/frontend/home/Hero";
import Project from "@/components/frontend/home/Project";
import Together from "@/components/frontend/home/Together";
import HomeLayout from "@/components/frontend/layouts/HomeLayout";
import { useAppSelector } from "@/redux/hooks";
import { GoogleTagManager } from "@next/third-parties/google";

export default function Home() {
  const environment = useAppSelector((state) => state.environment.value);

  return (
    <>
      <HomeLayout headFood={true} notice={true}>
        {environment && <GoogleTagManager gtmId="G-3BRTFCYKXQ" />}
        <Hero />
        <Project />
        <GetToKnow />
        <Together />
      </HomeLayout>
    </>
  );
}
