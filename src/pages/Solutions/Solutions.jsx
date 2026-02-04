import './Solutions.css';
import picture1 from '../../assets/picture1.jpg';
import picture2 from '../../assets/picture2.jpg';
import picture3 from '../../assets/picture3.jpg';

function Solutions() {
    return (
        <div className="solutions-page">
            {/* Hero Section */}
            <section className="solutions-hero section">
                <div className="container">
                    <div className="hero-content text-center">
                        <h1>Comprehensive Automation Solutions</h1>
                        <p className="hero-subtitle">
                            End-to-end automation and engineering services designed to transform your operations
                        </p>
                    </div>
                </div>
            </section>

            {/* Problem Section */}
            <section className="problem-section section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>The Challenges You Face</h2>
                        <p className="section-intro">
                            Modern industrial operations face complex automation challenges
                        </p>
                    </div>
                    <div className="problems-grid">
                        <div className="problem-card">
                            <div className="problem-icon">⚠️</div>
                            <h3>Legacy Systems</h3>
                            <p>Outdated automation systems that are difficult to maintain, upgrade, or integrate with modern technology</p>
                        </div>
                        <div className="problem-card">
                            <div className="problem-icon">🔧</div>
                            <h3>Integration Complexity</h3>
                            <p>Disparate systems from multiple vendors that don't communicate effectively, leading to operational silos</p>
                        </div>
                        <div className="problem-card">
                            <div className="problem-icon">📉</div>
                            <h3>Operational Inefficiency</h3>
                            <p>Manual processes and lack of real-time data visibility resulting in reduced productivity and increased costs</p>
                        </div>
                        <div className="problem-card">
                            <div className="problem-icon">⏱️</div>
                            <h3>Downtime & Maintenance</h3>
                            <p>Unexpected equipment failures and lengthy maintenance procedures disrupting production schedules</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Approach Section */}
            <section className="approach-section section bg-gray-50">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Our Proven Approach</h2>
                        <p className="section-intro">
                            A systematic methodology that delivers results
                        </p>
                    </div>
                    <div className="approach-timeline">
                        <div className="approach-step">
                            <div className="step-number">01</div>
                            <div className="step-content">
                                <h3>Assessment & Analysis</h3>
                                <p>Comprehensive evaluation of your current systems, processes, and requirements. We identify pain points, opportunities, and develop a detailed roadmap.</p>
                                <ul>
                                    <li>Site surveys and system audits</li>
                                    <li>Stakeholder interviews</li>
                                    <li>Technical feasibility studies</li>
                                    <li>ROI analysis and business case development</li>
                                </ul>
                            </div>
                        </div>
                        <div className="approach-step">
                            <div className="step-number">02</div>
                            <div className="step-content">
                                <h3>Design & Engineering</h3>
                                <p>Detailed system design tailored to your specific needs, incorporating industry best practices and cutting-edge technology.</p>
                                <ul>
                                    <li>Control system architecture design</li>
                                    <li>Software application development</li>
                                    <li>Network and communication design</li>
                                    <li>Safety and compliance engineering</li>
                                </ul>
                            </div>
                        </div>
                        <div className="approach-step">
                            <div className="step-number">03</div>
                            <div className="step-content">
                                <h3>Implementation & Integration</h3>
                                <p>Professional installation and integration with minimal disruption to your operations, following rigorous quality standards.</p>
                                <ul>
                                    <li>Hardware installation and wiring</li>
                                    <li>Software configuration and programming</li>
                                    <li>System integration and testing</li>
                                    <li>Factory and site acceptance testing</li>
                                </ul>
                            </div>
                        </div>
                        <div className="approach-step">
                            <div className="step-number">04</div>
                            <div className="step-content">
                                <h3>Commissioning & Training</h3>
                                <p>Thorough commissioning process and comprehensive training to ensure your team can operate and maintain the system effectively.</p>
                                <ul>
                                    <li>System commissioning and optimization</li>
                                    <li>Operator training programs</li>
                                    <li>Documentation and manuals</li>
                                    <li>Knowledge transfer sessions</li>
                                </ul>
                            </div>
                        </div>
                        <div className="approach-step">
                            <div className="step-number">05</div>
                            <div className="step-content">
                                <h3>Support & Optimization</h3>
                                <p>Ongoing support, maintenance, and continuous improvement to maximize system performance and longevity.</p>
                                <ul>
                                    <li>24/7 technical support</li>
                                    <li>Preventive maintenance programs</li>
                                    <li>Performance monitoring and optimization</li>
                                    <li>System upgrades and enhancements</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="benefits-section section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Measurable Benefits</h2>
                        <p className="section-intro">
                            Real results that impact your bottom line
                        </p>
                    </div>
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <div className="benefit-icon">📈</div>
                            <h3>Increased Productivity</h3>
                            <p>Automation of manual processes and optimized workflows can increase production output by 30-50%</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">💰</div>
                            <h3>Cost Reduction</h3>
                            <p>Lower operational costs through reduced energy consumption, waste, and labor requirements</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">✅</div>
                            <h3>Improved Quality</h3>
                            <p>Consistent product quality with reduced defects and better process control</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">🔍</div>
                            <h3>Real-Time Visibility</h3>
                            <p>Complete operational transparency with real-time data and analytics for informed decision-making</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">🛡️</div>
                            <h3>Enhanced Safety</h3>
                            <p>Improved workplace safety through automated safety systems and reduced human intervention in hazardous areas</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">🔄</div>
                            <h3>Scalability</h3>
                            <p>Flexible systems designed to grow with your business and adapt to changing requirements</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Studies Section */}
            <section className="case-studies-section section bg-gray-50">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Success Stories</h2>
                        <p className="section-intro">
                            See how we've helped businesses transform their operations
                        </p>
                    </div>
                    <div className="case-studies-grid">
                        <div className="case-study-card">
                            <div className="case-study-image" style={{ backgroundImage: `url(${picture1})` }}>
                                <div className="case-study-badge">Manufacturing</div>
                            </div>
                            <div className="case-study-content">
                                <h3>Complete Factory Automation</h3>
                                <p className="case-study-challenge"><strong>Challenge:</strong> Manual production processes causing bottlenecks and quality issues</p>
                                <p className="case-study-solution"><strong>Solution:</strong> Implemented integrated PLC-based automation with SCADA monitoring</p>
                                <div className="case-study-results">
                                    <div className="result-item">
                                        <span className="result-value">40%</span>
                                        <span className="result-label">Productivity Increase</span>
                                    </div>
                                    <div className="result-item">
                                        <span className="result-value">25%</span>
                                        <span className="result-label">Cost Reduction</span>
                                    </div>
                                </div>
                                <a href="/case-studies" className="case-study-link">Read Full Case Study →</a>
                            </div>
                        </div>
                        <div className="case-study-card">
                            <div className="case-study-image" style={{ backgroundImage: `url(${picture2})` }}>
                                <div className="case-study-badge">Water Treatment</div>
                            </div>
                            <div className="case-study-content">
                                <h3>SCADA System Deployment</h3>
                                <p className="case-study-challenge"><strong>Challenge:</strong> Limited visibility and control over distributed water treatment facilities</p>
                                <p className="case-study-solution"><strong>Solution:</strong> Deployed comprehensive SCADA system with remote monitoring capabilities</p>
                                <div className="case-study-results">
                                    <div className="result-item">
                                        <span className="result-value">60%</span>
                                        <span className="result-label">Faster Response Time</span>
                                    </div>
                                    <div className="result-item">
                                        <span className="result-value">35%</span>
                                        <span className="result-label">Energy Savings</span>
                                    </div>
                                </div>
                                <a href="/case-studies" className="case-study-link">Read Full Case Study →</a>
                            </div>
                        </div>
                        <div className="case-study-card">
                            <div className="case-study-image" style={{ backgroundImage: `url(${picture3})` }}>
                                <div className="case-study-badge">Energy</div>
                            </div>
                            <div className="case-study-content">
                                <h3>Power Distribution Upgrade</h3>
                                <p className="case-study-challenge"><strong>Challenge:</strong> Aging power distribution system with frequent outages</p>
                                <p className="case-study-solution"><strong>Solution:</strong> Modernized distribution system with advanced protection and monitoring</p>
                                <div className="case-study-results">
                                    <div className="result-item">
                                        <span className="result-value">90%</span>
                                        <span className="result-label">Reduced Downtime</span>
                                    </div>
                                    <div className="result-item">
                                        <span className="result-value">100%</span>
                                        <span className="result-label">Uptime Achieved</span>
                                    </div>
                                </div>
                                <a href="/case-studies" className="case-study-link">Read Full Case Study →</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section section bg-gradient">
                <div className="container text-center">
                    <h2>Ready to Transform Your Operations?</h2>
                    <p className="section-intro-light">
                        Let's discuss how our automation solutions can address your specific challenges
                    </p>
                    <div className="cta-buttons">
                        <a href="/contact" className="btn btn-primary btn-lg">Request Consultation</a>
                        <a href="/case-studies" className="btn btn-secondary-light btn-lg">View More Case Studies</a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Solutions;
