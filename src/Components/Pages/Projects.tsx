import React, { useState, useEffect } from 'react';
import {
    Cloud,
    Brain,
    Shield,
    //ArrowLeft,
    Code,
    Server,
    Users,
    Clock,
    Zap,
    BarChart3,
    Phone,
    Activity,
    CheckCircle,
    ArrowRight,
    Cpu,
    FileText,
    Monitor,
    //MessageSquare,
    TrendingUp,
    Settings
} from 'lucide-react';

interface Project {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    detailedDescription: string[];
    icon: React.ReactNode;
    iconColor: string;
    tags: string[];
    metrics: {
        label: string;
        value: string;
        icon: React.ReactNode;
    }[];
    techStack: string[];
    challenges: string[];
    outcomes: string[];
    architecture?: {
        components: string[];
        flow: string[];
    };
}

interface ProjectsPageProps {
    selectedProjectId?: string;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ selectedProjectId }) => {
    const [activeProject, setActiveProject] = useState<string | null>(null);

    const projects: Project[] = [
        {
            id: 'serverless-ai-assistant',
            title: 'AWS Serverless AI Assistant',
            subtitle: 'Interactive Serverless Application',
            description: 'Interactive serverless application with Lambda, AppSync, and DynamoDB integration.',
            detailedDescription: [
                'Designed and implemented a fully serverless architecture using AWS services to create an intelligent assistant application.',
                'Integrated multiple AWS services including Lambda for compute, AppSync for GraphQL API management, and DynamoDB for data persistence.',
                'Built responsive frontend interface with real-time capabilities and seamless user experience.',
                'Implemented secure authentication and authorization patterns following AWS best practices.'
            ],
            icon: <Cloud className="w-8 h-8" />,
            iconColor: 'text-orange-400',
            tags: ['AWS', 'Lambda', 'React', 'GraphQL'],
            metrics: [
                { label: 'Response Time', value: '<200ms', icon: <Clock className="w-5 h-5" /> },
                { label: 'Concurrent Users', value: '50+', icon: <Users className="w-5 h-5" /> },
                { label: 'Uptime', value: '99.9%', icon: <CheckCircle className="w-5 h-5" /> }
            ],
            techStack: ['AWS Lambda', 'AWS AppSync', 'DynamoDB', 'React', 'TypeScript', 'GraphQL'],
            challenges: [
                'Designing scalable serverless architecture',
                'Managing state across distributed functions',
                'Optimizing cold start performance',
                'Implementing real-time data synchronization'
            ],
            outcomes: [
                'Achieved sub-200ms response times',
                'Reduced infrastructure costs by 60%',
                'Enabled automatic scaling to handle traffic spikes',
                'Improved development velocity with serverless patterns'
            ],
            architecture: {
                components: ['React Frontend', 'AWS AppSync', 'Lambda Functions', 'DynamoDB', 'Cognito Auth'],
                flow: ['User Request → AppSync → Lambda → DynamoDB → Response']
            }
        },
        {
            id: 'ai-data-processing',
            title: 'AI Integration and Data Processing',
            subtitle: 'Intelligent Automation Platform',
            description: 'Azure OpenAI integration for automated data analysis and legacy system automation.',
            detailedDescription: [
                'Integrated Azure OpenAI services to automate complex data analysis tasks and streamline legacy system processes.',
                'Developed intelligent data processing pipelines that reduced manual analysis time by 80%.',
                'Created automated workflows for legacy system analysis and documentation generation.',
                'Implemented secure API integration patterns with proper error handling and rate limiting.'
            ],
            icon: <Brain className="w-8 h-8" />,
            iconColor: 'text-emerald-400',
            tags: ['OpenAI', 'Azure', 'Python', 'Analytics'],
            metrics: [
                { label: 'Processing Speed', value: '10x Faster', icon: <Zap className="w-5 h-5" /> },
                { label: 'Accuracy', value: '95%+', icon: <CheckCircle className="w-5 h-5" /> },
                { label: 'Time Saved', value: '80%', icon: <Clock className="w-5 h-5" /> }
            ],
            techStack: ['Azure OpenAI', 'Python', 'Azure Functions', 'SQL Server', 'Power BI'],
            challenges: [
                'Integrating AI with legacy systems',
                'Ensuring data privacy and compliance',
                'Managing API rate limits and costs',
                'Maintaining high accuracy in automated analysis'
            ],
            outcomes: [
                'Reduced manual analysis time by 80%',
                'Improved data accuracy and consistency',
                'Enabled intelligent insights from legacy data',
                'Streamlined business process automation'
            ],
            architecture: {
                components: ['Data Sources', 'Azure Functions', 'OpenAI API', 'Processing Engine', 'Analytics Dashboard'],
                flow: ['Data Input → AI Processing → Analysis → Insights → Dashboard']
            }
        },
        {
            id: 'aws-connect-integration',
            title: 'AWS Connect Data Integration',
            subtitle: 'Enterprise Call Center Solution',
            description: 'AWS Connect call center handling 15,000+ daily contacts with compliance tracking.',
            detailedDescription: [
                'Architected and deployed a comprehensive call center solution using AWS Connect to handle high-volume customer interactions.',
                'Implemented real-time data integration and compliance tracking systems for regulatory requirements.',
                'Developed automated reporting and analytics dashboard for operational insights and performance monitoring.',
                'Created scalable architecture capable of handling 15,000+ daily contacts with minimal latency.'
            ],
            icon: <Phone className="w-8 h-8" />,
            iconColor: 'text-cyan-400',
            tags: ['AWS Connect', 'Real-time', 'Analytics', 'Compliance'],
            metrics: [
                { label: 'Daily Contacts', value: '15,000+', icon: <Phone className="w-5 h-5" /> },
                { label: 'Availability', value: '99.95%', icon: <Activity className="w-5 h-5" /> },
                { label: 'Response Time', value: '<100ms', icon: <Clock className="w-5 h-5" /> }
            ],
            techStack: ['AWS Connect', 'Lambda', 'Kinesis', 'S3', 'CloudWatch', 'DynamoDB'],
            challenges: [
                'Handling high-volume concurrent connections',
                'Real-time compliance monitoring',
                'Data integration across multiple systems',
                'Maintaining sub-second response times'
            ],
            outcomes: [
                'Successfully handles 15,000+ daily contacts',
                'Achieved 99.95% system availability',
                'Implemented comprehensive compliance tracking',
                'Reduced operational costs by 40%'
            ],
            architecture: {
                components: ['AWS Connect', 'Lambda Functions', 'Kinesis Streams', 'S3 Storage', 'Analytics Engine'],
                flow: ['Contact → Connect → Lambda → Data Processing → Storage → Analytics']
            }
        },
        {
            id: 'call-center-dashboard',
            title: 'Call Center Dashboard',
            subtitle: 'Real-time Operations Monitor',
            description: 'Dashboard built in Blazor providing real-time data for call center operations.',
            detailedDescription: [
                'Developed a comprehensive real-time dashboard using Blazor Server to monitor call center operations and performance metrics.',
                'Integrated with AWS Connect APIs and Lambda functions to provide live operational data and analytics.',
                'Implemented responsive design with real-time updates and interactive data visualizations.',
                'Created role-based access controls and customizable dashboard views for different user types.'
            ],
            icon: <Monitor className="w-8 h-8" />,
            iconColor: 'text-purple-400',
            tags: ['Blazor', 'AWS Connect', 'Lambda', 'Real-time', 'Analytics'],
            metrics: [
                { label: 'Update Frequency', value: 'Real-time', icon: <Activity className="w-5 h-5" /> },
                { label: 'Data Points', value: '50+', icon: <BarChart3 className="w-5 h-5" /> },
                { label: 'User Roles', value: '5', icon: <Users className="w-5 h-5" /> }
            ],
            techStack: ['Blazor Server', 'C#', 'AWS Connect APIs', 'SignalR', 'Chart.js', 'SQL Server'],
            challenges: [
                'Real-time data synchronization',
                'Performance optimization for live updates',
                'Managing multiple data sources',
                'Responsive design across devices'
            ],
            outcomes: [
                'Provided real-time operational visibility',
                'Improved response times to issues',
                'Enhanced decision-making with live data',
                'Reduced manual monitoring by 90%'
            ],
            architecture: {
                components: ['Blazor Frontend', 'SignalR Hub', 'AWS APIs', 'Data Services', 'Chart Components'],
                flow: ['Data Sources → API Gateway → SignalR → Blazor UI → Live Updates']
            }
        },
        {
            id: 'internal-application',
            title: 'Full-Stack Internal Application',
            subtitle: 'Comprehensive Business Solution',
            description: 'A full-stack application built using Blazor providing numerous business solutions.',
            detailedDescription: [
                'Architected and developed a comprehensive internal application using Blazor Server to address multiple business requirements.',
                'Implemented modular architecture with multiple business solution modules including analytics, reporting, and workflow management.',
                'Created secure authentication system with role-based permissions and audit logging.',
                'Integrated with existing business systems and databases to provide unified access to organizational data.'
            ],
            icon: <Settings className="w-8 h-8" />,
            iconColor: 'text-indigo-400',
            tags: ['Blazor', 'Full-stack', 'Analytics', 'Internal Tools'],
            metrics: [
                { label: 'Modules', value: '8+', icon: <Cpu className="w-5 h-5" /> },
                { label: 'Daily Users', value: '50+', icon: <Users className="w-5 h-5" /> },
                { label: 'Efficiency Gain', value: '70%', icon: <TrendingUp className="w-5 h-5" /> }
            ],
            techStack: ['Blazor Server', 'C#', '.NET Core', 'SQL Server', 'Entity Framework', 'Bootstrap'],
            challenges: [
                'Integrating multiple business requirements',
                'Managing complex user permissions',
                'Optimizing performance across modules',
                'Maintaining scalable architecture'
            ],
            outcomes: [
                'Consolidated 8+ business processes',
                'Improved operational efficiency by 70%',
                'Reduced training time for new users',
                'Enhanced data consistency across departments'
            ],
            architecture: {
                components: ['Blazor Server', 'Authentication', 'Business Modules', 'Data Layer', 'External APIs'],
                flow: ['User → Auth → Module Router → Business Logic → Data Services → Response']
            }
        }
    ];

    // Handle project selection and scrolling
    useEffect(() => {
        if (selectedProjectId) {
            setActiveProject(selectedProjectId);
            // Scroll to project after component mounts
            setTimeout(() => {
                const element = document.getElementById(`project-${selectedProjectId}`);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 100);
        }
    }, [selectedProjectId]);

    const toggleProject = (projectId: string) => {
        setActiveProject(activeProject === projectId ? null : projectId);
    };

    return (
        <div>
            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-6 py-12">
                {/* Page Introduction */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Professional Work Overview
                    </h2>
                    <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
                        Explore detailed insights into my professional projects, showcasing enterprise-level solutions
                        in cloud architecture, AI integration, and full-stack development. Each project represents
                        real-world business impact and technical excellence.
                    </p>
                </div>

                {/* Projects List */}
                <div className="space-y-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            id={`project-${project.id}`}
                            className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl border transition-all duration-300 ${activeProject === project.id
                                    ? 'border-blue-400 shadow-2xl shadow-blue-500/20'
                                    : 'border-slate-700 hover:border-slate-600'
                                }`}
                        >
                            {/* Project Header */}
                            <div
                                className="p-8 cursor-pointer"
                                onClick={() => toggleProject(project.id)}
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex items-start gap-6">
                                        <div className={`p-4 bg-slate-700/50 rounded-xl ${project.iconColor}`}>
                                            {project.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-2">
                                                {project.title}
                                            </h3>
                                            <p className="text-blue-300 text-lg mb-4">
                                                {project.subtitle}
                                            </p>
                                            <p className="text-slate-300 text-lg">
                                                {project.description}
                                            </p>

                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-2 mt-4">
                                                {project.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="text-right">
                                            <div className="text-blue-400 text-sm mb-1">Project #{index + 1}</div>
                                            <div className="text-slate-400 text-sm">
                                                {activeProject === project.id ? 'Click to collapse' : 'Click to expand'}
                                            </div>
                                        </div>
                                        <ArrowRight
                                            className={`w-6 h-6 text-blue-400 transition-transform ${activeProject === project.id ? 'rotate-90' : ''
                                                }`}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Expanded Content */}
                            {activeProject === project.id && (
                                <div className="border-t border-slate-700">
                                    <div className="p-8">
                                        {/* Metrics */}
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                            {project.metrics.map((metric, idx) => (
                                                <div
                                                    key={idx}
                                                    className="bg-slate-700/50 rounded-xl p-6 text-center"
                                                >
                                                    <div className="text-blue-400 mb-3 flex justify-center">
                                                        {metric.icon}
                                                    </div>
                                                    <div className="text-2xl font-bold text-white mb-1">
                                                        {metric.value}
                                                    </div>
                                                    <div className="text-slate-400 text-sm">
                                                        {metric.label}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Detailed Description */}
                                        <div className="mb-8">
                                            <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                                <FileText className="w-5 h-5 text-blue-400" />
                                                Project Details
                                            </h4>
                                            <div className="space-y-3">
                                                {project.detailedDescription.map((desc, idx) => (
                                                    <p key={idx} className="text-slate-300 leading-relaxed">
                                                        {desc}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Architecture Overview */}
                                        {project.architecture && (
                                            <div className="mb-8">
                                                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                                    <Server className="w-5 h-5 text-blue-400" />
                                                    Architecture Overview
                                                </h4>
                                                <div className="bg-slate-700/30 rounded-xl p-6">
                                                    <div className="mb-4">
                                                        <h5 className="text-lg font-semibold text-blue-300 mb-2">Components:</h5>
                                                        <div className="flex flex-wrap gap-2">
                                                            {project.architecture.components.map((component) => (
                                                                <span
                                                                    key={component}
                                                                    className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-300 rounded-lg text-sm"
                                                                >
                                                                    {component}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h5 className="text-lg font-semibold text-blue-300 mb-2">Data Flow:</h5>
                                                        <div className="text-slate-300 font-mono text-sm bg-slate-800/50 p-3 rounded-lg">
                                                            {project.architecture.flow[0]}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Tech Stack */}
                                        <div className="mb-8">
                                            <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                                <Code className="w-5 h-5 text-blue-400" />
                                                Technology Stack
                                            </h4>
                                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                                {project.techStack.map((tech) => (
                                                    <div
                                                        key={tech}
                                                        className="flex items-center gap-2 p-3 bg-slate-700/30 rounded-lg"
                                                    >
                                                        <CheckCircle className="w-4 h-4 text-green-400" />
                                                        <span className="text-slate-300">{tech}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Challenges & Outcomes */}
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div>
                                                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                                    <Shield className="w-5 h-5 text-orange-400" />
                                                    Key Challenges
                                                </h4>
                                                <div className="space-y-3">
                                                    {project.challenges.map((challenge, idx) => (
                                                        <div key={idx} className="flex items-start gap-3">
                                                            <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                                                            <span className="text-slate-300">{challenge}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div>
                                                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                                    <TrendingUp className="w-5 h-5 text-green-400" />
                                                    Key Outcomes
                                                </h4>
                                                <div className="space-y-3">
                                                    {project.outcomes.map((outcome, idx) => (
                                                        <div key={idx} className="flex items-start gap-3">
                                                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                                            <span className="text-slate-300">{outcome}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div> 
                    ))}
                </div>
            </main>
        </div>
    );
};

export default ProjectsPage;