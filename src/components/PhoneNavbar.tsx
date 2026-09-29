'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PhoneNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="phone-nav"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        padding: scrolled ? '10px 0' : '18px 0',
        backgroundColor: scrolled ? 'rgba(6, 8, 19, 0.9)' : 'rgba(6, 8, 19, 0.4)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand */}
        <Link href="/" id="brand-phone-logo" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '9px',
              background: 'linear-gradient(135deg, #00f0ff 0%, #8b5cf6 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(0, 240, 255, 0.4)',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5">
              <rect x="5" y="2" width="14" height="20" rx="3" />
              <line x1="12" y1="18" x2="12.01" y2="18" />
            </svg>
          </div>
          <div>
            <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span>ASTRA</span>
              <span style={{ color: '#00f0ff' }}>PHONE</span>
              <span style={{ fontSize: '0.65rem', background: 'rgba(139, 92, 246, 0.25)', border: '1px solid rgba(139, 92, 246, 0.5)', padding: '2px 6px', borderRadius: '4px', color: '#c4b5fd' }}>
                ULTRA
              </span>
            </div>
          </div>
        </Link>

        {/* Nav Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '28px',
          }}
          className="desktop-menu"
        >
          <a href="#overview" className="nav-link" id="nav-link-overview">Overview</a>
          <a href="#horizon" className="nav-link" id="nav-link-horizon">Horizon OS</a>
          <a href="#camera" className="nav-link" id="nav-link-camera">Optics</a>
          <a href="#silicon" className="nav-link" id="nav-link-silicon">Astra N1</a>
          <a href="#battery" className="nav-link" id="nav-link-battery">CryoCharge</a>
          <a href="#configurator" className="nav-link" id="nav-link-configurator">Pre-Order</a>
          <a href="#specs" className="nav-link" id="nav-link-specs">Specs</a>
        </nav>

        {/* Action Button & Price */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ textAlign: 'right', display: 'none' }} className="price-tag">
            <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>From $41.62/mo or</div>
            <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#f8fafc' }}>$999 USD</div>
          </div>

          <a
            href="#configurator"
            id="nav-preorder-cta"
            className="btn-primary"
            style={{
              padding: '8px 20px',
              fontSize: '0.85rem',
              borderRadius: '8px',
            }}
          >
            Pre-Order Now
          </a>

          {/* Hamburger */}
          <button
            id="phone-nav-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: '#ffffff', display: 'flex', padding: '6px' }}
            aria-label="Toggle menu"
            className="mobile-btn"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          style={{
            background: 'rgba(6, 8, 19, 0.98)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '18px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
          }}
        >
          <a href="#overview" onClick={() => setMobileOpen(false)} style={{ color: '#e2e8f0', fontSize: '0.95rem' }}>Overview</a>
          <a href="#horizon" onClick={() => setMobileOpen(false)} style={{ color: '#e2e8f0', fontSize: '0.95rem' }}>Horizon OS</a>
          <a href="#camera" onClick={() => setMobileOpen(false)} style={{ color: '#e2e8f0', fontSize: '0.95rem' }}>Optics System</a>
          <a href="#silicon" onClick={() => setMobileOpen(false)} style={{ color: '#e2e8f0', fontSize: '0.95rem' }}>Astra N1 Silicon</a>
          <a href="#battery" onClick={() => setMobileOpen(false)} style={{ color: '#e2e8f0', fontSize: '0.95rem' }}>CryoCharge Battery</a>
          <a href="#configurator" onClick={() => setMobileOpen(false)} style={{ color: '#00f0ff', fontSize: '0.95rem', fontWeight: 600 }}>Pre-Order Configurator</a>
          <a href="#specs" onClick={() => setMobileOpen(false)} style={{ color: '#e2e8f0', fontSize: '0.95rem' }}>Technical Specs</a>
        </div>
      )}

      <style jsx>{`
        .nav-link {
          color: #94a3b8;
          font-size: 0.88rem;
          font-weight: 500;
          transition: color 0.2s ease;
        }
        .nav-link:hover {
          color: #00f0ff;
        }
        @media (min-width: 840px) {
          .desktop-menu {
            display: flex !important;
          }
          .price-tag {
            display: block !important;
          }
          .mobile-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
