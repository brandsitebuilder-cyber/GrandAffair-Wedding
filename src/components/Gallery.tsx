import React from 'react';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop',
    alt: 'Couple silhouette sunset',
  },
  {
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
    alt: 'Engagement rings',
  },
  {
    url: 'https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=2069&auto=format&fit=crop',
    alt: 'Wedding details',
  },
  {
    url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop',
    alt: 'Ballroom',
  },
  {
    url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070&auto=format&fit=crop',
    alt: 'Bouquet',
  },
  {
    url: 'https://images.unsplash.com/photo-1415025148099-17fe74102b28?q=80&w=2074&auto=format&fit=crop',
    alt: 'Romantic dinner',
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
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
            Moments
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
            Gallery
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
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1rem',
          }}
        >
          {galleryImages.map((img, index) => (
            <div
              key={index}
              style={{
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(10, 22, 40, 0.08)',
                aspectRatio: index === 0 ? '16/10' : '4/3',
              }}
            >
              <img
                src={img.url}
                alt={img.alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.5s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
