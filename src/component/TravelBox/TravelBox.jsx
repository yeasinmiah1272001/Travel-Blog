import img1 from "../../assets/review/travelbox.png";

const TravelBox = () => {
  return (
    <div className="flex items-center justify-between p-8 bg-gray-100 rounded-lg shadow-lg mx-10 mt-5">
      {/* Left-side content */}
      <div className="w-1/2 pr-8">
        <h2 className="text-2xl font-bold mb-4">Travel Blog</h2>
        <p className="text-gray-700 mb-6">
          Discover the best travel destinations and tips in our blog. Stay
          updated with the latest trends and travel advice to make your next
          trip unforgettable.
        </p>
        {/* Button with hover effect */}
        <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-blue-600 duration-300">
          Learn More
        </button>
      </div>

      {/* Right-side image */}
      <div className="w-1/2">
        <img
          src={img1}
          alt="Travel Box"
          className="w-full h-auto object-cover rounded-lg transition-transform transform hover:scale-105"
        />
      </div>
    </div>
  );
};

export default TravelBox;
