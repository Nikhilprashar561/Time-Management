import React, { useState } from "react";
import { TimeTable } from "./TimeTable";
import { SetTime } from "./SetTime";
import Profile from "./Profile";

const Navbar = () => {
  const [timeTable, setTimeTable] = useState(false);
  const [profile, setProfile] = useState(false);

  const SelectHandle = () => {
    if (!timeTable) {
      setTimeTable(true);
    } else {
      setTimeTable(false);
    }
  };

  return (
    <div>
      <header className="h-16">
        <nav className="flex justify-around items-center py-3 nav">
          <div className="flex">
            <h1 className="text-2xl font-medium">Time Management</h1>
          </div>
          <div>
            {profile && (
              <div className="flex items-center justify-center gap-1">
                <img className="w-9" src="\public\avatar.png" alt="" />
                <p
                  onClick={() => setProfile(false)}
                  className="cursor-pointer hover:opacity-75"
                >
                  ❌
                </p>
              </div>
            )}
            {!profile && (
              <div className="flex items-center justify-center gap-2">
                <img className="w-9" src="\public\avatar.png" alt="" />
                <p onClick={() => setProfile(true)} className="cursor-pointer">
                  Profile
                </p>
              </div>
            )}
          </div>
        </nav>
      </header>
      <div className="flex items-center justify-around my-3">
        <div className="">
          <p>
            {timeTable
              ? "Here You can Set Timer"
              : "Here You can Set your Time Table "}
          </p>
        </div>
        <div>
          <button
            className={`py-2 px-3 rounded-lg cursor-pointer ${
              timeTable ? "bg-blue-800" : "bg-slate-800"
            }`}
            onClick={() => SelectHandle()}
          >
            {timeTable ? "Set Time Table" : "Set Timer"}
          </button>
        </div>
      </div>
      {profile && <Profile />}
      {timeTable ? <SetTime /> : <TimeTable />}
    </div>
  );
};

export default Navbar;