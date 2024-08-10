export default function PageHeader({
  theme,
  title,
  slogun,
}: {
  theme: Boolean;
  title: string;
  slogun: string;
}) {
  return (
    <div className="container flex flex-col justify-end h-[30vh] max-md:h-[60vh]">
      <div className="flex flex-col items-center gap-3">
        <div
          className={`text-6xl max-md:text-6xl font-bold ${
            theme ? "text-black" : "text-white"
          }`}
        >
          <h1 className="text-center">{title}</h1>
        </div>
        <div className={`text-lg text-[#808080]`}>
          <p>{slogun}</p>
        </div>
      </div>
    </div>
  );
}
