import React, { useEffect, useState } from "react";
import { FaRocket } from "react-icons/fa";

const TimeTable = () => {
  const [Data, setData] = useState("12:00");

  const handleChange = (e) => {
    console.log(e.target.value);
    setData(e.target.value);
  };

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const time = ["AM", "PM"];

  const data = [
    {
      subject: 'Math',
      startTime: '10:00 AM',
      endTime: '11:00 AM',
      date: '2025-08-05',
      day: 'Tuesday',
    },
    {
      subject: 'Science',
      startTime: '11:30 AM',
      endTime: '12:30 PM',
      date: '2025-08-06',
      day: 'Wednesday',
    },
    {
      subject: 'History',
      startTime: '01:00 PM',
      endTime: '02:00 PM',
      date: '2025-08-07',
      day: 'Thursday',
    },
  ];

  return (
    <>
      <div className="text-white flex py-4 justify-self-center flex-wrap mt-4 px-4 items-center justify-evenly gap-3">
        <div className="flex items-center h-8 w-fit text-sm rounded">
          <input
            className="outline-none  bg-white text-black px-2 border border-[#262626] rounded  h-full"
            type="text"
            placeholder="Task.."
          />
        </div>
        <div className="flex items-center h-8 w-fit text-sm rounded">
          <select
            name=""
            id=""
            className="outline-none  bg-white text-black px-2 border border-[#262626] rounded  h-full"
          >
            {days.map((items) => {
              return <option value="">{items}</option>;
            })}
          </select>
        </div>
        <div className="flex items-center w-fit h-6 text-sm rounded">
          <div className="flex items-center bg-white text-black gap-2 py-0.5 px-3 border border-[#262626] rounded-md">
            <div>Starting Time</div>
            <div>
              <input
                className="outline-none py-1  bg-transparent text-black px-2 border border-[#262626] rounded  h-full"
                type="time"
                value={Data}
                onChange={handleChange}
                placeholder="Task.."
              />
            </div>
            <div>
              <select
                name=""
                id=""
                className="outline-none py-1 bg-transparent text-black px-2 border border-[#262626] rounded  h-full"
              >
                {time.map((items) => {
                  return <option value="">{items}</option>;
                })}
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white flex py-4 justify-self-center flex-wrap px-4 items-center justify-evenly gap-3">
        <div className="flex items-center w-fit h-6 text-sm rounded">
          <div className="flex items-center bg-white text-black gap-2 py-0.5 px-3 border border-[#262626] rounded-md">
            <div>Ending Time</div>
            <div>
              <input
                className="outline-none py-1  bg-transparent text-black px-2 border border-[#262626] rounded  h-full"
                type="time"
                value={Data}
                onChange={handleChange}
                placeholder="Task.."
              />
            </div>
            <div>
              <select
                name=""
                id=""
                className="outline-none py-1 bg-transparent text-black px-2 border border-[#262626] rounded  h-full"
              >
                {time.map((items) => {
                  return <option value="">{items}</option>;
                })}
              </select>
            </div>
          </div>
        </div>
        <div className="mb-2.5">
          <input
            id="checkIn"
            type="date"
            onChange={handleChange}
            className=" rounded border bg-[#fff] text-black border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
          />
        </div>
      </div>
      <button className="flex w-[15%] justify-center justify-self-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95">
      <FaRocket className="text-xl" />
      Set Time Table
    </button>
    <div>
      <div className="p-6 bg-black rounded-xl shadow-lg overflow-x-auto">
      <table className="w-[75%] justify-self-center border-collapse text-white text-sm">
        <thead>
          <tr>
            <th className="border border-gray-600 px-2 py-2 text-center">Subject</th>
            <th className="border border-gray-600 px-2 py-2 text-center">Start Time</th>
            <th className="border border-gray-600 px-2 py-2 text-center">End Time</th>
            <th className="border border-gray-600 px-2 py-2 text-center">Date</th>
            <th className="border border-gray-600 px-2 py-2 text-center">Day</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr key={idx} className="hover:bg-gray-800 transition">
              <td className="border border-gray-600 px-2 text-center py-2">{item.subject}</td>
              <td className="border border-gray-600 px-2 text-center py-2">{item.startTime}</td>
              <td className="border border-gray-600 px-2 text-center py-2">{item.endTime}</td>
              <td className="border border-gray-600 px-2 text-center py-2">{item.date}</td>
              <td className="border border-gray-600 px-2 text-center py-2">{item.day}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </>
  );
};

export { TimeTable };
