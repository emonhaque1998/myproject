"use client";
import HomeLayout from "@/components/frontend/layouts/HomeLayout";
import Project from "@/components/frontend/home/Project";
import PageHeader from "@/components/frontend/utils/PageHeader";
import { useAppSelector } from "@/redux/hooks";

export default function Projects() {
  const theme = useAppSelector((state) => state.theme.value);
  return (
    <HomeLayout headFood={true} notice={true}>
      <PageHeader
        theme={theme}
        title="Projects"
        slogun="Projects and ideas I've worked on."
      />
      <Project />
    </HomeLayout>
  );
}
