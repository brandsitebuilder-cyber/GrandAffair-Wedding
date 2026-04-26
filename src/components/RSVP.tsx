import React, { useState } from 'react';

export default function RSVP() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: '2',
    dietary: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your RSVP! We look forward to celebrating with you.');
  };

  return (
    <section
      id="rsvp"
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
          maxWidth: '700px',
          margin: '0 auto',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 3rem)' }}>
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
            Join Us
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
            RSVP
          </h2>
          <div
            style={{
              width: '40px',
              height: '1px',
              background: '#C9A95C',
              margin: '1rem auto 0.75rem',
            }}
          />
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: '0.85rem',
              color: 'rgba(247, 232, 208, 0.6)',
            }}
          >
            We kindly ask that you confirm your attendance by 31 March 2027
          </p>
        </div>

        {/* Glass-morphism card */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(201, 169, 92, 0.15)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
            padding: 'clamp(2rem, 4vw, 3rem)',
          }}
        >
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Name */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  fontSize: '0.75rem',
                  color: '#C9A95C',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  marginBottom: '0.5rem',
                }}
              >
                Full Name(s)
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Alexander & Victoria"
                style={{
                  width: '100%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(201, 169, 92, 0.2)',
                  color: '#ffffff',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  fontSize: '0.9rem',
                  padding: '0.85rem 1rem',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                }}
                onFocus={(e) => (e.target.style.borderColor = '#C9A95C')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(201, 169, 92, 0.2)')}
              />
            </div>

            {/* Email */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  fontSize: '0.75rem',
                  color: '#C9A95C',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  marginBottom: '0.5rem',
                }}
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                style={{
                  width: '100%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(201, 169, 92, 0.2)',
                  color: '#ffffff',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  fontSize: '0.9rem',
                  padding: '0.85rem 1rem',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                }}
                onFocus={(e) => (e.target.style.borderColor = '#C9A95C')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(201, 169, 92, 0.2)')}
              />
            </div>

            {/* Number Attending */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  fontSize: '0.75rem',
                  color: '#C9A95C',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  marginBottom: '0.5rem',
                }}
              >
                Number Attending
              </label>
              <select
                name="attending"
                value={formData.attending}
                onChange={handleChange}
                style={{
                  width: '100%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(201, 169, 92, 0.2)',
                  color: '#ffffff',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  fontSize: '0.9rem',
                  padding: '0.85rem 1rem',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  appearance: 'none',
                }}
                onFocus={(e) => (e.target.style.borderColor = '#C9A95C')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(201, 169, 92, 0.2)')}
              >
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n} style={{ background: '#1a1040', color: '#fff' }}>
                    {n} {n === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
              </select>
            </div>

            {/* Dietary */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  fontSize: '0.75rem',
                  color: '#C9A95C',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  marginBottom: '0.5rem',
                }}
              >
                Dietary Requirements
              </label>
              <input
                type="text"
                name="dietary"
                value={formData.dietary}
                onChange={handleChange}
                placeholder="Any allergies or dietary needs"
                style={{
                  width: '100%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(201, 169, 92, 0.2)',
                  color: '#ffffff',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  fontSize: '0.9rem',
                  padding: '0.85rem 1rem',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                }}
                onFocus={(e) => (e.target.style.borderColor = '#C9A95C')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(201, 169, 92, 0.2)')}
              />
            </div>

            {/* Message */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  fontSize: '0.75rem',
                  color: '#C9A95C',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  marginBottom: '0.5rem',
                }}
              >
                Message for the Couple
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                placeholder="Share your love..."
                style={{
                  width: '100%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(201, 169, 92, 0.2)',
                  color: '#ffffff',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  fontSize: '0.9rem',
                  padding: '0.85rem 1rem',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  resize: 'vertical',
                }}
                onFocus={(e) => (e.target.style.borderColor = '#C9A95C')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(201, 169, 92, 0.2)')}
              />
            </div>

            <button
              type="submit"
              style={{
                background: '#C9A95C',
                color: '#0a1628',
                border: 'none',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: '0.8rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                padding: '1rem 2rem',
                cursor: 'pointer',
                transition: 'all 0.3s',
                marginTop: '0.5rem',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#b8953d';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#C9A95C';
                e.currentTarget.style.transform = 'none';
              }}
            >
              Submit RSVP
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
