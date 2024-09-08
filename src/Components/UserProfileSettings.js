import React, { useState } from "react";

const UserProfileSettings = () => {
  // State hooks for each toggle
  const [emailOnFollow, setEmailOnFollow] = useState(false);
  const [emailOnAnswer, setEmailOnAnswer] = useState(false);
  const [emailOnMention, setEmailOnMention] = useState(false);
  const [newLaunches, setNewLaunches] = useState(false);
  const [monthlyUpdates, setMonthlyUpdates] = useState(false);
  const [subscribeNewsletter, setSubscribeNewsletter] = useState(false);

  // Function to handle toggle changes
  const handleToggle = (toggleSetter) => {
    return (event) => {
      toggleSetter(event.target.checked);
    };
  };

  return (
    <div className="bg-slate-800 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full">
      <div className="flex items-center mb-6">
        <img
          className="w-16 h-16 rounded-full mr-4"
          src="/path-to-profile-picture.jpg" // Replace with the path to the profile picture
          alt="Richard Davis"
        />
        <div>
          <div className="text-xl font-semibold">Richard Davis</div>
          <div className="text-sm text-gray-600">CEO / Co-Founder</div>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Platform Settings</h3>
        <div className="mb-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={emailOnFollow}
              onChange={handleToggle(setEmailOnFollow)}
              className="form-toggle"
            />
            <span className="ml-2">Email me when someone follows me</span>
          </label>
        </div>
        <div className="mb-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={emailOnAnswer}
              onChange={handleToggle(setEmailOnAnswer)}
              className="form-toggle"
            />
            <span className="ml-2">
              Email me when someone answers on my post
            </span>
          </label>
        </div>
        <div className="mb-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={emailOnMention}
              onChange={handleToggle(setEmailOnMention)}
              className="form-toggle"
            />
            <span className="ml-2">Email me when someone mentions me</span>
          </label>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Application</h3>
        <div className="mb-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={newLaunches}
              onChange={handleToggle(setNewLaunches)}
              className="form-toggle"
            />
            <span className="ml-2">New launches and projects</span>
          </label>
        </div>
        <div className="mb-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={monthlyUpdates}
              onChange={handleToggle(setMonthlyUpdates)}
              className="form-toggle"
            />
            <span className="ml-2">Monthly product updates</span>
          </label>
        </div>
        <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={subscribeNewsletter}
              onChange={handleToggle(setSubscribeNewsletter)}
              className="form-toggle"
            />
            <span className="ml-2">Subscribe to newsletter</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default UserProfileSettings;
