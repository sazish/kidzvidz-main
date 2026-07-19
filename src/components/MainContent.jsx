import React from 'react';
import './MainContent.css';

function MainContent({ selectedMenu, isDarkMode }) {
  const contentMap = {
    home: {
      title: 'Home',
      description: 'Welcome to Kidzvidz',
      content: 'Start streaming your favorite shows and movies'
    },
    'apple-tv': {
      title: 'Apple TV',
      description: 'Premium streaming content',
      content: 'Enjoy exclusive shows and movies'
    },
    formula1: {
      title: 'Formula 1',
      description: 'Live racing events',
      content: 'Watch Formula 1 races and highlights'
    },
    mls: {
      title: 'MLS',
      description: 'Major League Soccer',
      content: 'Follow your favorite soccer teams'
    },
    store: {
      title: 'Store',
      description: 'Browse and purchase content',
      content: 'Explore our content store'
    },
    'recently-added': {
      title: 'Recently Added',
      description: 'New content just added',
      content: 'Check out the latest additions to your library'
    },
    movies: {
      title: 'Movies',
      description: 'Browse your movie collection',
      content: 'Your saved movies appear here'
    },
    'tv-shows': {
      title: 'TV Shows',
      description: 'Browse your TV show collection',
      content: 'Your saved TV shows appear here'
    },
    '4k-hdr': {
      title: '4K HDR',
      description: 'Ultra HD content',
      content: 'Browse 4K and HDR content'
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
