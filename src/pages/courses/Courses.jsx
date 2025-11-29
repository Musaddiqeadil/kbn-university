import React from 'react';
import './Courses.css';
import { FaGraduationCap, FaBook, FaClock } from 'react-icons/fa';

const Courses = () => {
  return (
    <div className="courses-page">

      {/* PAGE HEADER */}
      <section className="courses-header">
        <div className="courses-header-overlay"></div>
        <div className="courses-header-content">
          <h1 className="courses-header-title">Our Courses</h1>
          <p className="courses-header-subtitle">Discover a wide range of programs designed to shape your future</p>
        </div>
      </section>

      {/* STATISTICS SECTION */}
      <section className="courses-stats-section">
        <div className="courses-stats-container">

          <div className="courses-stat-card">
            <div className="courses-stat-icon">
              <FaGraduationCap />
            </div>
            <h3 className="courses-stat-number">100+</h3>
            <p className="courses-stat-label">Total Programs</p>
          </div>

          <div className="courses-stat-card">
            <div className="courses-stat-icon">
              <FaBook />
            </div>
            <h3 className="courses-stat-number">6</h3>
            <p className="courses-stat-label">Academic Departments</p>
          </div>

          <div className="courses-stat-card">
            <div className="courses-stat-icon">
              <FaClock />
            </div>
            <h3 className="courses-stat-number">Flexible</h3>
            <p className="courses-stat-label">Duration Options</p>
          </div>

        </div>
      </section>

      {/* UNDERGRADUATE PROGRAMS SECTION */}
      <section className="undergraduate-section">
        <div className="undergraduate-container">
          <h2 className="undergraduate-title">Undergraduate Programs</h2>
          <p className="undergraduate-subtitle">Foundation programs for your academic journey</p>

          <div className="programs-table-wrapper">
            <table className="programs-table">
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Program Name</th>
                  <th>Duration</th>
                  <th>Specializations</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="code-cell">BE/B.Tech</td>
                  <td>Bachelor of Engineering/Technology</td>
                  <td>4 Years</td>
                  <td>CSE, ECE, ME, CE, EE</td>
                </tr>
                <tr>
                  <td className="code-cell">MBBS</td>
                  <td>Bachelor of Medicine & Surgery</td>
                  <td>5.5 Years</td>
                  <td>General Medicine</td>
                </tr>
                <tr>
                  <td className="code-cell">B.Pharm</td>
                  <td>Bachelor of Pharmacy</td>
                  <td>4 Years</td>
                  <td>Pharmacy</td>
                </tr>
                <tr>
                  <td className="code-cell">B.Sc</td>
                  <td>Bachelor of Science</td>
                  <td>3 Years</td>
                  <td>Physics, Chemistry, Biology, CS, Math</td>
                </tr>
                <tr>
                  <td className="code-cell">B.Com</td>
                  <td>Bachelor of Commerce</td>
                  <td>3 Years</td>
                  <td>General, Computer Applications</td>
                </tr>
                <tr>
                  <td className="code-cell">BA</td>
                  <td>Bachelor of Arts</td>
                  <td>3 Years</td>
                  <td>English, History, Political Science, Economics</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* POSTGRADUATE PROGRAMS SECTION */}
      <section className="postgraduate-section">
        <div className="postgraduate-container">
          <h2 className="postgraduate-title">Postgraduate Programs</h2>
          <p className="postgraduate-subtitle">Advanced studies for specialized expertise</p>

          <div className="programs-table-wrapper">
            <table className="programs-table postgraduate-table">
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Program Name</th>
                  <th>Duration</th>
                  <th>Specializations</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="code-cell">ME/M.Tech</td>
                  <td>Master of Engineering/Technology</td>
                  <td>2 Years</td>
                  <td>CSE, ECE, ME, CE, EE</td>
                </tr>
                <tr>
                  <td className="code-cell">MD/MS</td>
                  <td>Doctor of Medicine/Master of Surgery</td>
                  <td>3 Years</td>
                  <td>Various Specializations</td>
                </tr>
                <tr>
                  <td className="code-cell">M.Pharm</td>
                  <td>Master of Pharmacy</td>
                  <td>2 Years</td>
                  <td>Pharmaceutics, Pharmacology</td>
                </tr>
                <tr>
                  <td className="code-cell">M.Sc</td>
                  <td>Master of Science</td>
                  <td>2 Years</td>
                  <td>Physics, Chemistry, Biology, CS, Math</td>
                </tr>
                <tr>
                  <td className="code-cell">M.Com</td>
                  <td>Master of Commerce</td>
                  <td>2 Years</td>
                  <td>General, Finance</td>
                </tr>
                <tr>
                  <td className="code-cell">MA</td>
                  <td>Master of Arts</td>
                  <td>2 Years</td>
                  <td>English, History, Political Science, Economics</td>
                </tr>
                <tr>
                  <td className="code-cell">MBA</td>
                  <td>Master of Business Administration</td>
                  <td>2 Years</td>
                  <td>Finance, Marketing, HR, Operations</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* DIPLOMA & CERTIFICATE PROGRAMS SECTION */}
      <section className="diploma-section">
        <div className="diploma-container">
          <h2 className="diploma-title">Diploma & Certificate Programs</h2>
          <p className="diploma-subtitle">Specialized skill-based programs</p>

          <div className="diploma-cards">
            
            <div className="diploma-card">
              <div className="diploma-card-header">
                <span className="diploma-badge">Diploma</span>
                <div className="diploma-card-title">Diploma in Engineering</div>
              </div>
              <div className="diploma-card-body">
                <p className="diploma-specializations">CSE, ME, CE, EE</p>
              </div>
              <div className="diploma-card-footer">
                <FaClock className="diploma-clock-icon" />
                <span className="diploma-duration">3 Years</span>
              </div>
            </div>

            <div className="diploma-card">
              <div className="diploma-card-header">
                <span className="diploma-badge">Pharm.D</span>
                <div className="diploma-card-title">Doctor of Pharmacy</div>
              </div>
              <div className="diploma-card-body">
                <p className="diploma-specializations">Clinical Pharmacy</p>
              </div>
              <div className="diploma-card-footer">
                <FaClock className="diploma-clock-icon" />
                <span className="diploma-duration">6 Years</span>
              </div>
            </div>

            <div className="diploma-card">
              <div className="diploma-card-header">
                <span className="diploma-badge">PG Diploma</span>
                <div className="diploma-card-title">Post Graduate Diploma</div>
              </div>
              <div className="diploma-card-body">
                <p className="diploma-specializations">Management, IT</p>
              </div>
              <div className="diploma-card-footer">
                <FaClock className="diploma-clock-icon" />
                <span className="diploma-duration">1 Year</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      <section className="courses-cta-section">
        <div className="courses-cta-container">
          <h2 className="courses-cta-title">Ready to Apply?</h2>
          <p className="courses-cta-text">
            Take the first step towards your academic goals. Download our prospectus or start your application today.
          </p>
          <div className="courses-cta-buttons">
            <a href="/prospectus" className="courses-cta-button download">Download Prospectus</a>
            <a href="/apply" className="courses-cta-button apply">Apply Online</a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Courses;