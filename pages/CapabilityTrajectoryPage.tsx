import React from 'react';
import { Link } from 'react-router-dom';

const METR_DATA = [
  { model: 'GPT-4',              date: 'Mar 2023', minutes: 3.5  },
  { model: 'GPT-4 Turbo',        date: 'Nov 2023', minutes: 3.6  },
  { model: 'Claude 3.7 Sonnet',  date: 'Feb 2025', minutes: 60   },
  { model: 'o3',                 date: 'Jan 2025', minutes: 121  },
  { model: 'Claude Opus 4',      date: 'Jun 2025', minutes: 101  },
  { model: 'GPT-5',              date: 'Sep 2025', minutes: 214  },
  { model: 'Claude Sonnet 4.5',  date: 'Oct 2025', minutes: 122  },
  { model: 'GPT-5.1 Codex',      date: 'Dec 2025', minutes: 173  },
  { model: 'Claude Opus 4.5',    date: 'Jan 2026', minutes: 320  },
  { model: 'Claude Opus 4.6',    date: 'Feb 2026', minutes: 870  },
];

const LOG_MIN = 1;
const LOG_MAX = 1200;

function logPos(minutes: number): number {
  return (Math.log(minutes) - Math.log(LOG_MIN)) / (Math.log(LOG_MAX) - Math.log(LOG_MIN));
}

const CHART_W = 700;
const CHART_H = 280;
const PAD_L = 70;
const PAD_R = 20;
const PAD_T = 20;
const PAD_B = 50;
const plotW = CHART_W - PAD_L - PAD_R;
const plotH = CHART_H - PAD_T - PAD_B;

const X_LABELS = [
  { label: 'Jan 2023', frac: 0 },
  { label: 'Jan 2024', frac: 0.165 },
  { label: 'Jan 2025', frac: 0.5 },
  { label: 'Jan 2026', frac: 0.9 },
];

const Y_TICKS = [
  { minutes: 1,    label: '1 min'  },
  { minutes: 10,   label: '10 min' },
  { minutes: 60,   label: '1 hr'   },
  { minutes: 240,  label: '4 hr'   },
  { minutes: 960,  label: '16 hr'  },
];

const DATE_FRACS: Record<string, number> = {
  'Mar 2023': 0.04,
  'Nov 2023': 0.13,
  'Feb 2025': 0.53,
  'Jan 2025': 0.50,
  'Jun 2025': 0.65,
  'Sep 2025': 0.75,
  'Oct 2025': 0.78,
  'Dec 2025': 0.84,
  'Jan 2026': 0.90,
  'Feb 2026': 0.96,
};

const TrajectoryChart: React.FC = () => {
  const points = METR_DATA.map(d => ({
    ...d,
    cx: PAD_L + DATE_FRACS[d.date] * plotW,
    cy: PAD_T + (1 - logPos(d.minutes)) * plotH,
  }));

  const polyline = points
    .slice()
    .sort((a, b) => a.cx - b.cx)
    .map(p => `${p.cx},${p.cy}`)
    .join(' ');

  const latest = points[points.length - 1];

  return (
    <svg
      viewBox={`0 0 ${CHART_W} ${CHART_H}`}
      className="w-full rounded-lg"
      style={{ maxHeight: 320 }}
      aria-label="METR time horizon chart"
    >
      <rect x={0} y={0} width={CHART_W} height={CHART_H} fill="#1C1F2A" rx={8} />

      {/* Y grid lines + labels */}
      {Y_TICKS.map(({ minutes, label }) => {
        const cy = PAD_T + (1 - logPos(minutes)) * plotH;
        return (
          <g key={label}>
            <line x1={PAD_L} x2={PAD_L + plotW} y1={cy} y2={cy} stroke="#2A2D3A" strokeWidth={1} />
            <text x={PAD_L - 6} y={cy + 4} textAnchor="end" fill="#9CA3AF" fontSize={10}>{label}</text>
          </g>
        );
      })}

      {/* X axis labels */}
      {X_LABELS.map(({ label, frac }) => (
        <text key={label}
          x={PAD_L + frac * plotW}
          y={CHART_H - 10}
          textAnchor="middle"
          fill="#9CA3AF"
          fontSize={10}
        >{label}</text>
      ))}

      {/* Trend line */}
      <polyline points={polyline} fill="none" stroke="#00A9CE" strokeWidth={1.5} strokeDasharray="5,3" opacity={0.5} />

      {/* Data points */}
      {points.map(p => {
        const isLatest = p.model === 'Claude Opus 4.6';
        return (
          <g key={p.model}>
            <circle
              cx={p.cx} cy={p.cy} r={isLatest ? 7 : 5}
              fill={isLatest ? '#EF4444' : '#0077C8'}
              stroke={isLatest ? '#FCA5A5' : '#6AD1E3'}
              strokeWidth={isLatest ? 2 : 1}
            />
            {(p.minutes > 60 || p.model === 'GPT-4') && (
              <text
                x={p.cx}
                y={p.cy - 10}
                textAnchor="middle"
                fill={isLatest ? '#FCA5A5' : '#D1D5DB'}
                fontSize={9}
                fontWeight={isLatest ? 'bold' : 'normal'}
              >{p.model}</text>
            )}
          </g>
        );
      })}

      {/* Callout for latest */}
      <text x={latest.cx + 10} y={latest.cy + 4} fill="#FCA5A5" fontSize={11} fontWeight="bold">14.5 hrs</text>

      {/* Doubling annotation */}
      <text x={PAD_L + 10} y={PAD_T + 14} fill="#00A9CE" fontSize={11} fontWeight="bold">
        Doubling time: ~4 months
      </text>
    </svg>
  );
};

