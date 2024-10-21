import { FaMapMarkerAlt, FaClock, FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";

import BookNowBtn from "../BookNowBtn";

const FeatureCard = ({ item }) => {
  const { description, price, duration, rating, title, image, id } = item;

  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 mt-8">
      <div className="border rounded-lg shadow-lg p-4 hover:shadow-2xl transition duration-300 ease-in-out">
        <Link to={`/details/${id}`}>
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
        </Link>
        <div className="mt-4">
          <h2 className="text-xl font-semibold">{title}</h2>

          <p className="text-gray-600 mt-2 flex items-center">
            <FaClock className="mr-2 text-blue-500" />
            {duration} Days
          </p>
          <p className="text-gray-600 mt-2 flex items-center">
            <FaDollarSign className="mr-2 text-green-500" />
            {price}
          </p>

          {/* Add to Cart Button */}
          <BookNowBtn className={"w-full"} item={item} />
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
