"use client";
import GetToKnow from "@/components/frontend/home/GetToKnow";
import Hero from "@/components/frontend/home/Hero";
import Project from "@/components/frontend/home/Project";
import Together from "@/components/frontend/home/Together";
import HomeLayout from "@/components/frontend/layouts/HomeLayout";

export default function Home() {
  return (
    <>
      <HomeLayout headFood={true} notice={true}>
        <Hero />
        <Project />
        <GetToKnow />
        <Together />
      </HomeLayout>
    </>
  );
}
