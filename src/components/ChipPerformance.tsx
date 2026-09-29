'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function ChipPerformance() {
  const [mode, setMode] = useState<'ludicrous' | 'balanced'>('ludicrous');

  return (
    <section id="silicon" style={{ padding: '90px 0', position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div className="badge" style={{ marginBottom: '14px' }}>
            <span className="badge-dot" style={{ background: '#38bdf8' }} />
            <span>CUSTOM SILICON ARCHITECTURE</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 900, marginBottom: '16px' }}>
            Astra N1 Neural Silicon.
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '680px', margin: '0 auto', fontSize: '1.1rem' }}>
            The world’s first mobile processor engineered specifically for native 7B parameter
            on-device language models, hardware ray tracing, and sub-watt standby intelligence.
          </p>
        </div>

        {/* Silicon Card Showcase */}
        <div
          className="glass-panel"
          style={{
            maxWidth: '1080px',
            margin: '0 auto 40px',
            padding: '36px',
            borderRadius: '24px',
            border: '1px solid rgba(0, 240, 255, 0.25)',
            boxShadow: '0 20px 60px -15px rgba(0, 240, 255, 0.2)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '36px',
              alignItems: 'center',
            }}
          >
            {/* Silicon Die Visual */}
            <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', aspectRatio: '1/1', background: '#050714' }}>
              <Image
                src="/phone_chip.jpg"
                alt="Astra N1 Neural Silicon 3nm Microchip"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  background: 'rgba(6, 8, 19, 0.85)',
                  backdropFilter: 'blur(10px)',
                  padding: '8px 14px',
                  borderRadius: '10px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: '#38bdf8',
                }}
              >
                3NM ARCHITECTURE • 24B TRANSISTORS
              </div>
            </div>

            {/* Performance Stats & Interactive Benchmark */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#a78bfa', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  CORE ARCHITECTURE
                </span>

                {/* Mode Selector */}
                <div style={{ display: 'flex', gap: '6px', background: 'rgba(255, 255, 255, 0.05)', padding: '4px', borderRadius: '8px' }}>
                  <button
                    id="chip-mode-ludicrous"
                    onClick={() => setMode('ludicrous')}
                    style={{
                      padding: '4px 10px',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      backgroundColor: mode === 'ludicrous' ? 'rgba(0, 240, 255, 0.2)' : 'transparent',
                      color: mode === 'ludicrous' ? '#00f0ff' : '#94a3b8',
                      cursor: 'pointer',
                    }}
                  >
                    Ludicrous 4.3GHz
                  </button>
                  <button
                    id="chip-mode-balanced"
                    onClick={() => setMode('balanced')}
                    style={{
                      padding: '4px 10px',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      backgroundColor: mode === 'balanced' ? 'rgba(52, 211, 153, 0.2)' : 'transparent',
                      color: mode === 'balanced' ? '#34d399' : '#94a3b8',
                      cursor: 'pointer',
                    }}
                  >
                    Cryo Balanced
                  </button>
                </div>
              </div>

              <h3 style={{ fontSize: '1.7rem', fontWeight: 800, color: '#ffffff', marginBottom: '14px' }}>
                48-Core Neural Engine with 65 TOPS
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '28px' }}>
                Run local generative AI models with zero cloud roundtrip. From real-time camera semantic
                segmentation to live multi-language voice transcription.
              </p>

              {/* Benchmarks Comparison Bars */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {/* Metric 1 */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '6px' }}>
                    <span style={{ fontWeight: 600, color: '#f8fafc' }}>On-Device AI Inference Speed</span>
                    <span style={{ fontWeight: 700, color: '#00f0ff', fontFamily: 'var(--font-mono)' }}>
                      {mode === 'ludicrous' ? '84 tokens/sec' : '58 tokens/sec'}
                    </span>
                  </div>
                  <div style={{ height: '8px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div
                      style={{
                        height: '100%',
                        width: mode === 'ludicrous' ? '96%' : '75%',
                        background: 'linear-gradient(90deg, #00f0ff 0%, #8b5cf6 100%)',
                        borderRadius: '4px',
                        transition: 'width 0.4s ease',
                      }}
                    />
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#64748b', marginTop: '4px' }}>
                    +42% faster than nearest flagship competitor
                  </div>
                </div>

                {/* Metric 2 */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '6px' }}>
                    <span style={{ fontWeight: 600, color: '#f8fafc' }}>Hardware Ray Tracing (Unreal Engine 5)</span>
                    <span style={{ fontWeight: 700, color: '#a78bfa', fontFamily: 'var(--font-mono)' }}>
                      {mode === 'ludicrous' ? '120 FPS' : '90 FPS'}
                    </span>
                  </div>
                  <div style={{ height: '8px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div
                      style={{
                        height: '100%',
                        width: mode === 'ludicrous' ? '100%' : '78%',
                        background: 'linear-gradient(90deg, #a78bfa 0%, #ec4899 100%)',
                        borderRadius: '4px',
                        transition: 'width 0.4s ease',
                      }}
                    />
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#64748b', marginTop: '4px' }}>
                    Console-tier reflections and global illumination in real time
                  </div>
                </div>

                {/* Metric 3 */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '6px' }}>
                    <span style={{ fontWeight: 600, color: '#f8fafc' }}>Thermal Dissipation Efficiency</span>
                    <span style={{ fontWeight: 700, color: '#34d399', fontFamily: 'var(--font-mono)' }}>
                      {mode === 'ludicrous' ? '29.4°C Peak' : '26.8°C Cool'}
                    </span>
                  </div>
                  <div style={{ height: '8px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div
                      style={{
                        height: '100%',
                        width: '88%',
                        background: 'linear-gradient(90deg, #34d399 0%, #06b6d4 100%)',
                        borderRadius: '4px',
                      }}
                    />
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
