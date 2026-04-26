import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InvitationCard from './components/Invitation';
import OurStory from './components/OurStory';
import Gallery from './components/Gallery';
import Schedule from './components/Schedule';
import VenueDetails from './components/VenueDetails';
import RSVP from './components/RSVP';

export default function App() {
  return (
    <div style={{ minHeight: '100vh', overflowX: 'hidden', background: '#0a1628' }}>
      <Navbar />
      <main>
        <Hero />
        <InvitationCard />
        <OurStory />
        <Gallery />
        <Schedule />
        <VenueDetails />
        <RSVP />
      </main>
      <footer
        style={{
          background: '#0a1628',
          borderTop: '1px solid rgba(201, 169, 92, 0.1)',
          paddingTop: '3rem',
          paddingBottom: '3rem',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontStyle: 'italic',
            fontSize: '1.1rem',
            color: '#F7E8D0',
            margin: '0 0 0.25rem',
          }}
        >
          Alexander & Victoria
        </p>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            fontSize: '0.75rem',
            color: 'rgba(247, 232, 208, 0.4)',
            letterSpacing: '0.1em',
            margin: 0,
          }}
        >
          12 June 2027 · Mount Nelson Hotel, Cape Town
        </p>
      </footer>
    </div>
  );
}
