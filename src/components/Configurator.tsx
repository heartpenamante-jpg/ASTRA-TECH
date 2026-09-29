'use client';

import React, { useState } from 'react';

export default function Configurator() {
  const [model, setModel] = useState<'standard' | 'ultra'>('ultra');
  const [color, setColor] = useState<'obsidian' | 'silver' | 'cyan' | 'amber'>('obsidian');
  const [storage, setStorage] = useState<'256' | '512' | '1024'>('256');
  const [hasTradeIn, setHasTradeIn] = useState(false);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [orderId, setOrderId] = useState('');

  // Calculate pricing
  const basePrice = model === 'ultra' ? 999 : 799;
  const storageAddon = storage === '1024' ? 350 : storage === '512' ? 150 : 0;
  const tradeInDiscount = hasTradeIn ? 450 : 0;
  const finalPrice = basePrice + storageAddon - tradeInDiscount;
  const monthlyPrice = (finalPrice / 24).toFixed(2);

  const colors = [
    { id: 'obsidian', name: 'Space Obsidian', hex: '#181b26', border: '#22d3ee' },
    { id: 'silver', name: 'Titanium Natural', hex: '#94a3b8', border: '#c4b5fd' },
    { id: 'cyan', name: 'Quantum Cyan', hex: '#06b6d4', border: '#00f0ff' },
    { id: 'amber', name: 'Solar Amber', hex: '#f59e0b', border: '#fbbf24' },
  ];

  const handlePreOrder = () => {
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    setOrderId(`AST-${randomNum}-US`);
    setOrderModalOpen(true);
  };

  return (
    <section id="configurator" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div className="badge" style={{ marginBottom: '14px' }}>
            <span className="badge-dot" style={{ background: '#00f0ff' }} />
            <span>CUSTOMIZE & PRE-ORDER</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 900, marginBottom: '16px' }}>
            Choose Your Astra Phone.
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '640px', margin: '0 auto', fontSize: '1.1rem' }}>
            Free express shipping worldwide. 30-day money-back guarantee with complimentary titanium case.
          </p>
        </div>

        {/* Configurator Box */}
        <div
          className="glass-panel"
          style={{
            maxWidth: '940px',
            margin: '0 auto',
            padding: '40px',
            borderRadius: '24px',
            border: '1px solid rgba(0, 240, 255, 0.25)',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '36px' }}>
            {/* Left Config Controls */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {/* Step 1: Model */}
              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f8fafc', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px', display: 'block' }}>
                  1. Select Model
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <button
                    id="model-ultra-btn"
                    onClick={() => setModel('ultra')}
                    style={{
                      padding: '16px',
                      borderRadius: '14px',
                      textAlign: 'left',
                      background: model === 'ultra' ? 'rgba(0, 240, 255, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                      border: model === 'ultra' ? '2px solid #00f0ff' : '1px solid rgba(255, 255, 255, 0.1)',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                  >
                    <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#ffffff' }}>Astra Phone Ultra</div>
                    <div style={{ fontSize: '0.8rem', color: '#38bdf8' }}>6.8" Screen • 10x Periscope</div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#94a3b8', marginTop: '6px' }}>From $999</div>
                  </button>

                  <button
                    id="model-standard-btn"
                    onClick={() => setModel('standard')}
                    style={{
                      padding: '16px',
                      borderRadius: '14px',
                      textAlign: 'left',
                      background: model === 'standard' ? 'rgba(0, 240, 255, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                      border: model === 'standard' ? '2px solid #00f0ff' : '1px solid rgba(255, 255, 255, 0.1)',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                  >
                    <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#ffffff' }}>Astra Phone</div>
                    <div style={{ fontSize: '0.8rem', color: '#38bdf8' }}>6.2" Screen • Compact Dual</div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#94a3b8', marginTop: '6px' }}>From $799</div>
                  </button>
                </div>
              </div>

              {/* Step 2: Color Finish */}
              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f8fafc', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px', display: 'block' }}>
                  2. Select Titanium Finish
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
                  {colors.map(c => (
                    <button
                      key={c.id}
                      id={`config-color-${c.id}`}
                      onClick={() => setColor(c.id as any)}
                      style={{
                        padding: '12px 8px',
                        borderRadius: '12px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '8px',
                        background: color === c.id ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.03)',
                        border: color === c.id ? `2px solid ${c.border}` : '1px solid rgba(255, 255, 255, 0.08)',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                      }}
                    >
                      <span
                        style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          backgroundColor: c.hex,
                          border: '1px solid rgba(255, 255, 255, 0.3)',
                        }}
                      />
                      <span style={{ fontSize: '0.72rem', fontWeight: 600, color: '#cbd5e1', textAlign: 'center' }}>
                        {c.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Storage */}
              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f8fafc', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px', display: 'block' }}>
                  3. Select High-Speed UFS 4.0 Storage
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                  {[
                    { id: '256', cap: '256 GB', extra: 'Included' },
                    { id: '512', cap: '512 GB', extra: '+$150' },
                    { id: '1024', cap: '1 TB', extra: '+$350' },
                  ].map(s => (
                    <button
                      key={s.id}
                      id={`storage-btn-${s.id}`}
                      onClick={() => setStorage(s.id as any)}
                      style={{
                        padding: '14px 10px',
                        borderRadius: '12px',
                        textAlign: 'center',
                        background: storage === s.id ? 'rgba(0, 240, 255, 0.14)' : 'rgba(255, 255, 255, 0.03)',
                        border: storage === s.id ? '2px solid #00f0ff' : '1px solid rgba(255, 255, 255, 0.08)',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                      }}
                    >
                      <div style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff' }}>{s.cap}</div>
                      <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '2px' }}>{s.extra}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Trade-in checkbox */}
              <div
                onClick={() => setHasTradeIn(!hasTradeIn)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '14px 18px',
                  borderRadius: '14px',
                  background: hasTradeIn ? 'rgba(52, 211, 153, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                  border: hasTradeIn ? '1px solid #34d399' : '1px solid rgba(255, 255, 255, 0.08)',
                  cursor: 'pointer',
                }}
              >
                <input
                  type="checkbox"
                  checked={hasTradeIn}
                  onChange={() => {}}
                  style={{ width: '18px', height: '18px', accentColor: '#10b981', cursor: 'pointer' }}
                />
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ffffff' }}>
                    Trade in an eligible phone for instant $450 credit
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                    Send in your old device after your new Astra Phone arrives.
                  </div>
                </div>
              </div>
            </div>

            {/* Right Summary & Checkout Column */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '28px',
                borderRadius: '18px',
                background: 'rgba(0, 0, 0, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ffffff', marginBottom: '18px' }}>
                  Your Selected Configuration
                </h3>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem', color: '#cbd5e1' }}>
                  <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#94a3b8' }}>Device</span>
                    <span style={{ fontWeight: 700 }}>{model === 'ultra' ? 'Astra Phone Ultra (6.8")' : 'Astra Phone (6.2")'}</span>
                  </li>
                  <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#94a3b8' }}>Finish</span>
                    <span style={{ fontWeight: 700 }}>{colors.find(c => c.id === color)?.name}</span>
                  </li>
                  <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#94a3b8' }}>Storage</span>
                    <span style={{ fontWeight: 700 }}>{storage === '1024' ? '1 TB' : `${storage} GB`}</span>
                  </li>
                  {hasTradeIn && (
                    <li style={{ display: 'flex', justifyContent: 'space-between', color: '#34d399' }}>
                      <span>Instant Trade-In Credit</span>
                      <span style={{ fontWeight: 700 }}>-$450.00</span>
                    </li>
                  )}
                  <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#94a3b8' }}>Shipping</span>
                    <span style={{ fontWeight: 700, color: '#34d399' }}>FREE Worldwide Express</span>
                  </li>
                </ul>
              </div>

              {/* Pricing Box */}
              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '20px', marginTop: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
                  <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Total Due Now:</span>
                  <span style={{ fontSize: '2.4rem', fontWeight: 900, color: '#00f0ff', fontFamily: 'var(--font-mono)' }}>
                    ${finalPrice}
                  </span>
                </div>

                <div style={{ fontSize: '0.85rem', color: '#94a3b8', textAlign: 'right', marginBottom: '20px' }}>
                  Or <strong>${monthlyPrice}/mo</strong> for 24 months with 0% APR
                </div>

                <button
                  id="checkout-preorder-btn"
                  onClick={handlePreOrder}
                  className="btn-primary"
                  style={{ width: '100%', fontSize: '1.05rem', padding: '16px' }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                  <span>Pre-Order Astra Phone</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Simulated Order Confirmation Modal */}
        {orderModalOpen && (
          <div
            id="order-modal"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.85)',
              backdropFilter: 'blur(16px)',
              zIndex: 200,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
            }}
          >
            <div
              className="glass-panel"
              style={{
                maxWidth: '520px',
                width: '100%',
                padding: '36px',
                borderRadius: '24px',
                border: '1px solid rgba(0, 240, 255, 0.4)',
                boxShadow: '0 25px 80px rgba(0, 240, 255, 0.3)',
                textAlign: 'center',
                position: 'relative',
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  boxShadow: '0 0 25px rgba(16, 185, 129, 0.5)',
                }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>

              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '10px' }}>
                Pre-Order Confirmed!
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '24px' }}>
                Thank you for reserving your <strong>{model === 'ultra' ? 'Astra Phone Ultra' : 'Astra Phone'}</strong>.
                Your titanium device has been allocated from Batch 01.
              </p>

              <div
                style={{
                  padding: '16px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  marginBottom: '24px',
                  textAlign: 'left',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '8px' }}>
                  <span style={{ color: '#94a3b8' }}>Reservation ID:</span>
                  <span style={{ color: '#00f0ff', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>{orderId}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '8px' }}>
                  <span style={{ color: '#94a3b8' }}>Est. Delivery:</span>
                  <span style={{ color: '#34d399', fontWeight: 700 }}>October 24 - 28</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                  <span style={{ color: '#94a3b8' }}>Total Amount:</span>
                  <span style={{ color: '#ffffff', fontWeight: 700 }}>${finalPrice} USD</span>
                </div>
              </div>

              <button
                id="close-order-modal-btn"
                onClick={() => setOrderModalOpen(false)}
                className="btn-primary"
                style={{ width: '100%', padding: '12px' }}
              >
                Return to Product Overview
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
