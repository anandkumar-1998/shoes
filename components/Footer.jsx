"";
import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaFacebookF,
  FaGithub,
  FaGoogle,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaPrint,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="">
      <footer className="bg-[#1c2331] text-white">
        {/* <!-- Section: Social media --> */}
        <section className="bg-indigo-600 p-4">
          <div className="container mx-auto">
            <div className="flex justify-between">
              {/* <!-- Left --> */}
              <div className="flex items-center">
                <span className="mr-4">
                  Get connected with us on social networks:
                </span>
              </div>
              {/* <!-- Right --> */}
              <div className="flex items-center space-x-4">
                <a href="#" className="text-white">
                  <FaFacebookF size={14} />
                </a>
                <a href="#" className="text-white">
                  <FaTwitter size={14} />
                </a>
                <a href="#" className="text-white">
                  <FaGoogle size={14} />
                </a>
                <a href="#" className="text-white">
                  <FaInstagram size={14} />
                </a>
                <a href="#" className="text-white">
                  <FaLinkedin size={14} />
                </a>
                <a href="#" className="text-white">
                  <FaGithub size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Section: Social media --> */}

        {/* <!-- Section: Links  --> */}
        <section className="py-10 px-3">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
              {/* <!-- Grid column --> */}
              <div className="col-span-1">
                <h6 className="text-lg font-semibold border-b-2 border-purple-500 inline-block">
                  Company name
                </h6>
                <p className="mt-4">
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-span-1">
                <h6 className="text-lg font-semibold border-b-2 border-purple-500 inline-block">
                  Products
                </h6>

                <p className="mt-4">
                  <a href="#" className="text-white">
                    MDBootstrap
                  </a>
                </p>
                <p>
                  <a href="#" className="text-white">
                    MDWordPress
                  </a>
                </p>
                <p>
                  <a href="#" className="text-white">
                    BrandFlow
                  </a>
                </p>
                <p>
                  <a href="#" className="text-white">
                    Bootstrap Angular
                  </a>
                </p>
              </div>
              {/* <!-- Grid column -/> */}
              <div className="col-span-1">
                <h6 className="text-lg font-semibold border-b-2 border-purple-500 inline-block">
                  Useful links
                </h6>

                <p className="mt-4">
                  <a href="#" className="text-white">
                    Your Account
                  </a>
                </p>
                <p>
                  <a href="#" className="text-white">
                    Become an Affiliate
                  </a>
                </p>
                <p>
                  <a href="#" className="text-white">
                    Shipping Rates
                  </a>
                </p>
                <p>
                  <a href="#" className="text-white">
                    Help
                  </a>
                </p>
              </div>
              {/* <!-- Grid column -->

                <!-- Grid column --> */}
              <div className="col-span-1">
                <h6 className="text-lg font-semibold border-b-2 border-purple-500 inline-block">
                  Contact
                </h6>
                <p className="flex gap-2 py-3">
                  <span className="py-1">
                    <FaHome size={16} />
                  </span>
                  New York, NY 10012, US
                </p>
                <p className="flex gap-2">
                  <span className="py-1">
                    <FaEnvelope size={16} />
                  </span>
                  info@example.com
                </p>
                <p className="flex gap-2">
                  <span className="py-1">
                    <FaPhone size={16} />
                  </span>
                  + 01 234 567 88
                </p>
                <p className="flex gap-2">
                  <span className="py-1">
                    <FaPrint size={14} />
                  </span>
                  + 01 234 567 89
                </p>
              </div>
              {/* <!-- Grid column --> */}
            </div>
          </div>
        </section>
        {/* <!-- Section: Links  -->

    <!-- Copyright --> */}
        <div className="bg-gray-800 py-3">
          <div className="container mx-auto text-center text-sm text-gray-500">
            © 2023 Copyright:
            <a className="text-white" href="https://mdbootstrap.com/">
              MDBootstrap.com
            </a>
          </div>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    </div>
  );
};

export default Footer;
