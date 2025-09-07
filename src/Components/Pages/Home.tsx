import React, { useState, useEffect } from 'react';
import {
    //ChevronDown,
    Code,
    Database,
    Cloud,
    Cpu,
    Terminal,
    Zap,
    ArrowRight,
    Github,
    Linkedin,
    Mail,
    Phone,
    MapPin,
    Download,
    ExternalLink,
    Server,
    Brain,
    Shield,
    Layers
} from 'lucide-react';
import '../CSS/Home.css'

interface MousePosition {
    x: number;
    y: number;
}

interface TechStack {
    name: string;
    icon: React.ReactNode;
    color: string;
}

interface Metric {
    value: string;
    label: string;
    icon: React.ReactNode;
}

const PortfolioHomepage: React.FC = () => {
    const [currentSkill, setCurrentSkill] = useState<number>(0);
    const [_mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

    const skills: string[] = [
        'Full Stack Development',
        'AWS Solutions',
        'AI Integration',
        'Data Analytics',
        'Serverless Engineering'
    ];

    const techStack: TechStack[] = [
        { name: 'React', icon: <Code className="w-5 h-5" />, color: 'text-blue-400' },
        { name: 'AWS', icon: <Cloud className="w-5 h-5" />, color: 'text-orange-400' },
        { name: 'TypeScript', icon: <Terminal className="w-5 h-5" />, color: 'text-blue-300' },
        { name: 'Python', icon: <Cpu className="w-5 h-5" />, color: 'text-green-400' },
        { name: 'C#/.NET', icon: <Server className="w-5 h-5" />, color: 'text-purple-400' },
        { name: 'SQL', icon: <Database className="w-5 h-5" />, color: 'text-yellow-400' },
        { name: 'Azure OpenAI', icon: <Brain className="w-5 h-5" />, color: 'text-emerald-400' },
        { name: 'Docker', icon: <Layers className="w-5 h-5" />, color: 'text-cyan-400' }
    ];

    const metrics: Metric[] = [
        { value: '4+', label: 'Serverless Apps Deployed', icon: <Zap className="w-6 h-6" /> },
        { value: '4+', label: 'Data Integration Projects', icon: <Cpu className="w-6 h-6" /> },
        { value: '50+', label: 'Concurrent Users', icon: <Cpu className="w-6 h-6" /> },
        { value: 'Over 15,000', label: 'Recipients', icon: <Phone className="w-6 h-6" /> }
    ];

    // Rotate skills every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSkill((prev) => (prev + 1) % skills.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [skills.length]);

    // Mouse tracking for interactive effects
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    //const scrollToSection = (sectionId: string) => {
    //    const element = document.getElementById(sectionId);
    //    if (element) {
    //        element.scrollIntoView({ behavior: 'smooth' });
    //    }
    //};

    //const handleNavClick = (sectionId: string) => {
    //    scrollToSection(sectionId);
    //};

    return (
        <div className="portfolio-homepage">
            {/* Hero Section */}
            <section id="hero" className="hero-section">
                {/* Interactive cursor effect */}
                {/*<div*/}
                {/*    className="cursor-effect"*/}
                {/*    style={{*/}
                {/*        left: `${mousePosition.x - 8}px`,*/}
                {/*        top: `${mousePosition.y - 8}px`,*/}
                {/*    }}*/}
                {/*/>*/}

                <div className="hero-content">
                    {/* Main Header */}
                    <div className="hero-header">
                        <h1 className="hero-title">
                            Nathan Reed
                        </h1>
                        <div className="hero-subtitle-container">
                            <h2 className="hero-subtitle">
                                {skills[currentSkill]}
                            </h2>
                        </div>
                    </div>

                    {/* Tech Stack Cloud */}
                    <div className="tech-stack-section">
                        <div className="tech-stack-grid">
                            {techStack.map((tech: TechStack, index: number) => (
                                <div
                                    key={tech.name}
                                    className={`tech-item ${tech.color}`}
                                    style={{
                                        animationDelay: `${index * 0.1}s`,
                                    }}
                                >
                                    <div className="tech-item-content">
                                        {tech.icon}
                                        <span className="tech-item-text">{tech.name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    {/*<div className="cta-section">*/}
                    {/*    <button*/}
                    {/*        onClick={() => handleNavClick('projects')}*/}
                    {/*        className="cta-button primary"*/}
                    {/*        type="button"*/}
                    {/*    >*/}
                    {/*        <span>View Projects</span>*/}
                    {/*        <ArrowRight className="w-5 h-5" />*/}
                    {/*    </button>*/}
                    {/*    <button*/}
                    {/*        onClick={() => handleNavClick('contact')}*/}
                    {/*        className="cta-button secondary"*/}
                    {/*        type="button"*/}
                    {/*    >*/}
                    {/*        <span>Get In Touch</span>*/}
                    {/*        <Mail className="w-5 h-5" />*/}
                    {/*    </button>*/}
                    {/*</div>*/}

                    {/* Metrics */}
                    <div className="metrics-grid">
                        {metrics.map((metric: Metric, index: number) => (
                            <div key={index} className="metric-card">
                                <div className="metric-icon">
                                    {metric.icon}
                                </div>
                                <div className="metric-value">{metric.value}</div>
                                <div className="metric-label">{metric.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scroll Indicator */}
                {/*<div className="scroll-indicator">*/}
                {/*    <button*/}
                {/*        onClick={() => handleNavClick('about')}*/}
                {/*        className="scroll-button"*/}
                {/*        type="button"*/}
                {/*    >*/}
                {/*        <ChevronDown className="w-6 h-6 text-blue-300" />*/}
                {/*    </button>*/}
                {/*</div>*/}
            </section>

            {/* About Preview Section */}
            <section id="about" className="about-section">
                <div className="section-container">
                    <div className="section-header">
                        <h3 className="section-title">
                            About Me
                        </h3>
                        <p className="section-description">
                            Recent graduate with hands-on experience developing full-stack applications using modern architectures.
                            Demonstrated ability to create serverless applications and integrate AI technologies to deliver tangible business outcomes.
                        </p>
                    </div>

                    <div className="about-grid">
                        {/* Professional Info */}
                        <div className="about-left">
                            <div className="info-card">
                                <h4 className="info-card-title">Education</h4>
                                <div className="info-card-content">
                                    <p className="font-medium">Bachelor of Science in Business Analytics and Information Systems</p>
                                    <p className="text-blue-200">University of South Florida - Tampa, FL</p>
                                    <p className="text-blue-200">Concentration: Cyber Security | GPA: 3.4</p>
                                    <p className="text-sm text-blue-300">Graduated Dec 2023</p>
                                </div>
                            </div>

                            <div className="info-card">
                                <h4 className="info-card-title">Current Role</h4>
                                <div className="info-card-content">
                                    <p className="font-medium">Data Analyst and Systems Support</p>
                                    <p className="text-blue-200">Lotane & Associates</p>
                                    <p className="text-sm text-blue-300">Feb 2024 - Current</p>
                                </div>
                            </div>

                            <div className="info-card">
                                <h4 className="info-card-title">Contact Info</h4>
                                <div className="contact-info">
                                    <div className="contact-item">
                                        <MapPin className="w-5 h-5 text-blue-400" />
                                        <span>Rockledge, FL 32955</span>
                                    </div>
                                    <div className="contact-item">
                                        <Phone className="w-5 h-5 text-blue-400" />
                                        <span>(805) 801-7891</span>
                                    </div>
                                    <div className="contact-item">
                                        <Mail className="w-5 h-5 text-blue-400" />
                                        <span>nathanreedsemail@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Skills & Interests */}
                        <div className="about-right">
                            <div className="info-card">
                                <h4 className="info-card-title">Core Technologies</h4>
                                <div className="skills-grid">
                                    {['AWS', 'Azure', 'C#/.NET', 'Python', 'React', 'TypeScript', 'SQL', 'Docker'].map((skill: string) => (
                                        <div key={skill} className="skill-tag">
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="info-card">
                                <h4 className="info-card-title">Personal Interests</h4>
                                <div className="interests-list">
                                    <p>Coding projects & AI research</p>
                                    <p>Tech news & space exploration</p>
                                    <p>Community service: Meals on Wheels</p>
                                </div>
                            </div>

                            <div className="info-card">
                                <h4 className="info-card-title">Quick Links</h4>
                                <div className="quick-links">
                                    <button className="quick-link-btn resume" type="button">
                                        <Download className="w-4 h-4" />
                                        <span>Resume</span>
                                    </button>
                                    <button className="quick-link-btn github" type="button">
                                        <Github className="w-4 h-4" />
                                        <span>GitHub</span>
                                    </button>
                                    <button className="quick-link-btn linkedin" type="button">
                                        <Linkedin className="w-4 h-4" />
                                        <span>LinkedIn</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Preview */}
            <section id="projects" className="projects-section">
                <div className="section-container">
                    <div className="section-header">
                        <h3 className="section-title projects">
                            Featured Projects
                        </h3>
                        <p className="section-description">
                            Explore my latest work showcasing full-stack development, AI integration, and cloud architecture.
                            These are projects that I have worked on in my free time.
                        </p>
                    </div>
                </div>


                <div className="section-container">
                    <div className="section-header">
                        <h3 className="section-title projects">
                            Previous Projects
                        </h3>
                        <p className="section-description">
                            Here are some brief examples of projects that I have worked on professionally.
                        </p>
                    </div>

                    <div className="projects-grid">
                        {/* Project 1 */}
                        <div className="project-card">
                            <div className="project-header">
                                <Cloud className="w-8 h-8 text-orange-400" />
                                <ExternalLink className="project-link-icon" />
                            </div>
                            <h4 className="project-title">AWS Serverless AI Assistant</h4>
                            <p className="project-description">Interactive serverless application with Lambda, AppSync, and DynamoDB integration.</p>
                            <div className="project-tags">
                                <span className="project-tag aws">AWS</span>
                                <span className="project-tag lambda">Lambda</span>
                                <span className="project-tag react">React</span>
                            </div>
                        </div>

                        {/* Project 2 */}
                        <div className="project-card">
                            <div className="project-header">
                                <Brain className="w-8 h-8 text-emerald-400" />
                                <ExternalLink className="project-link-icon" />
                            </div>
                            <h4 className="project-title">AI Integration and Data Processing</h4>
                            <p className="project-description">Azure OpenAI integration for automated data analysis and legacy system automation analysis.</p>
                            <div className="project-tags">
                                <span className="project-tag openai">OpenAI</span>
                                <span className="project-tag azure">Azure</span>
                                <span className="project-tag python">Python</span>
                            </div>
                        </div>

                        {/* Project 3 */}
                        <div className="project-card">
                            <div className="project-header">
                                <Shield className="w-8 h-8 text-cyan-400" />
                                <ExternalLink className="project-link-icon" />
                            </div>
                            <h4 className="project-title">AWS Connect Data Integration</h4>
                            <p className="project-description">AWS Connect call center handling 15,000+ daily contacts with compliance tracking.</p>
                            <div className="project-tags">
                                <span className="project-tag connect">AWS Connect</span>
                                <span className="project-tag realtime">Real-time</span>
                                <span className="project-tag analytics">Analytics</span>
                            </div>
                        </div>

                        {/* Project 4 */}
                        <div className="project-card">
                            <div className="project-header">
                                <Shield className="w-8 h-8 text-cyan-400" />
                                <ExternalLink className="project-link-icon" />
                            </div>
                            <h4 className="project-title">Call Center Dashboard</h4>
                            <p className="project-description">Dashboard built in Blazor providing real time data for our call center.</p>
                            <div className="project-tags">
                                <span className="project-tag connect">AWS Connect</span>
                                <span className="project-tag lambda">Lambda</span>
                                <span className="project-tag realtime">Real-time</span>
                                <span className="project-tag analytics">Analytics</span>
                            </div>
                        </div>
                        
                        {/* Project 4 */}
                        <div className="project-card">
                            <div className="project-header">
                                <Shield className="w-8 h-8 text-cyan-400" />
                                <ExternalLink className="project-link-icon" />
                            </div>
                            <h4 className="project-title">Full-Stack Internal Application</h4>
                            <p className="project-description">A full-stack application built using Blazor that provides numerous business solutions specific to the companies needs.</p>
                            <div className="project-tags">
                                <span className="project-tag analytics">Analytics</span>
                            </div>
                        </div>
                    </div>

                    <div className="projects-cta">
                        <button className="cta-button projects-btn" type="button">
                            <span>View All Projects</span>
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="contact-section">
                <div className="contact-container">
                    <h3 className="section-title contact">
                        Let's Work Together
                    </h3>
                    <p className="contact-description">
                        Ready to bring your next project to life? I'm available for full-time opportunities
                        and consulting projects in full-stack development, cloud architecture, and AI integration.
                    </p>

                    <div className="contact-grid">
                        <div className="contact-card">
                            <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                            <h4 className="contact-card-title">Email</h4>
                            <p className="contact-card-text">
                                <a href="mailto:nathanreedsemail@gmail.com" className="text-blue-400 hover:underline">
                                    nathanreedsemail@gmail.com
                                </a>
                            </p>
                        </div>
                        <div className="contact-card">
                            <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                            <h4 className="contact-card-title">Phone</h4>
                            <p className="contact-card-text">
                                <a href="tel:+18058017891" className="text-blue-400 hover:underline">
                                    (805) 801-7891
                                </a>
                            </p>
                        </div>
                        <div className="contact-card">
                            <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                            <h4 className="contact-card-title">Location</h4>
                            <p className="contact-card-text">Rockledge, FL</p>
                        </div>
                    </div>


                    {/*<button className="cta-button contact-btn" type="button">*/}
                    {/*    Start a Conversation*/}
                    {/*</button>*/}
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-container">
                    <p className="footer-text">© 2024 Nathan Reed. Built with React, TypeScript, and Tailwind CSS.</p>
                </div>
            </footer>
        </div>
    );
};

export default PortfolioHomepage;