import React from 'react';

export default function PhoneFooter() {
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        background: 'rgba(4, 6, 15, 0.98)',
        padding: '70px 0 40px',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Footnotes disclaimer */}
        <div style={{ fontSize: '0.74rem', color: '#64748b', lineHeight: '1.7', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', paddingBottom: '30px', marginBottom: '40px' }}>
          <p style={{ marginBottom: '8px' }}>
            * Trade-in values may vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. Must be at least 18 years old to be eligible to trade in for credit.
          </p>
          <p style={{ marginBottom: '8px' }}>
            1. 3,500 nits outdoor peak brightness is achievable in high ambient sunlight conditions with auto-brightness enabled on HDR/high-luminance content.
          </p>
          <p style={{ marginBottom: '8px' }}>
            2. Astra N1 battery life claims are based on mixed-use profile under typical network conditions. Actual battery life depends on network environment, features used, and usage habits.
          </p>
          <p>
            3. 120W CryoCharge requires the included Astra GaN 120W power adapter and certified 6A USB-C dual-e-marker cable. Charges from 0 to 100% in approximately 18 minutes in controlled 25°C laboratory conditions.
          </p>
        </div>

        {/* Links Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '36px',
            marginBottom: '50px',
          }}
        >
          {/* Brand */}
          <div style={{ maxWidth: '280px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #00f0ff 0%, #8b5cf6 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5">
                  <rect x="5" y="2" width="14" height="20" rx="3" />
                  <line x1="12" y1="18" x2="12.01" y2="18" />
                </svg>
              </div>
              <span style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff' }}>
                ASTRA<span style={{ color: '#00f0ff' }}>PHONE</span>
              </span>
            </div>
            <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: '1.6', marginBottom: '16px' }}>
              Redefining mobile intelligence, precision optics, and aerospace materials for the next decade.
            </p>
            <div style={{ fontSize: '0.78rem', color: '#34d399', fontWeight: 600 }}>
              ✓ 100% Recycled Aerospace Titanium Frame
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f8fafc', marginBottom: '16px', textTransform: 'uppercase' }}>
              Astra Devices
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem', color: '#94a3b8' }}>
              <li><a href="#overview">Astra Phone Ultra (6.8")</a></li>
              <li><a href="#overview">Astra Phone (6.2")</a></li>
              <li><a href="#camera">Quantum 200MP Lens Kit</a></li>
              <li><a href="#battery">120W CryoCharge GaN Pack</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f8fafc', marginBottom: '16px', textTransform: 'uppercase' }}>
              Experience & OS
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem', color: '#94a3b8' }}>
              <li><a href="#horizon">Horizon OS 5 Preview</a></li>
              <li><a href="#horizon">Horizon Island Dynamics</a></li>
              <li><a href="#silicon">Astra N1 Neural Engine</a></li>
              <li><a href="#specs">Developer SDK & Neural APIs</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f8fafc', marginBottom: '16px', textTransform: 'uppercase' }}>
              Support & Store
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem', color: '#94a3b8' }}>
              <li><a href="#configurator">Pre-Order Status</a></li>
              <li><a href="#configurator">Trade-in Program</a></li>
              <li><a href="#configurator">Apple / Android Switcher Guide</a></li>
              <li><a href="#configurator">AstraCare+ Extended Warranty</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            paddingTop: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '14px',
            fontSize: '0.78rem',
            color: '#64748b',
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} Astra Tech Devices Inc. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span>Privacy Policy</span>
            <span>Sales & Refunds</span>
            <span>Legal Disclosures</span>
            <span>Site Map</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
