import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
 
} from "react-icons/fa";
import contact from "../../assets/venice-featured-720x560.jpg"


const Contact = () => {
  return (
    <section className="py-16 bg-gray-100">
      {/* Banner Section */}
      <div className="relative">
        <img
          src={contact} // Replace with your image
          alt="Contact Banner"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
            <p className="text-lg">
              We'd love to hear from you. Reach out to us through the options
              below.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12">
        <h2 className="text-4xl font-bold mb-12 text-center">Contact Us</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Section 1: Address */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
            <FaMapMarkerAlt className="text-blue-500 w-16 h-16 mr-4" />
            <div>
              <h3 className="text-2xl font-semibold mb-4">Address</h3>
              <p className="text-gray-700">
                1234 Bookstore Ave,
                <br />
                Booktown, BK 56789,
                <br />
                Country
              </p>
            </div>
          </div>

          {/* Section 2: Phone */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
            <FaPhoneAlt className="text-blue-500 w-16 h-16 mr-4" />
            <div>
              <h3 className="text-2xl font-semibold mb-4">Phone</h3>
              <p className="text-gray-700">
                <a
                  href="tel:+1234567890"
                  className="text-blue-500 hover:underline"
                >
                  +1 (234) 567-890
                </a>
              </p>
            </div>
          </div>

          {/* Section 3: Email */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
            <FaEnvelope className="text-blue-500 w-16 h-16 mr-4" />
            <div>
              <h3 className="text-2xl font-semibold mb-4">Email</h3>
              <p className="text-gray-700">
                <a
                  href="mailto:contact@bookstore.com"
                  className="text-blue-500 hover:underline"
                >
                  contact@bookstore.com
                </a>
              </p>
            </div>
          </div>

          {/* Section 4: Working Hours */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
            <FaClock className="text-blue-500 w-16 h-16 mr-4" />
            <div>
              <h3 className="text-2xl font-semibold mb-4">Working Hours</h3>
              <p className="text-gray-700">
                Mon - Fri: 9 AM - 6 PM
                <br />
                Sat: 10 AM - 4 PM
                <br />
                Sun: Closed
              </p>
            </div>
          </div>

          {/* Section 5: Social Media */}

          {/* Section 6: Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg lg:col-span-2">
            <h3 className="text-2xl font-semibold mb-4">Send Us a Message</h3>
            <form action="#" method="POST" className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded-lg"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Section 7: Map */}
          <div className="bg-white p-6 rounded-lg shadow-lg lg:col-span-2">
            <h3 className="text-2xl font-semibold mb-4">Find Us</h3>
            <div className="aspect-w-16 h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.014376573226!2d-122.4194186846813!3d37.77492927975927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c3f1a6d87%3A0x94d0f3f1567e4dc4!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1611234567890"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>

          {/* Section 8: Testimonials */}

          

          {/* Section 9: FAQ */}
          <div className="bg-white p-6 rounded-lg shadow-lg lg:col-span-2">
            <h3 className="text-2xl font-semibold mb-4">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              <div className="border-t border-gray-200 pt-4">
                <h4 className="text-xl font-semibold">
                  How can I place an order?
                </h4>
                <p className="text-gray-700">
                  You can place an order online through our website or contact
                  us directly via phone or email.
                </p>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <h4 className="text-xl font-semibold">
                  Do you offer international shipping?
                </h4>
                <p className="text-gray-700">
                  Yes, we offer international shipping to select countries.
                  Please contact us for more details.
                </p>
              </div>
            </div>
          </div>

          {/* Section 10: Additional Information */}
          <div className="bg-white p-6 rounded-lg shadow-lg lg:col-span-2">
            <h3 className="text-2xl font-semibold mb-4">
              Additional Information
            </h3>
            <p className="text-gray-700">
              For any inquiries or support, please reach out to us through the
              contact form or the provided contact details. We're here to assist
              you and will respond as soon as possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
