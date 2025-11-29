import React, { useState } from 'react';
import './Events.css';
import { FaMapMarkerAlt, FaClock, FaBell, FaCalendar, FaChevronRight } from 'react-icons/fa';

const Events = () => {
  const [activeTab, setActiveTab] = useState('events');

  const upcomingEvents = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800',
      badge: 'Academic',
      badgeColor: '#903232',
      title: 'Annual Convocation 2025',
      description: 'Graduation ceremony for the batch of 2024. Chief Guest: Hon. Governor of Karnataka',
      date: { day: '15', month: 'Dec', year: '2024' },
      location: 'Main Auditorium',
      time: '10:00 AM'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800',
      badge: 'Conference',
      badgeColor: '#903232',
      title: 'Science & Technology Symposium',
      description: 'National level symposium featuring research presentations, keynote speeches, and technical exhibitions',
      date: { day: '28', month: 'Feb', year: '2025' },
      location: 'Convention Center',
      time: '9:00 AM'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800',
      badge: 'Cultural',
      badgeColor: '#903232',
      title: 'Kalakriti - Cultural Fest',
      description: 'Annual cultural festival with music, dance, drama, and various cultural competitions',
      date: { day: '20', month: 'Jan', year: '2025' },
      location: 'Open Air Theatre',
      time: '5:00 PM'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800',
      badge: 'Workshop',
      badgeColor: '#903232',
      title: 'Entrepreneurship Development Workshop',
      description: 'Three-day intensive workshop on startup ecosystem, business planning, and funding strategies',
      date: { day: '5', month: 'Feb', year: '2025' },
      location: 'Innovation Hub',
      time: '9:30 AM'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
      badge: 'Sports',
      badgeColor: '#903232',
      title: 'Inter-University Sports Meet',
      description: 'Annual sports championship featuring athletics, cricket, football, basketball, and other indoor games',
      date: { day: '15', month: 'Feb', year: '2025' },
      location: 'University Sports Complex',
      time: '7:00 AM'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800',
      badge: 'Career Fair',
      badgeColor: '#903232',
      title: 'Campus Placement Drive 2025',
      description: 'Major companies across IT, Engineering, Finance sectors recruiting for internships and full-time positions',
      date: { day: '28', month: 'Feb', year: '2025' },
      location: 'Convention Hall',
      time: '10:00 AM'
    }
  ];

  const announcements = [
    {
      id: 1,
      icon: 'bell',
      iconColor: '#903232',
      title: 'Winter Vacation Notice',
      description: 'The university will be closed for winter vacation from December 24, 2024 to January 2, 2025.',
      date: 'Nov 25, 2024',
      badge: 'Important',
      leftBorder: '#903232'
    },
    {
      id: 2,
      icon: 'bell',
      iconColor: '#903232',
      title: 'Examination Schedule Released',
      description: 'End semester examination schedule for all UG and PG programs has been published on the university portal.',
      date: 'Nov 20, 2024',
      badge: 'Important',
      leftBorder: '#903232'
    },
    {
      id: 3,
      icon: 'bell',
      iconColor: '#32436d',
      title: 'Workshop on Research Methodology',
      description: 'Three-day workshop for research scholars scheduled from December 5-7, 2024. Registration open.',
      date: 'Nov 18, 2024',
      badge: null,
      leftBorder: '#32436d'
    },
    {
      id: 4,
      icon: 'bell',
      iconColor: '#32436d',
      title: 'Library Timing Extension',
      description: 'Library hours extended till 11:00 PM during examination period.',
      date: 'Nov 15, 2024',
      badge: null,
      leftBorder: '#32436d'
    },
    {
      id: 5,
      icon: 'bell',
      iconColor: '#903232',
      title: 'Scholarship Application Deadline',
      description: 'Last date to apply for merit-based scholarships: November 30, 2024.',
      date: 'Nov 12, 2024',
      badge: 'Important',
      leftBorder: '#903232'
    },
    {
      id: 6,
      icon: 'bell',
      iconColor: '#32436d',
      title: 'Campus Placement Drive',
      description: 'Major IT companies will be visiting campus for placement drives. Students to register through placement cell.',
      date: 'Nov 10, 2024',
      badge: null,
      leftBorder: '#32436d'
    }
  ];

  return (
    <div className="events-page">
      
      {/* TABS SECTION */}
      <section className="events-tabs-section">
        <div className="events-tabs-container">
          <button
            className={`events-tab ${activeTab === 'events' ? 'active' : ''}`}
            onClick={() => setActiveTab('events')}
          >
            Events
          </button>
          <button
            className={`events-tab ${activeTab === 'announcements' ? 'active' : ''}`}
            onClick={() => setActiveTab('announcements')}
          >
            Announcements
          </button>
        </div>
      </section>

      {/* CONTENT SECTION */}
      {activeTab === 'events' && (
        <section className="events-content-section">
          <div className="events-content-container">
            <h2 className="events-section-heading">Upcoming Events</h2>
            <p className="events-section-subtitle">Don't miss out on these exciting events</p>

            <div className="events-grid">
              {upcomingEvents.map(event => (
                <div key={event.id} className="event-card">
                  <div className="event-card-inner">
                    <div className="event-image-wrapper">
                      <img src={event.image} alt={event.title} className="event-image" />
                    </div>

                    <div className="event-date-box">
                      <div className="event-year">{event.date.year}</div>
                      <div className="event-month">{event.date.month}</div>
                      <div className="event-day">{event.date.day}</div>
                    </div>

                    <div className="event-content">
                      <h3 className="event-title">{event.title}</h3>
                      <p className="event-description">{event.description}</p>

                      <div className="event-meta">
                        <div className="event-meta-item">
                          <FaMapMarkerAlt className="event-icon" />
                          <span>{event.location}</span>
                        </div>
                        <div className="event-meta-item">
                          <FaClock className="event-icon" />
                          <span>{event.time}</span>
                        </div>
                      </div>

                      <button className="event-register-btn">
                        <span>Register Now</span>
                        <FaChevronRight />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeTab === 'announcements' && (
        <section className="announcements-content-section">
          <div className="announcements-content-container">
            <h2 className="announcements-section-heading">Recent Announcements</h2>
            <p className="announcements-section-subtitle">Important updates and notices</p>

            <div className="announcements-grid">
              {announcements.map(announcement => (
                <div key={announcement.id} className="announcement-card" style={{ borderLeftColor: announcement.leftBorder }}>
                  <div className="announcement-icon" style={{ backgroundColor: announcement.iconColor }}>
                    <FaBell />
                  </div>

                  <div className="announcement-content">
                    <div className="announcement-header">
                      <h3 className="announcement-title">{announcement.title}</h3>
                      {announcement.badge && (
                        <span className="announcement-badge">{announcement.badge}</span>
                      )}
                    </div>
                    <p className="announcement-description">{announcement.description}</p>
                    <div className="announcement-date">
                      <FaCalendar className="date-icon" />
                      <span>{announcement.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
};

export default Events;