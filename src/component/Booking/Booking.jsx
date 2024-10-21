import { useDispatch, useSelector } from "react-redux";
import { FaStar } from "react-icons/fa"; // Importing star icon for rating
import { cancel } from "../../Redux/tourSlice";
import toast from "react-hot-toast";

const Booking = () => {
  const selector = useSelector((state) => state.tour.TourCart);
  const dispatch = useDispatch();

  return (
    <div className="p-10 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-10 text-blue-800">
        {selector.length > 0
          ? "Your Booking Details"
          : "Your Booking Cart is Empty"}
      </h2>

      {selector.length > 0 ? (
        selector.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row mb-10 rounded-lg overflow-hidden shadow-lg bg-white"
          >
            {/* Left Side - Image */}
            <div
              className="w-full md:w-1/2 h-64 md:h-96 bg-cover bg-center relative"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              {/* Optional: Overlay for better text readability */}
              <div className="absolute inset-0 bg-black opacity-25"></div>
            </div>

            {/* Right Side - Content */}
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
              <div>
                <h1 className="text-3xl font-bold text-blue-600 mb-3">
                  {item.title}
                </h1>
                <p className="mb-4 text-gray-800">{item.description}</p>

                {/* Duration */}
                <p className="text-lg font-semibold text-gray-700 mb-2">
                  Duration: {item.duration}
                </p>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <p className="text-lg font-semibold text-gray-700 mr-2">
                    Rating:
                  </p>
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-yellow-500 ${
                        i < item.rating ? "fill-current" : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-gray-600">({item.rating})</span>
                </div>
              </div>

              {/* Pricing and CTA */}
              <div className="mt-4">
                <p className="text-xl font-semibold text-green-600">
                  Starting from{" "}
                  <span className="text-lg text-gray-600">${item.price}</span>
                </p>
                <div className="flex space-x-4">
                  <button
                    onClick={() => alert("payment work running")}
                    className="mt-4 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
                  >
                    Pay Now
                  </button>
                  <button
                    onClick={() => {
                      dispatch(cancel(item.id));
                      toast.success(`${item.title} booking canceled`);
                    }}
                    className="mt-4 px-6 py-3 bg-red-600 text-white rounded hover:bg-red-700 transition duration-300"
                  >
                    Booking Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center text-gray-600">
          <p>No bookings yet. Your booking cart is empty.</p>
        </div>
      )}
    </div>
  );
};

export default Booking;
