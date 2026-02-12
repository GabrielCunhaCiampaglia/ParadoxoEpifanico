import './About.css';

function About() {
    return (
        <div className="about-page">
            <div className="about-header">
                <div className="about-badge">ℹ About</div>
                <h1 className="about-title">About This Project</h1>
                <p className="about-subtitle">
                    Paradoxo Epifânico — an experimental multi-page application.
                </p>
            </div>

            <div className="about-content">
                <div className="about-section">
                    <h2 className="about-section-title">Tech Stack</h2>
                    <div className="tech-grid">
                        <div className="tech-item">
                            <span className="tech-emoji">⚡</span>
                            <div>
                                <strong>Vite</strong>
                                <p>Lightning-fast build tool</p>
                            </div>
                        </div>
                        <div className="tech-item">
                            <span className="tech-emoji">⚛️</span>
                            <div>
                                <strong>React</strong>
                                <p>UI component library</p>
                            </div>
                        </div>
                        <div className="tech-item">
                            <span className="tech-emoji">🍃</span>
                            <div>
                                <strong>MongoDB</strong>
                                <p>NoSQL database (Atlas)</p>
                            </div>
                        </div>
                        <div className="tech-item">
                            <span className="tech-emoji">🚂</span>
                            <div>
                                <strong>Express</strong>
                                <p>Backend API server</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about-section">
                    <h2 className="about-section-title">How It Works</h2>
                    <p className="about-text">
                        This app uses a <strong>React + Vite</strong> frontend with an <strong>Express</strong> backend
                        that connects to <strong>MongoDB Atlas</strong>. Each page is isolated in its own folder
                        under <code>src/pages/</code>, making it easy to add new features independently.
                    </p>
                    <p className="about-text">
                        The frontend is deployable to <strong>GitHub Pages</strong> as a static site,
                        while the backend can be hosted on any Node.js-compatible platform.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
