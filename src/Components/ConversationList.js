import React from "react";

const conversations = [
  {
    name: "Sophie B.",
    message: "Hi! I need more information...",
    avatar: "/avatars/sophie.jpg",
  },
  {
    name: "Anne Marie",
    message: "Awesome work, can you...",
    avatar: "/avatars/anne.jpg",
  },
  {
    name: "Ivanna",
    message: "About files I can...",
    avatar: "/avatars/ivanna.jpg",
  },
  {
    name: "Peterson",
    message: "Have a great afternoon...",
    avatar: "/avatars/peterson.jpg",
  },
  {
    name: "Nick Daniel",
    message: "Hi! I need more information...",
    avatar: "/avatars/nick.jpg",
  },
];

const ConversationList = () => {
  return (
    <div className=" bg-slate-800 shadow-md rounded-lg p-6 w-full">
      <h2 className="text-xl font-semibold mb-4">Conversations</h2>
      <ul>
        {conversations.map((conversation, index) => (
          <li
            key={index}
            className="flex items-center justify-between p-3 border-b border-blue-500 border-opacity-20 last:border-b-0"
          >
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src={conversation.avatar}
                alt={conversation.name}
              />
              <div>
                <h3 className=" text-slate-400 font-semibold">
                  {conversation.name}
                </h3>
                <p className=" text-gray-100">{conversation.message}</p>
              </div>
            </div>
            <button className="text-blue-500 hover:text-blue-600 font-semibold">
              REPLY
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConversationList;
