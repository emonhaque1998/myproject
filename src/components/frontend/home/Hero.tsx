export default function Hero() {
  return (
    <>
      <div className="w-full h-screen bg-[url('/assets/img/background.png')] absolute top-0 bg-contain bg-no-repeat z-1"></div>
      <div className="h-screen max-md:h-[600px] container mx-auto lg:px-24 max-md:px-5 flex flex-col justify-center items-start gap-10 relative">
        <div className="bg-[url('/assets/img/geist.png')] w-[288px] h-[344px] opacity-20 bg-no-repeat absolute bg-contain right-52 max-md:hidden"></div>
        <div>
          <h1 className="text-white text-8xl max-md:text-5xl font-bold">
            <span className="text-[#808080]">I'm</span> Eman H.
          </h1>
        </div>
        <div>
          <p className="text-white w-2/3 max-md:w-full text-2xl max-md:text-sm">
            A front-end engineer and UI/UX designer helping startups turn their
            visions into a digital reality. I specialize in designing and
            building modern mobile and web-based apps.
          </p>
        </div>
        <div className="flex gap-4 flex-row max-md:flex-col w-full">
          <button className="bg-gradient-to-r from-[#1A1A1A] to-[#131313] px-4 py-3 rounded-md text-white max-md:block">
            See my resume
          </button>
          <button className="bg-[#181818] px-4 py-3 rounded-md text-[#808080]">
            Get in touch
          </button>
        </div>
      </div>
    </>
  );
}
