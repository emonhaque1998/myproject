import React from "react";

export default function LeftSideBarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="w-1/6 py-5 bg-red-300">
        <div className="flex flex-col gap-10">{children}</div>
      </div>
    </>
  );
}
