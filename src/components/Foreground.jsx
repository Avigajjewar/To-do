import React, { useRef, useState } from "react";
import Card from "./Card";

const Foreground = ({ handleremove, addData }) => {
  const ref = useRef(null);

  // const data = [
  //   {
  //     desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quia.",
  //     Filesize: "2.1 mb",
  //     close: true,
  //     tag: { isOpen: true, tagTitle: "Play now..", tagColor: "green" },
  //   },
  //   {
  //     desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  //     Filesize: "1.9mb",
  //     close: false,
  //     tag: { isOpen: true, tagTitle: "Download now..", tagColor: "green" },
  //   },
  //   {
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda rem debitis quidem.",
  //     Filesize: ".6 mb",
  //     close: false,
  //     tag: { isOpen: true, tagTitle: "Download now..", tagColor: "green" },
  //   },
  //   {
  //     desc: "Lorem ipsum dolor sit amet.",
  //     Filesize: "1.0 mb",
  //     close: true,
  //     tag: { isOpen: false, tagTitle: "Download now..", tagColor: "green" },
  //   },
  //   {
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio.",
  //     Filesize: "1.0 mb",
  //     close: true,
  //     tag: { isOpen: true, tagTitle: "Play now..", tagColor: "green" },
  //   },
  // ];

  
  return (
    <div
      ref={ref}
      className="w-full h-[87%]  z-[3] fixed top-38 p-5 left-0 flex gap-10 flex-wrap "
    >
      {addData.map((item, index) => (
        <Card
          handleremove={handleremove}
          index={index}
          addData={item}
          Referance={ref}
        />
      ))}
    </div>
  );
};

export default Foreground;
