import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import EmailSection from "../Components/WelcomePageComponents/EmailSection";

import WelcomeComponent from "../Components/WelcomePageComponents/WelcomeComponent";
import StrengthComponent from "../Components/WelcomePageComponents/StrengthComponent";
import KeynoteSpeakers from "../Components/WelcomePageComponents/KeynoteSpeakers";

function Landingpage() {
  return (
    <div className="flex flex-col bg-slate-900 overflow-hidden">
      {/* Main welcome page*/}
      <WelcomeComponent />
      {/* <Admin /> */}

      {/* The book an appointment section*/}
      <StrengthComponent />

      {/* The services section*/}
      <KeynoteSpeakers />

      {/* The services section*/}
      <EmailSection />
    </div>
  );
}

export default Landingpage;
