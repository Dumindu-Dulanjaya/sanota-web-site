import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './Products.css';

function Products() {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', 'Control Systems', 'SCADA & HMI', 'Sensors & Instrumentation', 'Software Solutions', 'Custom Solutions'];

    const products = [
        {
            id: 1,
            name: 'Industrial PLC Systems',
            category: 'Control Systems',
            description: 'High-performance programmable logic controllers for industrial automation applications',
            features: [
                'Modular architecture for scalability',
                'High-speed processing capabilities',
                'Extensive I/O options',
                'Built-in communication protocols',
                'Redundancy support'
            ],
            brands: ['Siemens', 'Allen-Bradley', 'Schneider Electric', 'Mitsubishi'],
            applications: ['Manufacturing', 'Process Control', 'Building Automation'],
            documentation: true,
            customizable: true
        },
        {
            id: 2,
            name: 'SCADA Software Platforms',
            category: 'SCADA & HMI',
            description: 'Comprehensive supervisory control and data acquisition systems for real-time monitoring',
            features: [
                'Real-time data visualization',
                'Alarm management and notification',
                'Historical data trending',
                'Remote access capabilities',
                'Multi-site integration'
            ],
            brands: ['Wonderware', 'Ignition', 'WinCC', 'iFIX'],
            applications: ['Water Treatment', 'Power Distribution', 'Manufacturing'],
            documentation: true,
            customizable: true
        },
        {
            id: 3,
            name: 'Industrial HMI Panels',
            category: 'SCADA & HMI',
            description: 'Touch-screen operator interface panels for machine and process control',
            features: [
                'High-resolution displays',
                'Multi-touch capability',
                'Rugged industrial design',
                'Multiple communication ports',
                'Recipe management'
            ],
            brands: ['Siemens', 'Pro-face', 'Weintek', 'Maple Systems'],
            applications: ['Machine Control', 'Process Monitoring', 'Production Lines'],
            documentation: true,
            customizable: false
        },
        {
            id: 4,
            name: 'Variable Frequency Drives',
            category: 'Control Systems',
            description: 'Energy-efficient motor control drives for precise speed and torque control',
            features: [
                'Energy optimization algorithms',
                'Soft start/stop capabilities',
                'Multiple control modes',
                'Built-in protection features',
                'Communication interface options'
            ],
            brands: ['ABB', 'Siemens', 'Schneider', 'Danfoss'],
            applications: ['Pumps', 'Fans', 'Conveyors', 'HVAC Systems'],
            documentation: true,
            customizable: false
        },
        {
            id: 5,
            name: 'Industrial Sensors & Transmitters',
            category: 'Sensors & Instrumentation',
            description: 'Precision measurement devices for temperature, pressure, flow, and level monitoring',
            features: [
                'High accuracy measurements',
                'Multiple output options',
                'Harsh environment ratings',
                'Easy calibration',
                'Long-term stability'
            ],
            brands: ['Endress+Hauser', 'Rosemount', 'WIKA', 'Yokogawa'],
            applications: ['Process Industries', 'Water Treatment', 'HVAC'],
            documentation: true,
            customizable: false
        },
        {
            id: 6,
            name: 'MES Software Solutions',
            category: 'Software Solutions',
            description: 'Manufacturing execution systems for production management and optimization',
            features: [
                'Production scheduling',
                'Quality management',
                'Traceability and genealogy',
                'Performance analysis',
                'ERP integration'
            ],
            brands: ['Custom Development', 'Siemens Opcenter', 'Rockwell FactoryTalk'],
            applications: ['Manufacturing', 'Food & Beverage', 'Pharmaceuticals'],
            documentation: true,
            customizable: true
        },
        {
            id: 7,
            name: 'Custom Control Panels',
            category: 'Custom Solutions',
            description: 'Engineered-to-order electrical control panels for specific applications',
            features: [
                'Application-specific design',
                'UL/CE certified components',
                'Complete documentation package',
                'Factory testing included',
                'On-site commissioning support'
            ],
            brands: ['Custom Engineered'],
            applications: ['All Industries'],
            documentation: true,
            customizable: true
        },
        {
            id: 8,
            name: 'Industrial Networking Solutions',
            category: 'Control Systems',
            description: 'Robust networking infrastructure for industrial automation systems',
            features: [
                'Industrial-grade switches',
                'Fiber optic connectivity',
                'Network redundancy',
                'Cybersecurity features',
                'Remote management'
            ],
            brands: ['Cisco Industrial', 'Hirschmann', 'Moxa', 'Phoenix Contact'],
            applications: ['Factory Networks', 'SCADA Systems', 'Distributed Control'],
            documentation: true,
            customizable: false
        }
    ];

    const filteredProducts = selectedCategory === 'All'
        ? products
        : products.filter(product => product.category === selectedCategory);

    return (
        <div className="products-page">
            <Helmet>
                <title>Products & Solutions | Sanota Automation Engineering</title>
                <meta name="description" content="Comprehensive range of industrial automation products including PLCs, SCADA systems, HMI panels, VFDs, sensors, and custom solutions." />
                <meta name="keywords" content="industrial automation products, PLC systems, SCADA software, HMI panels, VFD drives, industrial sensors, automation solutions" />
            </Helmet>

            {/* Hero Section */}
            <section className="products-hero section">
                <div className="container">
                    <div className="hero-content text-center">
                        <h1>Products & Solutions</h1>
                        <p className="hero-subtitle">
                            Comprehensive range of industrial automation products and custom solutions
                        </p>
                    </div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="products-filter section bg-gray-50">
                <div className="container">
                    <div className="category-filter">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="products-grid-section section bg-gray-50">
                <div className="container">
                    <div className="products-grid">
                        {filteredProducts.map((product) => (
                            <div key={product.id} className="product-card">
                                <div className="product-header">
                                    <div className="product-badges">
                                        <span className="category-badge">{product.category}</span>
                                        {product.customizable && <span className="custom-badge">Customizable</span>}
                                    </div>
                                    <h3>{product.name}</h3>
                                    <p className="product-description">{product.description}</p>
                                </div>

                                <div className="product-body">
                                    <div className="product-section">
                                        <h4>Key Features</h4>
                                        <ul className="features-list">
                                            {product.features.map((feature, idx) => (
                                                <li key={idx}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="product-section">
                                        <h4>Supported Brands</h4>
                                        <div className="brands-list">
                                            {product.brands.map((brand, idx) => (
                                                <span key={idx} className="brand-tag">{brand}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="product-section">
                                        <h4>Applications</h4>
                                        <div className="applications-list">
                                            {product.applications.map((app, idx) => (
                                                <span key={idx} className="app-tag">{app}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="product-footer">
                                    {product.documentation && (
                                        <button className="btn-doc">
                                            📄 Technical Docs
                                        </button>
                                    )}
                                    <button className="btn-inquiry">Request Quote</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Customization Section */}
            <section className="customization-section section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Custom Solutions & Engineering</h2>
                        <p className="section-intro">
                            Tailored automation solutions designed specifically for your unique requirements
                        </p>
                    </div>

                    <div className="customization-grid">
                        <div className="custom-card">
                            <div className="custom-icon">🎯</div>
                            <h3>Application-Specific Design</h3>
                            <p>Our engineering team designs solutions tailored to your exact specifications and operational requirements.</p>
                        </div>
                        <div className="custom-card">
                            <div className="custom-icon">⚙️</div>
                            <h3>System Integration</h3>
                            <p>Seamless integration of multiple products and technologies into a unified automation system.</p>
                        </div>
                        <div className="custom-card">
                            <div className="custom-icon">📋</div>
                            <h3>Complete Documentation</h3>
                            <p>Comprehensive technical documentation including drawings, manuals, and as-built documentation.</p>
                        </div>
                        <div className="custom-card">
                            <div className="custom-icon">🔧</div>
                            <h3>Factory Testing</h3>
                            <p>Rigorous factory acceptance testing before delivery to ensure quality and performance.</p>
                        </div>
                        <div className="custom-card">
                            <div className="custom-icon">🚀</div>
                            <h3>Commissioning Support</h3>
                            <p>On-site installation, commissioning, and startup assistance from our expert technicians.</p>
                        </div>
                        <div className="custom-card">
                            <div className="custom-icon">🛠️</div>
                            <h3>Ongoing Support</h3>
                            <p>Long-term technical support, maintenance, and upgrade services for your automation systems.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Documentation Section */}
            <section className="documentation-section section bg-gradient">
                <div className="container">
                    <div className="documentation-content">
                        <div className="doc-text">
                            <h2>Technical Documentation & Support</h2>
                            <p>Access comprehensive technical documentation for all our products and solutions:</p>
                            <ul className="doc-list">
                                <li>Product datasheets and specifications</li>
                                <li>Installation and configuration guides</li>
                                <li>Programming manuals and examples</li>
                                <li>Troubleshooting and maintenance guides</li>
                                <li>CAD drawings and wiring diagrams</li>
                                <li>Software updates and firmware</li>
                            </ul>
                            <div className="doc-buttons">
                                <button className="btn btn-primary btn-lg">Download Center</button>
                                <button className="btn btn-secondary-light btn-lg">Contact Support</button>
                            </div>
                        </div>
                        <div className="doc-icon">
                            📚
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section section">
                <div className="container text-center">
                    <h2>Need Help Selecting the Right Products?</h2>
                    <p className="section-intro">
                        Our technical team can help you choose the optimal products and solutions for your application
                    </p>
                    <div className="cta-buttons">
                        <a href="/contact" className="btn btn-primary btn-lg">Request Consultation</a>
                        <a href="/solutions" className="btn btn-secondary btn-lg">View Solutions</a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Products;
