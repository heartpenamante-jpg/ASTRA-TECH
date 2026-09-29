'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-navigation"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        padding: scrolled ? '12px 0' : '20px 0',
        backgroundColor: scrolled ? 'rgba(6, 8, 19, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <Link href="/" id="brand-logo" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #00f0ff 0%, #8b5cf6 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(0, 240, 255, 0.4)',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>
          <div>
            <span style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.02em', color: '#ffffff' }}>
              ASTRA<span style={{ color: '#00f0ff' }}>TECH</span>
            </span>
            <div style={{ fontSize: '0.65rem', color: '#94a3b8', letterSpacing: '0.1em', marginTop: '-3px', textTransform: 'uppercase' }}>
              Neural Edge Cloud
            </div>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '32px',
          }}
          className="desktop-nav"
        >
          <a href="#features" className="nav-link" id="nav-features">Capabilities</a>
          <a href="#telemetry" className="nav-link" id="nav-telemetry">Live Telemetry</a>
          <a href="#playground" className="nav-link" id="nav-playground">Simulation</a>
          <a href="#developer" className="nav-link" id="nav-developer">Developers</a>
        </nav>

        {/* Right Action */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: '20px',
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.25)',
              fontSize: '0.75rem',
              color: '#34d399',
            }}
            className="status-pill"
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#10b981',
                boxShadow: '0 0 8px #10b981',
              }}
            />
            Global Nodes: 350+ Online
          </div>

          <a
            href="#telemetry"
            id="nav-console-btn"
            className="btn-primary"
            style={{
              padding: '8px 18px',
              fontSize: '0.85rem',
              borderRadius: '8px',
            }}
          >
            Launch Console
          </a>

          {/* Mobile hamburger button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              color: '#ffffff',
              display: 'flex',
              padding: '6px',
            }}
            aria-label="Toggle menu"
            className="mobile-toggle"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'rgba(6, 8, 19, 0.98)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <a href="#features" onClick={() => setMobileMenuOpen(false)} style={{ color: '#e2e8f0', fontSize: '1rem' }}>Capabilities</a>
          <a href="#telemetry" onClick={() => setMobileMenuOpen(false)} style={{ color: '#e2e8f0', fontSize: '1rem' }}>Live Telemetry</a>
          <a href="#playground" onClick={() => setMobileMenuOpen(false)} style={{ color: '#e2e8f0', fontSize: '1rem' }}>Simulation</a>
          <a href="#developer" onClick={() => setMobileMenuOpen(false)} style={{ color: '#e2e8f0', fontSize: '1rem' }}>Developers</a>
        </div>
      )}

      <style jsx>{`
        .nav-link {
          color: #94a3b8;
          font-size: 0.9rem;
          font-weight: 500;
          transition: color 0.2s ease;
        }
        .nav-link:hover {
          color: #00f0ff;
        }
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .status-pill {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
