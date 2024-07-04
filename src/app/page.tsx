"use client"

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-500 to-transparent">
        <div className="container flex justify-between py-5">
          <div>Logo</div>
          <div>
            <ul className="flex gap-3">
              <li><a href="">Home</a></li>
              <li><a href="">About</a></li>
            </ul>
          </div>
          <div>Button</div>
        </div>
      </div>
    </>
  );
}
