import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BookNowBtn from "../BookNowBtn";

const DestinationDetails = () => {
  const [details, setDetails] = useState([]);
  const allData = useLoaderData();
  const { id } = useParams();
  useEffect(() => {
    const data = allData.find((item) => item.id == id);
    setDetails(data);
  }, []);
  return (
    <div className="container mx-auto p-6 md:p-12 bg-gray-50">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all hover:scale-105 duration-300 ease-in-out">
        {/* Flexbox for layout */}
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              src={details.image}
              alt={details.title}
              className="w-full h-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
            />
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 p-8 space-y-6">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              {details.title}
            </h1>
            <h1 className="text-xl md:text-xl font-semibold text-gray-900 tracking-tight">
              Best Time: <span className="">{details.best_time_to_visit}</span>
            </h1>
            <h3 className="text-lg md:text-xl text-gray-500 font-medium">
              {details.temperature}
            </h3>

            <div className="flex items-center space-x-2">
              <h4 className="text-lg text-yellow-400 font-semibold">
                Rating:{details.rating}
              </h4>
              {/* Icon to visually represent rating */}
              <span className="text-yellow-400">⭐</span>
            </div>
            <div className="flex items-center space-x-2">
              <h1 className="text-xl">Per Month :{details.price}</h1>
            </div>

            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              {details.description}
            </p>

            <BookNowBtn item={details} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;
