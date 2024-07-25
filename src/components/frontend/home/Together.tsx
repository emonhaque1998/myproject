import { IoSend } from "react-icons/io5";

export default function Together() {
  return (
    <>
      <div className="container py-5">
        <div className="flex items-center">
          <div className="flex flex-col w-1/2 gap-3">
            <h2 className="text-3xl font-bold">Lets work together</h2>
            <p className="text-lg">
              Want to discuss an opportunity to create something great? I’m
              ready when you are.
            </p>
          </div>
          <div className="flex justify-end w-1/2">
            <button className="flex flex-row items-center text-lg gap-2 bg-black text-white px-5 py-3 rounded-lg">
              <IoSend />
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
