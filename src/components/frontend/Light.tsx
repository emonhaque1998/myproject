export default function Light({ classProperty }: { classProperty: String }) {
  return (
    <div
      className={`w-full h-screen bg-[url('/assets/img/background.png')] absolute top-0 left-0 bg-contain bg-no-repeat ${classProperty}`}
    ></div>
  );
}
