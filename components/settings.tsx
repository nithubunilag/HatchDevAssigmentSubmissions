import React from 'react';
import './Settings.css';
import { useAppContext } from '../context/AppContext';

const Settings: React.FC = () => {
    const { themeColor, setThemeColor, backgroundColor, setBackgroundColor } = useAppContext();

    const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setThemeColor(e.target.value);
    };

    const handleBackgroundChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBackgroundColor(e.target.value);
    };

    return (
        <div className="settings-container">
            <h2>Settings</h2>
            <div className="settings-group">
                <label>Theme Color</label>
                <input type="color" value={themeColor} onChange={handleThemeChange} />
            </div>
            <div className="settings-group">
                <label>Background Color</label>
                <input type="color" value={backgroundColor} onChange={handleBackgroundChange} />
            </div>
        </div>
    );
};

export default Settings;
