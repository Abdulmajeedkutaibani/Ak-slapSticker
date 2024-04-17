import React from "react";

export function StickerSelection({
  stickers,
  sticker,
  setSticker,
  activeStep,
}) {
  return (
    <section
      id="sec-2"
      className={`flex justify-center items-center gap-2 ${
        activeStep !== 1 ? "hidden" : ""
      }`}
    >
      {stickers.map((stickerItem, index) => (
        <button
          key={index}
          className={`bg-[#ffffff] p-2 border-4 ${
            sticker === stickerItem ? "border-[#f694c1]" : "border-[#d3f8e2]"
          } rounded-3xl h-36 w-36 p-4 flex justify-center items-center hover:bg-[#a9def9] elevation-2`}
          onClick={() => setSticker(stickerItem)}
        >
          <img
            src={stickerItem.url}
            className="w-full"
            alt={`sticker ${index + 1}`}
          />
        </button>
      ))}
    </section>
  );
}
