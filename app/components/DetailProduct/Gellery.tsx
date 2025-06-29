import React, { useState } from "react";

type Gellery = {
  gallery: string[];
};

export const Gellery: React.FC<Gellery> = ({ gallery }) => {
  const [isImage, setIsImage] = useState<string>("");

  console.log({ gallery });

  return (
    <div className=" w-full lg:w-[70%] border border-gray-300 flex h-full lg:flex-row flex-col-reverse gap-3 p-1 lg:p-3">
      <div className=" w-full shadow lg:w-[8rem] p-2 h-full  flex flex-row gap-3 lg:flex-col ">
        {gallery
          ? gallery.map((items, i: number) => {
              return (
                <div
                  key={i}
                  className={`w-20 shadow cursor-pointer ${
                    isImage === items ? "border-2 border-lime-500" : ""
                  }`}
                  onClick={() => setIsImage(items)}>
                  <img src={items} alt={`Gallery image ${i + 1}`} />
                </div>
              );
            })
          : ""}
      </div>
      <div className=" w-full flex justify-center items-center h-full">
        <img src={isImage || gallery[0] || ""} className=" w-96" alt="" />
      </div>
    </div>
  );
};
