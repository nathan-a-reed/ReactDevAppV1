import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavigationMenu from './Components/NavigationMenu'


const Home: React.FC = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <div>Home Page</div>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
        </div>
    );
};

const About: React.FC = () => <div>About Page</div>;
const Services: React.FC = () => <div>Services Page</div>;
const Contact: React.FC = () => <div>Contact Page</div>;

function App () {

    return (
        <>
            <Router>
                <NavigationMenu />
                <div style={{ padding: '20px' }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            </Router>
        </>
    )
}

export default App