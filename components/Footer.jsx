"";
import React from "react";
import { FaFacebook, FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className="container my-5">
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
              <FaFacebookF size={14}/>
            </a>
            <a href="" className="text-white me-4">
              <FaTwitter size={14}/>
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
          <div>
            <div>
              <div>
                <h6>Company Name</h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>

              {/* 2nd grid */}
              <div>
                <h6>Products</h6>
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
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold">Useful links</h6>

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
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  // style="width: 60px; background-color: #7c4dff; height: 2px"
                />
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
