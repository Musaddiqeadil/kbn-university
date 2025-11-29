import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoChevronDown } from 'react-icons/io5';
import { HiOutlineExternalLink } from 'react-icons/hi';
import './Navbar.css';
import logo from '../../assets/KBN University Logo Final (1).avif';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Top Bar */}
      <div className="navbar-top-wrapper">
        <div className="navbar-top">
          <div className="navbar-top-left">
            <Link to="/">Students</Link>
            <Link to="/">Faculty & Staff</Link>
            <Link to="/">Families & Visitors</Link>
            <Link to="/">Alumni</Link>
            <Link to="/">Sports</Link>
          </div>
          <div className="navbar-top-right">
  <Link to="/contact">Maps</Link>
  <span className="separator">|</span>
  
  <Link to="/contact" className="apply-btn">Contact</Link>
</div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="navbar-main-wrapper">
        <div className="navbar-main">
          <div className="navbar-logo">
            <Link to="/">
              <img src={logo} alt="KBN University Logo" className="logo-img" />
            </Link>
          </div>

          {/* Hamburger Menu Button */}
          <button className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? (
              <span className="close-icon">✕</span>
            ) : (
              <span className="hamburger-icon">☰</span>
            )}
          </button>

          <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
            <Link to="/about" onClick={toggleMenu}>ABOUT</Link>

            <div className="dropdown">
              <Link to="/academics" className="dropdown-link">
                ACADEMICS <IoChevronDown className="arrow" />
              </Link>
              <div className="dropdown-menu">
                <Link to="/academics" onClick={toggleMenu}>Programs</Link>
                <Link to="/academics" onClick={toggleMenu}>Majors & Minors</Link>
                <Link to="/academics" onClick={toggleMenu}>Course Catalog</Link>
                <Link to="/academics" onClick={toggleMenu}>Faculty</Link>
              </div>
            </div>

            <div className="dropdown">
              <Link to="/admissions" className="dropdown-link">
                ADMISSIONS <IoChevronDown className="arrow" />
              </Link>
              <div className="dropdown-menu">
                <Link to="/admissions" onClick={toggleMenu}>Undergraduate Admissions</Link>
                <Link to="/admissions" onClick={toggleMenu}>Graduate Admissions</Link>
                <Link to="/admissions" onClick={toggleMenu}>Financial Aid</Link>
                <Link to="/admissions" onClick={toggleMenu}>Scholarships</Link>
              </div>
            </div>

          
            <div className="dropdown">
              <Link to="/courses" className="dropdown-link">
                COURSES <IoChevronDown className="arrow" />
              </Link>
              <div className="dropdown-menu">
                <Link to="/courses" onClick={toggleMenu}>Research Centers</Link>
                <Link to="/courses" onClick={toggleMenu}>Student Research</Link>
                <Link to="/courses" onClick={toggleMenu}>Publications</Link>
                <Link to="/courses" onClick={toggleMenu}>Innovation Hub</Link>
              </div>
            </div>


            <div className="dropdown">
              <Link to="/gallery" className="dropdown-link">
                GALLERY <IoChevronDown className="arrow" />
              </Link>
              <div className="dropdown-menu">
                <Link to="/gallery" onClick={toggleMenu}>Housing & Dining</Link>
                <Link to="/gallery" onClick={toggleMenu}>Student Activities</Link>
                <Link to="/gallery" onClick={toggleMenu}>Organizations</Link>
                <Link to="/gallery" onClick={toggleMenu}>Recreation</Link>
              </div>
            </div>

            <a href="/events" className="news-link" onClick={toggleMenu}>
              EVENTS AND ANNOUNCEMENTS <HiOutlineExternalLink className="external-icon" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
