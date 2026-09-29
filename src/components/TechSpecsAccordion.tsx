'use client';

import React, { useState } from 'react';

interface SpecCategory {
  id: string;
  title: string;
  items: { label: string; value: string }[];
}

export default function TechSpecsAccordion() {
  const [openCategory, setOpenCategory] = useState<string | null>('display');

  const categories: SpecCategory[] = [
    {
      id: 'display',
      title: 'Display & Horizon Glass',
      items: [
        { label: 'Screen Size & Type', value: '6.8-inch ProMotion LTPO AMOLED (Micro-Curved Edge)' },
        { label: 'Adaptive Refresh Rate', value: '1Hz to 120Hz dynamic ProMotion refresh' },
        { label: 'Peak Brightness', value: '3,500 nits outdoor peak, 2,200 nits HBM' },
        { label: 'Resolution', value: '3120 x 1440 pixels at 505 ppi' },
        { label: 'Color Gamut & Contrast', value: '100% DCI-P3 wide color, 5,000,000:1 contrast ratio' },
        { label: 'Glass Protection', value: 'Ceramic Sapphire Crystal Shield (4x drop durability)' },
      ],
    },
    {
      id: 'silicon',
      title: 'Processor & AI Silicon',
      items: [
        { label: 'Chipset', value: 'Astra N1 Neural Silicon (3-nanometer TSMC FinFET)' },
        { label: 'CPU Cores', value: '8 Cores (2 Prime 4.3GHz + 6 High-Efficiency 2.8GHz)' },
        { label: 'GPU Graphics', value: '12-Core GPU with Hardware-Accelerated Ray Tracing' },
        { label: 'Neural Engine', value: '48-Core NPU delivering 65 TOPS on-device AI' },
        { label: 'System Memory', value: '16GB LPDDR5X Ultra-High-Speed Unified RAM' },
      ],
    },
    {
      id: 'camera',
      title: 'Pro Camera System',
      items: [
        { label: 'Main Wide Camera', value: '200MP, f/1.4, 24mm, 1/1.12" Sensor, 2nd Gen Sensor-Shift OIS' },
        { label: 'Periscope Telephoto', value: '50MP, f/2.8, 120mm-240mm, 10x Optical Zoom, 100x Space Zoom' },
        { label: 'Ultra-Wide & Macro', value: '50MP, f/2.2, 13mm, 122° FOV, 2cm extreme autofocus macro' },
        { label: 'Front TrueDepth', value: '32MP, f/1.9, Autofocus, 4K 60fps HDR video' },
        { label: 'Video Capabilities', value: '8K at 60fps, 4K at 120fps, ProRes RAW, 10-bit Dolby Vision HDR' },
        { label: 'LiDAR Scanner', value: 'Real-time 3D time-of-flight spatial mesh mapping' },
      ],
    },
    {
      id: 'battery',
      title: 'Power & CryoCharge',
      items: [
        { label: 'Battery Capacity', value: '5,400 mAh Silicon-Carbon High-Density Cell' },
        { label: 'Wired Fast Charging', value: '120W CryoCharge (0 to 100% in 18 minutes)' },
        { label: 'Wireless Charging', value: '50W Qi2 Magnetic Snap Wireless' },
        { label: 'Reverse Wireless', value: '15W PowerShare for earbuds and accessories' },
        { label: 'Cooling Architecture', value: 'CryoCool 3D Dual-Vapor Chamber + Graphene Sheet' },
      ],
    },
    {
      id: 'build',
      title: 'Dimensions & Durability',
      items: [
        { label: 'Chassis Material', value: 'Grade-5 Aerospace Titanium frame, textured matte glass back' },
        { label: 'Dimensions', value: '162.8 mm x 77.6 mm x 8.25 mm' },
        { label: 'Weight', value: '221 grams (7.8 ounces)' },
        { label: 'Ingress Protection', value: 'IP68 rating (maximum depth of 6 meters up to 30 minutes)' },
      ],
    },
    {
      id: 'connectivity',
      title: 'Cellular, Wireless & Satellite',
      items: [
        { label: 'Cellular', value: '5G Dual SIM (Nano-SIM and multi-eSIM) Sub-6 & mmWave' },
        { label: 'Wi-Fi & Bluetooth', value: 'Wi-Fi 7 (802.11be), Bluetooth 5.4 with LDAC / aptX Lossless' },
        { label: 'Emergency Satellite', value: 'Two-way satellite SOS messaging & global location ping' },
        { label: 'Ports', value: 'USB-C 3.2 Gen 2 (up to 10Gbps data, DisplayPort 4K out)' },
      ],
    },
  ];

  const toggle = (id: string) => {
    setOpenCategory(openCategory === id ? null : id);
  };

  return (
    <section id="specs" style={{ padding: '90px 0', position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div className="badge" style={{ marginBottom: '14px' }}>
            <span className="badge-dot" style={{ background: '#a78bfa' }} />
            <span>FULL TECHNICAL ARCHITECTURE</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 900, marginBottom: '16px' }}>
            Technical Specifications.
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '640px', margin: '0 auto', fontSize: '1.1rem' }}>
            Engineered without compromise. Every detail crafted to redefine mobile computing.
          </p>
        </div>

        <div style={{ maxWidth: '880px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {categories.map(cat => {
            const isOpen = openCategory === cat.id;
            return (
              <div
                key={cat.id}
                className="glass-panel"
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: isOpen ? '1px solid rgba(0, 240, 255, 0.3)' : '1px solid rgba(255, 255, 255, 0.08)',
                  transition: 'all 0.25s',
                }}
              >
                <button
                  id={`specs-toggle-${cat.id}`}
                  onClick={() => toggle(cat.id)}
                  style={{
                    width: '100%',
                    padding: '22px 28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    cursor: 'pointer',
                  }}
                >
                  <span style={{ fontSize: '1.15rem', fontWeight: 800, color: isOpen ? '#00f0ff' : '#ffffff' }}>
                    {cat.title}
                  </span>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isOpen ? '#00f0ff' : '#94a3b8',
                      transform: isOpen ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.25s ease',
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </button>

                {isOpen && (
                  <div style={{ padding: '0 28px 24px', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <dl style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', paddingTop: '18px' }}>
                      {cat.items.map((item, idx) => (
                        <div key={idx} style={{ padding: '12px', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '10px' }}>
                          <dt style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '4px' }}>
                            {item.label}
                          </dt>
                          <dd style={{ fontSize: '0.92rem', fontWeight: 700, color: '#f8fafc' }}>
                            {item.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
