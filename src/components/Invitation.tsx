import React from 'react';

export default function InvitationCard() {
  return (
    <section
      id="invitation"
      style={{
        background: '#ffffff',
        paddingTop: 'clamp(4rem, 8vw, 7rem)',
        paddingBottom: 'clamp(4rem, 8vw, 7rem)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          paddingLeft: 'clamp(1.5rem, 5vw, 3rem)',
          paddingRight: 'clamp(1.5rem, 5vw, 3rem)',
          maxWidth: '800px',
          width: '100%',
        }}
      >
        <div
          style={{
            background: '#ffffff',
            border: '1px solid rgba(201, 169, 92, 0.2)',
            boxShadow: '0 20px 60px rgba(10, 22, 40, 0.08), 0 4px 16px rgba(0,0,0,0.04)',
            padding: 'clamp(2.5rem, 5vw, 4rem)',
            position: 'relative',
          }}
        >
          {/* Decorative gold lines */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '2rem',
            }}
          >
            <div style={{ flex: 1, height: '1px', background: '#C9A95C' }} />
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C9A95C' }} />
            <div style={{ flex: 1, height: '1px', background: '#C9A95C' }} />
          </div>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: '0.8rem',
              color: '#0a1628',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              textAlign: 'center',
              marginBottom: '0.75rem',
            }}
          >
            With hearts full of love and gratitude, together with their families,
          </p>

          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontStyle: 'italic',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: '#0a1628',
              textAlign: 'center',
              margin: '1rem 0',
              lineHeight: 1.2,
            }}
          >
            Alexander Brookes
            <span style={{ color: '#C9A95C', fontStyle: 'normal' }}> & </span>
            Victoria Sinclair
          </h2>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: '0.85rem',
              color: '#0a1628',
              textAlign: 'center',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '2rem',
            }}
          >
            Request the honor of your presence
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '2rem',
            }}
          >
            <div style={{ flex: 1, height: '1px', background: '#C9A95C', opacity: 0.4 }} />
            <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#C9A95C', opacity: 0.6 }} />
            <div style={{ flex: 1, height: '1px', background: '#C9A95C', opacity: 0.4 }} />
          </div>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: '0.95rem',
              color: 'rgba(10, 22, 40, 0.75)',
              textAlign: 'center',
              lineHeight: 1.7,
              maxWidth: '560px',
              margin: '0 auto 2rem',
            }}
          >
            We invite you to join us as we exchange our vows and begin our forever. Your presence at our wedding will make this celebration whole.
          </p>

          <div
            style={{
              textAlign: 'center',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: '0.9rem',
              color: '#0a1628',
              lineHeight: 1.8,
            }}
          >
            <p style={{ margin: 0 }}><strong style={{ fontWeight: 400 }}>Saturday, 12 June 2027</strong> at 17:00</p>
            <p style={{ margin: '0.25rem 0', color: 'rgba(10,22,40,0.6)' }}>Mount Nelson Hotel · Cape Town</p>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginTop: '2rem',
            }}
          >
            <div style={{ flex: 1, height: '1px', background: '#C9A95C', opacity: 0.4 }} />
            <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#C9A95C', opacity: 0.6 }} />
            <div style={{ flex: 1, height: '1px', background: '#C9A95C', opacity: 0.4 }} />
          </div>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: '0.85rem',
              color: '#C9A95C',
              textAlign: 'center',
              marginTop: '1.5rem',
              letterSpacing: '0.1em',
            }}
          >
            Black Tie Attire
          </p>

          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontStyle: 'italic',
              fontSize: '0.95rem',
              color: 'rgba(10, 22, 40, 0.55)',
              textAlign: 'center',
              marginTop: '1rem',
            }}
          >
            We look forward to celebrating with you
          </p>
        </div>
      </div>
    </section>
  );
}
