import React, { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Invitation', href: '#invitation' },
  { name: 'Our Story', href: '#story' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Schedule', href: '#schedule' },
  { name: 'Venue', href: '#venue' },
  { name: 'RSVP', href: '#rsvp' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s',
        background: isScrolled ? 'rgba(10, 22, 40, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(201, 169, 92, 0.15)' : '1px solid transparent',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
          paddingLeft: 'clamp(1.5rem, 5vw, 3rem)',
          paddingRight: 'clamp(1.5rem, 5vw, 3rem)',
          paddingTop: isScrolled ? '0.75rem' : '1.25rem',
          paddingBottom: isScrolled ? '0.75rem' : '1.25rem',
        }}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', fontWeight: 300, letterSpacing: '0.15em', color: '#F7E8D0' }}
        >
          A &amp; V
        </button>

        {/* Desktop */}
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              style={{
                fontSize: '0.7rem',
                fontWeight: 300,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#F7E8D0',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                transition: 'color 0.2s',
                fontFamily: "'Inter', sans-serif",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A95C')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#F7E8D0')}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#F7E8D0' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {isMobileOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isMobileOpen && (
        <div
          style={{
            background: 'rgba(10, 22, 40, 0.98)',
            backdropFilter: 'blur(12px)',
            borderTop: '1px solid rgba(201, 169, 92, 0.15)',
            display: 'flex',
            flexDirection: 'column',
            paddingLeft: 'clamp(1.5rem, 5vw, 3rem)',
            paddingRight: 'clamp(1.5rem, 5vw, 3rem)',
            paddingTop: '1.5rem',
            paddingBottom: '1.5rem',
            gap: '1rem',
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              style={{
                fontSize: '0.75rem',
                fontWeight: 300,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#F7E8D0',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
