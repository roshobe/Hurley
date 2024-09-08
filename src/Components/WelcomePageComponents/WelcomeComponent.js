import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import fixer from "../../fixer.png";
import { motion, AnimatePresence } from "framer-motion";

const comments = [
  {
    text: `" I highly recommend Hurley Repair. Serviced both my washing machine and did a dryer & vent clean out. Very professional and excellent workmanship! "`,
    author: "Steve Robinson",
    img: fixer,
  },
  {
    text: `" Hurley's Repair provided excellent service and fixed my dishwasher in no time! "`,
    author: "Jessica Wong",
    img: fixer,
  },
  {
    text: `" Great service and friendly staff. My oven is working perfectly now! "`,
    author: "Michael Brown",
    img: fixer,
  },
];

function WelcomeComponent() {
  const navigate = useNavigate();
  const [currentComment, setCurrentComment] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentComment((prev) => (prev + 1) % comments.length);
    }, 10000); // Change comment every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col rounded-sm bg-cover bg-center h-screen bg-[url('/src/HurleyBackGround.png')]">
      <div className="h-full flex flex-col backdrop-blur-sm rounded drop-shadow-lg justify-center items-center">
        <div className="flex flex-col justify-center items-center h-full -space-y-24 ">
          <div className="flex flex-col h-fit drop-shadow-lg ">
            <motion.span
              className="text-[120px] xl:text-[240px] text-[#373839] font-space text-center 4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              HURLEY REPAIR
            </motion.span>
          </div>

          <div className="flex flex-col items-end rounded drop-shadow-lg  p-10 ">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentComment}
                initial={{ opacity: 0, x: 1000 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 2 }}
                className="flex flex-col items-end space-y-4"
              >
                <span className="text-2xl text-[#FFE6CD] w-1/2 rounded-lg font-roboto ">
                  {comments[currentComment].text}
                </span>
                <div className="flex items-center space-x-2">
                  <img
                    src={comments[currentComment].img}
                    alt={comments[currentComment].author}
                    className="w-14 h-14 border border-neutral-700 rounded-full "
                  />
                  <span className="text-2xl text-[#FFE6CD] rounded-lg font-roboto">
                    - {comments[currentComment].author}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
            <button
              onClick={() => navigate("/Dashboard")}
              className="text-sm w-fit py-2 px-4 rounded-full bg-black font-bold text-white font-roboto"
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeComponent;
