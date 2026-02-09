import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Header.css';
import sanotalogo from '../../assets/sanotalogo.png';

function Header() {
    const { user, isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();
    const [showUserDropdown, setShowUserDropdown] = useState(false);
    const [showResourcesDropdown, setShowResourcesDropdown] = useState(false);
    const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);

    const handleLogout = () => {
        logout();
        setShowUserDropdown(false);
        navigate('/');
    };

    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <Link to="/" className="logo">
                        <img src={sanotalogo} alt="Sanota" className="logo-image" />
                    </Link>

                    <nav className="nav">
                        <ul className="nav-list">
                            <li><Link to="/solutions">Solutions</Link></li>
                            <li><Link to="/products">Products</Link></li>

                            {/* Resources Dropdown */}
                            <li
                                className="nav-dropdown"
                                onMouseEnter={() => setShowResourcesDropdown(true)}
                                onMouseLeave={() => setShowResourcesDropdown(false)}
                            >
                                <button className="nav-dropdown-button">
                                    Resources
                                    <span className="nav-dropdown-arrow">▼</span>
                                </button>

                                {showResourcesDropdown && (
                                    <div className="nav-dropdown-menu">
                                        <Link to="/industries" className="nav-dropdown-item">
                                            <div className="nav-dropdown-content">
                                                <span className="nav-dropdown-title">Industries</span>
                                                <span className="nav-dropdown-desc">Sectors we serve</span>
                                            </div>
                                        </Link>
                                        <Link to="/clients-experience" className="nav-dropdown-item">
                                            <div className="nav-dropdown-content">
                                                <span className="nav-dropdown-title">Clients & Experience</span>
                                                <span className="nav-dropdown-desc">Our client portfolio</span>
                                            </div>
                                        </Link>
                                        <Link to="/case-studies" className="nav-dropdown-item">
                                            <div className="nav-dropdown-content">
                                                <span className="nav-dropdown-title">Case Studies</span>
                                                <span className="nav-dropdown-desc">Success stories</span>
                                            </div>
                                        </Link>
                                        <Link to="/insights" className="nav-dropdown-item">
                                            <div className="nav-dropdown-content">
                                                <span className="nav-dropdown-title">Insights</span>
                                                <span className="nav-dropdown-desc">Industry knowledge</span>
                                            </div>
                                        </Link>
                                    </div>
                                )}
                            </li>

                            {/* Company Dropdown */}
                            <li
                                className="nav-dropdown"
                                onMouseEnter={() => setShowCompanyDropdown(true)}
                                onMouseLeave={() => setShowCompanyDropdown(false)}
                            >
                                <button className="nav-dropdown-button">
                                    Company
                                    <span className="nav-dropdown-arrow">▼</span>
                                </button>

                                {showCompanyDropdown && (
                                    <div className="nav-dropdown-menu">
                                        <Link to="/about" className="nav-dropdown-item">
                                            <div className="nav-dropdown-content">
                                                <span className="nav-dropdown-title">About Sanota</span>
                                                <span className="nav-dropdown-desc">Our story & values</span>
                                            </div>
                                        </Link>
                                        <Link to="/careers" className="nav-dropdown-item">
                                            <div className="nav-dropdown-content">
                                                <span className="nav-dropdown-title">Careers</span>
                                                <span className="nav-dropdown-desc">Join our team</span>
                                            </div>
                                        </Link>
                                    </div>
                                )}
                            </li>
                        </ul>
                    </nav>

                    {/* Right Side Actions - Contact Button & User Profile */}
                    <div className="header-actions">
                        <Link to="/contact" className="contact-button">Contact Us</Link>

                        {/* User Profile or Login Button */}
                        {isAuthenticated ? (
                            <div className="user-profile">
                                <button
                                    className="user-profile-button"
                                    onClick={() => setShowUserDropdown(!showUserDropdown)}
                                    onBlur={() => setTimeout(() => setShowUserDropdown(false), 200)}
                                >
                                    <span className="user-icon">👤</span>
                                    <span className="user-name">{user.username}</span>
                                    <span className="dropdown-arrow">▼</span>
                                </button>

                                {showUserDropdown && (
                                    <div className="user-dropdown">
                                        <div className="dropdown-header">
                                            <div className="dropdown-user-info">
                                                <span className="dropdown-icon">👤</span>
                                                <div className="dropdown-details">
                                                    <p className="dropdown-name">{user.username}</p>
                                                    <p className="dropdown-email">{user.email}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="dropdown-divider"></div>
                                        <button
                                            className="dropdown-item"
                                            onMouseDown={(e) => {
                                                e.preventDefault();
                                                handleLogout();
                                            }}
                                        >
                                            <span className="dropdown-item-icon">🚪</span>
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link to="/login" className="login-button">Login</Link>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
