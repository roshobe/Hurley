import React from "react";
import fixer from "../../fixer.png";

function KeynoteSpeakers() {
  return (
    <div className="flex flex-col p-9 rounded-sm bg-cover bg-center h-screen w-full bg-black items-center justify-center">
      <span className="text-6xl   text-white rounded-lg font-space p-4">
        Keynote Speakers?
      </span>
      <div className="flex flex-row items-center">
        <div className="flex flex-col p-4 space-y-8 items-center justify-center">
          <img
            src={fixer}
            alt="Description of Image"
            className="  h-32 w-32 object-cover rounded-full   "
          />
          <span className="text-xl  font-bold text-[#FF9F29] rounded-lg font-space">
            Isaiah Pedatella
          </span>
          <span className="text-xl font-bold text-white font-libre">
            A graphic designer with over two decades of creative work, Elvira
            has made a name for herself in the digital space with her bold,
            punchy style.
          </span>
        </div>
        <div className="flex flex-col p-4 space-y-8 items-center justify-center">
          <img
            src={fixer}
            alt="Description of Image"
            className="  h-32 w-32 object-cover rounded-full   "
          />
          <span className="text-xl  font-bold text-[#FF9F29] rounded-lg font-space">
            David Pedatella
          </span>
          <span className="text-xl font-bold text-white font-libre">
            Bringing a fresh, unique aesthetic to the world of illustration,
            Chun Hei has won multiple awards, including the prestigious
            Croalstead Crystal Quill.
          </span>
        </div>
        <div className="flex flex-col p-4 space-y-8 items-center justify-center">
          <img
            src={fixer}
            alt="Description of Image"
            className="  h-32 w-32 object-cover rounded-full   "
          />
          <span className="text-xl  font-bold text-[#FF9F29] rounded-lg font-space">
            Elo Alvira
          </span>
          <span className="text-xl font-bold text-white font-libre">
            Truly a man of letters, Aaron has been making waves as one of the
            master storytellers of this generation. He's this year's Golden
            Letters awardee.
          </span>
        </div>
      </div>
    </div>
  );
}

export default KeynoteSpeakers;
