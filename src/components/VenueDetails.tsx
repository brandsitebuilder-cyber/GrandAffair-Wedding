import React from 'react';

export default function VenueDetails() {
  return (
    <section
      id="venue"
      style={{
        background: '#ffffff',
        paddingTop: 'clamp(4rem, 8vw, 7rem)',
        paddingBottom: 'clamp(4rem, 8vw, 7rem)',
      }}
    >
      <div
        style={{
          paddingLeft: 'clamp(1.5rem, 5vw, 3rem)',
          paddingRight: 'clamp(1.5rem, 5vw, 3rem)',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '0.85rem',
              fontWeight: 300,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#C9A95C',
              marginBottom: '0.5rem',
            }}
          >
            The Venue
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontStyle: 'italic',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: '#0a1628',
              margin: 0,
            }}
          >
            Venue & Details
          </h2>
          <div
            style={{
              width: '40px',
              height: '1px',
              background: '#C9A95C',
              margin: '1rem auto 0',
            }}
          />
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '2.5rem',
            alignItems: 'stretch',
          }}
        >
          {/* Venue Image */}
          <div style={{ flex: 1, overflow: 'hidden', boxShadow: '0 12px 40px rgba(10, 22, 40, 0.12)', minHeight: '450px' }}>
            <img
              src="/images/venue.jpg"
              alt="Mount Nelson Hotel"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                minHeight: '450px',
              }}
            />
          </div>

          {/* Details */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Venue Card */}
            <div
              style={{
                background: '#ffffff',
                border: '1px solid rgba(201, 169, 92, 0.15)',
                boxShadow: '0 4px 16px rgba(10, 22, 40, 0.06)',
                padding: '1.5rem',
              }}
            >
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 300,
                  fontStyle: 'italic',
                  fontSize: '1.4rem',
                  color: '#0a1628',
                  margin: '0 0 0.5rem',
                }}
              >
                Mount Nelson Hotel
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  fontSize: '0.8rem',
                  color: 'rgba(10, 22, 40, 0.5)',
                  margin: '0 0 0.75rem',
                }}
              >
                76 Orange Street, Gardens, Cape Town
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  fontSize: '0.9rem',
                  color: 'rgba(10, 22, 40, 0.75)',
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                Nestled at the foot of Table Mountain, the iconic "Pink Lady" of Cape Town offers timeless elegance since 1899. Our celebration will take place in the historic gardens and ballroom, surrounded by lush botanical beauty and old-world charm.
              </p>
            </div>

            {/* Dress Code Card */}
            <div
              style={{
                background: '#ffffff',
                border: '1px solid rgba(201, 169, 92, 0.15)',
                boxShadow: '0 4px 16px rgba(10, 22, 40, 0.06)',
                padding: '1.5rem',
              }}
            >
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 300,
                  fontStyle: 'italic',
                  fontSize: '1.4rem',
                  color: '#0a1628',
                  margin: '0 0 0.5rem',
                }}
              >
                Dress Code
              </h3>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '0.9rem',
                  color: '#C9A95C',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  margin: '0 0 0.75rem',
                }}
              >
                Black Tie
              </p>
              <ul
                style={{
                  listStyle: 'none',
                  margin: 0,
                  padding: 0,
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  fontSize: '0.85rem',
                  color: 'rgba(10, 22, 40, 0.7)',
                  lineHeight: 1.8,
                }}
              >
                <li style={{ paddingLeft: '1rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#C9A95C' }}>—</span>
                  Gentlemen: Classic black tuxedo with bow tie
                </li>
                <li style={{ paddingLeft: '1rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#C9A95C' }}>—</span>
                  Ladies: Floor-length evening gowns in elegant colors
                </li>
                <li style={{ paddingLeft: '1rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#C9A95C' }}>—</span>
                  Embrace the timeless sophistication of a black tie affair
                </li>
              </ul>
            </div>

            {/* Accommodation Card */}
            <div
              style={{
                background: '#ffffff',
                border: '1px solid rgba(201, 169, 92, 0.15)',
                boxShadow: '0 4px 16px rgba(10, 22, 40, 0.06)',
                padding: '1.5rem',
              }}
            >
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 300,
                  fontStyle: 'italic',
                  fontSize: '1.4rem',
                  color: '#0a1628',
                  margin: '0 0 0.5rem',
                }}
              >
                Accommodation
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  fontSize: '0.85rem',
                  color: 'rgba(10, 22, 40, 0.7)',
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                The Mount Nelson offers luxurious on-site accommodation. We also recommend the nearby Belmond Mount Nelson suites, The Ellerman House, or boutique hotels in the Gardens area. A discounted room block has been reserved — please inquire when booking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
