import React, { createContext, useContext, useEffect, useState } from 'react';
import './LanguageContext.scss';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [isVietnamese, setIsVietnamese] = useState(false);

    const toggleLanguageMode = () => {
        setIsVietnamese(prevState => !prevState);
    };
    useEffect(() => {
        const body = document.body;
        body.classList.toggle('vietnamese', isVietnamese);
    }, [isVietnamese]);

    return (
        <LanguageContext.Provider value={{ isVietnamese, toggleLanguageMode }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
