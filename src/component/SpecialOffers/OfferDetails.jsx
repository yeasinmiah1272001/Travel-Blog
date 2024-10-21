import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BookNowBtn from "../BookNowBtn";

const OfferDetails = () => {
  const [singleData, setSingleData] = useState([]);
  const { id } = useParams();
  const details = useLoaderData();

  useEffect(() => {
    const data = details.find((item) => item.id == id);
    setSingleData(data);
  }, [details, id]);
  return (
    <div className="container mx-auto p-6 md:p-12 bg-gray-50">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all hover:scale-105 duration-300 ease-in-out">
        {/* Flexbox for layout */}
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              src={singleData.image}
              alt={singleData.title}
              className="w-full h-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
            />
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 p-8 space-y-6">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              {singleData.title}
            </h1>

            <div className="flex items-center space-x-2">
              <h4 className="text-lg text-yellow-400 font-semibold">
                Rating: {singleData.rating}
              </h4>
              {/* Icon to visually represent rating */}
              <span className="text-yellow-400">⭐</span>
            </div>

            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              {singleData.description}
            </p>

            <BookNowBtn item={singleData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferDetails;
