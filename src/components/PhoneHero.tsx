'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface Finish {
  id: string;
  name: string;
  hex: string;
  glow: string;
  material: string;
  accent: string;
}

export default function PhoneHero() {
  const finishes: Finish[] = [
    {
      id: 'obsidian',
      name: 'Space Obsidian',
      hex: '#181b26',
      glow: 'rgba(34, 211, 238, 0.4)',
      material: 'PVD Coated Grade-5 Brushed Aerospace Titanium',
      accent: '#22d3ee',
    },
    {
      id: 'silver',
      name: 'Titanium Natural',
      hex: '#94a3b8',
      glow: 'rgba(167, 139, 250, 0.35)',
      material: 'Raw Satin-Finished Grade-5 Aerospace Titanium',
      accent: '#c4b5fd',
    },
    {
      id: 'cyan',
      name: 'Quantum Cyan',
      hex: '#06b6d4',
      glow: 'rgba(6, 182, 212, 0.55)',
      material: 'Anodized Micro-Crystalline Metallic Finish',
      accent: '#00f0ff',
    },
    {
      id: 'amber',
      name: 'Solar Amber',
      hex: '#f59e0b',
      glow: 'rgba(245, 158, 11, 0.45)',
      material: 'Vapor-Deposited Golden Titanium Matrix',
      accent: '#fbbf24',
    },
  ];

  const [currentFinish, setCurrentFinish] = useState<Finish>(finishes[0]);

  return (
    <section
      id="overview"
      style={{
        paddingTop: '130px',
        paddingBottom: '80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        {/* Release Eyebrow */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <div className="badge" id="phone-hero-pill">
            <span className="badge-dot" style={{ background: currentFinish.accent, boxShadow: `0 0 10px ${currentFinish.accent}` }} />
            <span>ASTRA PHONE ULTRA</span>
            <span style={{ color: '#64748b' }}>•</span>
            <span style={{ color: currentFinish.accent }}>Titanium Neural Flagship</span>
          </div>
        </div>

        {/* Headings */}
        <div style={{ textAlign: 'center', maxWidth: '960px', margin: '0 auto 36px' }}>
          <h1
            id="product-headline"
            style={{
              fontSize: 'clamp(2.8rem, 6vw, 4.8rem)',
              fontWeight: 900,
              lineHeight: 1.08,
              letterSpacing: '-0.035em',
              marginBottom: '20px',
            }}
          >
            Intelligence in <br />
            <span
              style={{
                background: currentFinish.id === 'obsidian'
                  ? 'linear-gradient(135deg, #f8fafc 0%, #38bdf8 50%, #818cf8 100%)'
                  : currentFinish.id === 'silver'
                  ? 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 50%, #94a3b8 100%)'
                  : currentFinish.id === 'cyan'
                  ? 'linear-gradient(135deg, #67e8f9 0%, #06b6d4 50%, #3b82f6 100%)'
                  : 'linear-gradient(135deg, #fef08a 0%, #f59e0b 50%, #ea580c 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                transition: 'all 0.5s ease',
              }}
            >
              Pure Titanium.
            </span>
          </h1>

          <p
            id="product-subhead"
            style={{
              fontSize: 'clamp(1.1rem, 2.2vw, 1.35rem)',
              color: '#94a3b8',
              lineHeight: 1.6,
              maxWidth: '720px',
              margin: '0 auto 36px',
            }}
          >
            Forged with grade-5 aerospace titanium, driven by the custom 3nm <strong>Astra N1 Neural Silicon</strong>,
            and engineered with a 200MP Triple Periscope optic array.
          </p>

          {/* Action CTAs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '40px',
            }}
          >
            <a href="#configurator" id="hero-preorder-button" className="btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              <span>Pre-Order from $999</span>
            </a>

            <a href="#camera" id="hero-learn-more" className="btn-secondary">
              <span>Explore 200MP Camera</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>

          {/* Color Switcher Bar */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '16px',
              padding: '10px 22px',
              borderRadius: '9999px',
              background: 'rgba(15, 23, 42, 0.75)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
            }}
          >
            <span style={{ fontSize: '0.82rem', color: '#94a3b8', fontWeight: 600 }}>Finish:</span>
            <div style={{ display: 'flex', gap: '12px' }}>
              {finishes.map(f => (
                <button
                  key={f.id}
                  id={`finish-btn-${f.id}`}
                  onClick={() => setCurrentFinish(f)}
                  title={f.name}
                  style={{
                    width: '26px',
                    height: '26px',
                    borderRadius: '50%',
                    backgroundColor: f.hex,
                    border: currentFinish.id === f.id ? `2px solid ${f.accent}` : '2px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: currentFinish.id === f.id ? `0 0 14px ${f.glow}` : 'none',
                    transform: currentFinish.id === f.id ? 'scale(1.2)' : 'scale(1)',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                    cursor: 'pointer',
                  }}
                  aria-label={f.name}
                />
              ))}
            </div>
            <span style={{ fontSize: '0.84rem', color: '#ffffff', fontWeight: 700, minWidth: '120px', textAlign: 'left' }}>
              {currentFinish.name}
            </span>
          </div>

          <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '10px' }}>
            {currentFinish.material}
          </div>
        </div>

        {/* Hero Visual Display with Dynamic Ambient Aura */}
        <div
          id="hero-phone-stage"
          style={{
            position: 'relative',
            maxWidth: '1080px',
            margin: '0 auto',
            borderRadius: '28px',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: `0 30px 80px -15px ${currentFinish.glow}`,
            transition: 'box-shadow 0.6s ease',
            backgroundColor: '#050711',
          }}
        >
          {/* Top Stage Bar */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '14px 20px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              background: 'rgba(6, 8, 19, 0.85)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: currentFinish.accent, boxShadow: `0 0 8px ${currentFinish.accent}` }} />
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#f8fafc', letterSpacing: '0.05em' }}>
                ASTRA PHONE ULTRA • {currentFinish.name.toUpperCase()}
              </span>
            </div>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
              AEROSPACE GRADE-5 TITANIUM CHASSIS
            </div>
          </div>

          {/* Main Visual Image */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '16/9',
            }}
          >
            <Image
              src="/phone_hero.jpg"
              alt="Astra Phone Ultra Flagship Titanium Smartphone"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />

            {/* Floating Highlight Badges */}
            <div
              className="glass-panel"
              style={{
                position: 'absolute',
                top: '24px',
                left: '24px',
                padding: '12px 18px',
                borderRadius: '14px',
                border: '1px solid rgba(255, 255, 255, 0.15)',
              }}
            >
              <div style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase' }}>PROMOTION AMOLED</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#ffffff' }}>6.8" 1-120Hz LTPO</div>
              <div style={{ fontSize: '0.72rem', color: '#38bdf8' }}>3,500 nits Outdoor Peak</div>
            </div>

            <div
              className="glass-panel"
              style={{
                position: 'absolute',
                bottom: '24px',
                right: '24px',
                padding: '12px 18px',
                borderRadius: '14px',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                textAlign: 'right',
              }}
            >
              <div style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase' }}>TRIPLE OPTICS</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#ffffff' }}>200MP + 10x Periscope</div>
              <div style={{ fontSize: '0.72rem', color: '#a78bfa' }}>Sapphire Crystal Anti-Reflective</div>
            </div>
          </div>
        </div>

        {/* 4 Quick Value Pillars */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '18px',
            maxWidth: '1080px',
            margin: '36px auto 0',
          }}
        >
          <div className="glass-panel" style={{ padding: '22px', textAlign: 'center' }}>
            <div style={{ fontSize: '1.9rem', fontWeight: 800, color: '#00f0ff' }}>3nm</div>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', marginTop: '4px' }}>Astra N1 Silicon</div>
            <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '4px' }}>48-Core Neural Engine with on-device LLM</div>
          </div>
          <div className="glass-panel" style={{ padding: '22px', textAlign: 'center' }}>
            <div style={{ fontSize: '1.9rem', fontWeight: 800, color: '#a78bfa' }}>200 MP</div>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', marginTop: '4px' }}>Quantum Optic System</div>
            <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '4px' }}>16-in-1 pixel binning with 10x optical zoom</div>
          </div>
          <div className="glass-panel" style={{ padding: '22px', textAlign: 'center' }}>
            <div style={{ fontSize: '1.9rem', fontWeight: 800, color: '#34d399' }}>18 min</div>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', marginTop: '4px' }}>120W CryoCharge</div>
            <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '4px' }}>0 to 100% full battery in liquid vapor chamber</div>
          </div>
          <div className="glass-panel" style={{ padding: '22px', textAlign: 'center' }}>
            <div style={{ fontSize: '1.9rem', fontWeight: 800, color: '#fbbf24' }}>IP68 + 6m</div>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', marginTop: '4px' }}>Ceramic Sapphire</div>
            <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '4px' }}>4x tougher drop protection and water immersion</div>
          </div>
        </div>
      </div>
    </section>
  );
}
