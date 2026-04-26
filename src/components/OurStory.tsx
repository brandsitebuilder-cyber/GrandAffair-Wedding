import React from 'react';

const chapters = [
  {
    title: 'The Meeting',
    subtitle: 'Gala Fundraiser · Winter 2025',
    description:
      'It began under the glittering chandeliers of a Cape Town ballroom. Alexander, a visionary entrepreneur, was the evening\'s keynote speaker. Victoria, a passionate philanthropist, was radiant in a floor-length gown. Their eyes met across the room, and a simple conversation became an all-night dance.',
    image: '/images/story-meeting.jpg',
  },
  {
    title: 'The First Date',
    subtitle: 'Bree Street · Cape Town',
    description:
      'What started as coffee at a small Bree Street café turned into hours of laughter, shared dreams, and a sunset stroll along the Sea Point promenade. They discovered a connection neither could deny — an effortless rhythm that felt like coming home.',
    image: '/images/story-firstdate.jpg',
  },
  {
    title: 'The Proposal',
    subtitle: 'Chapman\'s Peak · March 2026',
    description:
      'Atop Chapman\'s Peak Drive with the Atlantic Ocean glittering below, Alexander dropped to one knee as the sun set in a blaze of orange and gold. Victoria\'s tearful "yes" echoed across the cliffs — the beginning of their forever.',
    image: '/images/story-proposal.jpg',
  },
];

export default function OurStory() {
  return (
    <section
      id="story"
      style={{
        background: '#0a1628',
        paddingTop: 'clamp(4rem, 8vw, 7rem)',
        paddingBottom: 'clamp(4rem, 8vw, 7rem)',
      }}
    >
      <div
        style={{
          paddingLeft: 'clamp(1.5rem, 5vw, 3rem)',
          paddingRight: 'clamp(1.5rem, 5vw, 3rem)',
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
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
            The Beginning
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
            Our Story
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

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {chapters.map((chapter, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                gap: '2rem',
                alignItems: 'center',
                background: 'rgba(15, 31, 58, 0.6)',
                border: '1px solid rgba(201, 169, 92, 0.1)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                overflow: 'hidden',
              }}
            >
              <div style={{ flex: 1, minHeight: '300px', overflow: 'hidden' }}>
                <img
                  src={chapter.image}
                  alt={chapter.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    minHeight: '300px',
                  }}
                />
              </div>
              <div style={{ flex: 1, padding: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '0.8rem',
                    color: '#C9A95C',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    marginBottom: '0.5rem',
                  }}
                >
                  Chapter {index + 1}
                </p>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 300,
                    fontStyle: 'italic',
                    fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                    color: '#ffffff',
                    margin: '0 0 0.25rem',
                  }}
                >
                  {chapter.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 300,
                    fontSize: '0.8rem',
                    color: 'rgba(247, 232, 208, 0.6)',
                    letterSpacing: '0.05em',
                    marginBottom: '1rem',
                  }}
                >
                  {chapter.subtitle}
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 300,
                    fontSize: '0.9rem',
                    color: 'rgba(247, 232, 208, 0.8)',
                    lineHeight: 1.7,
                  }}
                >
                  {chapter.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
