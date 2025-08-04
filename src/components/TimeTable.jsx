import React, { useEffect, useState } from "react";

const TimeTable = () => {
  const [Data, setData] = useState("");

  // const handleChange = (e) =>{
  //   e.preventDefault()
  //   const val = e.target.value
  //   setData(val)
  // }

  const handleChange = (e)=> {
    console.log(e.target.value)
  }

  return (
    <div className="text-white flex py-4 px-4 items-center justify-around">
      <div className="flex items-center h-8 w-52 text-sm border border-white rounded">
        <input
          className="outline-none px-2 text-white bg-transparent h-full w-full"
          type="text"
          placeholder="Task.."
        />
      </div>
      <div className="">
        <input
          id="checkIn"
          type="date"
          onChange={handleChange}
          className=" rounded border bg-[#fff] text-black border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
        />
      </div>
    </div>
  );
};

export { TimeTable };
