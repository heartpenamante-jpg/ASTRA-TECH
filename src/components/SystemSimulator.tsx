'use client';

import React, { useState, useEffect } from 'react';

interface Subsystem {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'standby';
  load: number;
}

export default function SystemSimulator() {
  const [throughput, setThroughput] = useState(4820);
  const [latency, setLatency] = useState(3.2);
  const [cacheHitRate, setCacheHitRate] = useState(99.4);
  const [isStressTesting, setIsStressTesting] = useState(false);
  const [logs, setLogs] = useState<string[]>([
    '[INIT] Astra Kernel v4.2 loaded across 350 nodes',
    '[SEC] Kyber-1024 quantum handshake established',
    '[ROUTING] Anycast mesh auto-balanced to nearest cluster',
    '[AI] Neural inference weights distributed to edge',
  ]);

  const [subsystems, setSubsystems] = useState<Subsystem[]>([
    { id: 'neural', name: 'Neural Co-Processor Engine', description: 'Real-time multi-modal inference acceleration', status: 'active', load: 42 },
    { id: 'quantum', name: 'Quantum-Safe Zero-Trust Mesh', description: 'Lattice-based encryption on all distributed tunnels', status: 'active', load: 28 },
    { id: 'edge-cache', name: 'Planetary Tier-0 Cache', description: 'Zero-latency memory state synchronization', status: 'active', load: 64 },
    { id: 'failover', name: 'Autonomous Self-Healing Daemon', description: 'Sub-second traffic rerouting and fault recovery', status: 'active', load: 15 },
  ]);

  // Subtle real-time heartbeat fluctuation
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isStressTesting) {
        setLatency(prev => +(3.2 + (Math.random() * 0.4 - 0.2)).toFixed(2));
        setThroughput(prev => Math.floor(4820 + (Math.random() * 120 - 60)));
      }
    }, 1800);
    return () => clearInterval(interval);
  }, [isStressTesting]);

  const toggleSubsystem = (id: string) => {
    setSubsystems(prev =>
      prev.map(sub => {
        if (sub.id === id) {
          const nextStatus = sub.status === 'active' ? 'standby' : 'active';
          const newLog = `[STATE] ${sub.name} switched to ${nextStatus.toUpperCase()}`;
          setLogs(l => [newLog, ...l.slice(0, 7)]);
          return { ...sub, status: nextStatus };
        }
        return sub;
      })
    );
  };

  const runBenchmark = () => {
    if (isStressTesting) return;
    setIsStressTesting(true);
    setLogs(l => ['[SIMULATION] Injecting 15,000,000 synthetic requests across all zones...', ...l.slice(0, 7)]);
    setThroughput(18940);
    setLatency(4.1);

    setTimeout(() => {
      setLogs(l => ['[AUTOSCALE] Astra Edge auto-scaled +40 compute pods in 180ms', ...l.slice(0, 7)]);
    }, 1200);

    setTimeout(() => {
      setLogs(l => ['[STATUS] Stress test completed. Zero dropped packets. Latency stabilized.', ...l.slice(0, 7)]);
      setIsStressTesting(false);
      setLatency(3.2);
      setThroughput(4850);
    }, 3500);
  };

  return (
    <section
      id="playground"
      style={{
        padding: '90px 0',
        position: 'relative',
      }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="badge" style={{ marginBottom: '12px' }}>
            <span className="badge-dot" style={{ background: '#38bdf8', boxShadow: '0 0 8px #38bdf8' }} />
            <span>INTERACTIVE CONTROL CONSOLE</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, marginBottom: '16px' }}>
            Real-Time Node Telemetry & Simulator
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '640px', margin: '0 auto', fontSize: '1.05rem' }}>
            Interact with Astra’s live edge virtualization layers. Toggle autonomous engines,
            trigger synthetic load spikes, and monitor real-time throughput responses.
          </p>
        </div>

        {/* Console Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            alignItems: 'start',
          }}
        >
          {/* Subsystems Control Panel */}
          <div className="glass-panel" style={{ padding: '28px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#f8fafc' }}>
                Distributed Subsystems
              </h3>
              <span style={{ fontSize: '0.75rem', color: '#34d399', fontWeight: 600 }}>
                {subsystems.filter(s => s.status === 'active').length} of {subsystems.length} ENGAGED
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {subsystems.map(sub => (
                <div
                  key={sub.id}
                  style={{
                    padding: '16px',
                    borderRadius: '12px',
                    background: sub.status === 'active' ? 'rgba(255, 255, 255, 0.04)' : 'rgba(255, 255, 255, 0.01)',
                    border: sub.status === 'active' ? '1px solid rgba(0, 240, 255, 0.2)' : '1px solid rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '14px',
                    transition: 'all 0.2s',
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <span
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: sub.status === 'active' ? '#00f0ff' : '#64748b',
                          boxShadow: sub.status === 'active' ? '0 0 8px #00f0ff' : 'none',
                        }}
                      />
                      <span style={{ fontWeight: 600, fontSize: '0.92rem', color: '#ffffff' }}>{sub.name}</span>
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>{sub.description}</div>
                  </div>

                  <button
                    id={`toggle-${sub.id}`}
                    onClick={() => toggleSubsystem(sub.id)}
                    style={{
                      padding: '6px 14px',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      backgroundColor: sub.status === 'active' ? 'rgba(6, 182, 212, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                      color: sub.status === 'active' ? '#22d3ee' : '#64748b',
                      border: sub.status === 'active' ? '1px solid #06b6d4' : '1px solid rgba(255, 255, 255, 0.1)',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                  >
                    {sub.status === 'active' ? 'ACTIVE' : 'STANDBY'}
                  </button>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '24px' }}>
              <button
                id="benchmark-btn"
                onClick={runBenchmark}
                disabled={isStressTesting}
                className="btn-primary"
                style={{
                  width: '100%',
                  background: isStressTesting
                    ? 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)'
                    : 'linear-gradient(135deg, #00f0ff 0%, #8b5cf6 100%)',
                  cursor: isStressTesting ? 'not-allowed' : 'pointer',
                }}
              >
                {isStressTesting ? (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: 'spin 1s linear infinite' }}>
                      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                    </svg>
                    <span>Simulating 15M Request Surge...</span>
                  </>
                ) : (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                    <span>Trigger High-Concurrency Spike Test</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Real-time Telemetry Readout & Terminal */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div
              className="glass-panel"
              id="telemetry"
              style={{
                padding: '24px',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '16px',
                textAlign: 'center',
              }}
            >
              <div>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '6px' }}>
                  THROUGHPUT
                </div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#38bdf8', fontFamily: 'var(--font-mono)' }}>
                  {throughput.toLocaleString()} <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>k/s</span>
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '6px' }}>
                  LATENCY
                </div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: latency > 3.8 ? '#f59e0b' : '#34d399', fontFamily: 'var(--font-mono)' }}>
                  {latency} <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>ms</span>
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '6px' }}>
                  CACHE HIT
                </div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#a78bfa', fontFamily: 'var(--font-mono)' }}>
                  {cacheHitRate}%
                </div>
              </div>
            </div>

            {/* Live Terminal Log Stream */}
            <div
              className="glass-panel"
              style={{
                padding: '20px',
                backgroundColor: 'rgba(5, 7, 16, 0.9)',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', paddingBottom: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e' }} />
                  <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#cbd5e1', fontFamily: 'var(--font-mono)' }}>
                    daemon.stream.astra.log
                  </span>
                </div>
                <span style={{ fontSize: '0.7rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>LIVE BUFFER</span>
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  lineHeight: '1.6',
                  color: '#94a3b8',
                  minHeight: '160px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                }}
              >
                {logs.map((log, index) => (
                  <div key={index} style={{ color: index === 0 ? '#38bdf8' : '#64748b' }}>
                    <span style={{ color: '#475569', marginRight: '8px' }}>&gt;</span>
                    {log}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
