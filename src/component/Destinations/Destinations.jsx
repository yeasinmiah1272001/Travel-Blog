import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Destinations.css";
import { Link } from "react-router-dom";

const Destinations = () => {
  const [destination, setDestination] = useState([]);

  useEffect(() => {
    fetch("destination.json")
      .then((res) => res.json())
      .then((data) => setDestination(data));
  }, []);

  return (
    <div className="mx-10">
      <SectionTitle
        title={"Travel Destinations"}
        subtitle={
          "Check out the list of countries and places you can travel to by joining us."
        }
      />

      <div className="">
        <div className="grid lg:grid-cols-4">
          {destination.map((dest) => (
            <Link
              to={`/destionation/${dest.id}`}
              key={dest.id}
              className="snip1567"
            >
              <img src={dest.image} alt={dest.title} />
              <figcaption>
                <h3>{dest.title}</h3>
                <span className=" p-3 font-semibold">
                  Temperature: {dest.temperature}
                </span>
                <p>{dest.description}</p>
              </figcaption>
              <div className="hover"></div>
              <i className="ion-android-add"></i>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
