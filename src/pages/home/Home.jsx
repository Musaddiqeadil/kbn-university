import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Welcome to KBN University</h1>
          <p className="hero-subtitle">
            Empowering minds, transforming futures. Join us in our pursuit of academic excellence and innovation.
          </p>
          <div className="hero-buttons">
            <a href="/admissions" className="hero-btn apply-btn">Apply Now</a>
            <a href="/about" className="hero-btn learn-btn">Learn More</a>
          </div>
        </div>
      </section>

      {/* NEWS SECTION */}
      <section className="news-section">
        <div className="news-container">

          <div className="news-card gradient-bg">
            <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600" alt="NAAC Accreditation" className="card-image" />
            <div className="card-content">
              <h3 className="card-title">KBN University Achieves NAAC A+ Grade Accreditation</h3>
            </div>
          </div>

          <div className="news-card gradient-bg">
            <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600" alt="Campus Placement" className="card-image" />
            <div className="card-content">
              <h3 className="card-title">Record-Breaking Placement Season: 100% Success in CSE Department</h3>
            </div>
          </div>

          <div className="news-card image-bg">
            <img src="https://images.unsplash.com/photo-1562774053-701939374585?w=1200" alt="Engineering Block" className="card-bg-image" />
            <div className="card-content">
              <h3 className="card-title">State-of-the-Art Engineering Block Inaugurated with Advanced Research Labs</h3>
            </div>
          </div>

        </div>

        <div className="news-links">
          <a href="/events" className="news-link-item">University Announcements ↗</a>
          <a href="/events" className="news-link-item">University Events ↗</a>
        </div>
      </section>

      {/* QUICK ACCESS SECTION */}
      <section className="quick-access-section">
        <h2 className="quick-access-title">Quick Access</h2>
        <div className="quick-access-container">

          <a href="/admissions" className="quick-access-card maroon-card">
            <h3 className="qa-card-title">Apply Now</h3>
            <p className="qa-card-description">Start your admission process</p>
            <span className="qa-card-arrow">→</span>
          </a>

          <a href="/courses" className="quick-access-card navy-card">
            <h3 className="qa-card-title">Courses</h3>
            <p className="qa-card-description">Explore our programs</p>
            <span className="qa-card-arrow">→</span>
          </a>

          <a href="/gallery" className="quick-access-card maroon-card">
            <h3 className="qa-card-title">Virtual Tour</h3>
            <p className="qa-card-description">Explore our campus</p>
            <span className="qa-card-arrow">→</span>
          </a>

          <a href="/contact" className="quick-access-card navy-card">
            <h3 className="qa-card-title">Contact</h3>
            <p className="qa-card-description">Get in touch with us</p>
            <span className="qa-card-arrow">→</span>
          </a>

        </div>
      </section>

      {/* UPCOMING EVENTS SECTION */}
      <section className="events-section">
        <div className="events-header">
          <div>
            <h2 className="events-title">Upcoming Events</h2>
            <p className="events-subtitle">Stay updated with our latest events and activities</p>
          </div>
          <a href="/events" className="view-all-link">View All →</a>
        </div>

        <div className="events-container">

          <div className="event-card">
            <div className="event-date-badge">
              <span className="event-year">2025</span>
              <span className="event-date">Dec 15</span>
            </div>
            <div className="event-details">
              <h3 className="event-name">Annual Convocation 2025</h3>
              <p className="event-location">📍 Main Auditorium</p>
            </div>
          </div>

          <div className="event-card">
            <div className="event-date-badge">
              <span className="event-year">2025</span>
              <span className="event-date">Jan 10</span>
            </div>
            <div className="event-details">
              <h3 className="event-name">Science & Tech Symposium</h3>
              <p className="event-location">📍 Convention Center</p>
            </div>
          </div>

          <div className="event-card">
            <div className="event-date-badge">
              <span className="event-year">2025</span>
              <span className="event-date">Jan 20</span>
            </div>
            <div className="event-details">
              <h3 className="event-name">Cultural Fest - Kalakriti</h3>
              <p className="event-location">📍 Open Air Theatre</p>
            </div>
          </div>

        </div>
      </section>

      {/* CAMPUS LIFE SECTION */}
      <section className="campus-life-section">
        <div className="campus-life-header">
          <div>
            <h2 className="campus-life-title">Campus Life</h2>
            <p className="campus-life-subtitle">A glimpse of our vibrant campus community</p>
          </div>
          <a href="/gallery" className="view-gallery-link">View Gallery →</a>
        </div>

        <div className="campus-gallery">

          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1562774053-701939374585?w=600" alt="Campus Building" />
          </div>

          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600" alt="Lab Research" />
          </div>

          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600" alt="Campus Green" />
          </div>

          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1758270705518-b61b40527e76?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Students Group" />
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;
