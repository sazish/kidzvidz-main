import React, { useState } from 'react';
import './Sidebar.css';

function Sidebar({ isDarkMode, setIsDarkMode, selectedMenu, setSelectedMenu, searchQuery, setSearchQuery }) {
  const [expandedMenu, setExpandedMenu] = useState('library');

  const menuItems = [
    { id: 'home', label: 'Home', icon: '🏠', submenu: null },
    { id: 'apple-tv', label: 'Apple TV', icon: '📺', submenu: null },
    { id: 'formula1', label: 'Formula 1', icon: '🏎️', submenu: null },
    { id: 'mls', label: 'MLS', icon: '⚽', submenu: null },
    { id: 'store', label: 'Store', icon: '🛍️', submenu: null },
    {
      id: 'library',
      label: 'Library',
      icon: '📚',
      submenu: [
        { id: 'recently-added', label: 'Recently Added', icon: '🕐' },
        { id: 'movies', label: 'Movies', icon: '🎬' },
        { id: 'tv-shows', label: 'TV Shows', icon: '📺' },
        { id: '4k-hdr', label: '4K HDR', icon: '✨' },
      ]
    },
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
          <div key={item.id} className="menu-group">
            <button
              className={`menu-item ${selectedMenu === item.id || (item.submenu && expandedMenu === item.id) ? 'active' : ''}`}
              onClick={() => {
                if (item.submenu) {
                  toggleSubmenu(item.id);
                } else {
                  handleMenuClick(item.id);
                }
              }}
            >
              <span className="menu-icon">{item.icon}</span>
              <span className="menu-label">{item.label}</span>
              {item.submenu && (
                <span className="submenu-arrow">{expandedMenu === item.id ? '▼' : '▶'}</span>
              )}
            </button>

            {/* Submenu */}
            {item.submenu && expandedMenu === item.id && (
              <div className="submenu">
                {item.submenu.map((subitem) => (
                  <button
                    key={subitem.id}
                    className={`submenu-item ${selectedMenu === subitem.id ? 'active' : ''}`}
                    onClick={() => handleMenuClick(subitem.id)}
                  >
                    <span className="submenu-icon">{subitem.icon}</span>
                    <span className="submenu-label">{subitem.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
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
