import React, { useState } from "react";
import Background from "./components/Background";
import Foreground from "./components/Foreground";
import Navbar from "./components/Navbar";

const App = () => {
  const [addData, setaddData] = useState([]);
  
  const handledata = (data, date) => {
    const newData = [...addData, { name: data, dueDate: date }];
    setaddData(newData);
  };

  const handleremove = (itemdata) => {
    const remove = addData.filter((item) => item.name !== itemdata.name);
    setaddData(remove);
  };

  return (
    <div className="relative w-full h-screen bg-zinc-800">
      <Navbar handledata={handledata} />
      <Background />
      <Foreground handleremove={handleremove} addData={addData} />
    </div>
  );
};

export default App;
