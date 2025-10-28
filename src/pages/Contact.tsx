// // src/pages/Contact.tsx
// import React, { useState } from 'react';
// import './Contact.css';

// const Contact: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     subject: '',
//     message: ''
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Here you would typically send the data to your backend
//     console.log('Form submitted:', formData);
//     alert('Thank you for your message! We will get back to you soon.');
//     setFormData({
//       name: '',
//       email: '',
//       phone: '',
//       subject: '',
//       message: ''
//     });
//   };

//   return (
//     <div className="contact-page">
//       {/* Hero Section */}
//       <section className="contact-hero">
//         <div className="hero-overlay">
//           <h1>Contact Grace Travelers</h1>
//           <p>We're here to help you plan your perfect Ooty experience</p>
//         </div>
//       </section>

//       {/* Contact Content */}
//       <div className="contact-container">
//         {/* Contact Form */}
//         <section className="contact-form-section">
//           <h2 className="section-title">Send Us a Message</h2>
//           <form onSubmit={handleSubmit} className="contact-form">
//             <div className="form-group">
//               <label htmlFor="name">Full Name*</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 placeholder="Your name"
//               />
//             </div>

//             <div className="form-row">
//               <div className="form-group">
//                 <label htmlFor="email">Email*</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   placeholder="Your email"
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="phone">Phone Number</label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="Your phone number"
//                 />
//               </div>
//             </div>

//             <div className="form-group">
//               <label htmlFor="subject">Subject*</label>
//               <select
//                 id="subject"
//                 name="subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="">Select a subject</option>
//                 <option value="booking">Tour Booking</option>
//                 <option value="inquiry">General Inquiry</option>
//                 <option value="custom">Custom Package</option>
//                 <option value="feedback">Feedback</option>
//                 <option value="other">Other</option>
//               </select>
//             </div>

//             <div className="form-group">
//               <label htmlFor="message">Your Message*</label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 rows={5}
//                 placeholder="How can we help you?"
//               ></textarea>
//             </div>

//             <button type="submit" className="submit-button">
//               Send Message
//             </button>
//           </form>
//         </section>

//         {/* Contact Information */}
//         <section className="contact-info-section">
//           <h2 className="section-title">Our Contact Details</h2>
          
//           <div className="contact-method">
//             <div className="contact-icon">
//               <i className="fas fa-map-marker-alt"></i>
//             </div>
//             <div>
//               <h3>Visit Us</h3>
//               <p>123 Hill Station Road<br />Ooty, Tamil Nadu 643001</p>
//             </div>
//           </div>

//           <div className="contact-method">
//             <div className="contact-icon">
//               <i className="fas fa-phone-alt"></i>
//             </div>
//             <div>
//               <h3>Call Us</h3>
//               <p>+91 98765 43210<br />Mon-Sun, 8AM-8PM</p>
//             </div>
//           </div>

//           <div className="contact-method">
//             <div className="contact-icon">
//               <i className="fas fa-envelope"></i>
//             </div>
//             <div>
//               <h3>Email Us</h3>
//               <p>info@gracetravelers.com<br />bookings@gracetravelers.com</p>
//             </div>
//           </div>

//           <div className="social-links">
//             <h3>Follow Us</h3>
//             <div className="social-icons">
//               <a href="#" aria-label="Facebook">
//                 <i className="fab fa-facebook-f"></i>
//               </a>
//               <a href="#" aria-label="Instagram">
//                 <i className="fab fa-instagram"></i>
//               </a>
//               <a href="#" aria-label="Twitter">
//                 <i className="fab fa-twitter"></i>
//               </a>
//               <a href="#" aria-label="WhatsApp">
//                 <i className="fab fa-whatsapp"></i>
//               </a>
//             </div>
//           </div>
//         </section>
//       </div>

//       {/* Map Section */}
//       <section className="map-section">
//         <iframe
//           title="Grace Travelers Location"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.123456789012!2d76.69345678901234!3d11.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDA3JzI0LjQiTiA3NsKwNDEnNDEuNiJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
//           width="100%"
//           height="450"
//           style={{ border: 0 }}
//           allowFullScreen
//           loading="lazy"
//         ></iframe>
//       </section>
//     </div>
//   );
// };

// export default Contact;



import React, { useState } from 'react';
import './Contact.css';
import img1 from "../assets/pexels-rajeshx8-19935191.jpg";
import img2 from '../assets/img2.webp';
import img3 from '../assets/img3.avif';
import img4 from '../assets/img4.jpg';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
  <div className="contact-page">
  <section className="contact-hero hero-modern">
  <div className="overlay-gradient"></div>
  <div className="hero-content">
    <h1>Your Gateway to Ooty Awaits</h1>
    <p>Explore tailored experiences with Grace Travelers. Local insights, unforgettable journeys.</p>
    <a href="#contact" className="cta-primary">Get In Touch</a>
    {/* <button onClick={() => navigate('/contact')}>Get in Touch</button> */}
  </div>
  <div className="carousel-container">
    <div className="carousel-track">
      {[img1, img2, img3, img4, img1, img2].map((image, index) => (
        <div className="carousel-card" key={index}>
          <img src={image} alt={`Ooty ${index + 1}`} />
        </div>
      ))}
    </div>
  </div>
</section>
      <div className="contact-container">
        <div className="contact-image-side">
          <img
            src={img1}
            alt="Travel Experience"
            className="contact-image"
          />
        </div>
        <section className="contact-form-section">
          <h2 className="section-title">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Full Name*</label>
              <div className="input-icon-group">
                <i className="fas fa-user input-icon"></i>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email*</label>
                <div className="input-icon-group">
                  <i className="fas fa-envelope input-icon"></i>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <div className="input-icon-group">
                  <i className="fas fa-phone input-icon"></i>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject*</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Select a subject</option>
                <option value="booking">Tour Booking</option>
                <option value="inquiry">General Inquiry</option>
                <option value="custom">Custom Package</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message*</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </section>
      </div>
      <section className="divider-banner">
        <div className="image-wrapper">
          <img src={img2} alt="Ooty Scenery" className="divider-image" />
          <div className="image-text-overlay">
            <h1>Reach Us!!</h1>
            <p>We’re here to help plan your perfect trip to Ooty</p>
          </div>
        </div>
      </section>
      <section className="contact-info-section">
        <h2 className="section-title">Contact Grace Travelers</h2>

        <div className="contact-methods">
          <div className="contact-card">
            <i className="fas fa-map-marker-alt icon"></i>
            <h3>Visit Us</h3>
            
  <p>
    86/92 Rajajinagar,<br />
    Vannar Pet,<br />
    Ooty. 643001
  </p>


          </div>
          <div className="contact-card">
            <i className="fas fa-phone-alt icon"></i>
            <h3>Call Us</h3>
            <p>+918610492700
<br />Mon-Sun, 8AM-8PM</p>
          </div>
          <div className="contact-card">
            <i className="fas fa-envelope icon"></i>
            <h3>Email Us</h3>
            <p> GTtravelsooty@gmail.com </p>
          </div>
        </div>
        <div className="social-links">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>
      </section>
      <section className="map-section">
        <iframe
          title="Grace Travelers Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.123456789012!2d76.69345678901234!3d11.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDA3JzI0LjQiTiA3NsKwNDEnNDEuNiJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

    </div>
  );
};
export default Contact;
