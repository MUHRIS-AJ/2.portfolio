"use client";
import React, { createContext, useContext, useState } from 'react';

const ViewContext = createContext();

export const ViewProvider = ({ children }) => {
    const [activeTab, setActiveTab] = useState('home');

    return (
        <ViewContext.Provider value={{ activeTab, setActiveTab }}>
            {children}
        </ViewContext.Provider>
    );
};

export const useView = () => useContext(ViewContext);
