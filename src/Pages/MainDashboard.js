import DashboardHeader from "../Components/DashboardHeader";
import Feed from "../Components/Feed";
import SideBar from "../Components/SideBar";
import { React, useState } from "react";
import UserTracker from "../Components/UserTracker";

function MainDashBoard() {
  const [open, setOpen] = useState(true);
  return (
    <div className="w-full">
      <DashboardHeader open={open} setOpen={setOpen} />
      <div className="flex h-screen ">
        <SideBar open={open} />
        <UserTracker />
      </div>
    </div>
  );
}

export default MainDashBoard;
