import React, { useState } from 'react';
import './MainContent.css';
import Weather from './weather';
import Cities from './cities';
import Settings from './settings';

const MainContent: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>('weather');

    const handleSectionChange = (section: string) => {
        setActiveSection(section);
    };

    return (
        <div className="main-content">
            <button onClick={() => handleSectionChange('weather')}>Weather</button>
            <button onClick={() => handleSectionChange('cities')}>Cities</button>
            <button onClick={() => handleSectionChange('settings')}>Settings</button>

            {activeSection === 'weather' && <Weather />}
            {activeSection === 'cities' && <Cities />}
            {activeSection === 'settings' && <Settings />}
        </div>
    );
};

export default MainContent;
