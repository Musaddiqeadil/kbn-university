import React from 'react'
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-section">
          <h3>KBN University</h3>
          <p>
            A premier institution of higher learning committed to excellence in
            education, research, and community service.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>About Us</li>
            <li>Academics</li>
            <li>Admissions</li>
            <li>Facilities</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>KBN University Campus</p>
          <p>Kalaburagi - 585102</p>
          <p>Karnataka, India</p>
          <p>📞 +91 8472 123456</p>
          <p>✉️ info@kbnuniversity.edu.in</p>
        </div>

        {/* Social Links */}
        <div className="footer-section">
          <h4>Connect With Us</h4>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
          <div className="office-hours">
            <p>Office Hours:</p>
            <p>Mon - Fri: 9:00 AM - 5:00 PM</p>
            <p>Sat: 9:00 AM - 1:00 PM</p>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2025 KBN University, Kalaburagi. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer
