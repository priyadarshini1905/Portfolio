import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
    transition: 'all 0.3s ease',
    padding: isScrolled ? '1rem 0' : '1.5rem 0',
    backgroundColor: isScrolled ? 'rgba(15, 23, 42, 0.9)' : 'transparent',
    backdropFilter: isScrolled ? 'blur(10px)' : 'none',
    borderBottom: isScrolled ? '1px solid var(--border)' : 'none',
  };

  const linkStyles = {
    marginLeft: '2rem',
    fontWeight: '500',
    color: 'var(--text-secondary)',
    fontSize: '0.95rem',
  };

  return (
    <nav style={navStyles}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--accent)' }}>PRIYA DARSHINIS</a>
        
        <div className="nav-links">
          {['About', 'Projects', 'Education', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              style={linkStyles}
              onMouseEnter={(e) => e.target.style.color = 'var(--accent)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
