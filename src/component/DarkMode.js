import { useState, useEffect } from 'react';
import { darkModeLocalStorage } from '../localstorage/localServices';
import './DarkMode.scss';

const useScreenMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(darkModeLocalStorage.get());

    useEffect(() => {
        const body = document.body;
        body.classList.toggle('dark-mode', isDarkMode);
    }, [isDarkMode]);

    const toggleScreenMode = () => {
        const newMode = !isDarkMode;
        darkModeLocalStorage.set(newMode);
        setIsDarkMode(newMode);
    };

    return toggleScreenMode;
};

export default useScreenMode;
