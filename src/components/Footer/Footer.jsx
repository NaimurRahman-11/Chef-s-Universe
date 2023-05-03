import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-body-tertiary text-center no-printme">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h4>Contact Us</h4>
            <p>
              Email: chef@chefsuniverse.com <br />
              Phone: 123-456-7890 <br />
              Address: 123 Main St, Anytown USA
            </p>
          </div>
          <div className="col-lg-6">
            <h4>Follow Us</h4>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#">
                  <FaFacebook></FaFacebook>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <FaTwitter></FaTwitter>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <FaInstagram></FaInstagram>
                </a>
              </li>

              <li className="list-inline-item">
                <a href="#">
                  <FaLinkedin></FaLinkedin>
                </a>
              </li>

              <li className="list-inline-item">
                <a href="#">
                  <FaPinterest></FaPinterest>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <p>
              &copy; 2023 Chef's Universe. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;