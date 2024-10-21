import React from "react";
import { FaHeart, FaEye } from "react-icons/fa";

const images = [
  {
    src: "https://i.ibb.co/QJPVYLK/venice-featured-720x560.jpg",
    alt: "Venice",
  },
  {
    src: "https://i.ibb.co/Nn6268q/sydney-featured.jpg",
    alt: "Sydney",
  },
  {
    src: "https://i.ibb.co/wKjbxMC/maldives-featured-720x560.jpg",
    alt: "Maldives",
  },
  {
    src: "https://i.ibb.co/zWdjmsK/dubai-featured-720x560.jpg",
    alt: "Dubai",
  },
  {
    src: "https://i.ibb.co/9YkgNy5/cappadocia-featured.jpg",
    alt: "Cappadocia",
  },
  {
    src: "https://i.ibb.co/JdgTCsM/cappadocia-featured-526x406.jpg",
    alt: "Cappadocia Small",
  },
  {
    src: "https://i.ibb.co/D1Wd5qr/dubai-featured-526x406.jpg",
    alt: "Dubai Small",
  },
  {
    src: "https://i.ibb.co/pd5TXtY/istanbul-featured-526x406.jpg",
    alt: "Istanbul",
  },
  {
    src: "https://i.ibb.co/PtD9gz7/destination-italy-720x560.jpg",
    alt: "Italy",
  },
  {
    src: "https://i.ibb.co/G5rkbN9/destination-maldives-720x560.jpg",
    alt: "Maldives Large",
  },
];

const TourGallery = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-8">Tour Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div key={index} className="relative group">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-white text-center">
                <h3 className="text-lg font-semibold mb-2">{image.alt}</h3>
                <div className="flex justify-center space-x-4">
                  <FaHeart className="text-red-500 cursor-pointer" size={24} />
                  <FaEye className="text-white cursor-pointer" size={24} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourGallery;
