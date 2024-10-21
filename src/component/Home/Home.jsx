import Destinations from "../Destinations/Destinations";

import SliderBanner from "../Slider/Sliderbanner";
import SpecialOffers from "../SpecialOffers/SpecialOffers";
import WhyChoose from "../WhyChoose/WhyChoose";
import RecentFromBlogs from "../RecentFromBlogs/RecentFromBlogs";
import Feature from "../Feature/Feature";
import Review from "../Review/Review";
import Advanture from "../Advanture/Advanture";
import TravelBox from "../TravelBox/TravelBox";
import Container from "../Container";

const Home = () => {
  return (
    <div className="font-bodyFont">
      <SliderBanner />
      <WhyChoose />
      <Feature />
      <Destinations />
      <SpecialOffers />
      <RecentFromBlogs />
      <Advanture />
      <TravelBox />
      <Review />
    </div>
  );
};

export default Home;
