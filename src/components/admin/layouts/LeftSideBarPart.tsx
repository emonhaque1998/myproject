import React from "react";

export default function LeftSideBarPart({
  children,
  view,
}: {
  children: React.ReactNode;
  view: string;
}) {
  return (
    <>
      <div className="container">
        <div className={`flex ${view} gap-2`}>{children}</div>
      </div>
    </>
  );
}
