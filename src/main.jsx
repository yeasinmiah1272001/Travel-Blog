import ReactDOM from "react-dom/client";
import "./index.css";
import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import Error from "./component/Error/Error";
import Home from "./component/Home/Home";
import Contact from "./component/Contact/Contact";
import FeatureDetails from "./component/Feature/FeatureDetails";
import DestinationDetails from "./component/Destinations/DestinationDetails";
import OfferDetails from "./component/SpecialOffers/OfferDetails";
import TourList from "./component/TourList/TourList";
import TourGallery from "./component/TourGallery/TourGallery";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import Booking from "./component/Booking/Booking";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/details/:id",
        element: <FeatureDetails />,
        loader: () => fetch(`/card.json`),
      },
      {
        path: "/destionation/:id",
        element: <DestinationDetails />,
        loader: () => fetch(`/destination.json`),
      },
      {
        path: "/offerDetails/:id",
        element: <OfferDetails />,
        loader: () => fetch("/offer.json"),
      },
      {
        path: "/tour",
        element: <TourList />,
      },
      {
        path: "galary",
        element: <TourGallery />,
      },
      {
        path: "booking",
        element: <Booking />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <Toaster />
    </Provider>
  </React.StrictMode>
);
