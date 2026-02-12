import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import './Layout.css';

function Layout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="layout">
            <div className="stars" />
            <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
            <main className="main-content">
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;
