import React, { createContext, useState, useContext, ReactNode } from 'react';

interface AppContextInterface {
    themeColor: string;
    setThemeColor: (color: string) => void;
    backgroundColor: string;
    setBackgroundColor: (color: string) => void;
}

const AppContext = createContext<AppContextInterface | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [themeColor, setThemeColor] = useState<string>('#000');
    const [backgroundColor, setBackgroundColor] = useState<string>('#fff');

    return (
        <AppContext.Provider value={{ themeColor, setThemeColor, backgroundColor, setBackgroundColor }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = (): AppContextInterface => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};
