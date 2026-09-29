'use client';

import React, { useState } from 'react';

interface FeatureItem {
  id: string;
  tag: string;
  title: string;
  desc: string;
  iconSvg: React.ReactNode;
  specs: string[];
}

export default function CoreFeatures() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const features: FeatureItem[] = [
    {
      id: 'neural-mesh',
      tag: 'AI ACCELERATION',
      title: 'Distributed Neural Mesh',
      desc: 'Seamlessly partition transformer inference and embeddings across regional edge clusters with micro-batching and zero memory copy overhead.',
      iconSvg: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00f0ff" strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
      specs: ['FP8 & INT4 hardware quantization', 'Automatic tensor parallelization', 'Sub-8ms token time-to-first-byte'],
    },
    {
      id: 'quantum-safe',
      tag: 'POST-QUANTUM CIPHER',
      title: 'Quantum-Resilient Security',
      desc: 'Protect against forward decryption attacks with post-quantum cryptography powered by ML-KEM (Kyber) and ML-DSA standards.',
      iconSvg: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      specs: ['NIST FIPS 203/204 compliant', 'End-to-end hardware enclave isolation', 'Zero-knowledge verification proofs'],
    },
    {
      id: 'edge-runtime',
      tag: 'ANYCAST COMPUTE',
      title: 'Sub-Millisecond Edge Runtime',
      desc: 'Execute serverless WebAssembly and V8 isolates within 10 miles of 95% of the connected internet population.',
      iconSvg: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      specs: ['0.4ms cold start execution', '350+ worldwide points of presence', 'Automatic multi-region state replicate'],
    },
    {
      id: 'self-healing',
      tag: 'AUTONOMOUS RECOVERY',
      title: 'Self-Healing Fabric',
      desc: 'Automated consensus protocols instantly bypass network fiber cuts and hardware degradation with zero human intervention.',
      iconSvg: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      specs: ['Predictive anomaly detection', 'Zero-downtime rolling firmware upgrade', 'BGP route flapping prevention'],
    },
  ];

  return (
    <section id="features" style={{ padding: '90px 0', position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="badge" style={{ marginBottom: '14px' }}>
            <span className="badge-dot" style={{ background: '#a78bfa', boxShadow: '0 0 8px #a78bfa' }} />
            <span>ARCHITECTURAL FOUNDATION</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, marginBottom: '16px' }}>
            Built for Extreme Throughput & Resilience
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '640px', margin: '0 auto', fontSize: '1.05rem' }}>
            Designed from first principles to exceed the demands of planetary-scale AI services,
            fintech trading platforms, and mission-critical cloud infrastructure.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {features.map(f => {
            const isExpanded = expandedId === f.id;
            return (
              <div
                key={f.id}
                className="glass-panel"
                style={{
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '18px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px',
                    }}
                  >
                    {f.iconSvg}
                  </div>

                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      color: '#38bdf8',
                      textTransform: 'uppercase',
                    }}
                  >
                    {f.tag}
                  </span>

                  <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#f8fafc', margin: '8px 0 12px' }}>
                    {f.title}
                  </h3>

                  <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: '1.6', marginBottom: '20px' }}>
                    {f.desc}
                  </p>
                </div>

                {/* Expandable specs */}
                <div>
                  {isExpanded && (
                    <div
                      style={{
                        paddingTop: '16px',
                        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                        marginBottom: '16px',
                      }}
                    >
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '8px', textTransform: 'uppercase' }}>
                        Core Specifications:
                      </div>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        {f.specs.map((spec, i) => (
                          <li key={i} style={{ fontSize: '0.82rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ color: '#00f0ff', fontSize: '1rem' }}>✓</span> {spec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <button
                    id={`feature-expand-${f.id}`}
                    onClick={() => setExpandedId(isExpanded ? null : f.id)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: '#00f0ff',
                      cursor: 'pointer',
                    }}
                  >
                    <span>{isExpanded ? 'Hide Specifications' : 'Inspect Specifications'}</span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      style={{ transform: isExpanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
