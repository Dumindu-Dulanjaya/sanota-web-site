import React from 'react';
import { Link } from 'react-router-dom';
import pic1 from '../../assets/pic1.jpg';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-background" style={{ backgroundImage: `url(${pic1})` }}></div>
                <div className="hero-overlay"></div>

                <div className="container hero-container">
                    <div className="hero-content">
                        <h1>End-to-End Automation <br /> & Engineering Partner</h1>
                        <p className="hero-subtitle">
                            Sanota delivers integrated automation, engineering, and
                            digital solutions from design and integration to retrofits,
                            software, and long-term support under one accountable
                            partner.
                        </p>
                        <div className="hero-cta">
                            <Link to="/contact" className="btn btn-primary">CONTACT US</Link>
                            <Link to="/case-studies" className="btn btn-secondary-outline">
                                SEE PROJECTS <span className="arrow">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="about-section">
                <div className="container">
                    <div className="about-grid">
                        {/* Left: Text Content */}
                        <div className="about-content">
                            <p className="about-tagline">ABOUT OUR COMPANY</p>
                            <h2>We Engineer Innovation, We Are Sanota</h2>
                            <p className="about-description">
                                Founded in 2008, Sanota has grown into one of Sri Lanka's trusted names in
                                industrial automation and engineering solutions. With over 15 years of
                                experience and 200+ completed projects, we deliver innovative automation
                                systems backed by technical expertise, quality, and reliability.
                            </p>

                            <div className="about-stats">
                                <div className="stat-item">
                                    <div className="stat-icon">✓</div>
                                    <div className="stat-text">15+ Years Experience</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-icon">✓</div>
                                    <div className="stat-text">200+ Complete Projects</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-icon">✓</div>
                                    <div className="stat-text">Trusted Engineering Experts</div>
                                </div>
                            </div>

                            <Link to="/about" className="btn btn-primary">ABOUT US</Link>
                        </div>

                        {/* Right: Image Collage (placeholder for now) */}
                        <div className="about-images">
                            <p>Image Collage Coming Soon</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
