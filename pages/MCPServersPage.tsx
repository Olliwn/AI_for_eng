import React from 'react';
import { LockClosedIcon, BrainIcon, ArrowPathIcon, MemoryChipIcon } from '../components/IconComponents';

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
            <h1 className="text-3xl font-bold text-[#00A9CE] mb-2">Model Context Protocol (MCP)</h1>
            <p className="text-gray-400 mb-8">A specialized protocol for client-server communication, designed to build powerful, context-aware AI agents.</p>

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
                            <h4 className="font-bold text-lg text-white text-center mb-2">The GUI Analogy</h4>
                            <p className="text-center text-gray-300">Think of the MCP server as a GUI for the LLM. A human uses an interface to interact with an application. Similarly, an LLM uses the server's API—its set of tools—to interact with the world, abstracting away low-level details.</p>
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
                     <Card title="Popular Implementations" className="mt-8">
                        <ul className="space-y-2 text-sm">
                            <li><strong>OpenDevin:</strong> Open-source agent for code generation.</li>
                            <li><strong>LangChain (LangServe):</strong> Framework for building and deploying agents.</li>
                            <li><strong>CrewAI:</strong> System for orchestrating multi-agent collaboration.</li>
                            <li><strong>Superagent.sh:</strong> Open-source framework for building autonomous agents.</li>
                            <li><strong>Atlassian Intelligence:</strong> Managed service for Jira/Confluence.</li>
                            <li><strong>GitHub Copilot:</strong> The backend powering the popular code assistant.</li>
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

                <Card title="Managed (Hosted) Service">
                    <p>Using a third-party platform that manages the MCP server, tools, and models for you. You interact with it through a product UI or a public API.</p>
                    <p><strong>Use Case: Atlassian Intelligence MCP</strong></p>
                     <ul>
                         <li><strong>Client:</strong> The Jira or Confluence web interface.</li>
                         <li><strong>Server API:</strong> Atlassian's server exposes a private API with tools like `searchJiraTickets` and `summarizeConfluencePage`.</li>
                         <li><strong>Benefit:</strong> Zero setup, deeply integrated with the platform's data, and fully managed. The "action space" is safe but limited to what the provider exposes.</li>
                    </ul>
                </Card>
            </div>
        </div>
    );
};

export default MCPServersPage;