import { Helmet } from 'react-helmet-async';
import './ClientsExperience.css';

function ClientsExperience() {
    const clients = [
        { name: 'Ceylon Electricity Board', industry: 'Energy & Power', logo: '⚡' },
        { name: 'National Water Supply & Drainage Board', industry: 'Water & Wastewater', logo: '💧' },
        { name: 'Brandix Lanka Limited', industry: 'Manufacturing', logo: '🏭' },
        { name: 'MAS Holdings', industry: 'Manufacturing', logo: '🏭' },
        { name: 'Hayleys PLC', industry: 'Conglomerate', logo: '🏢' },
        { name: 'Ceylon Cold Stores', industry: 'Food & Beverage', logo: '🍃' },
        { name: 'Nestlé Lanka', industry: 'Food & Beverage', logo: '🍃' },
        { name: 'Coca-Cola Beverages Sri Lanka', industry: 'Food & Beverage', logo: '🍃' },
        { name: 'Abans PLC', industry: 'Manufacturing', logo: '🏭' },
        { name: 'Diesel & Motor Engineering PLC', industry: 'Manufacturing', logo: '🏭' },
        { name: 'Kelani Valley Plantations', industry: 'Agriculture', logo: '🌾' },
        { name: 'Colombo Dockyard PLC', industry: 'Engineering', logo: '⚙️' },
        { name: 'Sri Lanka Ports Authority', industry: 'Infrastructure', logo: '🚢' },
        { name: 'Airport & Aviation Services', industry: 'Aviation', logo: '✈️' },
        { name: 'Ceylon Petroleum Corporation', industry: 'Energy & Power', logo: '⚡' },
        { name: 'Laugfs Gas PLC', industry: 'Energy & Power', logo: '⚡' }
    ];

    const timeline = [
        {
            year: '2008',
            title: 'Company Founded',
            description: 'Sanota established with a vision to deliver world-class automation solutions in Sri Lanka',
            milestone: true
        },
        {
            year: '2010',
            title: 'First Major SCADA Project',
            description: 'Deployed comprehensive SCADA system for water treatment facility',
            milestone: false
        },
        {
            year: '2012',
            title: 'Expanded to Manufacturing',
            description: 'Successfully completed first large-scale factory automation project',
            milestone: false
        },
        {
            year: '2014',
            title: '50+ Projects Milestone',
            description: 'Reached significant milestone of 50 completed projects across multiple industries',
            milestone: true
        },
        {
            year: '2016',
            title: 'Power Sector Entry',
            description: 'Entered power distribution sector with advanced automation solutions',
            milestone: false
        },
        {
            year: '2018',
            title: '10 Years of Excellence',
            description: 'Celebrated a decade of delivering automation excellence across Sri Lanka',
            milestone: true
        },
        {
            year: '2020',
            title: 'Industry 4.0 Solutions',
            description: 'Launched Industry 4.0 and IIoT solution offerings',
            milestone: false
        },
        {
            year: '2022',
            title: '150+ Projects Completed',
            description: 'Achieved major milestone with over 150 successful project completions',
            milestone: true
        },
        {
            year: '2024',
            title: 'Nationwide Coverage',
            description: 'Established presence across all provinces in Sri Lanka with 200+ projects',
            milestone: true
        }
    ];

    const provinces = [
        { name: 'Western Province', projects: 85, cities: ['Colombo', 'Gampaha', 'Kalutara'] },
        { name: 'Central Province', projects: 28, cities: ['Kandy', 'Matale', 'Nuwara Eliya'] },
        { name: 'Southern Province', projects: 22, cities: ['Galle', 'Matara', 'Hambantota'] },
        { name: 'Northern Province', projects: 12, cities: ['Jaffna', 'Kilinochchi', 'Mannar'] },
        { name: 'Eastern Province', projects: 15, cities: ['Trincomalee', 'Batticaloa', 'Ampara'] },
        { name: 'North Western Province', projects: 18, cities: ['Kurunegala', 'Puttalam'] },
        { name: 'North Central Province', projects: 14, cities: ['Anuradhapura', 'Polonnaruwa'] },
        { name: 'Uva Province', projects: 10, cities: ['Badulla', 'Monaragala'] },
        { name: 'Sabaragamuwa Province', projects: 16, cities: ['Ratnapura', 'Kegalle'] }
    ];

    const stats = [
        { value: '15+', label: 'Years of Experience' },
        { value: '200+', label: 'Projects Completed' },
        { value: '50+', label: 'Active Clients' },
        { value: '9/9', label: 'Provinces Covered' }
    ];

    return (
        <div className="clients-experience-page">
            <Helmet>
                <title>Clients & Experience | Sanota Automation Engineering</title>
                <meta name="description" content="15+ years of automation excellence across Sri Lanka. Trusted by leading organizations with 200+ successful projects nationwide." />
                <meta name="keywords" content="automation clients, Sri Lanka automation, industrial projects, nationwide coverage, automation experience" />
            </Helmet>

            {/* Hero Section */}
            <section className="clients-hero section">
                <div className="container">
                    <div className="hero-content text-center">
                        <h1>Clients & Experience</h1>
                        <p className="hero-subtitle">
                            15+ years of delivering automation excellence across Sri Lanka
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section section">
                <div className="container">
                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-card">
                                <div className="stat-value">{stat.value}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Clients Section */}
            <section className="clients-section section bg-gray-50">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Trusted by Industry Leaders</h2>
                        <p className="section-intro">
                            Proud to serve leading organizations across diverse industries
                        </p>
                    </div>
                    <div className="clients-grid">
                        {clients.map((client, index) => (
                            <div key={index} className="client-card">
                                <div className="client-logo">{client.logo}</div>
                                <h3>{client.name}</h3>
                                <p className="client-industry">{client.industry}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="timeline-section section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Our Journey</h2>
                        <p className="section-intro">
                            A timeline of growth, innovation, and excellence
                        </p>
                    </div>
                    <div className="timeline">
                        {timeline.map((event, index) => (
                            <div
                                key={index}
                                className={`timeline-item ${event.milestone ? 'milestone' : ''} ${index % 2 === 0 ? 'left' : 'right'}`}
                            >
                                <div className="timeline-content">
                                    <div className="timeline-year">{event.year}</div>
                                    <h3>{event.title}</h3>
                                    <p>{event.description}</p>
                                </div>
                                <div className="timeline-marker">
                                    {event.milestone && <span className="milestone-icon">⭐</span>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="map-section section bg-gradient">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Nationwide Coverage</h2>
                        <p className="section-intro-light">
                            Serving clients across all nine provinces of Sri Lanka
                        </p>
                    </div>

                    <div className="map-container">
                        <div className="sri-lanka-map">
                            <svg viewBox="0 0 400 600" className="map-svg">
                                {/* Sri Lanka outline - simplified */}
                                <path
                                    d="M 200 50 L 220 80 L 240 120 L 250 160 L 260 200 L 270 250 L 275 300 L 270 350 L 260 400 L 250 450 L 230 490 L 210 520 L 190 540 L 170 550 L 150 540 L 130 520 L 115 490 L 105 450 L 100 400 L 95 350 L 90 300 L 95 250 L 105 200 L 120 160 L 140 120 L 160 80 L 180 50 Z"
                                    className="map-outline"
                                    fill="#e0f2fe"
                                    stroke="#0ea5e9"
                                    strokeWidth="2"
                                />

                                {/* Province markers */}
                                <circle cx="180" cy="100" r="8" className="province-marker" data-province="Western" />
                                <circle cx="200" cy="180" r="6" className="province-marker" data-province="Central" />
                                <circle cx="170" cy="400" r="6" className="province-marker" data-province="Southern" />
                                <circle cx="200" cy="70" r="5" className="province-marker" data-province="Northern" />
                                <circle cx="240" cy="200" r="5" className="province-marker" data-province="Eastern" />
                                <circle cx="140" cy="150" r="5" className="province-marker" data-province="NW" />
                                <circle cx="180" cy="140" r="5" className="province-marker" data-province="NC" />
                                <circle cx="220" cy="300" r="5" className="province-marker" data-province="Uva" />
                                <circle cx="150" cy="250" r="5" className="province-marker" data-province="Sabaragamuwa" />
                            </svg>
                        </div>

                        <div className="provinces-list">
                            {provinces.map((province, index) => (
                                <div key={index} className="province-item">
                                    <div className="province-header">
                                        <h4>{province.name}</h4>
                                        <span className="project-count">{province.projects} Projects</span>
                                    </div>
                                    <div className="province-cities">
                                        {province.cities.join(' • ')}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section section">
                <div className="container text-center">
                    <h2>Join Our Growing List of Satisfied Clients</h2>
                    <p className="section-intro">
                        Experience the Sanota difference with proven expertise and nationwide support
                    </p>
                    <div className="cta-buttons">
                        <a href="/contact" className="btn btn-primary btn-lg">Request Consultation</a>
                        <a href="/case-studies" className="btn btn-secondary btn-lg">View Success Stories</a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ClientsExperience;
