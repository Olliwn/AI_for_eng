import React from 'react';
import { Link } from 'react-router-dom';

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-[#2A2D3A] rounded-lg shadow-lg p-6 mb-8">
    <h2 className="text-2xl font-bold text-[#00A9CE] mb-4">{title}</h2>
    <div className="text-gray-300 space-y-4 prose prose-invert max-w-none prose-p:text-gray-300 prose-li:text-gray-300 prose-strong:text-gray-100">
      {children}
    </div>
  </div>
);

const SkillExample: React.FC = () => (
  <pre className="bg-[#181B24] rounded-lg p-4 text-xs font-mono text-green-300 overflow-x-auto leading-relaxed mt-4">
    {`# SKILL.md — Query project issue tracker

## Purpose
Search for open issues related to a keyword or component.

## Steps
1. Call issue-tracker MCP tool: search_issues(query, status="open")
2. Filter results by priority field
3. Return a markdown table sorted by priority descending

## Output format
| ID | Title | Priority | Assignee |
|----|-------|----------|----------|
...

## Notes
- Max 25 results per call to avoid context bloat
- Always include the issue URL in column 1`}
  </pre>
);

const OpenEcosystemPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-[#00A9CE] mb-2">The Open Ecosystem</h1>
      <p className="text-gray-400 mb-8">
        Two fundamentally different visions of AI tooling are competing. Which one wins determines whether organizations build durable competitive advantage or rent it by subscription.
      </p>

      {/* Two column comparison */}
      <div className="bg-[#2A2D3A] rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-white mb-6">Open Protocols vs. Platform-Integrated AI</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* AI-native side */}
          <div className="bg-[#181B24] rounded-lg p-5 border border-[#00A9CE]/30">
            <h3 className="text-lg font-bold text-[#00A9CE] mb-3">AI-native companies &amp; open protocols</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                <span><strong className="text-white">Business model = model usage.</strong> Every improvement in agent capability and workflow quality directly drives revenue. Incentives are aligned with user success.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                <span><strong className="text-white">Open standards reduce switching costs.</strong> Protocols like MCP allow organizations to swap models, add tools, and share components without rebuilding from scratch.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                <span><strong className="text-white">Practitioner-driven innovation.</strong> Real-world workflow patterns discovered by developers worldwide flow back into the ecosystem continuously via open tooling communities.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                <span><strong className="text-white">Frontier access by default.</strong> Organizations can adopt the latest model releases as they ship, rather than waiting for platform integrations.</span>
              </li>
            </ul>
          </div>

          {/* Platform-integrated side */}
          <div className="bg-[#181B24] rounded-lg p-5 border border-gray-600/40">
            <h3 className="text-lg font-bold text-gray-400 mb-3">Platform-integrated AI</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-yellow-500 mt-0.5 flex-shrink-0">⚠</span>
                <span><strong className="text-white">Business model = platform stickiness.</strong> AI is a feature to retain existing customers. Capability is constrained by what does not disrupt existing billing relationships.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500 mt-0.5 flex-shrink-0">⚠</span>
                <span><strong className="text-white">12–18 month lag behind frontier.</strong> Platform providers must balance safety, compliance, and product stability across millions of existing users before enabling new agent behaviors.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500 mt-0.5 flex-shrink-0">⚠</span>
                <span><strong className="text-white">API constraints limit composability.</strong> Agent workflows are bounded by what the platform exposes. Custom tool integrations require vendor approval or are not possible.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500 mt-0.5 flex-shrink-0">⚠</span>
                <span><strong className="text-white">Lock-in accumulates silently.</strong> Data, workflows, and integrations built inside a platform require significant re-engineering to migrate when pricing or capabilities change.</span>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-sm text-gray-400 mt-6">
          This is a structural argument, not a vendor ranking. The distinction is about incentive alignment and architectural openness — both types of provider exist across the industry.
        </p>
      </div>

      {/* Anthropic & MCP */}
      <Section title="How Model Context Protocol Emerged">
        <p>
          In November 2024, Anthropic published the <strong>Model Context Protocol (MCP)</strong> as an open standard and released the reference implementation. MCP defines a standard wire protocol that allows any LLM-based agent to communicate with external tools, databases, APIs, and services through a consistent interface — without the agent needing to know anything about the underlying system.
        </p>
        <p>
          The motivation was straightforward: Anthropic's business is model usage. A model that can connect to more of the world — your codebase, your issue tracker, your data pipelines — is more useful, and more used. Open-sourcing the protocol maximizes ecosystem adoption, which grows the available tooling, which increases model utility. The incentive to keep this open and interoperable is structural.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-2">
          <div className="bg-[#1C1F2A] rounded-lg p-4">
            <h4 className="font-bold text-white mb-1">Open specification</h4>
            <p className="text-xs text-gray-400">Published at modelcontextprotocol.io. Any developer can implement a client or server. No license fee, no vendor approval required.</p>
          </div>
          <div className="bg-[#1C1F2A] rounded-lg p-4">
            <h4 className="font-bold text-white mb-1">Model-agnostic</h4>
            <p className="text-xs text-gray-400">MCP servers work with any LLM that supports function calling. Tools built for one model are available to all others without modification.</p>
          </div>
          <div className="bg-[#1C1F2A] rounded-lg p-4">
            <h4 className="font-bold text-white mb-1">Rapid adoption</h4>
            <p className="text-xs text-gray-400">Within 3 months of release, major IDEs (Cursor, VS Code), cloud providers, and SaaS platforms announced MCP support. Hundreds of open-source servers available.</p>
          </div>
        </div>
      </Section>

      {/* Skills concept */}
      <Section title="Agent Skills: Reusable Workflow Packages">
        <p>
          A skill is a structured, machine-readable instruction package that tells an agent <em>how to perform a specific workflow</em> — which tools to call, in what order, with what constraints, and in what output format. Skills are typically stored as <code>SKILL.md</code> files and injected into the agent's context at the start of a task.
        </p>
        <p>
          The key properties that make skills powerful:
        </p>
        <ul>
          <li><strong>Composable with MCP.</strong> A skill references MCP tools by name. Swap the tool implementation and the skill adapts automatically.</li>
          <li><strong>Shareable across teams.</strong> Skills encode institutional knowledge in a format any agent can consume. A workflow built by one practitioner is immediately available to the entire team.</li>
          <li><strong>Version-controlled.</strong> Stored as plain text in a Git repository, skills are auditable, reviewable, and improvable through normal engineering workflows.</li>
          <li><strong>Self-documenting.</strong> A well-written skill teaches the agent what to do and serves as human-readable documentation of the workflow at the same time.</li>
        </ul>

        <SkillExample />

        <p className="text-sm text-gray-400 mt-2">
          Skills emerged as a practitioner pattern from the agent development community and were subsequently formalized as a concept by Anthropic's developer tools team. The format is intentionally simple — plain markdown — to maximize portability and accessibility.
        </p>
      </Section>

      {/* Emergent vs designed */}
      <Section title="Emergent Innovation vs. Designed Features">
        <p>
          The most effective agent workflows in 2024–2026 were not designed by product managers at large companies. They emerged from practitioners — developers, researchers, and domain experts — experimenting with what frontier models could do with the right tool access and the right context.
        </p>
        <p>
          This pattern mirrors earlier open-source dynamics: the people closest to the real problems discovered the most useful solutions. The difference in the AI era is the speed of diffusion. A workflow pattern discovered by a developer on a Tuesday is shared via a public repository or community channel, iterated on by hundreds of others, and available as a polished skill or MCP server by the following week.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-2">
          <div className="bg-[#1C1F2A] rounded-lg p-4">
            <h4 className="font-bold text-white mb-2">Organic workflow discovery</h4>
            <p className="text-xs text-gray-400">
              Patterns like multi-file agent context, skill chaining, tool-augmented reasoning, and agentic code review were not features in a product roadmap. They were discovered by practitioners and subsequently adopted into tooling.
            </p>
          </div>
          <div className="bg-[#1C1F2A] rounded-lg p-4">
            <h4 className="font-bold text-white mb-2">Infrastructure enables capture</h4>
            <p className="text-xs text-gray-400">
              Organizations connected to the open ecosystem — running their own MCP servers, managing a shared skills library, using agent-native IDEs — can absorb these discoveries into their workflows continuously rather than waiting for a platform update cycle.
            </p>
          </div>
        </div>
      </Section>

      {/* Footer nav */}
      <div className="flex justify-between">
        <Link to="/mcp-servers" className="text-[#00A9CE] hover:underline text-sm">
          ← MCP Servers &amp; Skills
        </Link>
        <Link to="/context-engineering" className="text-[#00A9CE] hover:underline text-sm">
          Context Engineering →
        </Link>
      </div>
    </div>
  );
};

export default OpenEcosystemPage;
