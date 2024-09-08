import React from "react";
import fixer from "../fixer.png";

// Sample data for avatar images. Replace these with your actual image paths or URLs.
const avatarImages = [fixer, fixer, fixer, fixer];

const AvatarStack = () => {
  return (
    <div className="flex -space-x-4 relative">
      {" "}
      {/* Added flex and relative classes */}
      {avatarImages.map((image, index) => (
        <img
          key={index}
          className="w-10 h-10 rounded-full border-2 border-white"
          src={image}
          alt={`Avatar ${index}`}
          style={{ zIndex: avatarImages.length - index }} // Fixed to avatarImages
        />
      ))}
    </div>
  );
};

export default AvatarStack;
