import React, { useState } from 'react';
import './Home.css';

// Import generated images
import heroImage from '../assets/ooty-hero.jpg';
import botanicalGarden from '../assets/botanical-garden.jpg';
import teaFactory from '../assets/tea-factory.jpg';
import ootyLake from '../assets/ooty-lake.jpg';
import toyTrain from '../assets/toy-train.jpg';
import doddabettaPeak from '../assets/doddabetta-peak.jpg';
import waxMuseum from '../assets/wax-museum.jpg';
import { backgroundBlurriness } from 'three/tsl';
import { color } from 'framer-motion';

const Home = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      text: "Grace Travelers made our Ooty trip unforgettable! The guides were knowledgeable and the itinerary was perfect.",
      author: "Riya",
      rating: 5
    },
    {
      text: "Very professional service and great value! We got to see all the hidden gems of Ooty.",
      author: "Arjun",
      rating: 5
    },
    {
      text: "The customizable packages allowed us to create our perfect vacation. Will definitely use them again!",
      author: "Priya",
      rating: 5
    }
  ];

  const galleryItems = [
    {
      imgSrc: botanicalGarden,
      alt: "Botanical Garden",
      title: "Botanical Garden",
      description: "Stunning floral displays"
    },
    {
      imgSrc: teaFactory,
      alt: "Tea Factory",
      title: "Tea & Chocolate Factory",
      description: "Experience authentic tea making"
    },
    {
      imgSrc: waxMuseum,
      alt: "Wax World",
      title: "Wax World",
      description: "Life-like celebrity figures"
    },
    {
      imgSrc: doddabettaPeak,
      alt: "Doddabetta Peak",
      title: "Doddabetta Peak",
      description: "Highest peak in Nilgiris"
    },
    {
      imgSrc: ootyLake,
      alt: "Ooty Lake",
      title: "Ooty Lake",
      description: "Serene boating experience"
    },
    {
      imgSrc: toyTrain,
      alt: "Toy Train",
      title: "Nilgiri Mountain Railway",
      description: "Historic UNESCO heritage train"
    }
  ];

  const features = [
    {
      icon: "👨‍🏫",
      title: "Experienced Guides",
      description: "Our local guides have extensive knowledge of Ooty's history and hidden gems."
    },
    {
      icon: "🗺️",
      title: "Customizable Tours",
      description: "Tailor your itinerary to match your interests and preferences."
    },
    {
      icon: "🏆",
      title: "Affordable Prices",
      description: "Quality experiences that won't break the bank."
    },
    {
      icon: "🕒",
      title: "24/7 Support",
      description: "We're always available to assist you during your trip."
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating:number) => {
    return Array.from({ length: rating }, (_, i) => (
      <span key={i} className="star">⭐</span>
    ));
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            ✨ Discover Ooty's Magic
          </div>
          <h1 className="hero-title">
            Welcome to <br />
            <span className="hero-title-gradient">Grace Travelers</span>
          </h1>
          <p className="hero-subtitle">
            Discover the breathtaking beauty of Ooty with our expert guides and create memories that last a lifetime
          </p>
          <button className="hero-button">
            Book Your Adventure Now
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="section section-gradient">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">About Us</div>
            <h2 className="section-title">Your Gateway to Ooty</h2>
            <p className="section-subtitle">
              Grace Travelers is a premier tour company specializing in guided experiences through Ooty's most scenic locations. 
              With over 10 years of experience, we bring you the perfect blend of adventure, relaxation, and cultural immersion.
            </p>
          </div>
          
          <div className="cards-grid">
            <div className="stat-card">
              <span className="stat-number primary">500+</span>
              <span className="stat-label">Happy Customers</span>
            </div>
            <div className="stat-card">
              <span className="stat-number secondary">20+</span>
              <span className="stat-label">Tour Packages</span>
            </div>
            <div className="stat-card">
              <span className="stat-number accent">100%</span>
              <span className="stat-label">Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Gallery</div>
            <h2 className="section-title">Explore Ooty's Beauty</h2>
            <p className="section-subtitle">
              Discover the stunning landscapes and attractions that await you
            </p>
          </div>
          
          <div className="gallery-grid">
            {galleryItems.map((item, index) => (
              <div key={index} className="gallery-card">
                <div className="gallery-image-container">
                  <img 
                    src={item.imgSrc} 
                    alt={item.alt} 
                    className="gallery-image"
                  />
                  <div className="gallery-overlay">
                    <h3 className="gallery-title">{item.title}</h3>
                    <p className="gallery-description">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section section-primary-bg">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Why Choose Us</div>
            <h2 className="section-title">Your Perfect Travel Partner</h2>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Testimonials</div>
            <h2 className="section-title">What Our Customers Say</h2>
          </div>
          
          <div className="testimonial-container">
            <div className="testimonial-card">
              <div className="testimonial-controls">
                <button
                  className="testimonial-nav"
                  onClick={prevTestimonial}
                >
                  ‹
                </button>
                
                <div className="testimonial-content">
                  <div className="stars">
                    {renderStars(testimonials[activeTestimonial].rating)}
                  </div>
                  <blockquote className="testimonial-quote">
                    "{testimonials[activeTestimonial].text}"
                  </blockquote>
                  <p className="testimonial-author">— {testimonials[activeTestimonial].author}</p>
                </div>
                
                <button
                  className="testimonial-nav"
                  onClick={nextTestimonial}
                >
                  ›
                </button>
              </div>
              
              <div className="testimonial-dots">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`testimonial-dot ${index === activeTestimonial ? 'active' : ''}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">
            Ready to Explore Ooty?
          </h2>
          <p className="cta-subtitle">
            Book your dream vacation today and create unforgettable memories in the Queen of Hill Stations
          </p>
          <button className="cta-button">
            Contact Us Now
          </button>
        </div>
      </section>

      {/* Footer */}
<footer className="footer">
  <div className="container">
    <div className="footer-content">
      <div className="footer-section">
        <h3 className="footer-logo">Grace Travelers</h3>
        <p className="footer-description">
          Discover Ooty Like Never Before. Your trusted partner for unforgettable hill station experiences.
        </p>
        <div className="footer-badge">
          🏆 Premium Tours
        </div>
      </div>
      
      <div className="footer-section">
        <h4 className="footer-title">Quick Links</h4>
        <div className="footer-links">
          <a href="#about" className="footer-link">About Us</a>
          <a href="#gallery" className="footer-link">Gallery</a>
          <a href="#testimonials" className="footer-link">Testimonials</a>
          <a href="#contact" className="footer-link">Contact</a>
        </div>
      </div>
      
      <div className="footer-section">
        <h4 className="footer-title">Contact Info</h4>
        <div className="footer-contact">
          <div className="contact-item">
            <span className="contact-icon contact-circle"><i className="fas fa-envelope"></i></span>
            <span className="contact-text">info@grace.com</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon contact-circle"><i className="fas fa-phone-alt"></i></span>
            <span className="contact-text">+91 98765 43210</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon contact-circle"><i className="fas fa-map-marker-alt"></i></span>
            <span className="contact-text">Ooty, Tamil Nadu</span>
          </div>
        </div>
      </div>
    </div>
    
    
  </div>
</footer>
    </div>
  );
};

export default Home;