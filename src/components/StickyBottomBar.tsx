'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function StickyBottomBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      id="sticky-purchase-bar"
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 90,
        width: 'calc(100% - 32px)',
        maxWidth: '820px',
        background: 'rgba(6, 8, 19, 0.92)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(0, 240, 255, 0.3)',
        boxShadow: '0 10px 40px rgba(0, 240, 255, 0.25)',
        borderRadius: '20px',
        padding: '12px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        animation: 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        gap: '16px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div style={{ position: 'relative', width: '38px', height: '38px', borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
          <Image src="/phone_hero.jpg" alt="Astra Phone" fill style={{ objectFit: 'cover' }} />
        </div>
        <div>
          <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Astra Phone Ultra</span>
            <span style={{ fontSize: '0.65rem', color: '#00f0ff', background: 'rgba(0, 240, 255, 0.15)', padding: '2px 6px', borderRadius: '4px' }}>
              TITANIUM
            </span>
          </div>
          <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
            From $41.62/mo or $999 USD • Free Shipping
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <a
          href="#configurator"
          id="sticky-preorder-cta"
          className="btn-primary"
          style={{
            padding: '10px 22px',
            fontSize: '0.85rem',
            borderRadius: '10px',
          }}
        >
          Pre-Order Now
        </a>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translate(-50%, 40px);
            opacity: 0;
          }
          to {
            transform: translate(-50%, 0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
