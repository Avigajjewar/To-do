import React, { useState } from "react";

const Navbar = ({ handledata }) => {
  const [data, setdata] = useState("");
  const [date, setdate] = useState("");
 
 
  const onClickhandler = () => {
  if (data!=="") {
       
      handledata(data, date);
      setdata("");
      setdate("");
    };
  }
  return (
    <>
      <div className="   h-2% w-full   p-4 flex items-center justify-center gap-7 z-[5] bg-zinc-500">
        <h1 className="text-[30px] -mb-[20px]  text-black-500">ADD TASK </h1>
      </div>
      <div className="p-4 flex items-center justify-center gap-7 z-[5] bg-zinc-500">
        <input
          value={data}
          onChange={(e) => setdata(e.target.value)}
          placeholder="Enter Task"
          className="p-4 bg-zinc-700 text-cyan-400 rounded-md cursor-pointer"
          type="text"
        />
        <input
          onChange={(e) => setdate(e.target.value)}
          value={date}
          className="p-4 bg-zinc-700 text-cyan-400 rounded-md cursor-pointer"
          type="date"
        />
        <button
          onClick={onClickhandler}
          
          className="p-4 bg-zinc-900 border-2 text-cyan-400 rounded-md cursor-pointer"
        >
          Add Task
        </button>
      </div>
    </>
  );
};

export default Navbar;
