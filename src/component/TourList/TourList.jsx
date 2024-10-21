// src/components/TourList.jsx
import { FaMapMarkerAlt, FaClock, FaDollarSign } from "react-icons/fa";
import BookNowBtn from "../BookNowBtn";
const tours = [
  {
    id: 1,
    title: "Beachside Getaway",
    location: "Maldives",
    duration: "5",
    price: "$1200",
    image: "https://i.ibb.co/Z6xzX4S/destination-rio-720x560.jpg",
  },
  {
    id: 2,
    title: "Mountain Adventure",
    location: "Nepal",
    duration: "7",
    price: "$900",
    image: "https://i.ibb.co/G5rkbN9/destination-maldives-720x560.jpg",
  },
  {
    id: 3,
    title: "Desert Safari",
    location: "Dubai",
    duration: "3",
    price: "$700",
    image: "https://i.ibb.co/PtD9gz7/destination-italy-720x560.jpg",
  },
];

const TourList = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Available Tours</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tours.map((tour) => (
          <div className="border rounded-lg shadow-lg p-4 hover:shadow-2xl transition duration-300 ease-in-out">
            <img
              src={tour.image}
              alt={tour.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="mt-4">
              <h2 className="text-xl font-semibold">{tour.title}</h2>
              <p className="text-gray-600 mt-2 flex items-center">
                <FaMapMarkerAlt className="mr-2 text-red-500" />
                {tour.location}
              </p>
              <p className="text-gray-600 mt-2 flex items-center">
                <FaClock className="mr-2 text-blue-500" />
                {tour.duration} Days
              </p>
              <p className="text-gray-600 mt-2 flex items-center">
                <FaDollarSign className="mr-2 text-green-500" />
                {tour.price}
              </p>
            </div>

            <BookNowBtn className={"w-full"} item={tour} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourList;
