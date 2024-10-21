import SectionTitle from "./../SectionTitle/SectionTitle";
import img1 from "../../assets/icon/feature-1.png";
import img2 from "../../assets/icon/feature-2.png";
import img3 from "../../assets/icon/feature-3.png";
import img4 from "../../assets/icon/feature-4.png";
import img5 from "../../assets/icon/feature-5.png";
import img6 from "../../assets/icon/feature-6.png";

const WhyChoose = () => {
  const cards = [
    {
      imgSrc: img1,
      title: "Exciting Travel",
      description: "This is the description for Card 1.",
    },
    {
      imgSrc: img2,
      title: "Backup Team",
      description: "This is the description for Card 2.",
    },
    {
      imgSrc: img3,
      title: "Quick Booking",
      description: "This is the description for Card 3.",
    },
    {
      imgSrc: img4,
      title: "Wonderful Places",
      description: "This is the description for Card 4.",
    },
    {
      imgSrc: img5,
      title: "Worth of Money",
      description: "This is the description for Card 5.",
    },
    {
      imgSrc: img6,
      title: "Unique Destinations",
      description: "This is the description for Card 6.",
    },
  ];

  return (
    <div>
      <SectionTitle
        title={"Why Choose TourPress"}
        subtitle={
          "We offer the most competitive rates and offers for wonderful and beautiful places."
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-16">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:border-2 hover:border-blue-500  h-52"
          >
            <img
              src={card.imgSrc}
              alt={card.title}
              className="w-10 h-16 object-cover mx-auto mt-4"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-center">
                {card.title}
              </h3>
              <p className="text-gray-600 text-center">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;







// import "./WhyChoose.css"
// const WhyChoose = () => {
//        return (
//          <div className="card-container">
//            <figure className="snip1584 h-80">
//              <img
//              className="h-80"
//                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg"
//                alt="sample87"
//              />
//              <figcaption>
//                <h3>Burgundy Flemming</h3>
//                <h5>Advertising</h5>
//              </figcaption>
//              <a href="#"></a>
//            </figure>
          
//            <figure className="snip1584">
//              <img
//                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample120.jpg"
//                alt="sample120"
//              />
//              <figcaption>
//                <h3>Caspian Bellevedere</h3>
//                <h5>Accounting</h5>
//              </figcaption>
//              <a href="#"></a>
//            </figure>
//            <figure className="snip1584">
//              <img
//                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample120.jpg"
//                alt="sample120"
//              />
//              <figcaption>
//                <h3>Caspian Bellevedere</h3>
//                <h5>Accounting</h5>
//              </figcaption>
//              <a href="#"></a>
//            </figure>
//            <figure className="snip1584">
//              <img
//                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample120.jpg"
//                alt="sample120"
//              />
//              <figcaption>
//                <h3>Caspian Bellevedere</h3>
//                <h5>Accounting</h5>
//              </figcaption>
//              <a href="#"></a>
//            </figure>
//            <figure className="snip1584">
//              <img
//                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample120.jpg"
//                alt="sample120"
//              />
//              <figcaption>
//                <h3>Caspian Bellevedere</h3>
//                <h5>Accounting</h5>
//              </figcaption>
//              <a href="#"></a>
//            </figure>
//          </div>
//        );
// };

// export default WhyChoose;