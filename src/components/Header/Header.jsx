import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Header.css';
import sanotalogo from '../../assets/sanotalogo.png';

function Header() {
    const { user, isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();
    const [activeDropdown, setActiveDropdown] = useState(null);

    const handleLogout = () => {
        logout();
        setActiveDropdown(null);
        navigate('/');
    };

    const menuItems = [
        {
            title: 'Solutions',
            path: '/solutions',
            dropdown: [
                { title: 'End-to-End Engineering & Automation', path: '/solutions/end-to-end' },
                { title: 'Sanota Developed Products', path: '/solutions/products' },
                { title: 'Software & Digital Solutions', path: '/solutions/software-digital' },
                { title: 'Retrofit & System Takeover', path: '/solutions/retrofit-takeover' },
                { title: 'AMC & Lifecycle Support', path: '/solutions/amc-support' }
            ]
        },
        {
            title: 'Industries',
            path: '/industries',
            dropdown: [
                { title: 'Manufacturing & Processing', path: '/industries/manufacturing' },
                { title: 'Food Processing', path: '/industries/food' },
                { title: 'Tea Industry', path: '/industries/tea' },
                { title: 'Agriculture & Greenhouse', path: '/industries/agriculture' },
                { title: 'Logistics & Warehousing', path: '/industries/logistics' },
                { title: 'Infrastructure & Utilities', path: '/industries/infrastructure' },
                { title: 'Institutions & Government', path: '/industries/institutions' },
                { title: 'Energy Systems', path: '/industries/energy' },
                { title: 'Environmental Systems', path: '/industries/environmental' }
            ]
        },
        {
            title: 'Industry Initiatives',
            path: '/initiatives',
            dropdown: [
                { title: 'Tea Industry Modernization', path: '/initiatives/tea-modernization' },
                { title: 'Smart Controlled Agriculture', path: '/initiatives/smart-agriculture' },
                { title: 'Smart Industrial Systems', path: '/initiatives/smart-industrial' },
                { title: 'Energy Efficiency Systems', path: '/initiatives/energy-efficiency' },
                { title: 'Environmental Systems', path: '/initiatives/environmental' }
            ]
        },
        {
            title: 'Case Studies',
            path: '/case-studies',
            dropdown: null
        },
        {
            title: 'Knowledge Centre',
            path: '/knowledge-centre',
            dropdown: [
                { title: 'Insights', path: '/knowledge/insights' },
                { title: 'Engineering Knowledge', path: '/knowledge/engineering' },
                { title: 'Industry Perspectives', path: '/knowledge/perspectives' },
                { title: 'Innovation Thinking', path: '/knowledge/innovation' }
            ]
        },
        {
            title: 'Products',
            path: '/products',
            dropdown: [
                { title: 'Product Categories', path: '/products/categories' },
                { title: 'Tea Processing Systems', path: '/products/tea-processing' },
                { title: 'Food Processing Systems', path: '/products/food-processing' },
                { title: 'Smart Automation Systems', path: '/products/smart-automation' },
                { title: 'Industrial Automation Modules', path: '/products/industrial-modules' },
                { title: 'Environmental Systems', path: '/products/environmental' },
                { title: 'Specialized Devices', path: '/products/specialized-devices' }
            ]
        },
        {
            title: 'About',
            path: '/about',
            dropdown: [
                { title: 'Company Overview', path: '/about/overview' },
                { title: 'Engineering Philosophy', path: '/about/philosophy' },
                { title: 'Integrated Capability', path: '/about/capability' },
                { title: 'Clients & Experience', path: '/about/clients' }
            ]
        },
        {
            title: 'Contact',
            path: '/contact',
            dropdown: null
        }
    ];

    return (
        <header className="header">
            <div className="container-fluid">
                <div className="header-content">
                    {/* Left: Logo */}
                    <Link to="/" className="logo">
                        <img src={sanotalogo} alt="Sanota" className="logo-image" />
                    </Link>

                    {/* Center: Navigation */}
                    <nav className="nav">
                        <ul className="nav-list">
                            {menuItems.map((item, index) => (
                                <li 
                                    key={index}
                                    className={item.dropdown ? "nav-dropdown" : ""}
                                    onMouseEnter={() => item.dropdown && setActiveDropdown(index)}
                                    onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
                                >
                                    {item.dropdown ? (
                                        <>
                                            <button className={`nav-dropdown-button ${activeDropdown === index ? 'active' : ''}`}>
                                                {item.title}
                                                <span className="nav-dropdown-arrow">▼</span>
                                            </button>
                                            {activeDropdown === index && (
                                                <div className="nav-dropdown-menu">
                                                    {item.dropdown.map((subItem, subIndex) => (
                                                        <NavLink key={subIndex} to={subItem.path} className="nav-dropdown-item">
                                                            <div className="nav-dropdown-content">
                                                                <span className="nav-dropdown-title">{subItem.title}</span>
                                                            </div>
                                                        </NavLink>
                                                    ))}
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <NavLink to={item.path} className={({ isActive }) => isActive ? "active" : ""}>
                                            {item.title}
                                        </NavLink>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Right: Actions */}
                    <div className="header-actions">
                        <Link to="/contact" className="quote-button">DISCUSS YOUR REQUIREMENT</Link>

                        {isAuthenticated ? (
                            <Link to="/profile" className="profile-icon-link">
                                <span className="user-icon">👤</span>
                            </Link>
                        ) : (
                            <Link to="/login" className="login-link">Login</Link>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
