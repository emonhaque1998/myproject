import { useAppSelector } from "@/redux/hooks";

export default function Hero() {
  const theme = useAppSelector((state) => state.theme.value);
  return (
    <>
      <div className="w-full h-screen bg-[url('/assets/img/background.png')] absolute top-0 bg-contain bg-no-repeat z-1"></div>
      <div className="h-screen max-md:h-[600px] container mx-auto max-md:px-5 flex flex-col justify-center items-start gap-10 relative">
        <div
          className={`${
            theme
              ? "bg-[url('/assets/img/geist-light.png')] opacity-20"
              : "bg-[url('/assets/img/geist.png')] opacity-25"
          } w-[288px] h-[344px] bg-no-repeat absolute bg-contain right-52 max-md:hidden`}
        ></div>
        <div>
          <h1
            className={`text-8xl max-md:text-5xl font-bold ${
              theme ? "text-[#181818]" : "text-white"
            }`}
          >
            <span className="text-[#808080]">I&apos;m</span> Eman H.
          </h1>
        </div>
        <div>
          <p
            className={`w-2/3 max-md:w-full text-2xl max-md:text-sm ${
              theme ? "text-[#808080]" : "text-white"
            }`}
          >
            A front-end engineer and UI/UX designer helping startups turn their
            visions into a digital reality. I specialize in designing and
            building modern mobile and web-based apps.
          </p>
        </div>
        <div className="flex gap-4 flex-row max-md:flex-col w-full">
          <button className="bg-gradient-to-r from-[#1A1A1A] to-[#131313] px-4 py-3 rounded-md text-white max-md:block">
            See my resume
          </button>
          <button
            className={`${
              theme ? "bg-[#F3F3F3] text-black" : "bg-[#181818] text-[#808080]"
            } px-4 py-3 rounded-md`}
          >
            Get in touch
          </button>
        </div>
      </div>
    </>
  );
}
