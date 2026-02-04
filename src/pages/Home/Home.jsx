import './Home.css';
import picture1 from '../../assets/picture1.jpg';
import picture2 from '../../assets/picture2.jpg';
import picture3 from '../../assets/picture3.jpg';
import picture4 from '../../assets/picture4.jpg';
import picture5 from '../../assets/picture5.jpg';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
                            <Link to="/contact" className="btn btn-primary">Request Consultation</Link>
                            <Link to="/case-studies" className="btn btn-secondary">View Case Studies</Link>
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
                            <Link to="/solutions" className="solution-link">Learn More →</Link>
                        </div>
                        <div className="solution-card">
                            <div className="solution-icon">💻</div>
                            <h3>Digital Solutions</h3>
                            <p>SCADA, HMI, MES, and custom software development for industrial operations</p>
                            <Link to="/solutions" className="solution-link">Learn More →</Link>
                        </div>
                        <div className="solution-card">
                            <div className="solution-icon">⚙️</div>
                            <h3>Retrofits & Upgrades</h3>
                            <p>Modernize legacy systems with cutting-edge technology while minimizing downtime</p>
                            <Link to="/solutions" className="solution-link">Learn More →</Link>
                        </div>
                        <div className="solution-card">
                            <div className="solution-icon">🛠️</div>
                            <h3>Support & Maintenance</h3>
                            <p>24/7 technical support, preventive maintenance, and rapid response services</p>
                            <Link to="/solutions" className="solution-link">Learn More →</Link>
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

            {/* Nationwide Execution Section */}
            <section className="nationwide-section section bg-gray-50">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Nationwide Execution Capability</h2>
                        <p className="section-intro">
                            Delivering automation projects across all provinces of Sri Lanka
                        </p>
                    </div>
                    <div className="nationwide-content">
                        <div className="map-container-home">
                            <svg viewBox="0 0 400 600" className="sri-lanka-map-home">
                                {/* Sri Lanka Map Outline */}
                                <path
                                    d="M200,50 L220,80 L240,120 L250,160 L260,200 L270,250 L275,300 L270,350 L260,400 L250,450 L230,490 L210,520 L190,540 L170,550 L150,540 L130,520 L115,490 L105,450 L100,400 L95,350 L90,300 L95,250 L105,200 L120,160 L140,120 L160,80 L180,50 Z"
                                    fill="#e0f2fe"
                                    stroke="#0ea5e9"
                                    strokeWidth="2"
                                />
                                {/* Province Markers */}
                                <circle cx="200" cy="150" r="8" fill="#0ea5e9" className="province-marker" />
                                <circle cx="180" cy="200" r="8" fill="#0ea5e9" className="province-marker" />
                                <circle cx="220" cy="200" r="8" fill="#0ea5e9" className="province-marker" />
                                <circle cx="200" cy="250" r="8" fill="#0ea5e9" className="province-marker" />
                                <circle cx="160" cy="300" r="8" fill="#0ea5e9" className="province-marker" />
                                <circle cx="220" cy="300" r="8" fill="#0ea5e9" className="province-marker" />
                                <circle cx="180" cy="350" r="8" fill="#0ea5e9" className="province-marker" />
                                <circle cx="200" cy="400" r="8" fill="#0ea5e9" className="province-marker" />
                                <circle cx="190" cy="480" r="8" fill="#0ea5e9" className="province-marker" />
                            </svg>
                        </div>
                        <div className="nationwide-stats">
                            <div className="nationwide-stat">
                                <div className="stat-number">9</div>
                                <div className="stat-label">Provinces Covered</div>
                            </div>
                            <div className="nationwide-stat">
                                <div className="stat-number">25+</div>
                                <div className="stat-label">Cities Served</div>
                            </div>
                            <div className="nationwide-stat">
                                <div className="stat-number">200+</div>
                                <div className="stat-label">Projects Nationwide</div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center" style={{ marginTop: 'var(--spacing-2xl)' }}>
                        <Link to="/clients-experience" className="btn btn-secondary">View Our Experience</Link>
                    </div>
                </div>
            </section>

            {/* Why Sanota Section */}
            <section className="why-sanota-section section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Why Choose Sanota</h2>
                        <p className="section-intro">
                            What sets us apart as your automation and engineering partner
                        </p>
                    </div>
                    <div className="why-sanota-grid">
                        <div className="why-card">
                            <div className="why-icon">🎯</div>
                            <h3>Single-Point Accountability</h3>
                            <p>
                                One partner for your entire automation journey — from initial design through commissioning and long-term support. No coordination headaches, no finger-pointing.
                            </p>
                        </div>
                        <div className="why-card">
                            <div className="why-icon">⚙️</div>
                            <h3>Multi-Disciplinary Engineering</h3>
                            <p>
                                Electrical, mechanical, software, and control systems expertise under one roof. Our integrated approach ensures seamless project execution.
                            </p>
                        </div>
                        <div className="why-card">
                            <div className="why-icon">🔄</div>
                            <h3>Retrofit & Takeover Expertise</h3>
                            <p>
                                Specialized in modernizing legacy systems and taking over incomplete or problematic projects. We solve the challenges others can't.
                            </p>
                        </div>
                        <div className="why-card">
                            <div className="why-icon">🛠️</div>
                            <h3>Long-Term AMC Support</h3>
                            <p>
                                Comprehensive Annual Maintenance Contracts with 24/7 support. We're committed to your systems for the long haul, not just project completion.
                            </p>
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
                                <Link to="/case-studies" className="case-study-link">Read Case Study →</Link>
                            </div>
                        </div>
                        <div className="case-study-card">
                            <div className="case-study-image" style={{ backgroundImage: `url(${picture2})` }}>
                                <div className="case-study-badge">Water Treatment</div>
                            </div>
                            <div className="case-study-content">
                                <h3>SCADA System Deployment</h3>
                                <p>Deployed comprehensive SCADA solution for water treatment plant serving 100,000+ residents</p>
                                <Link to="/case-studies" className="case-study-link">Read Case Study →</Link>
                            </div>
                        </div>
                        <div className="case-study-card">
                            <div className="case-study-image" style={{ backgroundImage: `url(${picture3})` }}>
                                <div className="case-study-badge">Energy</div>
                            </div>
                            <div className="case-study-content">
                                <h3>Power Distribution Upgrade</h3>
                                <p>Modernized power distribution system with advanced monitoring and control capabilities</p>
                                <Link to="/case-studies" className="case-study-link">Read Case Study →</Link>
                            </div>
                        </div>
                    </div>
                    <div className="text-center" style={{ marginTop: 'var(--spacing-3xl)' }}>
                        <Link to="/case-studies" className="btn btn-primary">View All Case Studies</Link>
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
                        <Link to="/contact" className="btn btn-primary btn-lg">Request Consultation</Link>
                        <Link to="/solutions" className="btn btn-secondary-light btn-lg">Explore Solutions</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;


