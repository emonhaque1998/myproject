"use client";
import GetToKnow from "@/components/frontend/home/GetToKnow";
import Hero from "@/components/frontend/home/Hero";
import Project from "@/components/frontend/home/Project";
import Together from "@/components/frontend/home/Together";
import HomeLayout from "@/components/frontend/layouts/HomeLayout";
import Image from "next/image";
import { useAppSelector } from "@/redux/hooks";
import PageHeader from "@/components/frontend/utils/PageHeader";

export default function About() {
  const theme = useAppSelector((state) => state.theme.value);

  return (
    <HomeLayout headFood={true} notice={true}>
      <div className="flex flex-col gap-14">
        <PageHeader
          theme={theme}
          title="A little bit about me"
          slogun="Who I am and what I do."
        />

        <div className="container">
          <div className="flex flex-row max-md:flex-col">
            <div
              className={`w-1/2 max-md:w-full flex flex-col gap-5 ${
                theme ? "text-black" : "text-white"
              }`}
            >
              <div>
                <h4 className="font-bold text-lg">Who I am</h4>
                <p className="text-[#808080]">
                  I’m Eihab (Pronounced “Ee-hab”) a multi-disciplinary front-end
                  engineer and UI/UX designer based in Rabat, Morocco 🇲🇦.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg">What I Do</h4>
                <p className="text-[#808080]">
                  With two years of invaluable experience in my role at Harmony
                  Technology –– a tech company based here in Rabat, I have honed
                  my skills in React.js, Next.js, TailwindCSS, and TypeScript,
                  allowing me to craft seamless and interactive user
                  experiences. During my time at Harmony Technology, I had the
                  privilege of collaborating on projects for esteemed clients
                  such as the Ministry of Health, Ministry of Education, and
                  Ministry of Justice. It was an incredibly rewarding experience
                  to develop applications that directly impact the lives of
                  Moroccan citizens.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg">What I Did</h4>
                <p className="text-[#808080]">
                  Before delving into the realm of front end engineering, I
                  spent five years as a graphic designer. This background has
                  equipped me with a keen eye for aesthetics and a deep
                  understanding of user-centered design principles. It enables
                  me to seamlessly blend functionality and visual appeal in
                  every project I undertake.
                </p>
              </div>
              <div>
                <p className="text-[#808080]">
                  Feel free to reach out via e-mail, or follow me on Twitter.
                  Want to see where I’ve worked? Check out my Resume, or Connect
                  with me on LinkedIn.
                </p>
              </div>
              <div>
                <p className="text-[#808080]">Let’s build something great,</p>
              </div>
            </div>
            <div className="w-1/2 text-white max-md:hidden flex justify-end">
              <div>
                <Image
                  src="/assets/img/my.png"
                  width={450}
                  height={450}
                  alt="My Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}
