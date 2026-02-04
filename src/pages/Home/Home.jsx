import './Home.css';
import picture1 from '../assets/picture1.jpg';
import picture2 from '../assets/picture2.jpg';
import picture3 from '../assets/picture3.jpg';
import picture4 from '../assets/picture4.jpg';
import picture5 from '../assets/picture5.jpg';

function Home() {
    return (
        <div className="home">
            <section className="hero section">
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

            {/* Project Showcase Gallery */}
            <section className="gallery-section section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Our Projects & Expertise</h2>
                        <p className="section-intro">
                            Delivering excellence across automation, engineering, and digital solutions
                        </p>
                    </div>
                    <div className="image-gallery">
                        <div className="gallery-item animate-fade-in">
                            <img src={picture1} alt="Sanota Project 1" />
                            <div className="gallery-overlay">
                                <h3>Industrial Automation</h3>
                            </div>
                        </div>
                        <div className="gallery-item animate-fade-in">
                            <img src={picture2} alt="Sanota Project 2" />
                            <div className="gallery-overlay">
                                <h3>Engineering Solutions</h3>
                            </div>
                        </div>
                        <div className="gallery-item animate-fade-in">
                            <img src={picture3} alt="Sanota Project 3" />
                            <div className="gallery-overlay">
                                <h3>Digital Integration</h3>
                            </div>
                        </div>
                        <div className="gallery-item animate-fade-in">
                            <img src={picture4} alt="Sanota Project 4" />
                            <div className="gallery-overlay">
                                <h3>System Retrofits</h3>
                            </div>
                        </div>
                        <div className="gallery-item animate-fade-in">
                            <img src={picture5} alt="Sanota Project 5" />
                            <div className="gallery-overlay">
                                <h3>Technical Support</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-gray-50">
                <div className="container text-center">
                    <h2>Welcome to Sanota</h2>
                    <p className="section-intro">
                        This is the foundation of your professional automation & engineering website.
                        <br />
                        We'll build this step-by-step following your comprehensive strategy document.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Home;

