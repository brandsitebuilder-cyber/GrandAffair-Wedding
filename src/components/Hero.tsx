import React from 'react';

export default function Hero() {
  const scrollToInvitation = () => {
    const el = document.querySelector('#invitation');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#0a1628',
      }}
    >
      {/* Background image with overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2070&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.4,
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(10,22,40,0.85) 0%, rgba(10,22,40,0.95) 100%)',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          paddingLeft: 'clamp(1.5rem, 5vw, 3rem)',
          paddingRight: 'clamp(1.5rem, 5vw, 3rem)',
          maxWidth: '900px',
        }}
      >
        <div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(0.75rem, 1.5vw, 1rem)',
            fontWeight: 300,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#C9A95C',
            marginBottom: '1rem',
          }}
        >
          The Grand Affair
        </div>

        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: '#ffffff',
            lineHeight: 1.15,
            margin: '0 0 0.5rem',
          }}
        >
          Alexander
          <span style={{ color: '#C9A95C', fontStyle: 'normal', display: 'inline-block', margin: '0 0.5rem' }}>&</span>
          Victoria
        </h1>

        <div
          style={{
            width: '60px',
            height: '1px',
            background: '#C9A95C',
            margin: '1.5rem auto',
          }}
        />

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            fontSize: 'clamp(0.9rem, 1.2vw, 1.1rem)',
            color: '#F7E8D0',
            letterSpacing: '0.05em',
            marginBottom: '0.5rem',
          }}
        >
          Saturday, 12 June 2027
        </p>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            fontSize: 'clamp(0.8rem, 1vw, 0.95rem)',
            color: 'rgba(247, 232, 208, 0.7)',
            letterSpacing: '0.1em',
            marginBottom: '2.5rem',
          }}
        >
          Mount Nelson Hotel · Cape Town
        </p>

        <button
          onClick={scrollToInvitation}
          style={{
            background: 'transparent',
            border: '1px solid #C9A95C',
            color: '#C9A95C',
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            fontSize: '0.8rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            padding: '1rem 2.5rem',
            cursor: 'pointer',
            transition: 'all 0.3s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#C9A95C';
            e.currentTarget.style.color = '#0a1628';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#C9A95C';
          }}
        >
          View Invitation
        </button>
      </div>

      {/* Subtle scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'bounce 2s infinite',
        }}
      >
        <svg width="20" height="30" viewBox="0 0 20 30" fill="none" stroke="#C9A95C" strokeWidth="1.5">
          <rect x="2" y="2" width="16" height="26" rx="8" />
          <circle cx="10" cy="10" r="2" fill="#C9A95C" />
        </svg>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
      `}</style>
    </section>
  );
}
