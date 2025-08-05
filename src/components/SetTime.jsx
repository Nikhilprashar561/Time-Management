import React, { useState } from "react";
import { FaRocket } from "react-icons/fa";

const SetTime = () => {

     const [Data, setData] = useState("12:00");
   
     const handleChange = (e) => {
       console.log(e.target.value);
       setData(e.target.value);
     };
   
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
           <div className="flex items-center w-fit h-6 text-sm rounded">
             <div className="flex items-center bg-white text-black gap-2 py-0.5 px-3 border border-[#262626] rounded-md">
               <div>Time</div>
               <div>
                 <input
                   className="outline-none py-1  bg-transparent text-black px-2 border border-[#262626] rounded  h-full"
                   type="time"
                   value={Data}
                   onChange={handleChange}
                   placeholder="Task.."
                 />
               </div>
             </div>
           </div>
         </div>
         <button className="flex w-fit justify-center justify-self-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95">
         <FaRocket className="text-xl" />
         Start Now
       </button>
       </>
     );
};

export { SetTime };
