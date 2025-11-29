import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'campus', label: 'Campus' },
    { id: 'laboratories', label: 'Laboratories' },
    { id: 'hostels', label: 'Hostels' },
    { id: 'events', label: 'Events' },
    { id: 'sports', label: 'Sports' }
  ];

  const galleryImages = [
    { id: 1, url: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800', category: 'campus', alt: 'Campus Building' },
    { id: 2, url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800', category: 'campus', alt: 'University Campus' },
    { id: 3, url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800', category: 'campus', alt: 'Campus Aerial View' },
    { id: 4, url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800', category: 'laboratories', alt: 'Science Lab' },
    { id: 5, url: 'https://plus.unsplash.com/premium_photo-1661375213609-d62921fe59f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzZWFyY2glMjBsYWJ8ZW58MHx8MHx8fDA%3D', category: 'laboratories', alt: 'Research Lab' },
    { id: 6, url: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800', category: 'laboratories', alt: 'Computer Lab' },
    { id: 7, url: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800', category: 'hostels', alt: 'Student Hostel' },
    { id: 8, url: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800', category: 'hostels', alt: 'Hostel Room' },
    { id: 9, url: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800', category: 'hostels', alt: 'Hostel Common Area' },
    { id: 10, url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800', category: 'events', alt: 'Annual Convocation' },
    { id: 11, url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800', category: 'events', alt: 'Cultural Event' },
    { id: 12, url: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800', category: 'events', alt: 'Technical Fest' },
    { id: 13, url: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800', category: 'sports', alt: 'Sports Complex' },
    { id: 14, url: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=800', category: 'sports', alt: 'Basketball Court' },
    { id: 15, url: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=800', category: 'sports', alt: 'Football Field' },
  ];

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="gallery-page">

      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="page-header-overlay"></div>
        <div className="page-header-content">
          <h1 className="page-header-title">Campus Gallery</h1>
          <p className="page-header-subtitle">Explore our beautiful campus through these stunning visuals</p>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="gallery-section">
        <div className="gallery-container">

          {/* CATEGORY TABS */}
          <div className="gallery-tabs">
            {categories.map(category => (
              <button
                key={category.id}
                className={`gallery-tab ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* GALLERY GRID */}
          <div className="gallery-grid">
            {filteredImages.map(image => (
              <div key={image.id} className="gallery-item">
                <img src={image.url} alt={image.alt} />
                <div className="gallery-item-overlay">
                  <span className="gallery-item-title">{image.alt}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default Gallery;
