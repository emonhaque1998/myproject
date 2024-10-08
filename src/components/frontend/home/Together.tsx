import { useAppSelector } from "@/redux/hooks";
import { IoSend } from "react-icons/io5";

export default function Together() {
  const theme = useAppSelector((state) => state.theme.value);
  return (
    <>
      <div className="container py-5">
        <div className="flex items-center">
          <div className="flex flex-col w-1/2 max-md:w-3/5 gap-3">
            <h2
              className={`text-3xl max-md:text-lg font-bold ${
                theme ? "text-[#151515]" : "text-[#F6F6F6]"
              }`}
            >
              Lets work together
            </h2>
            <p
              className={`text-lg max-md:text-sm ${
                theme ? "text-[#151515]" : "text-[#808080]"
              }`}
            >
              Want to discuss an opportunity to create something great? <br />{" "}
              I’m ready when you are.
            </p>
          </div>
          <div className="flex justify-end w-1/2 max-md:w-2/5">
            <button className="flex flex-row items-center text-lg max-md:text-sm max-md:gap-1 gap-2 bg-gradient-to-r from-[#1A1A1A] to-[#131313] text-white px-5 py-3 max-md:px-2 max-md:py-2 rounded-lg">
              <IoSend />
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
