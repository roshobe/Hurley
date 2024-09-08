import React from "react";
import fixer from "../../fixer.png";

function StrengthComponent() {
  return (
    <div className="flex flex-row p-9 rounded-sm bg-cover bg-center h-screen w-full bg-[#FFE6CD] items-center">
      <div className="flex flex-col space-y-8 p-16">
        <span className="text-6xl   text-[#FF9F29] rounded-lg font-space">
          Hello I'm
        </span>
        <span className="text-6xl   text-[#FF9F29] rounded-lg font-space">
          Michael Hurley
        </span>
        <div className="flex flex-row space-x-8  ">
          <img
            src={fixer}
            alt="Description of Image"
            className="  h-1/2 w-1/2 object-cover rounded-2xl   "
          />
          <img
            src={fixer}
            alt="Description of Image"
            className=" h-1/2 w-1/2 object-cover space-y-14  rounded-2xl mt-14"
          />
        </div>
      </div>
      <div className="flex flex-col space-y-8 p-16">
        <span className="text-xl  text-black font-roboto">
          Creativ Connect was created five years ago with the simple intention
          of bringing freelancers together. When designers, storytellers,
          creators, and dreamers fill a room, ideas abound and the future gets
          more exciting.
        </span>
        <span className="text-xl  text-black font-roboto">
          This year, we're filling cyberspace! Our first digital meet-up allows
          creatives from anywhere in the world to join in the conversation. Make
          sure you're part of it.
        </span>
        24
      </div>
    </div>
  );
}

export default StrengthComponent;
