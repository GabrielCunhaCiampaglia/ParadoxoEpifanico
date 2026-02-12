import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const navItems = [
    {
        path: '/', label: 'Home', icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2z" />
            </svg>
        )
    },
    {
        path: '/mongo-test', label: 'Mongo Test', icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <ellipse cx="12" cy="6" rx="8" ry="3" />
                <path d="M4 6v4c0 1.657 3.582 3 8 3s8-1.343 8-3V6" />
                <path d="M4 10v4c0 1.657 3.582 3 8 3s8-1.343 8-3V10" />
                <path d="M4 14v4c0 1.657 3.582 3 8 3s8-1.343 8-3V14" />
            </svg>
        )
    },
    {
        path: '/about', label: 'About', icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4m0-4h.01" />
            </svg>
        )
    },
];

function Sidebar({ isOpen, onToggle }) {
    return (
        <>
            <button className="sidebar-toggle" onClick={onToggle} aria-label="Toggle menu">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    {isOpen ? (
                        <path d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>

            {isOpen && <div className="sidebar-overlay" onClick={onToggle} />}

            <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <div className="sidebar-logo">
                        <span className="logo-icon">◆</span>
                        <span className="logo-text">Paradoxo</span>
                    </div>
                </div>

                <nav className="sidebar-nav">
                    {navItems.map(({ path, label, icon }) => (
                        <NavLink
                            key={path}
                            to={path}
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            onClick={() => window.innerWidth < 768 && onToggle()}
                            end={path === '/'}
                        >
                            <span className="nav-icon">{icon}</span>
                            <span className="nav-label">{label}</span>
                        </NavLink>
                    ))}
                </nav>

                <div className="sidebar-footer">
                    <span className="version">v0.1.0</span>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;
