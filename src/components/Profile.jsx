import React from "react";
import TimeTableSummary from "./TotalTime";
import TaskTable from "./Tracker";

const Profile = () => {
  return (
    <div className="fixed top bottom-0 left-0 right-0 p-4 bg-[#000] bg-opacity-60 flex items-center justify-center">
      <div className="bg-[#262626] flex flex-col gap-1 px-6 py-3 rounded-lg w-1/2">
        <div className="flex items-center pt-2 justify-around">
          <h1 className="font-medium">Nikhil Prashar</h1>
          <p className="font-medium">Your Recent Activity 👇</p>
        </div>
        <div className="py-">
          <TimeTableSummary />
        </div>
        <div>
          <h1 className="font-medium mb-1">Your Recent Task and work history</h1>
          <TaskTable />
        </div>
      </div>
    </div>
  );
};

export default Profile;