import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('kidzvidz-dark-mode');
    return saved !== null ? JSON.parse(saved) : false;
  });
  const [selectedMenu, setSelectedMenu] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
    localStorage.setItem('kidzvidz-dark-mode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <div className="app">
      <Sidebar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        selectedMenu={selectedMenu}
        setSelectedMenu={setSelectedMenu}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <MainContent selectedMenu={selectedMenu} isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
