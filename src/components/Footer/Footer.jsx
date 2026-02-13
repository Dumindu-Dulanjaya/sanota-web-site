import { Link } from 'react-router-dom';
import './Footer.css';
import sanotalogo from '../../assets/sanotalogo.png';

function Footer() {
    return (
        <footer className="footer-new">
            {/* Top Bar: Newsletter CTA */}
            <div className="footer-cta-bar">
                <div className="container cta-content">
                    <div className="cta-text-group">
                        <h3>Get Your Free Engineering Consultation</h3>
                        <p>By requesting, you also join our exclusive industry newsletter.</p>
                    </div>
                    <div className="cta-form">
                        <input type="email" placeholder="Enter your email..." className="cta-input" />
                        <button className="btn-cta">REQUEST NOW</button>
                    </div>
                </div>
            </div>

            {/* Middle Bar: Main Content */}
            <div className="footer-main-bar">
                <div className="container main-content">
                    {/* Left: Brand */}
                    <div className="footer-brand">
                        <img src={sanotalogo} alt="SANOTA" className="footer-logo-new" />
                        <address className="footer-address">
                            No.5, Charlie Mount Industrial zone, Udukuwa,<br />
                            Weligama, Sri Lanka
                        </address>
                    </div>

                    {/* Center: Navigation */}
                    <nav className="footer-nav">
                        <Link to="/">HOME</Link>
                        <Link to="/about">ABOUT</Link>
                        <Link to="/solutions">SOLUTIONS</Link>
                        <Link to="/case-studies">PROJECTS</Link>
                        <Link to="/contact">CONTACT</Link>
                    </nav>

                    {/* Right: Social Icons */}
                    <div className="footer-socials">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                        </a>
                        <a href="https://sanota.lk" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.057v-3.057h2.994c-.059 1.143-.212 2.24-.456 3.279-.823-.12-1.674-.188-2.538-.222zm-2 0c-.864.034-1.716.102-2.539.222-.244-1.039-.397-2.136-.456-3.279h2.995v3.057zm-3-4.057h-3.692c.162-1.116.48-2.172.936-3.13l2.844 1.422c-.05.556-.088 1.125-.088 1.708zm0-1.077c.365-1.171.868-2.268 1.488-3.268l2.67 2.67c-.201.196-.395.4-.579.613l-3.579-.015zm4.077-4.077l-2.67-2.67c1.334-.775 2.871-1.242 4.516-1.282v3.837c-.646.012-1.272.049-1.846.115zm1.923 8.211v3.057c.864.034 1.716.102 2.539.222.244-1.039.397-2.136.456-3.279h-2.995zm1.077 4.077c-.365 1.171-.868 2.268-1.488 3.268l-2.67-2.67c.201-.196.395-.4.579-.613l3.579.015zm-4.077 4.077l2.67 2.67c-1.334.775-2.871 1.242-4.516 1.282v-3.837c.646-.012 1.272-.049 1.846-.115zm-2.077-8.211h-2.994c.059-1.143.212-2.24.456-3.279.823.12 1.674.188 2.538.222v3.057zm-1.077-4.077c.365-1.171.868-2.268 1.488-3.268l2.67-2.67c-.201-.196-.395-.4-.579-.613l-3.579-.015z" /></svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar: Copyright & Legal */}
            <div className="footer-bottom-bar">
                <div className="container bottom-content">
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
