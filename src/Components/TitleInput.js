import React from "react";

export function TitleInput({ title, setTitle, activeStep }) {
  return (
    <section
      id="sec-1"
      className={`w-full  flex flex-col justify-center items-center  gap-2  overflow-hidden ${
        activeStep !== 0 ? "hidden" : ""
      }`}
    >
      <h1 className="font-semibold font-[fredoka] text-lg">
        Give the moment a name
      </h1>

      <input
        className="w-1/2 h-14 text-xl  p-2 rounded-full pl-3 border-2 border-[#f694c1]  hover: focus:border-[#042d61] focus:outline-none"
        type="text"
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
        placeholder="Write a name for this moment..."
      />
    </section>
  );
}
