import DashboardHeader from "../Components/DashboardHeader";
import SideBar from "../Components/SideBar";
import { React, useState } from "react";
import UserProfileSettings from "../Components/UserProfileSettings";

import UserForm from "../Components/UserPage/UserForm";
import ConversationList from "../Components/ConversationList";
import ListingCard from "../Components/ListingCard";
import LongLineGraphCard from "../Components/LongLineGraphCard";
import UserStatisticsCard from "../Components/Cards/UserStatisticsCard";
import SubscriberStatisticsCard from "../Components/Cards/SubscriberStatisticsCard";
function ProfilePage() {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <DashboardHeader open={open} setOpen={setOpen} />
      <div className="flex flex-row w-full ">
        <SideBar open={open} />
        <div className="bg-[#263159] flex flex-col p-4 w-full space-y-4 space-x-7  h-screen items-center ">
          <div className="flex flex-row w-full ">
            <SubscriberStatisticsCard />
            <SubscriberStatisticsCard />
          </div>
          <div className=" flex flex-row w-full space-x-9  ">
            <UserProfileSettings />
            <UserForm />
            <ConversationList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
