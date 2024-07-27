import { useAppSelector } from "@/redux/hooks";
import Marquee from "react-fast-marquee";
export default function Notice() {
  const theme = useAppSelector((state) => state.theme.value);
  return (
    <>
      <div className="flex justify-center">
        <div className="w-1/2 py-1 rounded-3xl bg-white/30 z-50">
          <Marquee className={`${theme ? "text-black" : "text-white"}`}>
            <div className="flex gap-20">
              <div>Site under construction! 🧑‍💻</div>
              <div>Comming Soon &#128512;</div>
            </div>
          </Marquee>
        </div>
      </div>
    </>
  );
}
