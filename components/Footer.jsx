"";
import React from "react";
import {
  FaFacebook,
  FaFacebookF,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="container flex my-5">
      <footer className="text-center text-lg text-white bg-[#1c2331]">
        <section className="flex justify-between p-4 bg-[#6351ce] ">
          {/* left */}
          <div className="me-5">
            <span>Get connected with us on social networks:</span>
          </div>
          {/*  */}

          {/* right */}
          <div className="flex my-2">
            <a href="" className="text-white me-4">
              <FaFacebookF size={14} />
            </a>
            <a href="" className="text-white me-4">
              <FaTwitter size={14} />
            </a>
            <a href="" className="text-white me-4">
              <FaGoogle size={14} />
            </a>
            <a href="" className="text-white me-4">
              <FaInstagram size={14} />
            </a>
            <a href="" className="text-white me-4">
              <FaLinkedin size={14} />
            </a>
            <a href="" className="text-white me-4">
              <FaGithub size={14} />
            </a>
          </div>
        </section>

        {/* second section */}
        <section>
          <div className="container text-center md:text-start mt-5">
            <div className="flex flex-row mt-3">
              <div className="md:w-1/4 lg:w-1/3 xl:w-1/4 mx-auto mb-4">
                <h6 className="uppercase font-bold border-b-2 border-purple-100 inline-block">
                  Company Name
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>

              {/* 2nd grid */}
              <div className="md:w-1/4 lg:w-1/3 xl:w-1/4 mx-auto mb-4">
                <h6 className="uppercase font-bold border-b-2 border-purple-100 inline-block">
                  Products
                </h6>
                <p>
                  <a href="#!" className="text-white">
                    MDBootstrap
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    MDWordPress
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    BrandFlow
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    Bootstrap Angular
                  </a>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="md:w-1/4 lg:w-1/3 xl:w-1/4 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="uppercase font-bold border-b-2 border-purple-100 inline-block">
                  Useful links
                </h6>

                <p>
                  <a href="#!" className="text-white">
                    Your Account
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    Become an Affiliate
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    Shipping Rates
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    Help
                  </a>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="md:w-1/4 lg:w-1/3 xl:w-1/4 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="uppercase font-bold border-b-2 border-purple-100 inline-block">
                  Contact
                </h6>
                <p>
                  <i className="fas fa-home mr-3"></i> New York, NY 10012, US
                </p>
                <p>
                  <i className="fas fa-envelope mr-3"></i> info@example.com
                </p>
                <p>
                  <i className="fas fa-phone mr-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print mr-3"></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
