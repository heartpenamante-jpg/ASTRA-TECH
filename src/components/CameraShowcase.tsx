'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface LensMode {
  zoom: string;
  mm: string;
  name: string;
  aperture: string;
  sensor: string;
  desc: string;
}

export default function CameraShowcase() {
  const lenses: LensMode[] = [
    {
      zoom: '0.5x',
      mm: '13mm',
      name: '50MP Ultra-Wide & Macro',
      aperture: 'f/2.2',
      sensor: '1/2.0" CMOS',
      desc: '122° panoramic field of view with 2cm extreme macro autofocus and anti-distortion algorithmic engine.',
    },
    {
      zoom: '1x',
      mm: '24mm',
      name: '200MP Quantum Optic Primary',
      aperture: 'f/1.4',
      sensor: '1/1.12" Ultra-Large',
      desc: 'Massive 1/1.12" light collector with 16-in-1 Tetra²Pixel binning, 2nd Gen Sensor-Shift OIS, and 8K/60fps HDR video.',
    },
    {
      zoom: '2x',
      mm: '48mm',
      name: '2x In-Sensor Lossless Crop',
      aperture: 'f/1.4',
      sensor: '50MP Pure Crop',
      desc: 'Uses the central 50 million pixels of the 200MP sensor for pristine portrait bokeh without digital interpolation.',
    },
    {
      zoom: '5x',
      mm: '120mm',
      name: '50MP Periscope Prism Optical',
      aperture: 'f/2.8',
      sensor: 'Tetra-Prism Folded Optic',
      desc: 'Light bounces 4 times through an anti-reflective sapphire prism, delivering native 5x optical telephoto clarity.',
    },
    {
      zoom: '10x',
      mm: '240mm',
      name: '10x Native Optical Periscope',
      aperture: 'f/2.8',
      sensor: 'Dual-Axis OIS Telephoto',
      desc: 'True 10x optical zoom with dual-axis optical image stabilization for pinpoint sharpness on distant wildlife and architecture.',
    },
    {
      zoom: '100x',
      mm: '2400mm',
      name: '100x Neural Space Zoom',
      aperture: 'f/2.8 + AI',
      sensor: 'Multi-Frame Neural Stacking',
      desc: 'Astra N1 Neural Silicon stacks 30 RAW frames in real time with generative detail enhancement to capture the craters of the moon.',
    },
  ];

  const [activeLens, setActiveLens] = useState<LensMode>(lenses[1]);

  return (
    <section id="camera" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="container">
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="badge" style={{ marginBottom: '14px' }}>
            <span className="badge-dot" style={{ background: '#a78bfa' }} />
            <span>STUDIO-GRADE OPTICS SYSTEM</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 900, marginBottom: '16px' }}>
            200MP Quantum Periscope System.
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '680px', margin: '0 auto', fontSize: '1.1rem' }}>
            Seven pro lenses in your pocket. Co-engineered with precision aerospace optics and
            coated with anti-reflective sapphire crystal for unmatched low-light dynamic range.
          </p>
        </div>

        {/* Main Optics Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '36px',
            alignItems: 'center',
            maxWidth: '1100px',
            margin: '0 auto',
          }}
        >
          {/* Left: Camera Macro Visual */}
          <div
            className="glass-panel"
            style={{
              padding: '16px',
              borderRadius: '24px',
              border: '1px solid rgba(167, 139, 250, 0.3)',
              boxShadow: '0 20px 60px -10px rgba(167, 139, 250, 0.25)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '4/3',
                borderRadius: '16px',
                overflow: 'hidden',
              }}
            >
              <Image
                src="/phone_camera.jpg"
                alt="Astra Phone 200MP Triple Periscope Camera Array Macro"
                fill
                style={{ objectFit: 'cover' }}
              />

              {/* Floating Camera Spec Badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  background: 'rgba(6, 8, 19, 0.85)',
                  backdropFilter: 'blur(12px)',
                  padding: '10px 16px',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <div style={{ fontSize: '0.72rem', color: '#c4b5fd', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  SAPPHIRE CRYSTAL COATING
                </div>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#ffffff' }}>
                  Anti-Reflective 7-Layer Nano Coating
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Focal Length & Specs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Focal Length Buttons */}
            <div>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
                Select Optical Focal Length:
              </div>
              <div
                style={{
                  display: 'flex',
                  gap: '10px',
                  flexWrap: 'wrap',
                }}
              >
                {lenses.map(l => (
                  <button
                    key={l.zoom}
                    id={`lens-btn-${l.zoom}`}
                    onClick={() => setActiveLens(l)}
                    style={{
                      padding: '10px 18px',
                      borderRadius: '12px',
                      fontSize: '0.9rem',
                      fontWeight: 700,
                      backgroundColor: activeLens.zoom === l.zoom ? 'rgba(0, 240, 255, 0.18)' : 'rgba(255, 255, 255, 0.04)',
                      color: activeLens.zoom === l.zoom ? '#00f0ff' : '#94a3b8',
                      border: activeLens.zoom === l.zoom ? '1px solid #00f0ff' : '1px solid rgba(255, 255, 255, 0.08)',
                      boxShadow: activeLens.zoom === l.zoom ? '0 0 15px rgba(0, 240, 255, 0.3)' : 'none',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                  >
                    <div>{l.zoom}</div>
                    <div style={{ fontSize: '0.68rem', opacity: 0.8 }}>{l.mm}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Lens Card */}
            <div
              className="glass-panel"
              style={{
                padding: '24px',
                borderRadius: '18px',
                border: '1px solid rgba(0, 240, 255, 0.25)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#00f0ff', letterSpacing: '0.1em' }}>
                  ACTIVE SENSOR SPECIFICATION
                </span>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#cbd5e1', fontFamily: 'var(--font-mono)' }}>
                  {activeLens.mm} • {activeLens.aperture}
                </span>
              </div>

              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', marginBottom: '10px' }}>
                {activeLens.name}
              </h3>

              <p style={{ fontSize: '0.95rem', color: '#94a3b8', lineHeight: '1.6', marginBottom: '20px' }}>
                {activeLens.desc}
              </p>

              {/* Sensor details grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '16px' }}>
                <div>
                  <div style={{ fontSize: '0.72rem', color: '#64748b', textTransform: 'uppercase' }}>APERTURE / OIS</div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#f8fafc' }}>{activeLens.aperture} (Sensor-Shift)</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: '#64748b', textTransform: 'uppercase' }}>HARDWARE SENSOR</div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#38bdf8' }}>{activeLens.sensor}</div>
                </div>
              </div>
            </div>

            {/* Video capability note */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 18px', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <span style={{ fontSize: '1.2rem', color: '#f43f5e' }}>⏺</span>
              <div style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>
                <strong>ProRes & CinemaHDR:</strong> Record up to <strong>8K 60fps</strong> in 10-bit Dolby Vision directly to external SSD via USB-C 3.2 Gen 2 (10Gbps).
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
