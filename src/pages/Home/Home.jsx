import './Home.css';

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
