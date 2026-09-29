import React from 'react';

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        background: 'rgba(4, 6, 15, 0.95)',
        padding: '70px 0 40px',
        position: 'relative',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            marginBottom: '60px',
          }}
        >
          {/* Brand Col */}
          <div style={{ maxWidth: '300px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #00f0ff 0%, #8b5cf6 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff' }}>
                ASTRA<span style={{ color: '#00f0ff' }}>TECH</span>
              </span>
            </div>
            <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: '1.6', marginBottom: '20px' }}>
              Autonomous edge orchestration and post-quantum neural infrastructure for the modern internet.
            </p>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 12px',
                borderRadius: '20px',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                fontSize: '0.75rem',
                color: '#34d399',
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }} />
              All Systems Operational (99.999%)
            </div>
          </div>

          {/* Col 1 */}
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '18px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Platform
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.88rem', color: '#94a3b8' }}>
              <li><a href="#features" style={{ transition: 'color 0.2s' }}>Neural Edge Engine</a></li>
              <li><a href="#features" style={{ transition: 'color 0.2s' }}>Quantum-Resilient Mesh</a></li>
              <li><a href="#playground" style={{ transition: 'color 0.2s' }}>Telemetry Simulator</a></li>
              <li><a href="#developer" style={{ transition: 'color 0.2s' }}>Global DNS & Anycast</a></li>
            </ul>
          </div>

          {/* Col 2 */}
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '18px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Resources
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.88rem', color: '#94a3b8' }}>
              <li><a href="#developer" style={{ transition: 'color 0.2s' }}>TypeScript & Python SDKs</a></li>
              <li><a href="#developer" style={{ transition: 'color 0.2s' }}>API Reference</a></li>
              <li><a href="#hero-section" style={{ transition: 'color 0.2s' }}>Architecture Whitepaper</a></li>
              <li><a href="#playground" style={{ transition: 'color 0.2s' }}>Latency Benchmarks</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '18px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Security & Compliance
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.88rem', color: '#94a3b8' }}>
              <li><span style={{ color: '#64748b' }}>SOC 2 Type II Certified</span></li>
              <li><span style={{ color: '#64748b' }}>NIST FIPS 203 / 204 Ready</span></li>
              <li><span style={{ color: '#64748b' }}>ISO 27001 Infrastructure</span></li>
              <li><span style={{ color: '#64748b' }}>Zero-Knowledge Attestation</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            paddingTop: '30px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '0.82rem',
            color: '#64748b',
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} Astra Tech Systems Inc. Built with Next.js 16 & App Router.
          </div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Security Disclosures</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
