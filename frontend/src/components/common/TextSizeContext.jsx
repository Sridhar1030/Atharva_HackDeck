// src/TextSizeContext.js
import React, { createContext, useContext, useState } from 'react';

// Create a Context for the text size
const TextSizeContext = createContext();

// Create a provider component
export const TextSizeProvider = ({ children }) => {
    const [textSize, setTextSize] = useState('text-base'); // Default text size

    const increaseTextSize = () => {
        setTextSize((prevSize) => {
            // Increase the text size; you can modify this logic to suit your needs
            if (prevSize === 'text-base') return 'text-lg';
            if (prevSize === 'text-lg') return 'text-xl';
            return prevSize; // No further increase
        });
    };

    return (
        <TextSizeContext.Provider value={{ textSize, increaseTextSize }}>
            {children}
        </TextSizeContext.Provider>
    );
};

// Custom hook to use the TextSize context
export const useTextSize = () => {
    return useContext(TextSizeContext);
};
