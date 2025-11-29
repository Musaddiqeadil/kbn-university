import React from 'react';
import './Acadmic.css';
import { FaBook, FaUsers, FaAward, FaSchool, FaCog, FaHospital, FaFlask, FaPills, FaCalculator, FaPalette } from 'react-icons/fa';

const Acadmic = () => {
  return (
    <div className="acadmic-page">

      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="page-header-overlay"></div>
        <div className="page-header-content">
          <h1 className="page-header-title">Academic Excellence</h1>
          <p className="page-header-subtitle">Explore our diverse range of departments and programs</p>
        </div>
      </section>

      {/* STATISTICS SECTION */}
      <section className="stats-section">
        <div className="stats-container">

          <div className="stat-card">
            <div className="stat-icon">
              <FaBook />
            </div>
            <h3 className="stat-number">6</h3>
            <p className="stat-label">Departments</p>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <FaUsers />
            </div>
            <h3 className="stat-number">100+</h3>
            <p className="stat-label">Programs</p>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <FaAward />
            </div>
            <h3 className="stat-number">800+</h3>
            <p className="stat-label">Faculty</p>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <FaSchool />
            </div>
            <h3 className="stat-number">15000+</h3>
            <p className="stat-label">Students</p>
          </div>

        </div>
      </section>

      {/* OUR DEPARTMENTS SECTION */}
      <section className="departments-section">
        <div className="departments-container">

          <div className="departments-header">
            <h2 className="departments-title">Our Departments</h2>
            <p className="departments-subtitle">
              Choose from our wide range of academic departments, each committed to excellence in teaching, research, and innovation.
            </p>
          </div>

          <div className="departments-grid">

            {/* Engineering Department */}
            <div className="department-card">
              <div className="department-image">
                <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800" alt="Engineering Department" />
              </div>
              <div className="department-content">
                <div className="department-icon">
                  <FaCog />
                </div>
                <h3 className="department-name">Engineering</h3>
                <p className="department-description">
                  State-of-the-art engineering programs with industry-aligned curriculum covering Computer Science, Mechanical, Civil, Electrical, and Electronics branches.
                </p>
                <div className="department-info">
                  <p className="department-programs"><FaBook className="info-icon" /> <strong>Programs:</strong> B.Tech, M.Tech, PhD</p>
                  <p className="department-students"><FaUsers className="info-icon" /> <strong>Students Enrolled:</strong> 5000+</p>
                </div>
                <a href="/departments/engineering" className="department-button">Explore Programs →</a>
              </div>
            </div>

            {/* Medical Sciences Department */}
            <div className="department-card">
              <div className="department-image">
                <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800" alt="Medical Sciences Department" />
              </div>
              <div className="department-content">
                <div className="department-icon">
                  <FaHospital />
                </div>
                <h3 className="department-name">Medical Sciences</h3>
                <p className="department-description">
                  Comprehensive medical education with attached teaching hospital, offering undergraduate and postgraduate programs in various medical specialties.
                </p>
                <div className="department-info">
                  <p className="department-programs"><FaBook className="info-icon" /> <strong>Programs:</strong> MBBS, MD, MS, DM</p>
                  <p className="department-students"><FaUsers className="info-icon" /> <strong>Students Enrolled:</strong> 1500+</p>
                </div>
                <a href="/departments/medical" className="department-button">Explore Programs →</a>
              </div>
            </div>

            {/* Science Department */}
            <div className="department-card">
              <div className="department-image">
                <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800" alt="Science Department" />
              </div>
              <div className="department-content">
                <div className="department-icon">
                  <FaFlask />
                </div>
                <h3 className="department-name">Science</h3>
                <p className="department-description">
                  Pure science programs in Physics, Chemistry, Biology, Mathematics, and Computer Science with focus on research and innovation.
                </p>
                <div className="department-info">
                  <p className="department-programs"><FaBook className="info-icon" /> <strong>Programs:</strong> B.Sc, M.Sc, PhD</p>
                  <p className="department-students"><FaUsers className="info-icon" /> <strong>Students Enrolled:</strong> 3000+</p>
                </div>
                <a href="/departments/science" className="department-button">Explore Programs →</a>
              </div>
            </div>

            {/* Pharmacy Department */}
            <div className="department-card">
              <div className="department-image">
                <img src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800" alt="Pharmacy Department" />
              </div>
              <div className="department-content">
                <div className="department-icon">
                  <FaPills />
                </div>
                <h3 className="department-name">Pharmacy</h3>
                <p className="department-description">
                  Advanced pharmacy education focusing on pharmaceutical sciences, drug development, and clinical pharmacy practices.
                </p>
                <div className="department-info">
                  <p className="department-programs"><FaBook className="info-icon" /> <strong>Programs:</strong> B.Pharm, M.Pharm, Pharm.D.</p>
                  <p className="department-students"><FaUsers className="info-icon" /> <strong>Students Enrolled:</strong> 800+</p>
                </div>
                <a href="/departments/pharmacy" className="department-button">Explore Programs →</a>
              </div>
            </div>

            {/* Commerce Department */}
            <div className="department-card">
              <div className="department-image">
                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800" alt="Commerce Department" />
              </div>
              <div className="department-content">
                <div className="department-icon">
                  <FaCalculator />
                </div>
                <h3 className="department-name">Commerce</h3>
                <p className="department-description">
                  Modern commerce and management education preparing students for careers in business, finance, and entrepreneurship.
                </p>
                <div className="department-info">
                  <p className="department-programs"><FaBook className="info-icon" /> <strong>Programs:</strong> B.Com, M.Com, MBA, PhD</p>
                  <p className="department-students"><FaUsers className="info-icon" /> <strong>Students Enrolled:</strong> 2500+</p>
                </div>
                <a href="/departments/commerce" className="department-button">Explore Programs →</a>
              </div>
            </div>

            {/* Arts Department */}
            <div className="department-card">
              <div className="department-image">
                <img src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800" alt="Arts Department" />
              </div>
              <div className="department-content">
                <div className="department-icon">
                  <FaPalette />
                </div>
                <h3 className="department-name">Arts</h3>
                <p className="department-description">
                  Liberal arts education covering languages, literature, history, sociology, and fine arts, promoting critical thinking and creativity.
                </p>
                <div className="department-info">
                  <p className="department-programs"><FaBook className="info-icon" /> <strong>Programs:</strong> BA, MA, PhD</p>
                  <p className="department-students"><FaUsers className="info-icon" /> <strong>Students Enrolled:</strong> 2200+</p>
                </div>
                <a href="/departments/arts" className="department-button">Explore Programs →</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Start Your Journey?</h2>
          <p className="cta-text">
            Explore our comprehensive course offerings and find the perfect program for your academic goals.
          </p>
          <div className="cta-buttons">
            <a href="/courses" className="cta-button primary">View All Courses</a>
            <a href="/admissions" className="cta-button secondary">Admission Process</a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Acadmic;
