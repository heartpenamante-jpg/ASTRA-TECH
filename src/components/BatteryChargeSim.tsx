'use client';

import React, { useState } from 'react';

export default function BatteryChargeSim() {
  const [batteryLevel, setBatteryLevel] = useState(45);

  // Calculate charging time remaining: 0% -> 18 mins, 100% -> 0 mins
  const minutesRemaining = Math.max(0, Math.round(((100 - batteryLevel) / 100) * 18));
  const estimatedHoursUse = ((batteryLevel / 100) * 48).toFixed(1);

  return (
    <section id="battery" style={{ padding: '90px 0', position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div className="badge" style={{ marginBottom: '14px' }}>
            <span className="badge-dot" style={{ background: '#34d399' }} />
            <span>CRYOCHARGE 120W & ALL-DAY POWER</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 900, marginBottom: '16px' }}>
            0 to 100% in 18 Minutes.
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '660px', margin: '0 auto', fontSize: '1.1rem' }}>
            A massive <strong>5,400 mAh Silicon-Carbon</strong> high-density battery backed by dual-cell
            cryogenic vapor chamber cooling. More power, zero throttling.
          </p>
        </div>

        {/* Battery Interactive Simulator Card */}
        <div
          className="glass-panel"
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            padding: '36px',
            borderRadius: '24px',
            border: '1px solid rgba(52, 211, 153, 0.3)',
            boxShadow: '0 20px 60px -15px rgba(52, 211, 153, 0.2)',
          }}
        >
          {/* Top Battery Graphic Indicator */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '32px' }}>
            {/* Battery Shell */}
            <div
              style={{
                width: '100%',
                maxWidth: '540px',
                height: '70px',
                borderRadius: '18px',
                border: '3px solid rgba(255, 255, 255, 0.2)',
                padding: '6px',
                position: 'relative',
                background: 'rgba(0, 0, 0, 0.6)',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {/* Battery Fill Bar */}
              <div
                style={{
                  height: '100%',
                  width: `${batteryLevel}%`,
                  borderRadius: '12px',
                  background: batteryLevel > 20
                    ? 'linear-gradient(90deg, #10b981 0%, #06b6d4 100%)'
                    : 'linear-gradient(90deg, #ef4444 0%, #f97316 100%)',
                  boxShadow: batteryLevel > 20 ? '0 0 25px rgba(16, 185, 129, 0.5)' : '0 0 25px rgba(239, 68, 68, 0.5)',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  paddingRight: '12px',
                }}
              >
                <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>
                  {batteryLevel}%
                </span>
              </div>
            </div>

            {/* Interactive Slider */}
            <div style={{ width: '100%', maxWidth: '540px', marginTop: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '8px' }}>
                <span>Simulate Battery State:</span>
                <span style={{ color: '#34d399', fontWeight: 700 }}>{batteryLevel}% Stored</span>
              </div>
              <input
                id="battery-slider"
                type="range"
                min="5"
                max="100"
                value={batteryLevel}
                onChange={e => setBatteryLevel(Number(e.target.value))}
                style={{
                  width: '100%',
                  accentColor: '#10b981',
                  cursor: 'pointer',
                }}
              />
            </div>
          </div>

          {/* Real-time stats calculation */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              paddingTop: '28px',
              textAlign: 'center',
            }}
          >
            <div>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '6px' }}>
                120W CHARGE TIME REMAINING
              </div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#34d399', fontFamily: 'var(--font-mono)' }}>
                {minutesRemaining === 0 ? 'Fully Charged' : `${minutesRemaining} min`}
              </div>
              <div style={{ fontSize: '0.72rem', color: '#64748b' }}>Dual-pump 120W GaN technology</div>
            </div>

            <div>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '6px' }}>
                TYPICAL SCREEN USAGE
              </div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#38bdf8', fontFamily: 'var(--font-mono)' }}>
                {estimatedHoursUse} <span style={{ fontSize: '1rem', color: '#94a3b8' }}>hrs</span>
              </div>
              <div style={{ fontSize: '0.72rem', color: '#64748b' }}>Up to 48 hours mixed continuous use</div>
            </div>

            <div>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '6px' }}>
                CHIP TEMPERATURE
              </div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#a78bfa', fontFamily: 'var(--font-mono)' }}>
                28.2°C
              </div>
              <div style={{ fontSize: '0.72rem', color: '#64748b' }}>CryoCool vapor chamber active</div>
            </div>
          </div>

          {/* Additional Features Pill Row */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '12px',
              marginTop: '28px',
            }}
          >
            <div style={{ padding: '8px 16px', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', fontSize: '0.82rem', color: '#cbd5e1' }}>
              ⚡ <strong>50W Qi2 Wireless</strong> Magnetic Snap
            </div>
            <div style={{ padding: '8px 16px', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', fontSize: '0.82rem', color: '#cbd5e1' }}>
              🔄 <strong>15W Reverse Wireless</strong> Earbud/Watch Sharing
            </div>
            <div style={{ padding: '8px 16px', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', fontSize: '0.82rem', color: '#cbd5e1' }}>
              🛡️ <strong>1,600 Cycles</strong> to 80% Health Guarantee
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
