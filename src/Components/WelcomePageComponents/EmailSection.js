import React from "react";
import EmailForm from "./EmailForm";
import fixer from "../../fixer.png";

function EmailSection() {
  return (
    <div className="flex flex-row p-9 rounded-sm bg-cover bg-center h-screen w-full bg-black items-center justify-between">
      <img
        src={fixer}
        alt="Description of Image"
        className=" w-fit h-full object-cover  "
      />
      <EmailForm />
    </div>
  );
}

export default EmailSection;
