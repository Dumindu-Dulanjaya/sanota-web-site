import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Header.css';

function Header() {
    const { user, isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();
    const [showDropdown, setShowDropdown] = useState(false);

    const handleLogout = () => {
        logout();
        setShowDropdown(false);
        navigate('/');
    };

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

                    {/* User Profile or Login Button */}
                    {isAuthenticated ? (
                        <div className="user-profile">
                            <button
                                className="user-profile-button"
                                onClick={() => setShowDropdown(!showDropdown)}
                                onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
                            >
                                <span className="user-icon">👤</span>
                                <span className="user-name">{user.username}</span>
                                <span className="dropdown-arrow">▼</span>
                            </button>

                            {showDropdown && (
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
                        <Link to="/login" className="cta-button">Login</Link>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
