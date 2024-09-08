import React, { useState, useMemo } from "react";

// Sample ProgressBar component
const ProgressBar = ({ progress }) => {
  // Determine the color based on progress
  const bgColor =
    progress === "Completed"
      ? "bg-green-500"
      : progress === "In Progress"
      ? "bg-blue-500"
      : "bg-gray-400";

  // Set the width based on progress
  const width =
    progress === "Completed"
      ? "100%"
      : progress === "In Progress"
      ? "50%"
      : "25%";

  return (
    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 h-1">
      <div
        className={`text-xs font-medium text-white text-center text-transparent leading-none rounded-full h-1 ${bgColor}`}
        style={{ width }}
      >
        {progress}
      </div>
    </div>
  );
};

export default ProgressBar;
