import React from "react";

const Profile = () => {
  return (
    <div className="fixed top bottom-0 left-0 right-0 p-4 bg-neutral-400 bg-opacity-60 flex items-center justify-center">
      <div className="bg-[#262626] flex flex-col gap-1 rounded-lg w-1/2">
        <div className="flex items-center pt-2 justify-around">
          <h1>Nikhil Prashar</h1>
          <p>Your Recent Activity 👇</p>
        </div>
        <div>Time Table Data</div>
        <div>Set Timer Data</div>
      </div>
    </div>
  );
};

export default Profile;
