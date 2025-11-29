import React from 'react';
import './About.css';
import { FaMedal, FaHistory, FaTrophy, FaEye, FaBullseye } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-page">

      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="page-header-overlay"></div>
        <div className="page-header-content">
          <h1 className="page-header-title">About KBN University</h1>
          <p className="page-header-subtitle">Legacy of Excellence Since 1975</p>
        </div>
      </section>

      {/* OUR OVERVIEW SECTION */}
      <section className="overview-section">
        <div className="overview-container">
          <h2 className="overview-heading">Our Overview</h2>

          <p className="overview-text">
            KBN University, established in 1975, stands as a beacon of higher education in Karnataka. With a
            commitment to academic excellence, research innovation, and holistic development, we have been shaping
            future leaders for over five decades.
          </p>

          <p className="overview-text">
            Our university encompasses diverse disciplines including Engineering, Medical Sciences, Pharmacy, Pure
            Sciences, Commerce, and Arts. We pride ourselves on our state-of-the-art infrastructure, distinguished
            faculty, and a vibrant campus life that nurtures both academic and personal growth.
          </p>

          <div className="overview-cards">

            <div className="overview-card">
              <div className="overview-icon navy-icon">
                <FaMedal />
              </div>
              <h3 className="overview-card-title">Accreditation</h3>
              <p className="overview-card-text">NAAC A+ Grade, UGC Recognized, AICTE Approved</p>
            </div>

            <div className="overview-card">
              <div className="overview-icon maroon-icon">
                <FaHistory />
              </div>
              <h3 className="overview-card-title">Heritage</h3>
              <p className="overview-card-text">50+ Years of Academic Excellence</p>
            </div>

            <div className="overview-card">
              <div className="overview-icon navy-icon">
                <FaTrophy />
              </div>
              <h3 className="overview-card-title">Rankings</h3>
              <p className="overview-card-text">Top 100 Universities in India</p>
            </div>

          </div>
        </div>
      </section>

      {/* OUR HISTORY SECTION */}
      <section className="history-section">
        <div className="history-container">

          <div className="history-content">
            <h2 className="history-heading">Our History</h2>

            <div className="timeline">

              <div className="timeline-item">
                <div className="timeline-year">1975</div>
                <div className="timeline-content">
                  <h3 className="timeline-title">Foundation</h3>
                  <p className="timeline-text">
                    KBN University was established with a vision to provide quality education to
                    the students of North Karnataka region.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-year">1985</div>
                <div className="timeline-content">
                  <h3 className="timeline-title">Expansion</h3>
                  <p className="timeline-text">
                    Addition of Medical College and Pharmacy departments, expanding our
                    educational offerings.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-year">2000</div>
                <div className="timeline-content">
                  <h3 className="timeline-title">NAAC Accreditation</h3>
                  <p className="timeline-text">
                    Received NAAC A Grade accreditation, recognizing our commitment to quality
                    education.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-year">2020</div>
                <div className="timeline-content">
                  <h3 className="timeline-title">Modern Era</h3>
                  <p className="timeline-text">
                    Upgraded to NAAC A+ status with state-of-the-art facilities and digital
                    infrastructure.
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="history-image">
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800" alt="Students in classroom" />
          </div>

        </div>
      </section>

      {/* VISION AND MISSION SECTION */}
      <section className="vision-mission-section">
        <div className="vision-mission-container">

          <div className="vision-card">
            <div className="vm-header">
              <div className="vm-icon-wrapper">
                <FaEye className="vm-icon" />
              </div>
              <h3 className="vm-title">Our Vision</h3>
            </div>
            <p className="vm-text">
              To be a globally recognized institution of excellence in higher education, fostering innovation,
              research, and holistic development. We aspire to create leaders who contribute meaningfully to
              society and drive positive change in the world.
            </p>
          </div>

          <div className="mission-card">
            <div className="vm-header">
              <div className="vm-icon-wrapper">
                <FaBullseye className="vm-icon" />
              </div>
              <h3 className="vm-title">Our Mission</h3>
            </div>
            <ul className="mission-list">
              <li>Provide quality education that nurtures critical thinking and innovation</li>
              <li>Foster research and development across all disciplines</li>
              <li>Promote inclusive education accessible to all sections of society</li>
              <li>Build industry partnerships for practical learning experiences</li>
            </ul>
          </div>

        </div>
      </section>

      {/* OUR LEADERSHIP SECTION */}
      <section className="leadership-section">
        <div className="leadership-container">
          <h2 className="leadership-heading">Our Leadership</h2>
          <p className="leadership-subtitle">Meet the distinguished leaders guiding KBN University towards excellence</p>

          <div className="leadership-grid">

            <div className="leader-card">
              <div className="leader-image">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400" alt="Dr. Rajesh Kumar" />
              </div>
              <h3 className="leader-name">Dr. Rajesh Kumar</h3>
              <p className="leader-position">Chancellor</p>
            </div>

            <div className="leader-card">
              <div className="leader-image">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400" alt="Dr. Priya Sharma" />
              </div>
              <h3 className="leader-name">Dr. Priya Sharma</h3>
              <p className="leader-position">Vice Chancellor</p>
            </div>

            <div className="leader-card">
              <div className="leader-image">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400" alt="Dr. Anil Patil" />
              </div>
              <h3 className="leader-name">Dr. Anil Patil</h3>
              <p className="leader-position">Dean - Engineering</p>
            </div>

            <div className="leader-card">
              <div className="leader-image">
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400" alt="Dr. Meera Reddy" />
              </div>
              <h3 className="leader-name">Dr. Meera Reddy</h3>
              <p className="leader-position">Dean - Medical Sciences</p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
