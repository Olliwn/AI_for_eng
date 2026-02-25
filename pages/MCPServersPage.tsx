import React from 'react';
import { LockClosedIcon, BrainIcon, ArrowPathIcon, MemoryChipIcon, HandRaisedIcon, BoltIcon } from '../components/IconComponents';

const Card: React.FC<{ title: string; children: React.ReactNode; className?: string }> = ({ title, children, className }) => (
    <div className={`bg-[#2A2D3A] rounded-lg shadow-lg p-6 ${className}`}>
        <h3 className="text-xl font-bold text-[#00A9CE] mb-3">{title}</h3>
        <div className="text-gray-300 space-y-3 prose prose-invert max-w-none prose-p:text-gray-300 prose-ul:text-gray-300 prose-strong:text-white">{children}</div>
    </div>
);

const CodeBlock: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="bg-[#1C1F2A] p-4 rounded-lg my-4 text-sm font-mono text-gray-300 whitespace-pre-wrap">
        <code>{children}</code>
    </div>
);


const MCPServersPage: React.FC = () => {
    const clientDeclarationCode = `
// Client-side TypeScript declaration
// Defines the "tools" the MCP server exposes

interface MCPServerAPI {
  fs: {
    readFile(path: string): Promise<string>;
    writeFile(path: string, content: string): Promise<void>;
  };
  shell: {
    exec(command: string): Promise<{ stdout: string; stderr: string }>;
  };
  rag: {
    search(query: string): Promise<string[]>;
  };
}

// The client uses this typed API to ensure
// it only calls functions the server supports.
const mcpClient: MCPServerAPI = ...
    `;

    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-[#00A9CE] mb-2">Model Context Protocol (MCP) &amp; Agent Skills</h1>
            <p className="text-gray-400 mb-4">A specialized protocol for client-server communication, designed to build powerful, context-aware AI agents.</p>
            <div className="bg-[#00A9CE]/10 border border-[#00A9CE]/30 rounded-lg px-5 py-3 mb-8 text-sm text-gray-300">
              <strong className="text-white">Origin:</strong> MCP was created by <strong className="text-white">Anthropic</strong> and published as an open standard in November 2024.
              The specification is available at{' '}
              <a href="https://modelcontextprotocol.io" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">modelcontextprotocol.io</a>.
              Being open and model-agnostic is a deliberate design choice — any LLM with function-calling support can use MCP servers.
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                {/* Left Pane (3/5 width) */}
                <div className="lg:col-span-3">
                    <div className="bg-[#2A2D3A] rounded-lg shadow-lg p-6 mb-8">
                        <h2 className="text-2xl font-bold text-amber-300 mb-4">The Problem: LLMs Can Reason, But Can't Act</h2>
                        <p className="mb-4">Out of the box, LLMs are powerful reasoning engines. They can generate brilliant plans, but they are fundamentally stuck in a digital box—they have no "hands" or "senses" to execute those plans. To build a true AI agent, we must give the LLM tools, which presents several key challenges:</p>
                        <ul className="grid md:grid-cols-2 gap-4 list-none p-0">
                            <li className="bg-[#1C1F2A] p-4 rounded-lg flex items-start space-x-3">
                                <BrainIcon className="w-8 h-8 text-amber-300" />
                                <div><strong>They Can't Perceive the World:</strong> An LLM's only "sense" is the text in its prompt. It can't read a local file or check a database without a specific perception tool.</div>
                            </li>
                            <li className="bg-[#1C1F2A] p-4 rounded-lg flex items-start space-x-3">
                                <ArrowPathIcon className="w-8 h-8 text-amber-300" />
                                <div><strong>They Can't Take Action:</strong> An LLM can generate the code to save a file or run a test, but it has no ability to actually execute it. It needs action tools to affect the world.</div>
                            </li>
                            <li className="bg-[#1C1F2A] p-4 rounded-lg flex items-start space-x-3">
                                <LockClosedIcon className="w-8 h-8 text-amber-300" />
                                <div><strong>They Can't Act Securely:</strong> Giving an LLM direct, unrestricted access to powerful tools like a terminal from a client application would be a massive security vulnerability.</div>
                            </li>
                            <li className="bg-[#1C1F2A] p-4 rounded-lg flex items-start space-x-3">
                                <MemoryChipIcon className="w-8 h-8 text-amber-300" />
                                <div><strong>They Lack Memory and State:</strong> Without an external system, an LLM can't remember the result of a previous tool use or maintain a long-term plan.</div>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-[#2A2D3A] rounded-lg shadow-lg p-6 mb-8">
                        <h2 className="text-2xl font-bold text-teal-300 mb-4">The Solution: An API for LLM Action</h2>
                        <p className="mb-4">The MCP defines a clear separation of concerns, positioning the server as an intermediary that exposes a standardized API for the client and LLM to use.</p>
                        
                        <div className="bg-[#181B24] p-4 rounded-lg my-4">
                            <h4 className="font-bold text-lg text-white text-center mb-2">The Machine Interface Principle</h4>
                            <p className="text-center text-gray-300">MCP exists precisely so that agents work through <em>machine interfaces</em> — structured APIs — rather than graphical UIs designed for humans. A GUI hides information and adds latency; an MCP server exposes a typed, queryable action space that agents can navigate reliably at high speed.</p>
                        </div>

                         <div className="grid md:grid-cols-2 gap-6 text-center">
                            <div className="bg-[#181B24] p-4 rounded-lg">
                                <h4 className="font-bold text-lg text-white">The Client</h4>
                                <p className="text-sm text-gray-300 mt-2">A thin, user-facing layer. Its main job is to capture user intent and local context, then send it to the server using the simple, high-level MCP API.</p>
                            </div>
                            <div className="bg-[#181B2A] p-4 rounded-lg">
                                <h4 className="font-bold text-lg text-white">The MCP Server (The Actor)</h4>
                                <p className="text-sm text-gray-300 mt-2">The powerful backend that provides the "action space" for the LLM. It manages state, orchestrates tools securely, and decides what context to send to the model.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Pane (2/5 width) */}
                <div className="lg:col-span-2">
                    <Card title="Client-Side Declaration">
                        <p>A client application uses a declaration (like this TypeScript interface) to understand the "API contract" of the MCP server. This ensures the client only attempts to use tools the server has actually exposed.</p>
                        <CodeBlock>{clientDeclarationCode}</CodeBlock>
                    </Card>
                     <Card title="MCP Server Categories" className="mt-8">
                        <p className="text-sm text-gray-400 mb-3">Real MCP server types, by the kind of capability they expose:</p>
                        <ul className="space-y-2 text-sm">
                            <li><strong className="text-white">Filesystem &amp; shell:</strong> File read/write, directory listing, command execution in a sandboxed environment.</li>
                            <li><strong className="text-white">Database connectors:</strong> SQL/NoSQL query tools, schema introspection, write operations with guardrails.</li>
                            <li><strong className="text-white">API connectors:</strong> Issue trackers, wikis, CI/CD systems, cloud services — exposed as typed tool calls.</li>
                            <li><strong className="text-white">Knowledge bases:</strong> Vector search, semantic retrieval, document summarization over indexed content.</li>
                            <li><strong className="text-white">Tool execution:</strong> Browser automation, code execution environments, test runners.</li>
                            <li><strong className="text-white">Agent orchestration:</strong> Spawning sub-agents, managing task state across long-running workflows.</li>
                        </ul>
                    </Card>
                </div>
            </div>

            <h2 className="text-2xl font-bold text-[#00A9CE] mb-4 mt-8">Hosting an MCP Server</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card title="Self-Hosted">
                    <p>Running the MCP server on your own infrastructure (e.g., a local machine or a private cloud VM). This is the standard for agents that need access to local, sensitive resources.</p>
                    <p><strong>Use Case: A Local Coding Agent</strong></p>
                    <ul>
                        <li><strong>Client:</strong> An IDE plugin captures your request and current file content.</li>
                        <li><strong>Server API:</strong> The server exposes tools like `readFile`, `writeFile`, and `executeShell`.</li>
                        <li><strong>Benefit:</strong> The LLM can operate directly on your codebase in a secure, private environment. Maximum control and flexibility.</li>
                    </ul>
                </Card>

                <Card title="Shared / Remote-Hosted">
                    <p>Running the MCP server on shared infrastructure — a team server, container platform, or cloud service — accessible to multiple users and agents without requiring a local setup.</p>
                    <p><strong>Use Case: A Shared Knowledge &amp; Tools Server</strong></p>
                     <ul>
                         <li><strong>Client:</strong> Any agent-native IDE or CLI tool, authenticated via token.</li>
                         <li><strong>Server API:</strong> Exposes team-specific tools: issue tracker search, knowledge base retrieval, build pipeline triggers.</li>
                         <li><strong>Benefit:</strong> One server update propagates to every team member. Shared skills and knowledge base stay in sync. No per-developer setup.</li>
                    </ul>
                </Card>
            </div>

            {/* Agent Skills Section */}
            <div className="mt-10">
                <h2 className="text-2xl font-bold text-[#00A9CE] mb-4">Agent Skills</h2>
                <div className="bg-[#2A2D3A] rounded-lg shadow-lg p-6 mb-6">
                    <p className="text-gray-300 mb-4">
                        An <strong className="text-white">agent skill</strong> is a structured, machine-readable instruction file — typically a <code className="text-amber-300 bg-[#1C1F2A] px-1 rounded text-sm">SKILL.md</code> — that tells an agent how to perform a specific workflow using the tools available to it. Skills are injected into the agent's context at the start of a task.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-3">What a skill contains</h3>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li className="flex items-start gap-2"><span className="text-[#00A9CE] flex-shrink-0">▸</span><span><strong className="text-white">Purpose:</strong> What workflow this skill handles and when to use it.</span></li>
                                <li className="flex items-start gap-2"><span className="text-[#00A9CE] flex-shrink-0">▸</span><span><strong className="text-white">Steps:</strong> Ordered list of tool calls, checks, and decisions to make.</span></li>
                                <li className="flex items-start gap-2"><span className="text-[#00A9CE] flex-shrink-0">▸</span><span><strong className="text-white">Output format:</strong> How results should be structured (table, JSON, prose).</span></li>
                                <li className="flex items-start gap-2"><span className="text-[#00A9CE] flex-shrink-0">▸</span><span><strong className="text-white">Constraints &amp; notes:</strong> Rate limits, result caps, edge cases the agent should handle.</span></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-3">Why skills matter</h3>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li className="flex items-start gap-2"><span className="text-[#00A9CE] flex-shrink-0">▸</span><span><strong className="text-white">Encode institutional knowledge</strong> — workflows that took hours to figure out are reusable by any agent immediately.</span></li>
                                <li className="flex items-start gap-2"><span className="text-[#00A9CE] flex-shrink-0">▸</span><span><strong className="text-white">Compose with MCP</strong> — a skill references tools by name; swap the MCP server and the skill adapts automatically.</span></li>
                                <li className="flex items-start gap-2"><span className="text-[#00A9CE] flex-shrink-0">▸</span><span><strong className="text-white">Version-controlled</strong> — plain text in a Git repo; auditable, reviewable, improvable.</span></li>
                                <li className="flex items-start gap-2"><span className="text-[#00A9CE] flex-shrink-0">▸</span><span><strong className="text-white">Self-documenting</strong> — teaches the agent and serves as human-readable workflow documentation at the same time.</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-4 bg-[#181B24] rounded-lg p-4">
                        <p className="text-xs text-gray-400 font-mono whitespace-pre leading-relaxed">{`# SKILL.md — Search open issues by keyword

## Purpose
Find open issues matching a keyword in the project issue tracker.

## Steps
1. Call tool: search_issues(query=<keyword>, status="open")
2. Sort results by priority descending
3. Return a markdown table: | ID | Title | Priority | Assignee |

## Notes
- Limit to 25 results to avoid context overflow
- Include the issue URL in column 1`}</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-3">
                        The skills pattern emerged from practitioner communities and was subsequently formalized by Anthropic's developer tools team. The format is intentionally simple (plain markdown) for maximum portability.{' '}
                        <a href="/open-ecosystem" className="text-blue-400 hover:underline">See the Open Ecosystem page →</a>
                    </p>
                </div>
            </div>

            {/* Security Considerations Section */}
            <div className="mt-12 pt-8 border-t border-gray-700">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">Security Considerations</h2>
                <div className="text-center max-w-3xl mx-auto mb-8">
                    <p className="text-lg text-gray-300">
                        MCP is powerful, but it introduces new security risks. Think of an MCP server as giving your LLM a keyboard and a terminal—it can act on your behalf, so it's critical to understand and mitigate the risks.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Authentication & Authorization Card */}
                    <div className="bg-[#1C1F2A] p-6 rounded-lg border border-gray-700">
                        <div className="flex items-center mb-3">
                            <LockClosedIcon className="h-6 w-6 mr-3 text-red-400" />
                            <h3 className="text-lg font-semibold text-white">Authentication & Authorization</h3>
                        </div>
                        <p className="text-sm text-gray-400">
                            A misconfigured server could become a "confused deputy," allowing actions that exceed a user's permissions. Use OAuth and the principle of least privilege.
                        </p>
                    </div>

                    {/* Prompt Injection Card */}
                    <div className="bg-[#1C1F2A] p-6 rounded-lg border border-gray-700">
                        <div className="flex items-center mb-3">
                            <HandRaisedIcon className="h-6 w-6 mr-3 text-yellow-400" />
                            <h3 className="text-lg font-semibold text-white">Prompt Injection</h3>
                        </div>
                        <p className="text-sm text-gray-400">
                            A malicious or poorly written prompt could trick the LLM into executing unintended, harmful actions. Always require user confirmation for sensitive operations.
                        </p>
                    </div>

                    {/* Tool Injection Card */}
                    <div className="bg-[#1C1F2A] p-6 rounded-lg border border-gray-700">
                        <div className="flex items-center mb-3">
                            <BoltIcon className="h-6 w-6 mr-3 text-blue-400" />
                            <h3 className="text-lg font-semibold text-white">Tool Injection</h3>
                        </div>
                        <p className="text-sm text-gray-400">
                            A malicious server could disguise a harmful tool with an innocent name, tricking the LLM into selecting it. Pin tool versions and monitor for changes.
                        </p>
                    </div>

                    {/* Supply Chain Risks Card */}
                    <div className="bg-[#1C1F2A] p-6 rounded-lg border border-gray-700">
                        <div className="flex items-center mb-3">
                            <ArrowPathIcon className="h-6 w-6 mr-3 text-green-400" />
                            <h3 className="text-lg font-semibold text-white">Supply Chain Risks</h3>
                        </div>
                        <p className="text-sm text-gray-400">
                            MCP servers are executable code. Only use servers from trusted sources and include them in your standard vulnerability management process.
                        </p>
                    </div>
                </div>
                <div className="text-center mt-6">
                    <a href="https://www.redhat.com/en/blog/model-context-protocol-mcp-understanding-security-risks-and-controls" 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="text-sm text-blue-400 hover:underline">
                        Based on research from Red Hat. Read the full article →
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MCPServersPage;