import React from "react";

const UserForm = () => {
  return (
    <div className=" bg-slate-800 rounded-lg p-4 w-full">
      <h2 className="text-xl font-semibold mb-4">User Details</h2>
      <form className="grid grid-cols-2 gap-4">
        {/* Name Section */}
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-400"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-400"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>

        {/* Date of Birth & Sex */}
        <div>
          <label
            htmlFor="dob"
            className="block text-sm font-medium text-gray-400"
          >
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label
            htmlFor="sex"
            className="block text-sm font-medium text-gray-400"
          >
            Sex
          </label>
          <select
            id="sex"
            name="sex"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          >
            <option>Please Select</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        {/* Height & Weight */}
        <div>
          <label
            htmlFor="height"
            className="block text-sm font-medium text-gray-400"
          >
            Height (inches)
          </label>
          <input
            type="number"
            id="height"
            name="height"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label
            htmlFor="weight"
            className="block text-sm font-medium text-gray-400"
          >
            Weight (pounds)
          </label>
          <input
            type="number"
            id="weight"
            name="weight"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>

        {/* Marital Status */}
        <div className="col-span-2">
          <label
            htmlFor="maritalStatus"
            className="block text-sm font-medium text-gray-400"
          >
            Marital Status
          </label>
          <select
            id="maritalStatus"
            name="maritalStatus"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          >
            <option>Please Select</option>
            <option>Single</option>
            <option>Married</option>
            <option>Divorced</option>
            <option>Widowed</option>
          </select>
        </div>

        {/* Contact Number & Email */}
        <div>
          <label
            htmlFor="contactNumber"
            className="block text-sm font-medium text-gray-400"
          >
            Contact Number
          </label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            placeholder="(000) 000-0000"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-400"
          >
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            placeholder="myname@example.com"
          />
        </div>
      </form>
    </div>
  );
};

export default UserForm;
