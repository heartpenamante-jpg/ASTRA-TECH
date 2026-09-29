'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [activeLayer, setActiveLayer] = useState<'neural' | 'quantum' | 'edge'>('neural');

  return (
    <section
      id="hero-section"
      style={{
        paddingTop: '140px',
        paddingBottom: '80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        {/* Top Announcement Pill */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
          <div className="badge" id="hero-badge">
            <span className="badge-dot" />
            <span>ASTRA 4.0 DISTRIBUTED ENGINE</span>
            <span style={{ color: '#64748b' }}>•</span>
            <span style={{ color: '#38bdf8' }}>Next-Gen Cloud Architecture</span>
          </div>
        </div>

        {/* Hero Title & Subtitle */}
        <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 40px' }}>
          <h1
            id="hero-title"
            style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)',
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: '-0.03em',
              marginBottom: '24px',
            }}
          >
            Engineering Autonomous <br />
            <span className="text-gradient">Intelligence & Edge Cloud</span>
          </h1>
          <p
            id="hero-subtitle"
            style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
              color: '#94a3b8',
              lineHeight: 1.6,
              maxWidth: '740px',
              margin: '0 auto 36px',
            }}
          >
            Astra Tech powers mission-critical enterprises with real-time neural inference,
            post-quantum cryptographic fabrics, and a self-orchestrating planetary network mesh.
          </p>

          {/* Action Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '16px',
              marginBottom: '48px',
            }}
          >
            <a href="#playground" id="hero-cta-primary" className="btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              <span>Explore Interactive Console</span>
            </a>
            <a href="#features" id="hero-cta-secondary" className="btn-secondary">
              <span>View Architecture Specs</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '16px',
              maxWidth: '840px',
              margin: '0 auto',
            }}
          >
            <div className="glass-panel" style={{ padding: '16px 20px', textAlign: 'center' }}>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#00f0ff' }}>3.2 ms</div>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Median Global Latency
              </div>
            </div>
            <div className="glass-panel" style={{ padding: '16px 20px', textAlign: 'center' }}>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#a78bfa' }}>99.999%</div>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                High-Availability SLA
              </div>
            </div>
            <div className="glass-panel" style={{ padding: '16px 20px', textAlign: 'center' }}>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#34d399' }}>350+</div>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Worldwide Edge PoPs
              </div>
            </div>
            <div className="glass-panel" style={{ padding: '16px 20px', textAlign: 'center' }}>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#f43f5e' }}>512-bit</div>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Quantum Cipher Mesh
              </div>
            </div>
          </div>
        </div>

        {/* Visual Showcase Card with Generated Asset */}
        <div
          id="hero-showcase"
          className="glass-panel floating-element"
          style={{
            maxWidth: '1040px',
            margin: '0 auto',
            padding: '12px',
            borderRadius: '24px',
            border: '1px solid rgba(0, 240, 255, 0.25)',
            boxShadow: '0 20px 60px -10px rgba(0, 240, 255, 0.15)',
            position: 'relative',
          }}
        >
          {/* Top Bar with Interactive Layer Selector */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px 16px 14px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              marginBottom: '12px',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#eab308' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e' }} />
              <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontFamily: 'var(--font-mono)', marginLeft: '10px' }}>
                astra://neural-matrix-v4.stream
              </span>
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                id="layer-neural-btn"
                onClick={() => setActiveLayer('neural')}
                style={{
                  padding: '4px 12px',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  backgroundColor: activeLayer === 'neural' ? 'rgba(0, 240, 255, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                  color: activeLayer === 'neural' ? '#00f0ff' : '#94a3b8',
                  border: activeLayer === 'neural' ? '1px solid #00f0ff' : '1px solid transparent',
                  transition: 'all 0.2s',
                }}
              >
                Neural Mesh
              </button>
              <button
                id="layer-quantum-btn"
                onClick={() => setActiveLayer('quantum')}
                style={{
                  padding: '4px 12px',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  backgroundColor: activeLayer === 'quantum' ? 'rgba(167, 139, 250, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                  color: activeLayer === 'quantum' ? '#c4b5fd' : '#94a3b8',
                  border: activeLayer === 'quantum' ? '1px solid #a78bfa' : '1px solid transparent',
                  transition: 'all 0.2s',
                }}
              >
                Quantum Cipher
              </button>
              <button
                id="layer-edge-btn"
                onClick={() => setActiveLayer('edge')}
                style={{
                  padding: '4px 12px',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  backgroundColor: activeLayer === 'edge' ? 'rgba(52, 211, 153, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                  color: activeLayer === 'edge' ? '#6ee7b7' : '#94a3b8',
                  border: activeLayer === 'edge' ? '1px solid #34d399' : '1px solid transparent',
                  transition: 'all 0.2s',
                }}
              >
                Edge Topology
              </button>
            </div>
          </div>

          {/* Graphic Showcase Container */}
          <div
            style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              aspectRatio: '16/9',
              width: '100%',
              backgroundColor: '#050711',
            }}
          >
            <Image
              src="/astra_hero.jpg"
              alt="Astra Tech Quantum Neural Mesh Visual"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />

            {/* Dynamic Status Overlay HUD */}
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                right: '16px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '12px',
                background: 'rgba(6, 8, 19, 0.75)',
                backdropFilter: 'blur(12px)',
                padding: '12px 20px',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <div>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  ACTIVE PROTOCOL
                </div>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00f0ff', boxShadow: '0 0 10px #00f0ff' }} />
                  {activeLayer === 'neural' && 'Adaptive Neural Matrix v4.2'}
                  {activeLayer === 'quantum' && 'Kyber-1024 Lattice Encryption'}
                  {activeLayer === 'edge' && 'Zero-Copy Anycast Routing'}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px' }}>
                <div>
                  <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>INSPECTION RATE</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#38bdf8', fontFamily: 'var(--font-mono)' }}>
                    4.94 M packets/s
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>INTEGRITY</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#34d399', fontFamily: 'var(--font-mono)' }}>
                    100.0% VERIFIED
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
