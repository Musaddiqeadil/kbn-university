import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
  };

  return (
    <div className="contact-page">
      
      {/* CONTACT FORM SECTION */}
      <section className="contact-form-section">
        <div className="contact-form-container">
          <h2 className="contact-form-heading">Get In Touch</h2>
          <p className="contact-form-subtitle">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>

          <div className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your first name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <button onClick={handleSubmit} className="submit-btn">Submit</button>
          </div>
        </div>
      </section>

      {/* CONTACT NUMBERS SECTION */}
      <section className="contact-numbers-section">
        <div className="contact-numbers-container">
          
          {/* Administrative Office and Admission Cell */}
          <div className="office-grid">
            <div className="office-card">
              <h3 className="office-title">Administrative Office</h3>
              <h4 className="office-subtitle">Khaja Bandanawaz University</h4>
              <p className="office-address">
                Administrative Building,<br />
                Khaja Bandanawaz University Campus,<br />
                Rauza-i Buzurg, KALABURAGI - 585104.
              </p>
              <div className="office-contact">
                <p>Tel : 08472 - 245555, 236041, 228540,<br />224591, 267657.</p>
                <p>Fax: 08472 - 271111</p>
                <p>Email : contact@kbn.university</p>
              </div>
            </div>

            <div className="office-card">
              <h3 className="office-title">Admission Cell</h3>
              <p className="office-address">
                Khaja Bandanawaz University Campus,<br />
                Rauza-i Buzurg, KALABURAGI - 585 104.<br />
                Contact No. +91 8472 236041, 228540,<br />
                224591, 267657.
              </p>
              <p className="office-contact">
                (Exten. 128, 136 & 137)<br />
                Email : admissions@kbn.university
              </p>
            </div>
          </div>

          {/* Key Officials */}
          <div className="officials-grid">
            <div className="official-card">
              <h4 className="official-name">Mir Vilayat Ali</h4>
              <p className="official-position">Registrar</p>
              <p className="official-contact">
                registrar@kbn.university<br />
                08472 - 245555,236041,228540<br />
                (Extn: 204)
              </p>
            </div>

            <div className="official-card">
              <h4 className="official-name">Prof. Syed Ashfaq Ahmed</h4>
              <p className="official-position">Pro Vice Chancellor</p>
              <p className="official-contact">
                pvc@kbn.university<br />
                08472 - 245555,236041,228540<br />
                (Extn: 204)
              </p>
            </div>

            <div className="official-card">
              <h4 className="official-name">Mir Vilayat Ali</h4>
              <p className="official-position">Registrar</p>
              <p className="official-contact">
                registrar@kbn.university<br />
                08472 - 245555,236041,228540<br />
                (Extn: 204)
              </p>
            </div>

            <div className="official-card">
              <h4 className="official-name">Dr. Mohammed Abdul Baseer</h4>
              <p className="official-position">Controller of Examinations (i/c)</p>
              <p className="official-contact">
                d.controller@kbn.university<br />
                08472 - 245555,236041,228540 (Extn: 203)
              </p>
            </div>
          </div>

          {/* Faculties Contact */}
          <div className="faculties-section">
            <h3 className="faculties-heading">FACULTIES CONTACT DETAILS</h3>
            
            <div className="faculties-grid">
              <div className="faculty-card">
                <h4 className="faculty-name">Dr. S.B. Siddesh</h4>
                <p className="faculty-position">Dean</p>
                <p className="faculty-department">Faculty of Medical Sciences</p>
                <p className="faculty-contact">
                  dean.medicine@kbn.university<br />
                  Tel: 08472 - 245555,236041,228540
                </p>
              </div>

              <div className="faculty-card">
                <h4 className="faculty-name">Prof. Subhash Kamal</h4>
                <p className="faculty-position">Dean</p>
                <p className="faculty-department">Faculty of Engineering & Technology</p>
                <p className="faculty-contact">
                  dean.et@kbn.university<br />
                  08472 - 245555,236041,228540
                </p>
              </div>

              <div className="faculty-card">
                <h4 className="faculty-name">Dr. Nishat Arif Hussaini</h4>
                <p className="faculty-position">Dean</p>
                <p className="faculty-department">Faculty of Languages</p>
                <p className="faculty-contact">
                  dean.ahss@kbn.university
                </p>
              </div>

              <div className="faculty-card">
                <h4 className="faculty-name">Prof. Mohammad Iqbal Mattoo</h4>
                <p className="faculty-position">Dean</p>
                <p className="faculty-department">Faculty of Education</p>
                <p className="faculty-contact">
                  iqbalmattoo@kbn.university
                </p>
              </div>

              <div className="faculty-card">
                <h4 className="faculty-name">Dr. Geetanjali R Kamble</h4>
                <p className="faculty-position">Dean</p>
                <p className="faculty-department">Faculty of Sciences</p>
                <p className="faculty-contact">
                  dean.science@kbn.university
                </p>
              </div>

              <div className="faculty-card">
                <h4 className="faculty-name">Dr. K.S. Srinivas Rao</h4>
                <p className="faculty-position">Dean</p>
                <p className="faculty-department">Faculty of Commerce & Management</p>
                <p className="faculty-contact">
                  dean.fcm@kbn.university
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* GOOGLE MAP SECTION */}
      <section className="map-section">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1511.3024951901198!2d76.851411318739!3d17.35200735162715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDIxJzA5LjgiTiA3NsKwNTEnMTAuNiJF!5e0!3m2!1sen!2sin!4v1764431134748!5m2!1sen!2sin"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="KBN University Location"
          ></iframe>
        </div>
      </section>

    </div>
  );
};

export default Contact;