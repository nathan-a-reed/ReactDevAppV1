import React, { useState } from 'react';
import {
    //ArrowLeft,
    //ExternalLink,
    Github,
    Play,
    Code,
    Globe,
    Smartphone,
    Database,
    Brain,
    ShoppingCart,
    Calendar,
    MessageSquare,
    BarChart3,
    Users,
    Clock,
    Star,
    Eye,
    Download,
    Zap,
    Shield,
    Palette,
    Camera
} from 'lucide-react';

interface DemoProject {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    category: 'Web App' | 'Mobile App' | 'API' | 'Tool' | 'Game';
    status: 'Live' | 'In Development' | 'Archived';
    featured: boolean;
    icon: React.ReactNode;
    iconColor: string;
    tags: string[];
    metrics: {
        label: string;
        value: string;
        icon: React.ReactNode;
    }[];
    links: {
        demo?: string;
        github?: string;
        details?: string;
    };
    screenshots?: string[];
    techStack: string[];
}

const DemosPage: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [/*selectedProject, setSelectedProject*/] = useState<string | null>(null);

    const categories = ['All', 'Web App', 'Mobile App', 'API', 'Tool', 'Game'];

    const demoProjects: DemoProject[] = [
        {
            id: 'task-manager-pro',
            title: 'TaskManager Pro',
            subtitle: 'Collaborative Task Management',
            description: 'A full-stack task management application with real-time collaboration, drag-and-drop kanban boards, and team analytics.',
            category: 'Web App',
            status: 'Live',
            featured: true,
            icon: <Calendar className="w-8 h-8" />,
            iconColor: 'text-blue-500',
            tags: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Real-time'],
            metrics: [
                { label: 'Active Users', value: '1,200+', icon: <Users className="w-5 h-5" /> },
                { label: 'Tasks Created', value: '15k+', icon: <Calendar className="w-5 h-5" /> },
                { label: 'Uptime', value: '99.8%', icon: <Zap className="w-5 h-5" /> }
            ],
            links: {
                demo: 'https://taskmanager-demo.example.com',
                github: 'https://github.com/nathanreed/taskmanager-pro',
                details: '/demos/task-manager-pro'
            },
            techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'JWT', 'Tailwind CSS']
        },
        {
            id: 'weather-ai',
            title: 'WeatherAI',
            subtitle: 'AI-Powered Weather Insights',
            description: 'Smart weather application that provides personalized forecasts and activity recommendations using machine learning.',
            category: 'Web App',
            status: 'Live',
            featured: true,
            icon: <Brain className="w-8 h-8" />,
            iconColor: 'text-emerald-500',
            tags: ['AI/ML', 'Weather API', 'PWA', 'Mobile-First'],
            metrics: [
                { label: 'Predictions', value: '500k+', icon: <BarChart3 className="w-5 h-5" /> },
                { label: 'Accuracy', value: '94%', icon: <Star className="w-5 h-5" /> },
                { label: 'Cities', value: '1000+', icon: <Globe className="w-5 h-5" /> }
            ],
            links: {
                demo: 'https://weather-ai-demo.example.com',
                github: 'https://github.com/nathanreed/weather-ai',
                details: '/demos/weather-ai'
            },
            techStack: ['React', 'Python', 'TensorFlow', 'FastAPI', 'PostgreSQL', 'Redis', 'PWA']
        },
        {
            id: 'crypto-tracker',
            title: 'CryptoTracker Mobile',
            subtitle: 'Real-time Crypto Portfolio',
            description: 'Cross-platform mobile app for tracking cryptocurrency portfolios with real-time price updates and advanced analytics.',
            category: 'Mobile App',
            status: 'Live',
            featured: false,
            icon: <Smartphone className="w-8 h-8" />,
            iconColor: 'text-orange-500',
            tags: ['React Native', 'Real-time', 'Charts', 'Push Notifications'],
            metrics: [
                { label: 'Downloads', value: '5k+', icon: <Download className="w-5 h-5" /> },
                { label: 'Coins Tracked', value: '2000+', icon: <Database className="w-5 h-5" /> },
                { label: 'Updates/min', value: '60', icon: <Clock className="w-5 h-5" /> }
            ],
            links: {
                demo: 'https://crypto-tracker-demo.example.com',
                github: 'https://github.com/nathanreed/crypto-tracker-mobile',
                details: '/demos/crypto-tracker'
            },
            techStack: ['React Native', 'Expo', 'Node.js', 'WebSocket', 'SQLite', 'Chart.js', 'Push Notifications']
        },
        {
            id: 'ecommerce-api',
            title: 'E-Commerce REST API',
            subtitle: 'Scalable Backend Solution',
            description: 'A comprehensive REST API for e-commerce applications with authentication, payment processing, and order management.',
            category: 'API',
            status: 'Live',
            featured: false,
            icon: <ShoppingCart className="w-8 h-8" />,
            iconColor: 'text-purple-500',
            tags: ['REST API', 'Authentication', 'Payments', 'Documentation'],
            metrics: [
                { label: 'API Calls', value: '100k+', icon: <BarChart3 className="w-5 h-5" /> },
                { label: 'Response Time', value: '<50ms', icon: <Clock className="w-5 h-5" /> },
                { label: 'Endpoints', value: '45', icon: <Code className="w-5 h-5" /> }
            ],
            links: {
                demo: 'https://api.ecommerce-demo.example.com/docs',
                github: 'https://github.com/nathanreed/ecommerce-api',
                details: '/demos/ecommerce-api'
            },
            techStack: ['Node.js', 'Express', 'PostgreSQL', 'Stripe API', 'JWT', 'Swagger', 'Docker', 'Redis']
        },
        {
            id: 'code-formatter',
            title: 'Universal Code Formatter',
            subtitle: 'Multi-Language Code Tool',
            description: 'A web-based tool that formats and beautifies code in multiple programming languages with syntax highlighting.',
            category: 'Tool',
            status: 'Live',
            featured: false,
            icon: <Code className="w-8 h-8" />,
            iconColor: 'text-cyan-500',
            tags: ['Code Tools', 'Syntax Highlighting', 'Multi-Language', 'Utility'],
            metrics: [
                { label: 'Languages', value: '20+', icon: <Code className="w-5 h-5" /> },
                { label: 'Monthly Users', value: '3k+', icon: <Users className="w-5 h-5" /> },
                { label: 'Code Formatted', value: '50k+ lines', icon: <BarChart3 className="w-5 h-5" /> }
            ],
            links: {
                demo: 'https://code-formatter.example.com',
                github: 'https://github.com/nathanreed/universal-code-formatter',
                details: '/demos/code-formatter'
            },
            techStack: ['React', 'Monaco Editor', 'Prettier', 'Prism.js', 'Web Workers', 'Local Storage']
        },
        {
            id: 'pixel-art-game',
            title: 'Pixel Quest Adventures',
            subtitle: 'Browser-based RPG Game',
            description: 'A retro-style pixel art RPG game built with HTML5 Canvas, featuring character progression and multiple levels.',
            category: 'Game',
            status: 'In Development',
            featured: true,
            icon: <Palette className="w-8 h-8" />,
            iconColor: 'text-pink-500',
            tags: ['Game Dev', 'HTML5 Canvas', 'Pixel Art', 'RPG'],
            metrics: [
                { label: 'Beta Players', value: '200+', icon: <Users className="w-5 h-5" /> },
                { label: 'Levels', value: '15', icon: <Star className="w-5 h-5" /> },
                { label: 'Playtime Avg', value: '45 min', icon: <Clock className="w-5 h-5" /> }
            ],
            links: {
                demo: 'https://pixel-quest.example.com',
                github: 'https://github.com/nathanreed/pixel-quest-adventures',
                details: '/demos/pixel-quest'
            },
            techStack: ['HTML5 Canvas', 'JavaScript', 'Web Audio API', 'Local Storage', 'Sprite Animation']
        },
        {
            id: 'photo-editor',
            title: 'CloudEdit Pro',
            subtitle: 'Browser Photo Editor',
            description: 'A powerful web-based photo editing application with filters, cropping, and cloud storage integration.',
            category: 'Web App',
            status: 'Live',
            featured: false,
            icon: <Camera className="w-8 h-8" />,
            iconColor: 'text-indigo-500',
            tags: ['Image Processing', 'Canvas API', 'Cloud Storage', 'Filters'],
            metrics: [
                { label: 'Photos Edited', value: '25k+', icon: <Camera className="w-5 h-5" /> },
                { label: 'Filters', value: '30+', icon: <Palette className="w-5 h-5" /> },
                { label: 'Storage', value: '1GB Free', icon: <Database className="w-5 h-5" /> }
            ],
            links: {
                demo: 'https://cloudedit-pro.example.com',
                github: 'https://github.com/nathanreed/cloudedit-pro',
                details: '/demos/photo-editor'
            },
            techStack: ['React', 'Canvas API', 'AWS S3', 'Image Processing', 'WebGL', 'File API']
        },
        {
            id: 'chat-app',
            title: 'SecureChat',
            subtitle: 'End-to-End Encrypted Messaging',
            description: 'A secure messaging application with end-to-end encryption, group chats, and file sharing capabilities.',
            category: 'Web App',
            status: 'Archived',
            featured: false,
            icon: <MessageSquare className="w-8 h-8" />,
            iconColor: 'text-green-500',
            tags: ['Encryption', 'Real-time', 'Security', 'WebRTC'],
            metrics: [
                { label: 'Messages Sent', value: '1M+', icon: <MessageSquare className="w-5 h-5" /> },
                { label: 'Encryption', value: 'AES-256', icon: <Shield className="w-5 h-5" /> },
                { label: 'Max Users', value: '10k', icon: <Users className="w-5 h-5" /> }
            ],
            links: {
                demo: 'https://securechat-demo.example.com',
                github: 'https://github.com/nathanreed/secure-chat',
                details: '/demos/secure-chat'
            },
            techStack: ['React', 'Socket.io', 'Node.js', 'WebRTC', 'CryptoJS', 'MongoDB', 'JWT']
        }
    ];

    const filteredProjects = selectedCategory === 'All'
        ? demoProjects
        : demoProjects.filter(project => project.category === selectedCategory);

    const featuredProjects = demoProjects.filter(project => project.featured);

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Live': return 'text-green-400 bg-green-400/10 border-green-400/20';
            case 'In Development': return 'text-orange-400 bg-orange-400/10 border-orange-400/20';
            case 'Archived': return 'text-slate-400 bg-slate-400/10 border-slate-400/20';
            default: return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
        }
    };

    return (
        <div>
            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-6 py-12">
                {/* Page Introduction */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Interactive Demos & Freelance Projects
                    </h2>
                    <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
                        Explore my freelance and personal projects that are publicly available for demonstration.
                        These projects showcase different technologies and approaches, with live demos you can interact with
                        and source code available on GitHub.
                    </p>
                </div>

                {/* Featured Projects */}
                <section className="mb-16">
                    <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                        <Star className="w-6 h-6 text-yellow-400" />
                        Featured Projects
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredProjects.map((project) => (
                            <div
                                key={project.id}
                                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-blue-400/50 transition-all duration-300 p-6"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className={`p-3 bg-slate-700/50 rounded-xl ${project.iconColor}`}>
                                        {project.icon}
                                    </div>
                                    <div className={`px-3 py-1 rounded-full text-sm border ${getStatusColor(project.status)}`}>
                                        {project.status}
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                                <p className="text-blue-300 mb-3">{project.subtitle}</p>
                                <p className="text-slate-300 text-sm mb-4 line-clamp-3">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.slice(0, 3).map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 bg-blue-500/10 text-blue-300 rounded text-xs"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-2">
                                    {project.links.demo && (
                                        <a
                                            href={project.links.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
                                        >
                                            <Play className="w-4 h-4" />
                                            Live Demo
                                        </a>
                                    )}
                                    {project.links.github && (
                                        <a
                                            href={project.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-3 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
                                        >
                                            <Github className="w-4 h-4" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Category Filter */}
                <div className="mb-8">
                    <div className="flex flex-wrap gap-2 justify-center">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedCategory === category
                                        ? 'bg-blue-600 text-white shadow-lg'
                                        : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* All Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-slate-600 transition-all duration-300 p-6"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className={`p-3 bg-slate-700/50 rounded-xl ${project.iconColor}`}>
                                    {project.icon}
                                </div>
                                <div className={`px-3 py-1 rounded-full text-sm border ${getStatusColor(project.status)}`}>
                                    {project.status}
                                </div>
                            </div>

                            <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                            <p className="text-blue-300 mb-3">{project.subtitle}</p>
                            <p className="text-slate-300 text-sm mb-4">{project.description}</p>

                            {/* Metrics */}
                            <div className="grid grid-cols-3 gap-3 mb-4">
                                {project.metrics.map((metric, idx) => (
                                    <div key={idx} className="text-center">
                                        <div className="text-blue-400 mb-1 flex justify-center">
                                            {metric.icon}
                                        </div>
                                        <div className="text-white text-sm font-semibold">{metric.value}</div>
                                        <div className="text-slate-400 text-xs">{metric.label}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2 py-1 bg-blue-500/10 text-blue-300 rounded text-xs"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-2">
                                {project.links.demo && (
                                    <a
                                        href={project.links.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
                                    >
                                        <Play className="w-4 h-4" />
                                        Demo
                                    </a>
                                )}
                                {project.links.github && (
                                    <a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-3 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
                                    >
                                        <Github className="w-4 h-4" />
                                    </a>
                                )}
                                {project.links.details && (
                                    <a
                                        href={project.links.details}
                                        className="px-3 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
                                    >
                                        <Eye className="w-4 h-4" />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default DemosPage;