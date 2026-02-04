import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <Link to="/" className="logo">
                        <span className="logo-text">SANOTA</span>
                    </Link>

                    <nav className="nav">
                        <ul className="nav-list">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/solutions">Solutions</Link></li>
                            <li><Link to="/industries">Industries</Link></li>
                            <li><Link to="/clients-experience">Clients & Experience</Link></li>
                            <li><Link to="/case-studies">Case Studies</Link></li>
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/insights">Insights</Link></li>
                            <li><Link to="/about">About Sanota</Link></li>
                            <li><Link to="/careers">Careers</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
