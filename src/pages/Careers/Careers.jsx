import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './Careers.css';

function Careers() {
    const [selectedPosition, setSelectedPosition] = useState('');
    const [applicationData, setApplicationData] = useState({
        fullName: '',
        email: '',
        phone: '',
        position: '',
        cv: null,
        message: ''
    });
    const [applicationStatus, setApplicationStatus] = useState({ type: '', message: '' });

    const openPositions = [
        {
            id: 1,
            title: 'Senior Automation Engineer',
            department: 'Engineering',
            location: 'Colombo',
            type: 'Full-time, On-site',
            overview: 'Lead automation projects from design through commissioning, working with industrial control systems and SCADA platforms.',
            responsibilities: [
                'Design and implement PLC/SCADA systems for industrial applications',
                'Lead project execution from concept to commissioning',
                'Provide technical guidance to junior engineers',
                'Conduct FAT and SAT for automation systems',
                'Prepare technical documentation and as-built drawings'
            ],
            requirements: [
                'Bachelor\'s degree in Electrical/Electronics Engineering',
                '5+ years experience in industrial automation',
                'Proficiency in Siemens TIA Portal, Allen-Bradley Studio 5000',
                'Strong understanding of industrial communication protocols',
                'Experience with SCADA systems (Wonderware, Ignition, WinCC)',
                'Excellent problem-solving and communication skills'
            ]
        },
        {
            id: 2,
            title: 'SCADA Software Developer',
            department: 'Software',
            location: 'Colombo',
            type: 'Full-time, Hybrid',
            overview: 'Develop and maintain SCADA applications for water treatment, power distribution, and manufacturing facilities.',
            responsibilities: [
                'Design and develop SCADA/HMI applications',
                'Implement database connectivity and historical data logging',
                'Create custom scripts and automation logic',
                'Integrate SCADA systems with third-party applications',
                'Provide technical support and system optimization'
            ],
            requirements: [
                'Bachelor\'s degree in Computer Science or Engineering',
                '3+ years experience in SCADA development',
                'Proficiency in Wonderware, Ignition, or similar platforms',
                'Strong programming skills (C#, Python, SQL)',
                'Understanding of industrial protocols (OPC, Modbus, etc.)',
                'Ability to work independently and in teams'
            ]
        },
        {
            id: 3,
            title: 'Electrical Design Engineer',
            department: 'Engineering',
            location: 'Colombo',
            type: 'Full-time, On-site',
            overview: 'Design electrical control systems, panels, and power distribution for automation projects.',
            responsibilities: [
                'Design electrical schematics and panel layouts',
                'Perform load calculations and cable sizing',
                'Prepare bill of materials and technical specifications',
                'Coordinate with panel fabrication team',
                'Conduct site surveys and electrical inspections'
            ],
            requirements: [
                'Bachelor\'s degree in Electrical Engineering',
                '2-4 years experience in electrical design',
                'Proficiency in AutoCAD Electrical or EPLAN',
                'Knowledge of electrical codes and standards',
                'Understanding of motor control and VFD applications',
                'Strong attention to detail and documentation skills'
            ]
        },
        {
            id: 4,
            title: 'Project Engineer',
            department: 'Projects',
            location: 'Colombo',
            type: 'Full-time, On-site',
            overview: 'Manage automation project execution, coordinating technical teams and ensuring timely delivery.',
            responsibilities: [
                'Coordinate project activities and resources',
                'Monitor project progress and timelines',
                'Prepare project documentation and reports',
                'Liaise with clients and stakeholders',
                'Ensure quality standards and safety compliance'
            ],
            requirements: [
                'Bachelor\'s degree in Engineering',
                '2-3 years experience in project coordination',
                'Strong organizational and communication skills',
                'Familiarity with automation systems',
                'Proficiency in MS Project or similar tools',
                'Ability to manage multiple projects simultaneously'
            ]
        },
        {
            id: 5,
            title: 'Graduate Trainee Engineer',
            department: 'Engineering',
            location: 'Colombo',
            type: 'Full-time, On-site',
            overview: 'Entry-level position for recent graduates to gain hands-on experience in industrial automation.',
            responsibilities: [
                'Assist senior engineers in project execution',
                'Learn PLC programming and SCADA development',
                'Support commissioning and testing activities',
                'Prepare technical documentation',
                'Participate in training programs'
            ],
            requirements: [
                'Bachelor\'s degree in Electrical/Electronics/Computer Engineering',
                'Graduated within the last 2 years',
                'Basic understanding of automation concepts',
                'Willingness to learn and work in field conditions',
                'Good communication and teamwork skills',
                'Valid driver\'s license (preferred)'
            ]
        }
    ];

    const cultureValues = [
        {
            title: 'Engineering Excellence',
            description: 'We prioritize technical quality and precision in everything we do. Our work speaks for itself.',
            icon: '⚙️'
        },
        {
            title: 'Accountability & Ownership',
            description: 'Every team member takes responsibility for their work and sees projects through to completion.',
            icon: '🎯'
        },
        {
            title: 'Continuous Learning',
            description: 'Technology evolves rapidly. We invest in training and encourage continuous skill development.',
            icon: '📚'
        },
        {
            title: 'Ethical Practice',
            description: 'We maintain the highest standards of professional ethics and integrity in all our dealings.',
            icon: '🛡️'
        },
        {
            title: 'Collaboration',
            description: 'Complex projects require teamwork. We foster a collaborative environment across all disciplines.',
            icon: '🤝'
        },
        {
            title: 'Long-term Thinking',
            description: 'We build systems and careers for the long term, not quick fixes or short-term gains.',
            icon: '🔭'
        }
    ];

    const benefits = [
        'Competitive salary packages',
        'Performance-based bonuses',
        'Comprehensive training programs',
        'Exposure to diverse industrial projects',
        'Career advancement opportunities',
        'Professional certification support',
        'Health insurance coverage',
        'Annual leave and sick leave',
        'Modern office facilities',
        'Team building activities'
    ];

    const applicationProcess = [
        {
            step: '1. Apply',
            description: 'Submit your application with CV and cover letter through our online form.',
            icon: '📝'
        },
        {
            step: '2. Review',
            description: 'Our HR team reviews applications within 5-7 business days.',
            icon: '🔍'
        },
        {
            step: '3. Interview',
            description: 'Shortlisted candidates are invited for technical and HR interviews.',
            icon: '💬'
        },
        {
            step: '4. Decision',
            description: 'Final decision communicated within 2 weeks of interview completion.',
            icon: '✅'
        }
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setApplicationData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && (file.type === 'application/pdf' || file.type === 'application/msword' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')) {
            setApplicationData(prev => ({
                ...prev,
                cv: file
            }));
        } else {
            alert('Please upload a PDF or DOC file');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setApplicationStatus({ type: 'loading', message: 'Submitting your application...' });

        // Simulate application submission
        setTimeout(() => {
            setApplicationStatus({
                type: 'success',
                message: 'Thank you for your application! We will review your CV and get back to you within 5-7 business days.'
            });

            // Reset form
            setApplicationData({
                fullName: '',
                email: '',
                phone: '',
                position: '',
                cv: null,
                message: ''
            });
            setSelectedPosition('');

            // Clear status after 5 seconds
            setTimeout(() => {
                setApplicationStatus({ type: '', message: '' });
            }, 5000);
        }, 1500);
    };

    return (
        <div className="careers-page">
            <Helmet>
                <title>Careers at Sanota | Join Our Engineering Team</title>
                <meta name="description" content="Build your career in industrial automation with Sanota. Explore open positions, learn about our culture, and join a team committed to engineering excellence." />
                <meta name="keywords" content="automation careers, engineering jobs Sri Lanka, SCADA jobs, PLC programming careers, electrical engineering jobs" />
            </Helmet>

            {/* Hero Section */}
            <section className="careers-hero section">
                <div className="container">
                    <div className="hero-content text-center">
                        <h1>Build Your Career with Sanota</h1>
                        <p className="hero-subtitle">
                            Join a team committed to engineering excellence, continuous learning, and long-term growth
                        </p>
                        <div className="hero-cta">
                            <a href="#open-positions" className="btn btn-primary btn-lg">View Open Positions</a>
                            <a href="#apply" className="btn btn-secondary-light btn-lg">Apply Now</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Life at Sanota */}
            <section className="life-section section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Life at Sanota</h2>
                        <p className="section-intro">
                            A workplace where engineering meets opportunity
                        </p>
                    </div>
                    <div className="life-content">
                        <div className="life-text">
                            <h3>Real Engineering Work</h3>
                            <p>
                                At Sanota, you'll work on real industrial projects from day one. Our engineers design, program, and commission automation systems for leading companies across Sri Lanka. You'll gain hands-on experience with PLCs, SCADA systems, industrial networks, and control panels.
                            </p>
                            <h3>Collaborative Environment</h3>
                            <p>
                                Projects are team efforts. You'll collaborate with electrical engineers, software developers, project managers, and field technicians. This cross-functional exposure accelerates learning and builds well-rounded engineering skills.
                            </p>
                            <h3>Continuous Learning</h3>
                            <p>
                                Technology evolves rapidly in automation. We provide regular training on new platforms, certifications from technology partners, and opportunities to attend industry conferences. Your growth is our investment.
                            </p>
                            <h3>Responsibility & Ownership</h3>
                            <p>
                                We trust our engineers with real responsibility. You'll own parts of projects, make technical decisions, and see your work come to life in operational facilities. This builds confidence and expertise faster than traditional roles.
                            </p>
                        </div>
                        <div className="life-stats">
                            <div className="stat-card">
                                <div className="stat-number">15+</div>
                                <div className="stat-label">Years in Business</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-number">30+</div>
                                <div className="stat-label">Team Members</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-number">200+</div>
                                <div className="stat-label">Projects Delivered</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-number">6</div>
                                <div className="stat-label">Industries Served</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Work at Sanota */}
            <section className="why-sanota-section section bg-gray-50">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Why Work at Sanota</h2>
                    </div>
                    <div className="benefits-grid">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="benefit-item">
                                <span className="benefit-icon">✓</span>
                                <span className="benefit-text">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Culture & Values */}
            <section className="culture-section section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Our Culture & Values</h2>
                        <p className="section-intro">
                            The principles that guide how we work and grow together
                        </p>
                    </div>
                    <div className="culture-grid">
                        {cultureValues.map((value, index) => (
                            <div key={index} className="culture-card">
                                <div className="culture-icon">{value.icon}</div>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section id="open-positions" className="positions-section section bg-gray-50">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Open Positions</h2>
                        <p className="section-intro">
                            Current opportunities to join our team
                        </p>
                    </div>
                    <div className="positions-list">
                        {openPositions.map((position) => (
                            <div key={position.id} className="position-card">
                                <div className="position-header">
                                    <div>
                                        <h3>{position.title}</h3>
                                        <div className="position-meta">
                                            <span className="meta-item">{position.department}</span>
                                            <span className="meta-divider">•</span>
                                            <span className="meta-item">{position.location}</span>
                                            <span className="meta-divider">•</span>
                                            <span className="meta-item">{position.type}</span>
                                        </div>
                                    </div>
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => {
                                            setSelectedPosition(position.title);
                                            setApplicationData(prev => ({ ...prev, position: position.title }));
                                            document.getElementById('apply').scrollIntoView({ behavior: 'smooth' });
                                        }}
                                    >
                                        Apply
                                    </button>
                                </div>
                                <p className="position-overview">{position.overview}</p>
                                <div className="position-details">
                                    <div className="detail-section">
                                        <h4>Key Responsibilities</h4>
                                        <ul>
                                            {position.responsibilities.map((resp, idx) => (
                                                <li key={idx}>{resp}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="detail-section">
                                        <h4>Requirements</h4>
                                        <ul>
                                            {position.requirements.map((req, idx) => (
                                                <li key={idx}>{req}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Process */}
            <section className="process-section section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Application Process</h2>
                        <p className="section-intro">
                            What to expect when you apply
                        </p>
                    </div>
                    <div className="process-timeline">
                        {applicationProcess.map((step, index) => (
                            <div key={index} className="process-step">
                                <div className="step-icon">{step.icon}</div>
                                <h4>{step.step}</h4>
                                <p>{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Form */}
            <section id="apply" className="apply-section section bg-gray-50">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Submit Your Application</h2>
                        <p className="section-intro">
                            {selectedPosition ? `Applying for: ${selectedPosition}` : 'Fill out the form below to apply'}
                        </p>
                    </div>
                    <div className="apply-form-container">
                        <form onSubmit={handleSubmit} className="apply-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="fullName">Full Name *</label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        value={applicationData.fullName}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Your full name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={applicationData.email}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={applicationData.phone}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="+94 XX XXX XXXX"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="position">Position Applied For *</label>
                                    <select
                                        id="position"
                                        name="position"
                                        value={applicationData.position}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value="">Select a position</option>
                                        {openPositions.map((pos) => (
                                            <option key={pos.id} value={pos.title}>{pos.title}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="cv">Upload CV (PDF or DOC) *</label>
                                <input
                                    type="file"
                                    id="cv"
                                    name="cv"
                                    onChange={handleFileChange}
                                    accept=".pdf,.doc,.docx"
                                    required
                                />
                                {applicationData.cv && (
                                    <p className="file-name">Selected: {applicationData.cv.name}</p>
                                )}
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Cover Letter / Message (Optional)</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={applicationData.message}
                                    onChange={handleInputChange}
                                    rows="6"
                                    placeholder="Tell us why you're interested in this position..."
                                />
                            </div>

                            {applicationStatus.message && (
                                <div className={`form-status ${applicationStatus.type}`}>
                                    {applicationStatus.message}
                                </div>
                            )}

                            <button type="submit" className="btn btn-primary btn-lg btn-submit">
                                {applicationStatus.type === 'loading' ? 'Submitting...' : 'Submit Application'}
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Internship Section */}
            <section className="internship-section section">
                <div className="container">
                    <div className="internship-content">
                        <h2>Internship & Graduate Programs</h2>
                        <p>
                            We offer structured internship programs for engineering students and graduate trainee positions for recent graduates. These programs provide hands-on experience in real industrial projects, mentorship from senior engineers, and a clear path to full-time employment.
                        </p>
                        <p>
                            <strong>What you'll gain:</strong> Practical automation engineering skills, exposure to multiple industries, professional work environment, and potential for permanent placement based on performance.
                        </p>
                        <a href="#apply" className="btn btn-secondary btn-lg">Apply for Graduate Program</a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Careers;
