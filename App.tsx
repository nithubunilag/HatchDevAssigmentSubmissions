import React from 'react';
import { AppProvider } from './context/AppContext';
import Sidebar from './components/sidebar';
import MainContent from './components/maincontent';
import './App.css';

const App: React.FC = () => {
    return (
        <AppProvider>
            <div className="app">
                <Sidebar />
                <MainContent />
            </div>
        </AppProvider>
    );
};

export default App;
