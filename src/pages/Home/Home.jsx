import { NavLink } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <div className="home-page">
            <div className="home-hero">
                <div className="hero-badge">✦ Dashboard</div>
                <h1 className="hero-title">
                    Paradoxo <span className="hero-highlight">Epifânico</span>
                </h1>
                <p className="hero-subtitle">
                    Your experimental playground — explore different tools and features.
                </p>
            </div>

            <div className="home-grid">
                <NavLink to="/mongo-test" className="home-card">
                    <div className="card-icon mongo-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <ellipse cx="12" cy="6" rx="8" ry="3" />
                            <path d="M4 6v4c0 1.657 3.582 3 8 3s8-1.343 8-3V6" />
                            <path d="M4 10v4c0 1.657 3.582 3 8 3s8-1.343 8-3V10" />
                            <path d="M4 14v4c0 1.657 3.582 3 8 3s8-1.343 8-3V14" />
                        </svg>
                    </div>
                    <h3 className="card-title">MongoDB Test</h3>
                    <p className="card-desc">Test your Atlas connection with a single click.</p>
                    <span className="card-arrow">→</span>
                </NavLink>

                <NavLink to="/about" className="home-card">
                    <div className="card-icon about-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 16v-4m0-4h.01" />
                        </svg>
                    </div>
                    <h3 className="card-title">About</h3>
                    <p className="card-desc">Learn more about this project and its stack.</p>
                    <span className="card-arrow">→</span>
                </NavLink>
            </div>
        </div>
    );
}

export default Home;
