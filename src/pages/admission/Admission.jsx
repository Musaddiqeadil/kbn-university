import React from 'react';
import './Admission.css';

const Admission = () => {
  return (
    <div className="admissions-page">
      {/* PAGE HEADER */}
      <section className="admissions-header">
        <div className="admissions-header-overlay"></div>
        <div className="admissions-header-content">
          <h1 className="admissions-header-title">Admissions 2025</h1>
          <p className="admissions-header-subtitle">
            Join KBN University and embark on your journey towards academic excellence
          </p>
        </div>
      </section>

      {/* ADMISSION PROCESS SECTION */}
      <section className="admission-process-section">
        <div className="admission-process-container">
          <h2 className="admission-process-heading">Admission Process</h2>
          <p className="admission-process-subtitle">
            Follow these simple steps to complete your admission process
          </p>

          <div className="process-steps">
            
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-icon navy-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <h3 className="step-title">Online Registration</h3>
              <p className="step-description">
                Fill the online application form with personal and academic details
              </p>
            </div>

            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-icon navy-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3 className="step-title">Document Submission</h3>
              <p className="step-description">
                Upload all required documents including mark sheets and certificates
              </p>
            </div>

            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-icon navy-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="5" width="20" height="14" rx="2"></rect>
                  <line x1="2" y1="10" x2="22" y2="10"></line>
                </svg>
              </div>
              <h3 className="step-title">Fee Payment</h3>
              <p className="step-description">
                Pay the application fee through online payment gateway
              </p>
            </div>

            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-icon navy-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h3 className="step-title">Admission Confirmation</h3>
              <p className="step-description">
                Receive admission confirmation and further instructions via email
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ELIGIBILITY CRITERIA SECTION */}
      <section className="eligibility-section">
        <div className="eligibility-container">
          <h2 className="eligibility-heading">Eligibility Criteria</h2>
          <p className="eligibility-subtitle">
            Check the minimum requirements for different programs
          </p>

          <div className="eligibility-list">

            <div className="eligibility-card">
              <div className="eligibility-program">
                <h3 className="program-name">B.E/B.Tech</h3>
              </div>
              <div className="eligibility-academic">
                <p className="criteria-label">Academic Criteria</p>
                <p className="criteria-text">Minimum 50% in 10+2 with Physics, Chemistry, Mathematics</p>
              </div>
              <div className="eligibility-exam">
                <p className="criteria-label">Entrance Exam</p>
                <p className="criteria-text exam-text">KCET / JEE Main / COMED-K</p>
              </div>
            </div>

            <div className="eligibility-card">
              <div className="eligibility-program">
                <h3 className="program-name">MBBS</h3>
              </div>
              <div className="eligibility-academic">
                <p className="criteria-label">Academic Criteria</p>
                <p className="criteria-text">Minimum 50% in 10+2 with Physics, Chemistry, Biology</p>
              </div>
              <div className="eligibility-exam">
                <p className="criteria-label">Entrance Exam</p>
                <p className="criteria-text exam-text">NEET UG</p>
              </div>
            </div>

            <div className="eligibility-card">
              <div className="eligibility-program">
                <h3 className="program-name">B.Pharm</h3>
              </div>
              <div className="eligibility-academic">
                <p className="criteria-label">Academic Criteria</p>
                <p className="criteria-text">Minimum 50% in 10+2 with Physics, Chemistry, Mathematics/Biology</p>
              </div>
              <div className="eligibility-exam">
                <p className="criteria-label">Entrance Exam</p>
                <p className="criteria-text exam-text">KCET / COMEDK</p>
              </div>
            </div>

            <div className="eligibility-card">
              <div className="eligibility-program">
                <h3 className="program-name">B.Sc</h3>
              </div>
              <div className="eligibility-academic">
                <p className="criteria-label">Academic Criteria</p>
                <p className="criteria-text">Minimum 50% in 10+2 with relevant subjects</p>
              </div>
              <div className="eligibility-exam">
                <p className="criteria-label">Entrance Exam</p>
                <p className="criteria-text exam-text">Merit Based</p>
              </div>
            </div>

            <div className="eligibility-card">
              <div className="eligibility-program">
                <h3 className="program-name">B.Com</h3>
              </div>
              <div className="eligibility-academic">
                <p className="criteria-label">Academic Criteria</p>
                <p className="criteria-text">Minimum 50% in 10+2 from recognized board</p>
              </div>
              <div className="eligibility-exam">
                <p className="criteria-label">Entrance Exam</p>
                <p className="criteria-text exam-text">Merit Based</p>
              </div>
            </div>

            <div className="eligibility-card">
              <div className="eligibility-program">
                <h3 className="program-name">M.Tech</h3>
              </div>
              <div className="eligibility-academic">
                <p className="criteria-label">Academic Criteria</p>
                <p className="criteria-text">B.E/B.Tech with minimum 50% marks</p>
              </div>
              <div className="eligibility-exam">
                <p className="criteria-label">Entrance Exam</p>
                <p className="criteria-text exam-text">GATE / PGCET</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FEE STRUCTURE SECTION */}
      <section className="fee-structure-section">
        <div className="fee-structure-container">
          <h2 className="fee-structure-heading">Fee Structure (Annual)</h2>
          <p className="fee-structure-subtitle">
            Transparent fee structure for various programs
          </p>

          <div className="fee-table-wrapper">
            <table className="fee-table">
              <thead>
                <tr>
                  <th>Program</th>
                  <th>Tuition Fee</th>
                  <th>Other Fees</th>
                  <th>Total (Per Year)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>B.E/B.Tech</td>
                  <td>₹1,20,000</td>
                  <td>₹15,000</td>
                  <td className="total-fee">₹1,35,000</td>
                </tr>
                <tr>
                  <td>MBBS</td>
                  <td>₹8,50,000</td>
                  <td>₹50,000</td>
                  <td className="total-fee">₹9,00,000</td>
                </tr>
                <tr>
                  <td>B.Pharm</td>
                  <td>₹80,000</td>
                  <td>₹12,000</td>
                  <td className="total-fee">₹92,000</td>
                </tr>
                <tr>
                  <td>B.Sc</td>
                  <td>₹35,000</td>
                  <td>₹8,000</td>
                  <td className="total-fee">₹43,000</td>
                </tr>
                <tr>
                  <td>B.Com</td>
                  <td>₹30,000</td>
                  <td>₹8,000</td>
                  <td className="total-fee">₹38,000</td>
                </tr>
                <tr>
                  <td>M.Tech</td>
                  <td>₹1,50,000</td>
                  <td>₹20,000</td>
                  <td className="total-fee">₹1,70,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="fee-note">
            * Fee structure is subject to revision. Other fees include library, sports, and development charges.
          </p>
        </div>
      </section>

      {/* DOWNLOAD BROCHURE SECTION */}
      <section className="download-brochure-section">
        <div className="download-brochure-container">
          <div className="brochure-card">
            <div className="download-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </div>
            
            <h2 className="brochure-title">Download Admission Brochure</h2>
            <p className="brochure-description">
              Get detailed information about our programs, admission process, fee structure, and campus facilities.
            </p>

            <div className="brochure-buttons">
              <button className="btn-download">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download Prospectus (PDF)
              </button>
              <button className="btn-apply">Apply Online Now</button>
            </div>
          </div>

          <div className="contact-info">
            <p className="contact-heading">Need help with admissions?</p>
            <p className="contact-details">
              Contact: <a href="mailto:admissions@kbnuniversity.edu.in">admissions@kbnuniversity.edu.in</a> | <a href="tel:+918472123456">+91 8472 123456</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admission;