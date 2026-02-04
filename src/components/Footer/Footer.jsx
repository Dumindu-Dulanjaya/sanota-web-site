import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3 className="footer-title">SANOTA</h3>
                        <p className="footer-description">
                            End-to-end automation, engineering & digital solutions.
                            <br />
                            15+ years of multi-industry, nationwide execution.
                        </p>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-heading">Solutions</h4>
                        <ul className="footer-links">
                            <li><Link to="/solutions/custom-automation-engineering">Custom Automation</Link></li>
                            <li><Link to="/solutions/retrofit-repair-takeover">Retrofit & Takeover</Link></li>
                            <li><Link to="/solutions/software-digital-solutions">Software & Digital</Link></li>
                            <li><Link to="/solutions/amc-long-term-support">AMC & Support</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-heading">Company</h4>
                        <ul className="footer-links">
                            <li><Link to="/about">About Sanota</Link></li>
                            <li><Link to="/case-studies">Case Studies</Link></li>
                            <li><Link to="/insights">Insights</Link></li>
                            <li><Link to="/careers">Careers</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-heading">Contact</h4>
                        <ul className="footer-links">
                            <li><Link to="/contact">Get in Touch</Link></li>
                            <li><a href="mailto:info@sanota.lk">info@sanota.lk</a></li>
                            <li><a href="tel:+94112345678">+94 11 234 5678</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {new Date().getFullYear()} Sanota. All rights reserved.
                    </p>
                    <div className="footer-legal">
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
