"use client";
import Hero from "@/components/frontend/home/Hero";
import Project from "@/components/frontend/home/Project";
import HomeLayout from "@/components/frontend/layouts/HomeLayout";

export default function Home() {
  return (
    <>
      <HomeLayout>
        <Hero />
        <Project />
      </HomeLayout>
    </>
  );
}
