import React from "react";

export function CaptureSection({
  handleVideoRef,
  handleCanvasRef,
  handleCapture,
  picture,
  activeStep,
}) {
  return (
    <section
      id="sec-3"
      className={`${
        activeStep !== 2 ? "hidden" : ""
      } flex flex-col justify-center items-center gap-2`}
    >
      <video ref={handleVideoRef} className="hidden" />
      <canvas
        className="w-2/3 h-auto frame border-8 border-[#e71d36] rounded-lg elevation-2"
        ref={handleCanvasRef}
        width={2}
        height={2}
        onClick={handleCapture}
      />

      {picture && (
        <div className="w-2/3 rounded-lg  bg-green-500 p-2 relative inline-block elevation-2">
          <img
            src={picture.dataUri}
            alt="previous pic"
            className="rounded-lg"
          />
          <h3 className="p-2 text-3xl text-center w-full text-[#011627]">
            {picture.title}
          </h3>
        </div>
      )}
    </section>
  );
}
