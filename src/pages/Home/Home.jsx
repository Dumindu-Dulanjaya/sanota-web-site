import './Home.css';
import picture1 from '../../assets/picture1.jpg';
import picture2 from '../../assets/picture2.jpg';
import picture3 from '../../assets/picture3.jpg';
import picture4 from '../../assets/picture4.jpg';
import picture5 from '../../assets/picture5.jpg';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, CircleMarker, Popup, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem, viewportOnce } from '../../utils/animations';

function Home() {
    const images = [picture1, picture2, picture3, picture4, picture5];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Province data with geographic coordinates
    const provinces = [
        { name: 'Western Province', projects: 85, cities: ['Colombo', 'Gampaha', 'Kalutara'], coords: [6.9271, 79.8612] },
        { name: 'Central Province', projects: 28, cities: ['Kandy', 'Matale', 'Nuwara Eliya'], coords: [7.2906, 80.6337] },
        { name: 'Southern Province', projects: 22, cities: ['Galle', 'Matara', 'Hambantota'], coords: [6.0535, 80.2210] },
        { name: 'Northern Province', projects: 12, cities: ['Jaffna', 'Kilinochchi', 'Mannar'], coords: [9.6615, 80.0255] },
        { name: 'Eastern Province', projects: 15, cities: ['Trincomalee', 'Batticaloa', 'Ampara'], coords: [8.5874, 81.2152] },
        { name: 'North Western Province', projects: 18, cities: ['Kurunegala', 'Puttalam'], coords: [7.4863, 80.3623] },
        { name: 'North Central Province', projects: 14, cities: ['Anuradhapura', 'Polonnaruwa'], coords: [8.3114, 80.4037] },
        { name: 'Uva Province', projects: 10, cities: ['Badulla', 'Monaragala'], coords: [6.9934, 81.0550] },
        { name: 'Sabaragamuwa Province', projects: 16, cities: ['Ratnapura', 'Kegalle'], coords: [6.6828, 80.4014] }
    ];

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
                        <motion.h1
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                        >
                            End-to-End Automation & Engineering Partner
                        </motion.h1>
                        <motion.p
                            className="hero-subtitle"
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            transition={{ delay: 0.2 }}
                        >
                            Sanota delivers integrated automation, engineering, and digital solutions —
                            from design and integration to retrofits, software, and long-term support —
                            under one accountable partner.
                        </motion.p>
                        <motion.div
                            className="hero-proof"
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            transition={{ delay: 0.4 }}
                        >
                            <span className="proof-item">15+ Years Experience</span>
                            <span className="proof-divider">|</span>
                            <span className="proof-item">Multi-Industry Expertise</span>
                            <span className="proof-divider">|</span>
                            <span className="proof-item">Nationwide Execution</span>
                        </motion.div>
                        <motion.div
                            className="hero-cta"
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            transition={{ delay: 0.6 }}
                        >
                            <Link to="/contact" className="btn btn-primary">Request Consultation</Link>
                            <Link to="/case-studies" className="btn btn-secondary">View Case Studies</Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Solutions Summary Section */}
            <section className="solutions-section section">
                <div className="container">
                    <motion.div
                        className="section-header text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                        variants={fadeInUp}
                    >
                        <h2>Comprehensive Automation Solutions</h2>
                        <p className="section-intro">
                            From concept to commissioning, we deliver complete automation and engineering solutions
                        </p>
                    </motion.div>
                    <motion.div
                        className="solutions-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                        variants={staggerContainer}
                    >
                        <motion.div className="solution-card" variants={staggerItem}>
                            <div className="solution-icon">🔧</div>
                            <h3>System Integration</h3>
                            <p>Complete automation system design, integration, and deployment across all industrial sectors</p>
                            <Link to="/solutions" className="solution-link">Learn More →</Link>
                        </motion.div>
                        <motion.div className="solution-card" variants={staggerItem}>
                            <div className="solution-icon">💻</div>
                            <h3>Digital Solutions</h3>
                            <p>SCADA, HMI, MES, and custom software development for industrial operations</p>
                            <Link to="/solutions" className="solution-link">Learn More →</Link>
                        </motion.div>
                        <motion.div className="solution-card" variants={staggerItem}>
                            <div className="solution-icon">⚙️</div>
                            <h3>Retrofits & Upgrades</h3>
                            <p>Modernize legacy systems with cutting-edge technology while minimizing downtime</p>
                            <Link to="/solutions" className="solution-link">Learn More →</Link>
                        </motion.div>
                        <motion.div className="solution-card" variants={staggerItem}>
                            <div className="solution-icon">🛠️</div>
                            <h3>Support & Maintenance</h3>
                            <p>24/7 technical support, preventive maintenance, and rapid response services</p>
                            <Link to="/solutions" className="solution-link">Learn More →</Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section >

            {/* Client Trust Section */}
            < section className="trust-section section bg-gradient" >
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
            </section >

            {/* Industries Section */}
            < section className="industries-section section" >
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
            </section >

            {/* Nationwide Execution Section */}
            < section className="nationwide-section section bg-gray-50" >
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Nationwide Execution Capability</h2>
                        <p className="section-intro">
                            Delivering automation projects across all provinces of Sri Lanka
                        </p>
                    </div>
                    <div className="nationwide-content">
                        <div className="map-container-home">
                            {/* Leaflet Interactive Map */}
                            <MapContainer
                                center={[7.8731, 80.7718]} // Center of Sri Lanka
                                zoom={7}
                                minZoom={7}
                                maxZoom={10}
                                scrollWheelZoom={false}
                                style={{ height: '500px', width: '100%', borderRadius: '16px' }}
                            >
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />

                                {/* Province Markers */}
                                {provinces.map((province, index) => (
                                    <CircleMarker
                                        key={index}
                                        center={province.coords}
                                        radius={province.projects / 5}
                                        fillColor="#10b981"
                                        color="#fff"
                                        weight={2}
                                        opacity={1}
                                        fillOpacity={0.7}
                                        eventHandlers={{
                                            mouseover: (e) => {
                                                e.target.setStyle({
                                                    fillColor: '#ea580c',
                                                    fillOpacity: 0.9
                                                });
                                            },
                                            mouseout: (e) => {
                                                e.target.setStyle({
                                                    fillColor: '#10b981',
                                                    fillOpacity: 0.7
                                                });
                                            }
                                        }}
                                    >
                                        <Popup>
                                            <div className="map-popup">
                                                <h4>{province.name}</h4>
                                                <p className="popup-projects">
                                                    <strong>{province.projects} Projects</strong>
                                                </p>
                                                <p className="popup-cities">
                                                    {province.cities.join(' • ')}
                                                </p>
                                            </div>
                                        </Popup>
                                        <Tooltip direction="top" offset={[0, -10]} opacity={0.9}>
                                            <strong>{province.name}</strong><br />
                                            {province.projects} Projects
                                        </Tooltip>
                                    </CircleMarker>
                                ))}
                            </MapContainer>
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
            </section >

            {/* Why Sanota Section */}
            < section className="why-sanota-section section" >
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
            </section >

            {/* Case Studies Preview */}
            < section className="case-studies-section section bg-gray-50" >
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
            </section >

            {/* Final CTA Section */}
            < section className="cta-section section bg-gradient" >
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
            </section >
        </div >
    );
}

export default Home;


