import React from 'react';

const scheduleItems = [
  { time: '16:30', event: 'Guest Arrival', detail: 'Welcome champagne & canapés on the terrace' },
  { time: '17:00', event: 'Wedding Ceremony', detail: 'Under the garden arch at Mount Nelson' },
  { time: '18:00', event: 'Cocktail Hour', detail: 'Canapés, premium bar, and live piano' },
  { time: '19:30', event: 'Reception & Dinner', detail: 'Four-course seated dinner in the Ballroom' },
  { time: '21:00', event: 'Speeches & Toasts', detail: 'Words from loved ones and the couple' },
  { time: '22:00', event: 'First Dance & Celebration', detail: 'Dancing and celebration until late' },
];

export default function Schedule() {
  return (
    <section
      id="schedule"
      style={{
        background: 'linear-gradient(135deg, #0a1628 0%, #1a1040 100%)',
        paddingTop: 'clamp(4rem, 8vw, 7rem)',
        paddingBottom: 'clamp(4rem, 8vw, 7rem)',
      }}
    >
      <div
        style={{
          paddingLeft: 'clamp(1.5rem, 5vw, 3rem)',
          paddingRight: 'clamp(1.5rem, 5vw, 3rem)',
          maxWidth: '900px',
          margin: '0 auto',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 6vw, 4rem)' }}>
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
            The Timeline
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontStyle: 'italic',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: '#ffffff',
              margin: 0,
            }}
          >
            Schedule
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

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {scheduleItems.map((item, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                gap: '1.5rem',
                alignItems: 'stretch',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(201, 169, 92, 0.12)',
                backdropFilter: 'blur(8px)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(201, 169, 92, 0.35)';
                e.currentTarget.style.transform = 'translateX(4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(201, 169, 92, 0.12)';
                e.currentTarget.style.transform = 'none';
              }}
            >
              {/* Time column with gold accent */}
              <div
                style={{
                  minWidth: '100px',
                  background: 'rgba(201, 169, 92, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRight: '1px solid rgba(201, 169, 92, 0.15)',
                  padding: '1.25rem 1rem',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1.25rem',
                    fontWeight: 300,
                    color: '#C9A95C',
                    letterSpacing: '0.05em',
                  }}
                >
                  {item.time}
                </span>
              </div>

              {/* Event details */}
              <div
                style={{
                  flex: 1,
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 300,
                    fontSize: '1.2rem',
                    color: '#ffffff',
                    margin: 0,
                    marginBottom: '0.25rem',
                  }}
                >
                  {item.event}
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 300,
                    fontSize: '0.8rem',
                    color: 'rgba(247, 232, 208, 0.6)',
                    margin: 0,
                  }}
                >
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
