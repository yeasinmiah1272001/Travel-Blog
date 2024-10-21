import React, { useState } from "react";
import img1 from "../../assets/dubai-slider-screen-1.jpg";
import img2 from "../../assets/maldives-slider-img-1.jpg";
import img3 from "../../assets/sydney-slider-img-1.jpg";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import { FaSearch } from "react-icons/fa";
import "./SliderBanner.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const SliderBanner = () => {
  const [location, setLocation] = useState("");

  const handleLocationChange = (e) => setLocation(e.target.value);
  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for ${location}`);
  };

  return (
    <div className="relative bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600">
      {/* Carousel */}
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false}
        interval={2500}
        className="lg:h-[480px] relative z-0"
      >
        <div className="relative w-full lg:h-[80vh]">
          <img
            className="w-full h-full object-cover transition-transform duration-1000 transform hover:scale-110 shadow-lg"
            src={img1}
            alt="Dubai"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-3xl md:text-4xl font-extrabold bg-black bg-opacity-60 p-5 rounded-md shadow-2xl">
              Dubai
            </h2>
          </div>
        </div>
        <div className="relative w-full lg:h-[80vh]">
          <img
            className="w-full h-full object-cover transition-transform duration-1000 transform hover:scale-110 shadow-lg"
            src={img2}
            alt="Maldives"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-3xl md:text-4xl font-extrabold bg-black bg-opacity-60 p-5 rounded-md shadow-2xl">
              Maldives
            </h2>
          </div>
        </div>
        <div className="relative w-full lg:h-[80vh]">
          <img
            className="w-full h-full object-cover transition-transform duration-1000 transform hover:scale-110 shadow-lg"
            src={img3}
            alt="Sydney"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-3xl md:text-4xl font-extrabold bg-black bg-opacity-60 p-5 rounded-md shadow-2xl">
              Sydney
            </h2>
          </div>
        </div>
      </AutoplaySlider>

      {/* Form Container */}
      <form
        onSubmit={handleSearch}
        className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10 w-full max-w-4xl p-4"
      >
        <div className="flex flex-wrap items-center border border-yellow-500 rounded-full shadow-2xl overflow-hidden bg-white mt-72 transition-transform duration-300 hover:scale-105">
          <input
            type="text"
            value={location}
            onChange={handleLocationChange}
            className="p-4 flex-grow outline-none text-gray-700 placeholder-gray-500 w-full md:w-1/2"
            placeholder="Search..."
          />
          <select className="border-l border-gray-300 p-4 outline-none bg-white w-full md:w-1/3 transition-transform duration-300 hover:bg-gray-100">
            <option value="">Select Category</option>
            <option value="mobile">Mobile</option>
            <option value="digital">Digital Watch</option>
            <option value="computer">Computer</option>
            <option value="watch">Watch</option>
          </select>
          <button
            type="submit"
            className="p-4 bg-yellow-500 text-white flex items-center justify-center hover:bg-yellow-600 transition-colors w-full md:w-auto"
          >
            <FaSearch />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SliderBanner;
