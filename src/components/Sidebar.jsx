import React, { useState } from 'react';
import './Sidebar.css';

function Sidebar({ isDarkMode, setIsDarkMode, selectedMenu, setSelectedMenu, searchQuery, setSearchQuery }) {

  const menuItems = [
    { id: 'home', label: 'Home', icon: '⌂', submenu: null },
    { id: 'movies', label: 'Movies', icon: '■', submenu: null },
    { id: 'tv-shows', label: 'TV Shows', icon: '⊞', submenu: null },
    { id: 'library', label: 'Library', icon: '❑', submenu: null },
    { id: 'settings', label: 'Settings', icon: '≡', submenu: null },
  ];

  const toggleSubmenu = (menuId) => {
    setExpandedMenu(expandedMenu === menuId ? null : menuId);
  };

  const handleMenuClick = (menuId) => {
    setSelectedMenu(menuId);
  };

  return (
    <aside className={`sidebar ${isDarkMode ? 'dark' : 'light'}`}>
      {/* Header */}
      <div className="sidebar-header">
        <div className="header-top">
          <div className="app-logo">📺 Kidzvidz</div>
          <button className="menu-button" title="Menu">⋯</button>
        </div>

        {/* Search */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`menu-item ${selectedMenu === item.id ? 'active' : ''}`}
            onClick={() => handleMenuClick(item.id)}
          >
            <span className="menu-icon">{item.icon}</span>
            <span className="menu-label">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className="sidebar-footer">
        <button
          className="theme-toggle"
          onClick={() => setIsDarkMode(!isDarkMode)}
          title={isDarkMode ? 'Light Mode' : 'Dark Mode'}
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>

        <button className="user-profile">
          <span className="user-avatar">👤</span>
          <span className="user-name">Dylan Anderson</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