const StatCard: React.FC<{ value: string; label: string; sub?: string; highlight?: boolean }> = ({ value, label, sub, highlight }) => (
  <div className={`rounded-lg p-5 text-center ${highlight ? 'bg-[#00A9CE]/10 border border-[#00A9CE]/30' : 'bg-[#2A2D3A]'}`}>
    <div className={`text-3xl font-bold mb-1 ${highlight ? 'text-[#00A9CE]' : 'text-white'}`}>{value}</div>
    <div className="text-sm font-semibold text-gray-300">{label}</div>
    {sub && <div className="text-xs text-gray-500 mt-1">{sub}</div>}
  </div>
);

const CapabilityTrajectoryPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-[#00A9CE] mb-2">Why Now</h1>
      <p className="text-gray-400 mb-8">
        AI agent capability is improving exponentially. This page explains what that means in concrete terms — and why the pace of change makes this moment different from previous AI hype cycles.
      </p>

      {/* Key stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <StatCard value="~4 mo" label="Capability doubling time" sub="since 2023" highlight />
        <StatCard value="3.5 min" label="GPT-4 task horizon" sub="Mar 2023" />
        <StatCard value="14.5 hr" label="Claude Opus 4.6 horizon" sub="Feb 2026" />
        <StatCard value="250×" label="Capability growth" sub="3 years" highlight />
      </div>

      {/* Chart section */}
      <div className="bg-[#2A2D3A] rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-white mb-1">Autonomous Task Capability Over Time</h2>
        <p className="text-sm text-gray-400 mb-4">
          The <strong className="text-gray-200">METR time horizon</strong> measures the longest task (in minutes of human work time) that a frontier AI agent completes autonomously with 50% success rate. The scale is logarithmic.
        </p>
        <TrajectoryChart />
        <p className="text-xs text-gray-500 mt-3 text-right">
          Source:{' '}
          <a href="https://metr.org/blog/2026-1-29-time-horizon-1-1/" target="_blank" rel="noopener noreferrer"
            className="text-blue-400 hover:underline">METR Time Horizon 1.1, metr.org (Jan 2026)</a>
          {' '}· Claude Opus 4.6 datapoint: Feb 2026
        </p>
      </div>

      {/* What the metric means */}
      <div className="bg-[#2A2D3A] rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-[#00A9CE] mb-4">What "Task Horizon" Means in Practice</h2>
        <div className="space-y-4 text-gray-300">
          <p>
            METR defines the task horizon as the duration of real-world tasks — drawn from software engineering, data analysis, research, and infrastructure work — at which an agent succeeds roughly half the time without human intervention.
          </p>
          <div className="grid md:grid-cols-3 gap-4 my-4">
            <div className="bg-[#1C1F2A] rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-gray-400 mb-1">3.5 min</div>
              <div className="text-sm text-white font-semibold mb-1">GPT-4 (2023)</div>
              <div className="text-xs text-gray-400">Write a short function. Fix a trivial bug. Look up a fact.</div>
            </div>
            <div className="bg-[#1C1F2A] rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-[#00A9CE] mb-1">2 hr</div>
              <div className="text-sm text-white font-semibold mb-1">Frontier models (mid-2025)</div>
              <div className="text-xs text-gray-400">Refactor a module. Debug an integration issue. Draft a design document.</div>
            </div>
            <div className="bg-[#1C1F2A] rounded-lg p-4 text-center border border-red-500/30">
              <div className="text-2xl font-bold text-red-400 mb-1">14.5 hr</div>
              <div className="text-sm text-white font-semibold mb-1">Claude Opus 4.6 (Feb 2026)</div>
              <div className="text-xs text-gray-400">A full workday task. Implement a feature end-to-end. Analyse a system and propose a redesign.</div>
            </div>
          </div>
          <p>
            A 14.5-hour task horizon means a frontier agent can, autonomously, complete work that would occupy a skilled engineer for a full working day — planning the approach, writing the code, running tests, debugging failures, and iterating. This is a qualitative shift, not just a quantitative one.
          </p>
        </div>
      </div>

      {/* Why exponential matters */}
      <div className="bg-[#2A2D3A] rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-[#00A9CE] mb-4">Why Exponential Growth Is Different</h2>
        <div className="space-y-4 text-gray-300">
          <p>
            The doubling time of ~4 months has held consistently since 2023 across multiple independent evaluation frameworks, multiple model providers, and across different task domains (software, reasoning, research). This is not one company's benchmark — it is a measured property of the capability landscape.
          </p>
          <p>
            Exponential growth feels slow at the start and then sudden. At a 4-month doubling time:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm mt-2 border-collapse">
              <thead>
                <tr className="border-b border-gray-600">
                  <th className="text-left py-2 pr-4 text-gray-400 font-medium">If you start adapting...</th>
                  <th className="text-left py-2 pr-4 text-gray-400 font-medium">You operate at capability level</th>
                  <th className="text-left py-2 text-gray-400 font-medium">Your peers who started 12 months earlier are at</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr><td className="py-2 pr-4 text-white">Now</td><td className="py-2 pr-4 text-[#00A9CE]">14.5 hr horizon</td><td className="py-2 text-gray-400">—</td></tr>
                <tr><td className="py-2 pr-4 text-white">+4 months</td><td className="py-2 pr-4 text-[#00A9CE]">~29 hr horizon</td><td className="py-2 text-gray-400">already 3 doublings ahead</td></tr>
                <tr><td className="py-2 pr-4 text-white">+12 months</td><td className="py-2 pr-4 text-[#00A9CE]">~116 hr horizon</td><td className="py-2 text-gray-400">compounding on top of compounding</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-400">
            The gap is not in the model — models are available to everyone. The gap compounds in the infrastructure (MCP servers, knowledge bases, workflow skills), the team habits, and the accumulated institutional knowledge of what actually works.
          </p>
        </div>
      </div>

      {/* This is not hype */}
      <div className="bg-[#2A2D3A] rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-[#00A9CE] mb-4">This Is Measured, Not Speculative</h2>
        <div className="space-y-3 text-gray-300">
          <p>
            Previous AI hype cycles were characterized by qualitative claims and cherry-picked demonstrations. The current trajectory is different: it is measured by independent third-party organizations (METR, Epoch AI, Scale AI HELM) using standardised task suites, multiple model providers, and reproducible methodology.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-[#1C1F2A] rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">Evidence of continuity</h3>
              <ul className="text-sm space-y-1 list-disc list-inside text-gray-400">
                <li>Trend held across 5 model generations from 3 providers</li>
                <li>Consistent doubling across software, reasoning, and research tasks</li>
                <li>METR TH1.1 (Jan 2026): updated methodology, same trend</li>
                <li>Curve is steepening — post-2024 doubling time is ~89 days</li>
              </ul>
            </div>
            <div className="bg-[#1C1F2A] rounded-lg p-4">
              <h3 className="font-bold text-white mb-2">What this does not mean</h3>
              <ul className="text-sm space-y-1 list-disc list-inside text-gray-400">
                <li>Agents are not infallible — 50% success rate at the frontier</li>
                <li>Long-horizon tasks still require human review and judgment</li>
                <li>Domain context (tools, data, workflows) still matters enormously</li>
                <li>The frontier is moving faster than most organizations can absorb</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* What this means for engineers */}
      <div className="bg-[#2A2D3A] rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-[#00A9CE] mb-4">What This Means for Engineering Teams</h2>
        <div className="space-y-3 text-gray-300">
          <p>
            An agent that can autonomously execute a full workday of engineering tasks changes the nature of the work, not just the speed of it. The strategic implication is not "AI will do our jobs" — it is that <strong className="text-white">the engineers who work effectively with agents will produce dramatically more than those who do not</strong>, and the gap will compound every quarter.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-[#1C1F2A] rounded-lg p-4">
              <h3 className="font-semibold text-[#00A9CE] mb-2">Infrastructure matters</h3>
              <p className="text-xs text-gray-400">
                A general-purpose agent operating with rich domain context (tools, knowledge bases, workflow skills) consistently outperforms one without it. The investment is in the context layer, not the model.
              </p>
            </div>
            <div className="bg-[#1C1F2A] rounded-lg p-4">
              <h3 className="font-semibold text-[#00A9CE] mb-2">The J-curve is real</h3>
              <p className="text-xs text-gray-400">
                Teams at 100% utilization cannot adopt agent workflows — there is no slack to absorb the learning dip. Adoption requires deliberate capacity reservation, after which productivity compounds.
              </p>
            </div>
            <div className="bg-[#1C1F2A] rounded-lg p-4">
              <h3 className="font-semibold text-[#00A9CE] mb-2">Open ecosystem accelerates</h3>
              <p className="text-xs text-gray-400">
                The effective workflow patterns are discovered by practitioners daily and shared through open protocols. Teams connected to this ecosystem absorb improvements continuously.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer nav */}
      <div className="flex justify-end">
        <Link to="/capabilities" className="text-[#00A9CE] hover:underline text-sm">
          See current model capabilities →
        </Link>
      </div>
    </div>
  );
};

export default CapabilityTrajectoryPage;
