import React, { useState } from "react";

const EmailForm = () => {
  const [emailData, setEmailData] = useState({
    from: "",
    to: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call your API endpoint to send the email here.
    console.log(emailData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#1d1e1f] shadow-md rounded w-full h-screen p-16 "
    >
      <div className="mb-4">
        <label
          className="block text-[#ED7B12] text-sm font-bold mb-2"
          htmlFor="from"
        >
          From:
        </label>
        <input
          type="email"
          name="from"
          id="from"
          value={emailData.from}
          onChange={handleChange}
          required
          className="shadow appearance-none border-2 border-[#FF9F29] bg-[#737373] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-[#ED7B12] text-sm font-bold mb-2"
          htmlFor="to"
        >
          To:
        </label>
        <input
          type="email"
          name="to"
          id="to"
          value={emailData.to}
          onChange={handleChange}
          required
          className="shadow appearance-none border-2 border-[#FF9F29] bg-[#737373] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-[#ED7B12] text-sm font-bold mb-2"
          htmlFor="subject"
        >
          Subject:
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          value={emailData.subject}
          onChange={handleChange}
          required
          className="shadow appearance-none border-2 border-[#FF9F29] bg-[#737373] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-[#ED7B12] text-sm font-bold mb-2"
          htmlFor="message"
        >
          Message:
        </label>
        <textarea
          name="message"
          id="message"
          value={emailData.message}
          onChange={handleChange}
          required
          className="shadow appearance-none border-2 border-[#FF9F29] bg-[#737373] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-[#FF9F29] hover:bg-[#A85305] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Send Email
        </button>
      </div>
    </form>
  );
};

export default EmailForm;
