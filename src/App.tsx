import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import NavigationMenu from './Components/NavigationMenu';
import Home from './Components/Pages/Home';
import Projects from './Components/Pages/Projects';
import Demos from './Components/Pages/Demos';
import VoiceChat from './Components/Api/VoiceChat';

interface Particle {
    id: number;
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
}

const mainAgentId: string = import.meta.env.VITE_MAIN_AGENT_ID;

// Main App
function App() {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        const initParticles = () => {
            const newParticles: Particle[] = [];
            for (let i = 0; i < 50; i++) {
                newParticles.push({
                    id: i,
                    x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 2000),
                    y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    size: Math.random() * 2 + 1,
                    opacity: Math.random() * 0.5 + 0.1
                });
            }
            setParticles(newParticles);
        };
        initParticles();
    }, []);

    // Animate particles
    useEffect(() => {
        const animateParticles = () => {
            setParticles(prev => prev.map(particle => {
                const newX = particle.x + particle.vx;
                const newY = particle.y + particle.vy;
                const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 2000;
                const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 800;

                return {
                    ...particle,
                    x: newX > windowWidth ? 0 : newX < 0 ? windowWidth : newX,
                    y: newY > windowHeight ? 0 : newY < 0 ? windowHeight : newY
                };
            }));
        };

        const interval = setInterval(animateParticles, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <Router>
            <NavigationMenu />

            <div className="global-particles-container">
                {particles.map((particle: Particle) => (
                    <div
                        key={particle.id}
                        className="global-particle"
                        style={{
                            left: `${particle.x}px`,
                            top: `${particle.y}px`,
                            width: `${particle.size}px`,
                            height: `${particle.size}px`,
                            opacity: particle.opacity,
                        }}
                    />
                ))}
            </div>

            <div style={{ padding: '20px' }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/demos" element={<Demos />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
            </div>

            <VoiceChat agentId={mainAgentId} />
        </Router>
    );
}

export default App;