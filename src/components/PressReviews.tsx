import React from 'react';

export default function PressReviews() {
  const reviews = [
    {
      source: 'The Verge',
      score: '9.8 / 10',
      quote: 'A titanium marvel. The 200MP periscope optics and on-device Astra N1 neural silicon redefine what a smartphone can accomplish.',
      author: 'Nilay Patel',
    },
    {
      source: 'Wired',
      score: 'Editor’s Choice',
      quote: 'The Horizon Island interface and 120W CryoCharge make daily use completely effortless. The design is sleek, dense, and breathtaking.',
      author: 'Julian Chokkattu',
    },
    {
      source: 'MKBHD',
      score: 'Smartphone of the Year',
      quote: '3,500 nits outdoor peak brightness, 0 to 100% in 18 minutes, and pure titanium ergonomics. This is peak hardware engineering.',
      author: 'Marques Brownlee',
    },
  ];

  return (
    <section style={{ padding: '80px 0', position: 'relative', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <div className="badge" style={{ marginBottom: '12px' }}>
            <span className="badge-dot" style={{ background: '#fbbf24' }} />
            <span>GLOBAL CRITICAL ACCLAIM</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)', fontWeight: 800 }}>
            What the Industry Is Saying
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            maxWidth: '1080px',
            margin: '0 auto',
          }}
        >
          {reviews.map((r, i) => (
            <div
              key={i}
              className="glass-panel"
              style={{
                padding: '28px',
                borderRadius: '18px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff' }}>{r.source}</span>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#fbbf24', background: 'rgba(251, 191, 36, 0.15)', padding: '3px 8px', borderRadius: '6px' }}>
                    {r.score}
                  </span>
                </div>
                <p style={{ fontSize: '0.92rem', color: '#cbd5e1', lineHeight: '1.6', fontStyle: 'italic', marginBottom: '18px' }}>
                  "{r.quote}"
                </p>
              </div>
              <div style={{ fontSize: '0.78rem', color: '#64748b' }}>
                Reviewed by <strong>{r.author}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
