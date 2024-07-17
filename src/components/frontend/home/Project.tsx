import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function Project() {
  const theme = useAppSelector((state) => state.theme.value);
  return (
    <>
      <div className="h-screen flex flex-col justify-center">
        <div className="container">
          <div className="mb-5">
            <h2
              className={`${
                theme ? "text-black" : "text-white"
              } text-3xl font-bold`}
            >
              Project List
            </h2>
          </div>
          <div
            className={`${
              theme
                ? "bg-[#F6F6F6] border-[#EBEBEB]"
                : "bg-[#181818] border-[#383737]"
            } border-[.5px] border-opacity-20 rounded-xl flex`}
          >
            <div className="flex flex-col gap-5 w-1/2 py-10 pl-10 relative">
              <div>
                <Image
                  src="/assets/img/Logo.png"
                  width={50}
                  height={50}
                  alt="Project Logo"
                />
              </div>
              <div>
                <h2
                  className={`${theme ? "text-black" : "text-white"} text-3xl`}
                >
                  Subbi –– The free subscriptions manager
                </h2>
              </div>
              <div>
                <p className={`${theme ? "text-[#808080]" : "text-white"}`}>
                  Subbi is a side project that I’ve built to help me keep track
                  of how much I spend on subscriptions and also to prevent the
                  “accidental” bill after a 14-day trail ends. It helps you keep
                  track of bills like Netflix, Spotify, Xbox Game Pass, Bus
                  Card, Bank Cards, and many more.
                </p>
              </div>
              <div className="absolute bottom-10">
                <a
                  href=""
                  className={`flex items-center text-lg gap-1 ${
                    theme ? "text-[#808080]" : "text-white"
                  }`}
                >
                  Visit Website <FaArrowRight className="text-sm" />
                </a>
              </div>
            </div>
            <div className="flex justify-center w-1/2">
              <Image
                src="/assets/img/iPhone-14.png"
                width={300}
                height={100}
                className="object-cover"
                alt="Project Thumbnails"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
