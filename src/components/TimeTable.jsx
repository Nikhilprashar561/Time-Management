import React, { useEffect, useState } from "react";

const TimeTable = () => {
  const [Data, setData] = useState("");

  // const handleChange = (e) =>{
  //   e.preventDefault()
  //   const val = e.target.value
  //   setData(val)
  // }

  return (
    <div className="text-white flex py-4 items-center justify-center">
      <div className="bg-[#262626] flex py-2 px-2">
        <input
          type="text"
          className="bg-transparent mx-1 py-1 rounded-lg px-2 font-semibold outline-none border border-[#000]"
          placeholder="Subject"
        />
        <input
          type="text"
          className="bg-transparent py-1 rounded-lg px-2 font-semibold outline-none border border-[#000]"
          placeholder="Subject"
        />
      </div>
    </div>
  );
};

export { TimeTable };
