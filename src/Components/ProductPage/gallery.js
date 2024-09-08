import React, { useState } from "react";
import fixer from "../../fixer.png";
const images = [
  fixer, // The path to your main image
  fixer,
  fixer,
  fixer,
  // Add paths to other images
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="p-8 space-y-6 ">
      <div className=" ">
        <h className="text-4xl font-extrabold font-libre">Product Details</h>
      </div>
      <div className="border border-gray-300 rounded-2xl  ">
        <img
          src={selectedImage}
          alt="Selected"
          className="w-full rounded-2xl "
        />
      </div>
      <div
        className="flex space-x-4 
       overflow-x-auto p-2"
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            className={`w-32 h-32 flex-none rounded-3xl cursor-pointer  ${
              selectedImage === image ? " ring-4 ring-gray-500" : ""
            }`}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
