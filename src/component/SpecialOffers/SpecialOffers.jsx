import {
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCardTitle,
  CCol,
  CRow,
} from "@coreui/react";
import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { FaCalendar, FaLocationArrow, FaStopwatch } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SpecialOffers = () => {
  const [offer, setOffer] = useState([]);

  useEffect(() => {
    fetch("offer.json")
      .then((res) => res.json())
      .then((data) => setOffer(data));
  }, []);

  return (
    <div>
      <SectionTitle
        className="py-4"
        title={"Special Offers"}
        subtitle={
          "From seasonal and holiday highlights to upcoming events and special offers"
        }
      />
      <div className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mx-4 md:mx-10">
          {offer.map((item) => (
            <CCard
              key={item.id}
              className="relative mb-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{
                maxWidth: "600px",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <CRow className="g-0 lg:flex">
                <CCol className="" md={4}>
                  <div className="relative">
                    <CCardImage
                      className="h-56 w-ful lg:w-96 lg:h-60 object-cover transition-transform duration-500 hover:scale-105 mx-auto"
                      src={item.image}
                      alt={item.title}
                    />
                    <div
                      className="absolute top-2 left-2 lg:p-1 lg:w-12 h-7
                  lg:-mt-[95px] lg:ml-16 bg-blue-600 text-white px-4 ml-9 -py-3 rounded opacity-80 text-center"
                    >
                      {item.price}
                    </div>
                  </div>
                </CCol>
                <CCol md={8}>
                  <CCardBody className="p-6">
                    <CCardTitle className="text-xl font-bold mb-3 text-gray-800">
                      {item.title}
                    </CCardTitle>
                    <CCardText className="text-sm text-gray-500 mb-3">
                      {item.rating}
                    </CCardText>
                    <CCardText className="text-base text-gray-700 mb-5">
                      {item.description}
                    </CCardText>
                    <CCardText>
                      <div className="flex justify-between items-center">
                        <div className="text-gray-600 flex gap-4">
                          <small className="flex items-center gap-2">
                            <FaStopwatch size={18} />
                            {item.duration}
                          </small>
                          <small className="flex items-center gap-2">
                            <FaLocationArrow size={18} />
                            {item.location}
                          </small>
                          <small className="flex items-center gap-2">
                            <FaCalendar size={18} />
                            {item.date}
                          </small>
                        </div>
                        <Link
                          to={`/offerDetails/${item.id}`}
                          className="text-blue-600 cursor-pointer hover:text-red-600 transition-transform duration-500 hover:scale-105"
                        >
                          View Details
                        </Link>
                      </div>
                    </CCardText>
                  </CCardBody>
                </CCol>
              </CRow>
            </CCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
