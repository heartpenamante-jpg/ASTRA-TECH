'use client';

import React, { useState } from 'react';

type HorizonMode = 'call' | 'music' | 'flight' | 'ai' | 'charging';

export default function DynamicIslandPreview() {
  const [mode, setMode] = useState<HorizonMode>('ai');

  return (
    <section
      id="horizon"
      style={{
        padding: '90px 0',
        position: 'relative',
      }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="badge" style={{ marginBottom: '14px' }}>
            <span className="badge-dot" style={{ background: '#38bdf8' }} />
            <span>ASTRA HORIZON OS 5</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, marginBottom: '16px' }}>
            Meet the Horizon Island
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '640px', margin: '0 auto', fontSize: '1.05rem' }}>
            An intuitive, fluid software pill that expands and adapts to your live activities,
            from on-device AI translations to flight tracking and lossless spatial audio.
          </p>
        </div>

        {/* Interactive Phone Screen Mockup */}
        <div
          style={{
            maxWidth: '460px',
            margin: '0 auto',
            background: '#04060f',
            borderRadius: '46px',
            border: '8px solid #1e2538',
            boxShadow: '0 25px 70px -10px rgba(0, 240, 255, 0.25)',
            padding: '16px 20px 28px',
            position: 'relative',
          }}
        >
          {/* Top Speaker & Camera Notch Area */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            {/* The Horizon Island Pill */}
            <div
              id="horizon-island-pill"
              style={{
                background: '#000000',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '30px',
                padding: '10px 18px',
                minWidth: mode === 'ai' ? '320px' : mode === 'call' ? '300px' : mode === 'flight' ? '320px' : '260px',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: '0 8px 25px rgba(0,0,0,0.8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
              }}
            >
              {/* AI State */}
              {mode === 'ai' && (
                <>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #00f0ff 0%, #8b5cf6 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        animation: 'pulse-dot 1.5s infinite',
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="#ffffff">
                        <polygon points="12 2 15 8 22 9 17 14 18 21 12 17 6 21 7 14 2 9 9 8 12 2" />
                      </svg>
                    </div>
                    <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#f8fafc' }}>
                      Astra AI • Live Translate
                    </span>
                  </div>
                  <span style={{ fontSize: '0.72rem', color: '#38bdf8', fontFamily: 'var(--font-mono)' }}>
                    JP → EN (0.1s)
                  </span>
                </>
              )}

              {/* Incoming Call State */}
              {mode === 'call' && (
                <>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        background: '#334155',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: '0.75rem',
                        color: '#ffffff',
                      }}
                    >
                      SN
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#ffffff' }}>Satya Nadella</div>
                      <div style={{ fontSize: '0.68rem', color: '#94a3b8' }}>Incoming Call (0:12)</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ width: '26px', height: '26px', borderRadius: '50%', background: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="#ffffff"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm3.7 12.3-1.4 1.4L12 13.4l-2.3 2.3-1.4-1.4 2.3-2.3-2.3-2.3 1.4-1.4 2.3 2.3 2.3-2.3 1.4 1.4-2.3 2.3z"/></svg>
                    </span>
                    <span style={{ width: '26px', height: '26px', borderRadius: '50%', background: '#22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="#ffffff"><path d="M6.6 10.8a15.8 15.8 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.2c1.1.4 2.3.6 3.6.6a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1A19.9 19.9 0 0 1 2 4.1a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.2.2 2.4.6 3.6a1 1 0 0 1-.3 1z"/></svg>
                    </span>
                  </div>
                </>
              )}

              {/* Music Playback State */}
              {mode === 'music' && (
                <>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '22px', height: '22px', borderRadius: '6px', background: '#ec4899', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="#ffffff"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /></svg>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#f8fafc' }}>Interstellar Suite</div>
                      <div style={{ fontSize: '0.65rem', color: '#94a3b8' }}>Spatial Audio 24-bit/192kHz</div>
                    </div>
                  </div>
                  {/* Animated Waveform */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                    <span style={{ width: '3px', height: '14px', background: '#ec4899', borderRadius: '2px', animation: 'float 0.8s ease-in-out infinite' }} />
                    <span style={{ width: '3px', height: '8px', background: '#a855f7', borderRadius: '2px', animation: 'float 0.6s ease-in-out infinite alternate' }} />
                    <span style={{ width: '3px', height: '18px', background: '#38bdf8', borderRadius: '2px', animation: 'float 1s ease-in-out infinite' }} />
                  </div>
                </>
              )}

              {/* Live Flight Tracking State */}
              {mode === 'flight' && (
                <>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: '#38bdf8', fontSize: '0.9rem' }}>✈️</span>
                    <div>
                      <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#ffffff' }}>AST-402 to Tokyo</div>
                      <div style={{ fontSize: '0.65rem', color: '#34d399' }}>Gate B14 • Boarding in 22 min</div>
                    </div>
                  </div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#38bdf8', fontFamily: 'var(--font-mono)' }}>
                    ON TIME
                  </div>
                </>
              )}

              {/* 120W CryoCharge State */}
              {mode === 'charging' && (
                <>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: '#22c55e', fontSize: '1rem' }}>⚡</span>
                    <div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#ffffff' }}>120W CryoCharge</div>
                      <div style={{ fontSize: '0.65rem', color: '#94a3b8' }}>88% • 4 mins to 100%</div>
                    </div>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#22c55e', fontWeight: 800, fontFamily: 'var(--font-mono)' }}>
                    28.2°C COLD
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Simulated Lockscreen / Homescreen Elements */}
          <div style={{ textAlign: 'center', padding: '30px 10px 40px' }}>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              FRIDAY, OCTOBER 16
            </div>
            <div style={{ fontSize: '3.6rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1.1, margin: '6px 0' }}>
              09:41
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#38bdf8', background: 'rgba(56, 189, 248, 0.1)', padding: '4px 12px', borderRadius: '12px' }}>
              <span>☀️ 72°F</span>
              <span>San Francisco</span>
            </div>
          </div>

          {/* Quick interactive test buttons below phone */}
          <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '16px' }}>
            <div style={{ fontSize: '0.72rem', color: '#94a3b8', textAlign: 'center', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Test Interactive Horizon Island States:
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
              <button
                id="btn-island-ai"
                onClick={() => setMode('ai')}
                style={{
                  padding: '6px 8px',
                  borderRadius: '8px',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  backgroundColor: mode === 'ai' ? 'rgba(0, 240, 255, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                  color: mode === 'ai' ? '#00f0ff' : '#94a3b8',
                  border: mode === 'ai' ? '1px solid #00f0ff' : '1px solid transparent',
                  cursor: 'pointer',
                }}
              >
                🧠 AI Voice
              </button>
              <button
                id="btn-island-call"
                onClick={() => setMode('call')}
                style={{
                  padding: '6px 8px',
                  borderRadius: '8px',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  backgroundColor: mode === 'call' ? 'rgba(34, 197, 94, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                  color: mode === 'call' ? '#4ade80' : '#94a3b8',
                  border: mode === 'call' ? '1px solid #22c55e' : '1px solid transparent',
                  cursor: 'pointer',
                }}
              >
                📞 Phone Call
              </button>
              <button
                id="btn-island-music"
                onClick={() => setMode('music')}
                style={{
                  padding: '6px 8px',
                  borderRadius: '8px',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  backgroundColor: mode === 'music' ? 'rgba(236, 72, 153, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                  color: mode === 'music' ? '#f472b6' : '#94a3b8',
                  border: mode === 'music' ? '1px solid #ec4899' : '1px solid transparent',
                  cursor: 'pointer',
                }}
              >
                🎵 Spatial Audio
              </button>
              <button
                id="btn-island-flight"
                onClick={() => setMode('flight')}
                style={{
                  padding: '6px 8px',
                  borderRadius: '8px',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  backgroundColor: mode === 'flight' ? 'rgba(56, 189, 248, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                  color: mode === 'flight' ? '#38bdf8' : '#94a3b8',
                  border: mode === 'flight' ? '1px solid #38bdf8' : '1px solid transparent',
                  cursor: 'pointer',
                }}
              >
                ✈️ Live Flight
              </button>
              <button
                id="btn-island-charge"
                onClick={() => setMode('charging')}
                style={{
                  padding: '6px 8px',
                  borderRadius: '8px',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  backgroundColor: mode === 'charging' ? 'rgba(34, 197, 94, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                  color: mode === 'charging' ? '#4ade80' : '#94a3b8',
                  border: mode === 'charging' ? '1px solid #22c55e' : '1px solid transparent',
                  cursor: 'pointer',
                }}
              >
                ⚡ 120W Charge
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
