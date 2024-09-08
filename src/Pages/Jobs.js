import DashboardHeader from "../Components/DashboardHeader";
import Feed from "../Components/Feed";
import SideBar from "../Components/SideBar";
import { React, useState } from "react";

function Jobs() {
  const [open, setOpen] = useState(true);
  return (
    <div className="w-full ">
      <DashboardHeader open={open} setOpen={setOpen} />
      <div className="flex ">
        <SideBar open={open} />
        <Feed />
      </div>
    </div>
  );
}

export default Jobs;
