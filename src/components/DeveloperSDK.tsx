'use client';

import React, { useState } from 'react';

export default function DeveloperSDK() {
  const [activeTab, setActiveTab] = useState<'ts' | 'python' | 'curl'>('ts');
  const [copied, setCopied] = useState(false);
  const [simulatedResponse, setSimulatedResponse] = useState<string | null>(null);
  const [isExecuting, setIsExecuting] = useState(false);

  const snippets = {
    ts: `import { AstraClient } from '@astra-tech/sdk';

// Initialize zero-latency quantum client
const astra = new AstraClient({
  apiKey: process.env.ASTRA_API_KEY,
  cluster: 'global-mesh-edge',
  quantumCipher: 'kyber-1024'
});

// Run distributed neural inference
const response = await astra.inference.predict({
  model: 'astra-neural-v4',
  input: { prompt: 'Synthesize optimal multi-cluster routing telemetry' },
  maxTokens: 512,
  stream: true
});

for await (const chunk of response) {
  process.stdout.write(chunk.delta);
}`,
    python: `from astra_tech import AstraClient

# Initialize zero-latency quantum client
astra = AstraClient(
    api_key="ast_live_99482938491823",
    cluster="global-mesh-edge",
    quantum_cipher="kyber-1024"
)

# Run distributed neural inference
response = astra.inference.predict(
    model="astra-neural-v4",
    prompt="Synthesize optimal multi-cluster routing telemetry",
    max_tokens=512,
    stream=True
)

for chunk in response:
    print(chunk.delta, end="", flush=True)`,
    curl: `curl -X POST https://api.astra.tech/v4/inference/predict \\
  -H "Authorization: Bearer ast_live_99482938491823" \\
  -H "Content-Type: application/json" \\
  -H "X-Astra-Cipher: Kyber-1024" \\
  -d '{
    "model": "astra-neural-v4",
    "prompt": "Synthesize optimal multi-cluster routing telemetry",
    "stream": false
  }'`,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTestCall = () => {
    setIsExecuting(true);
    setSimulatedResponse(null);
    setTimeout(() => {
      setSimulatedResponse(
        JSON.stringify(
          {
            status: 200,
            executionTime: '2.84ms',
            edgeLocation: 'iad-cluster-01 (Anycast)',
            quantumHandshake: 'KYBER-1024_VALIDATED',
            prediction: 'Autonomous mesh balanced: 350 nodes operational at 99.999% SLA.',
          },
          null,
          2
        )
      );
      setIsExecuting(false);
    }, 700);
  };

  return (
    <section id="developer" style={{ padding: '90px 0', position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div className="badge" style={{ marginBottom: '14px' }}>
            <span className="badge-dot" style={{ background: '#38bdf8' }} />
            <span>DEVELOPER-FIRST RUNTIME</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, marginBottom: '16px' }}>
            Integrate in Under 3 Minutes
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '640px', margin: '0 auto', fontSize: '1.05rem' }}>
            Drop our lightweight SDK into your Next.js, Node, or Python backend. Full TypeScript support
            and automated lattice encryption out of the box.
          </p>
        </div>

        <div
          className="glass-panel"
          style={{
            maxWidth: '960px',
            margin: '0 auto',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backgroundColor: '#070a18',
          }}
        >
          {/* Header Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px 20px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              background: 'rgba(255, 255, 255, 0.02)',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            {/* Tabs */}
            <div style={{ display: 'flex', gap: '8px' }}>
              {(['ts', 'python', 'curl'] as const).map(tab => (
                <button
                  key={tab}
                  id={`tab-${tab}`}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '8px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    backgroundColor: activeTab === tab ? 'rgba(0, 240, 255, 0.15)' : 'transparent',
                    color: activeTab === tab ? '#00f0ff' : '#94a3b8',
                    border: activeTab === tab ? '1px solid rgba(0, 240, 255, 0.3)' : '1px solid transparent',
                    cursor: 'pointer',
                    textTransform: tab === 'ts' ? 'uppercase' : 'capitalize',
                  }}
                >
                  {tab === 'ts' ? 'TypeScript' : tab === 'python' ? 'Python' : 'cURL'}
                </button>
              ))}
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                id="test-api-btn"
                onClick={handleTestCall}
                disabled={isExecuting}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 14px',
                  borderRadius: '6px',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  backgroundColor: 'rgba(16, 185, 129, 0.15)',
                  color: '#34d399',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  cursor: 'pointer',
                }}
              >
                {isExecuting ? 'Dispatching...' : '▶ Run Live Request'}
              </button>

              <button
                id="copy-code-btn"
                onClick={handleCopy}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 14px',
                  borderRadius: '6px',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  color: '#cbd5e1',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  cursor: 'pointer',
                }}
              >
                {copied ? '✓ Copied!' : 'Copy Code'}
              </button>
            </div>
          </div>

          {/* Code Window */}
          <div style={{ padding: '24px', overflowX: 'auto' }}>
            <pre
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.88rem',
                lineHeight: '1.7',
                color: '#e2e8f0',
                margin: 0,
              }}
            >
              <code>{snippets[activeTab]}</code>
            </pre>
          </div>

          {/* Simulated API Output Drawer */}
          {simulatedResponse && (
            <div
              style={{
                borderTop: '1px solid rgba(52, 211, 153, 0.3)',
                background: 'rgba(6, 78, 59, 0.15)',
                padding: '20px 24px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#34d399', letterSpacing: '0.05em' }}>
                  GATEWAY HTTP 200 OK — TIME: 2.84ms
                </span>
                <button
                  onClick={() => setSimulatedResponse(null)}
                  style={{ color: '#94a3b8', fontSize: '0.75rem', cursor: 'pointer' }}
                >
                  Dismiss
                </button>
              </div>
              <pre
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  color: '#6ee7b7',
                  margin: 0,
                }}
              >
                <code>{simulatedResponse}</code>
              </pre>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
