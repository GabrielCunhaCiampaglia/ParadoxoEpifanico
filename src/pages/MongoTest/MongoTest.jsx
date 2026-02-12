import { useState } from 'react';
import './MongoTest.css';

function MongoTest() {
    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);
    const [hasClicked, setHasClicked] = useState(false);

    const testConnection = async () => {
        setLoading(true);
        setStatus(null);
        setHasClicked(true);

        const apiBase = import.meta.env.VITE_API_URL || '';

        try {
            const response = await fetch(`${apiBase}/api/hello`);
            const data = await response.json();
            setStatus(data);
        } catch (error) {
            setStatus({
                success: false,
                message: 'Could not reach the server. Is the backend running?',
                error: error.message,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mongo-page">
            <div className="mongo-card">
                <div className="mongo-card-glow" />
                <div className="mongo-icon-wrapper">
                    <svg
                        className="mongo-db-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <ellipse cx="12" cy="6" rx="8" ry="3" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M4 6v4c0 1.657 3.582 3 8 3s8-1.343 8-3V6" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M4 10v4c0 1.657 3.582 3 8 3s8-1.343 8-3V10" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M4 14v4c0 1.657 3.582 3 8 3s8-1.343 8-3V14" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                </div>

                <h1 className="mongo-title">
                    MongoDB <span className="mongo-highlight">Connection Test</span>
                </h1>
                <p className="mongo-subtitle">Ping your Atlas cluster to verify connectivity</p>

                <button
                    className={`mongo-test-btn ${loading ? 'loading' : ''}`}
                    onClick={testConnection}
                    disabled={loading}
                >
                    {loading ? (
                        <span className="mongo-spinner" />
                    ) : (
                        <>
                            <svg className="mongo-btn-icon" viewBox="0 0 24 24" fill="none">
                                <path d="M13 10V3L4 14h7v7l9-11h-7z" fill="currentColor" />
                            </svg>
                            Test Connection
                        </>
                    )}
                </button>

                {hasClicked && !loading && status && (
                    <div className={`mongo-result ${status.success ? 'success' : 'error'}`}>
                        <div className="mongo-result-icon">
                            {status.success ? '✓' : '✗'}
                        </div>
                        <p className="mongo-result-message">{status.message}</p>
                        {status.error && (
                            <p className="mongo-result-error">{status.error}</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default MongoTest;
