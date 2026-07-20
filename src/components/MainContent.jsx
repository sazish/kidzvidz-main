import React from 'react';
import './MainContent.css';

function MainContent({ selectedMenu, isDarkMode }) {
  const contentMap = {
    home: {
      title: 'Home',
      description: 'Welcome to Kidzvidz',
      content: 'Discover featured content and start streaming'
    },
    movies: {
      title: 'Movies',
      description: 'Browse all movies',
      content: 'Find your favorite kids movies'
    },
    'tv-shows': {
      title: 'TV Shows',
      description: 'Browse all TV shows',
      content: 'Watch your favorite series'
    },
    library: {
      title: 'My Library',
      description: 'Your saved content',
      content: 'Access your watchlist and downloads'
    },
    settings: {
      title: 'Settings',
      description: 'Manage your account',
      content: 'Customize your Kidzvidz experience'
    }
  };

  const current = contentMap[selectedMenu] || contentMap.home;

  return (
    <main className={`main-content ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="content-wrapper">
        <div className="content-header">
          <h1>{current.title}</h1>
          <p className="subtitle">{current.description}</p>
        </div>

        <div className="content-area">
          <div className="placeholder-grid">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="content-card">
                <div className="card-image"></div>
                <div className="card-title">Show/Movie {item}</div>
              </div>
            ))}
          </div>
        </div>

        <p className="content-text">{current.content}</p>
      </div>
    </main>
  );
}

export default MainContent;
