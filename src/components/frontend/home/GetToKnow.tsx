import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";

export default function GetToKnow() {
  const theme = useAppSelector((state) => state.theme.value);
  return (
    <>
      <div className="py-16 flex flex-col justify-center container gap-5">
        <div>
          <h1
            className={`${
              theme ? "text-black" : "text-white"
            } text-3xl font-bold`}
          >
            Get to know me
          </h1>
        </div>
        <div>
          <div className="gap-5 grid grid-cols-3 max-md:grid-cols-1">
            <div
              className={`flex flex-col items-center ${
                theme ? "bg-[#F6F6F6]" : "bg-[#151515]"
              } px-10 max-md:px-5 py-10 w-full gap-5 rounded-lg`}
            >
              <div className="flex flex-col items-center gap-2">
                <h2
                  className={`text-3xl font-bold text-center ${
                    theme ? "text-[#151515]" : "text-[#f6f6f6]"
                  } max-md:text-lg`}
                >
                  About Me
                </h2>
                <p className="text-[#808080] max-md:text-sm text-center">
                  Who I am and What I do
                </p>
              </div>
              <div>
                <Image
                  src="/assets/img/aboutme.png"
                  width={200}
                  height={200}
                  sizes="100"
                  className="w-full h-auto max-md:w-[100px]"
                  alt="About Me"
                />
              </div>
            </div>
            <div
              className={`flex flex-col items-center ${
                theme ? "bg-[#F6F6F6]" : "bg-[#151515]"
              } px-10 max-md:px-5 py-10 w-full gap-5 rounded-lg`}
            >
              <div className="flex flex-col items-center gap-2">
                <h2
                  className={`text-3xl font-bold text-center ${
                    theme ? "text-[#151515]" : "text-[#f6f6f6]"
                  } max-md:text-lg`}
                >
                  About Me
                </h2>
                <p className="text-[#808080] max-md:text-sm text-center">
                  Who I am and What I do
                </p>
              </div>
              <div>
                <Image
                  src="/assets/img/aboutme.png"
                  width={200}
                  height={200}
                  sizes="100"
                  className="w-full h-auto max-md:w-[100px]"
                  alt="About Me"
                />
              </div>
            </div>
            <div
              className={`flex flex-col items-center ${
                theme ? "bg-[#F6F6F6]" : "bg-[#151515]"
              } px-10 max-md:px-5 py-10 w-full gap-5 rounded-lg`}
            >
              <div className="flex flex-col items-center gap-2">
                <h2
                  className={`text-3xl font-bold text-center ${
                    theme ? "text-[#151515]" : "text-[#f6f6f6]"
                  } max-md:text-lg`}
                >
                  About Me
                </h2>
                <p className="text-[#808080] max-md:text-sm text-center">
                  Who I am and What I do
                </p>
              </div>
              <div>
                <Image
                  src="/assets/img/aboutme.png"
                  width={200}
                  height={200}
                  sizes="100"
                  className="w-full h-auto max-md:w-[100px]"
                  alt="About Me"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
