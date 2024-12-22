"use client";

import { useState } from "react";
export default function UserInfo() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div>
        <div
          onClick={handleDropdown}
          className="flex gap-2 hover:cursor-pointer items-center "
        >
          <div className="bg-gray-800 text-white h-10 w-10 flex items-center justify-center rounded-full">
            NR
          </div>
          <div className="leading-3">
            <p className="">Neha Rai</p>
            <p className="pt-1.5">neha@gmail.com</p>
          </div>
        </div>

        {isDropdownOpen && (
          <div className="relative">
            <div
              className="absolute bg-white hover:cursor-pointer text-sm hover:bg-gray-100 border-gray-100 rounded-lg w-44 border-2 text-gray-900 font-semibold px-4 py-2 mt-3"
              style={{ right: 0 }}
            >
              Log Out
            </div>
          </div>
        )}
      </div>
    </>
  );
}
