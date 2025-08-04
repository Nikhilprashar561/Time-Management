import React from "react";

const Footer = () => {
  return (
    <>
      <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        
            * {
                font-family: 'Poppins', sans-serif;
            }
        `}</style>

      <footer className="flex flex-col items-center justify-around w-full py-6 text-sm bg-neutral-900 text-white">
        <p className="text-center">
          Copyright © 2025 <a href="https://prebuiltui.com">Time Management</a>. All
          rights reservered.
        </p>
      </footer>
    </>
  );
};

export default Footer;
