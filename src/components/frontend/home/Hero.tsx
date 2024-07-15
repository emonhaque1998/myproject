export default function Hero() {
  return (
    <>
      <div className="flex items-center h-screen bg-[url('/assets/img/hero-background.png')] bg-cover bg-no-repeat">
        <div className="flex justify-center w-full">
          <div
            className="w-1/3 bg-[#1B3334] bg-opacity-30 py-2 rounded-full outline outline-offset-2 outline-5 outline-[#196264]"
            style={{ border: "1px rgba(255, 255, 255, 0.2) solid" }}
          >
            <div className="w-full flex justify-center items-center gap-4">
              <button className="bg-green-700 px-2 py-1 rounded-full text-white text-sm">
                New Futures
              </button>
              <span className="text-white">Check Out our dashboard?</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
