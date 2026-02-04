import './Home.css';
import picture1 from '../../assets/picture1.jpg';
import picture2 from '../../assets/picture2.jpg';
import picture3 from '../../assets/picture3.jpg';
import picture4 from '../../assets/picture4.jpg';
import picture5 from '../../assets/picture5.jpg';
import { useState, useEffect } from 'react';

function Home() {
    const images = [picture1, picture2, picture3, picture4, picture5];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000); // Change image every 4 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="home">
            {/* Hero Section with Background Slideshow */}
            <section className="hero section">
                <div className="hero-background">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`hero-bg-image ${index === currentImageIndex ? 'active' : ''}`}
                            style={{ backgroundImage: `url(${image})` }}
                        />
                    ))}
                    <div className="hero-overlay" />
                </div>

                <div className="container">
                    <div className="hero-content">
                        <h1>End-to-End Automation & Engineering Partner</h1>
                        <p className="hero-subtitle">
                            Sanota delivers integrated automation, engineering, and digital solutions —
                            from design and integration to retrofits, software, and long-term support —
                            under one accountable partner.
                        </p>
                        <div className="hero-proof">
                            <span className="proof-item">15+ Years Experience</span>
                            <span className="proof-divider">|</span>
                            <span className="proof-item">Multi-Industry Expertise</span>
                            <span className="proof-divider">|</span>
                            <span className="proof-item">Nationwide Execution</span>
                        </div>
                        <div className="hero-cta">
                            <a href="/contact" className="btn btn-primary">Request Consultation</a>
                            <a href="/case-studies" className="btn btn-secondary">View Case Studies</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions Summary Section */}
            <section className="solutions-section section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Comprehensive Automation Solutions</h2>
                        <p className="section-intro">
                            From concept to commissioning, we deliver complete automation and engineering solutions
                        </p>
                    </div>
                    <div className="solutions-grid">
                        <div className="solution-card">
                            <div className="solution-icon">🔧</div>
                            <h3>System Integration</h3>
                            <p>Complete automation system design, integration, and deployment across all industrial sectors</p>
                            <a href="/solutions" className="solution-link">Learn More →</a>
                        </div>
                        <div className="solution-card">
                            <div className="solution-icon">💻</div>
                            <h3>Digital Solutions</h3>
                            <p>SCADA, HMI, MES, and custom software development for industrial operations</p>
                            <a href="/solutions" className="solution-link">Learn More →</a>
                        </div>
                        <div className="solution-card">
                            <div className="solution-icon">⚙️</div>
                            <h3>Retrofits & Upgrades</h3>
                            <p>Modernize legacy systems with cutting-edge technology while minimizing downtime</p>
                            <a href="/solutions" className="solution-link">Learn More →</a>
                        </div>
                        <div className="solution-card">
                            <div className="solution-icon">🛠️</div>
                            <h3>Support & Maintenance</h3>
                            <p>24/7 technical support, preventive maintenance, and rapid response services</p>
                            <a href="/solutions" className="solution-link">Learn More →</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Client Trust Section */}
            <section className="trust-section section bg-gradient">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Trusted by Industry Leaders</h2>
                        <p className="section-intro-light">
                            Delivering excellence across Sri Lanka with proven results
                        </p>
                    </div>
                    <div className="stats-grid">
                        <div className="stat-card">
                            <div className="stat-number">15+</div>
                            <div className="stat-label">Years of Experience</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">200+</div>
                            <div className="stat-label">Projects Completed</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">50+</div>
                            <div className="stat-label">Active Clients</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">99%</div>
                            <div className="stat-label">Client Satisfaction</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="industries-section section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Industries We Serve</h2>
                        <p className="section-intro">
                            Specialized expertise across diverse industrial sectors
                        </p>
                    </div>
                    <div className="industries-grid">
                        <div className="industry-card">
                            <div className="industry-icon">🏭</div>
                            <h3>Manufacturing</h3>
                            <p>Process automation, production line control, and quality systems</p>
                        </div>
                        <div className="industry-card">
                            <div className="industry-icon">💧</div>
                            <h3>Water & Wastewater</h3>
                            <p>Treatment plant automation, SCADA systems, and monitoring solutions</p>
                        </div>
                        <div className="industry-card">
                            <div className="industry-icon">⚡</div>
                            <h3>Energy & Power</h3>
                            <p>Power distribution, renewable energy systems, and grid automation</p>
                        </div>
                        <div className="industry-card">
                            <div className="industry-icon">🍃</div>
                            <h3>Food & Beverage</h3>
                            <p>Hygienic automation, batch control, and traceability systems</p>
                        </div>
                        <div className="industry-card">
                            <div className="industry-icon">🏗️</div>
                            <h3>Building Automation</h3>
                            <p>HVAC control, lighting systems, and energy management</p>
                        </div>
                        <div className="industry-card">
                            <div className="industry-icon">🔬</div>
                            <h3>Pharmaceuticals</h3>
                            <p>GMP-compliant automation, clean room systems, and validation</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Studies Preview */}
            <section className="case-studies-section section bg-gray-50">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Featured Case Studies</h2>
                        <p className="section-intro">
                            Real-world success stories from our automation projects
                        </p>
                    </div>
                    <div className="case-studies-grid">
                        <div className="case-study-card">
                            <div className="case-study-image" style={{ backgroundImage: `url(${picture1})` }}>
                                <div className="case-study-badge">Manufacturing</div>
                            </div>
                            <div className="case-study-content">
                                <h3>Complete Factory Automation</h3>
                                <p>Implemented end-to-end automation for a leading manufacturing facility, increasing productivity by 40%</p>
                                <a href="/case-studies" className="case-study-link">Read Case Study →</a>
                            </div>
                        </div>
                        <div className="case-study-card">
                            <div className="case-study-image" style={{ backgroundImage: `url(${picture2})` }}>
                                <div className="case-study-badge">Water Treatment</div>
                            </div>
                            <div className="case-study-content">
                                <h3>SCADA System Deployment</h3>
                                <p>Deployed comprehensive SCADA solution for water treatment plant serving 100,000+ residents</p>
                                <a href="/case-studies" className="case-study-link">Read Case Study →</a>
                            </div>
                        </div>
                        <div className="case-study-card">
                            <div className="case-study-image" style={{ backgroundImage: `url(${picture3})` }}>
                                <div className="case-study-badge">Energy</div>
                            </div>
                            <div className="case-study-content">
                                <h3>Power Distribution Upgrade</h3>
                                <p>Modernized power distribution system with advanced monitoring and control capabilities</p>
                                <a href="/case-studies" className="case-study-link">Read Case Study →</a>
                            </div>
                        </div>
                    </div>
                    <div className="text-center" style={{ marginTop: 'var(--spacing-3xl)' }}>
                        <a href="/case-studies" className="btn btn-primary">View All Case Studies</a>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="cta-section section bg-gradient">
                <div className="container text-center">
                    <h2>Ready to Transform Your Operations?</h2>
                    <p className="section-intro-light">
                        Let's discuss how Sanota can deliver the automation solutions your business needs
                    </p>
                    <div className="cta-buttons">
                        <a href="/contact" className="btn btn-primary btn-lg">Request Consultation</a>
                        <a href="/solutions" className="btn btn-secondary-light btn-lg">Explore Solutions</a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;


