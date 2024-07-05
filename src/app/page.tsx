"use client"

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-r from-rose-100 to-teal-100 h-screen">
      <div className="bg-white bg-opacity-60 drop-shadow">
        <div className="container flex justify-between py-5 items-center">
          <div><a href="">Logo</a></div>
          <div>
            <ul className="flex gap-5">
              <li><a href="" className="font-nav font-bold">Home</a></li>
              <li><a href="" className="font-nav font-bold">About</a></li>
              <li><a href="" className="font-nav font-bold">Portfolio</a></li>
              <li><a href="" className="font-nav font-bold">Service</a></li>
              <li><a href="" className="font-nav font-bold">News</a></li>
              <li><a href="" className="font-nav font-bold">Contact</a></li>
            </ul>
          </div>
          <div>
            <button className="font-nav bg-black px-5 py-2 rounded-lg text-white hover:drop-shadow font-bold">Contact Me</button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
