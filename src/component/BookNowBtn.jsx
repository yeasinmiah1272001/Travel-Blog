import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addBokking } from "../Redux/tourSlice";

const BookNowBtn = ({ item, className }) => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.tour.TourCart);

  const [existing, setExisting] = useState(null);

  const handleBtn = () => {
    if (item) {
      dispatch(addBokking(item));
      toast.success(`${item.title} booking added successfully`);
    }
  };

  useEffect(() => {
    const availableProduct = selector.find(
      (tourItem) => tourItem.id === item?.id
    );
    setExisting(availableProduct || null);
  }, [selector, item?.id]);

  return (
    <div className="flex items-center justify-center space-y-4">
      {existing ? (
        <p className="text-gray-600 bg-green-100 px-4 py-2 rounded-lg shadow-md">
          Booking already added
        </p>
      ) : (
        <button
          onClick={handleBtn}
          className={`px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl hover:from-blue-600 hover:to-purple-700 hover:-translate-y-1 transform transition duration-300 ease-in-out ${className}`}
        >
          Book Now
        </button>
      )}
    </div>
  );
};

export default BookNowBtn;
