import React from 'react';

const Card: React.FC<{ title: string; children: React.ReactNode; className?: string }> = ({ title, children, className }) => (
    <div className={`bg-[#2A2D3A] rounded-lg shadow-lg p-6 ${className}`}>
        <h3 className="text-xl font-bold text-[#00A9CE] mb-3">{title}</h3>
        <div className="text-gray-300 space-y-3 prose prose-invert max-w-none prose-p:text-gray-300">{children}</div>
    </div>
);


const MCPServersPage: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-[#00A9CE] mb-2">MCP Servers</h1>
            <p className="text-gray-400 mb-8">The Model-Controller-Perception (MCP) architecture is a powerful paradigm for building sophisticated AI systems that can interact with their environment.</p>

            <div className="bg-[#2A2D3A] rounded-lg shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-bold text-[#00A9CE] mb-4">The MCP Architecture</h2>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="bg-[#181B24] p-4 rounded-lg">
                        <h4 className="font-bold text-lg text-white">Model</h4>
                        <p className="text-sm text-gray-300 mt-2">The core reasoning engine, typically a Large Language Model (LLM) like Gemini or GPT. It makes decisions and plans based on perceived information.</p>
                    </div>
                    <div className="bg-[#181B24] p-4 rounded-lg">
                        <h4 className="font-bold text-lg text-white">Controller</h4>
                        <p className="text-sm text-gray-300 mt-2">The orchestration logic. It receives instructions, queries the Model for a plan, executes tool calls, manages state, and returns results.</p>
                    </div>
                    <div className="bg-[#181B24] p-4 rounded-lg">
                        <h4 className="font-bold text-lg text-white">Perception</h4>
                        <p className="text-sm text-gray-300 mt-2">The system's senses. It gathers information from the environment through various tools and APIs (e.g., file system, web search, databases).</p>
                    </div>
                </div>
            </div>

            <h2 className="text-2xl font-bold text-[#00A9CE] mb-4 mt-12">Implementation Examples</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card title="Example 1: Self-Hosted Server">
                    <p>A self-hosted MCP server runs on your own infrastructure (local machine, private cloud). This is common for building AI agents that need access to local resources.</p>
                    <p><strong>Use Case:</strong> An agent that can read your local codebase, create new files, run tests in your terminal, and commit the results.</p>
                    <ul>
                        <li><strong>Model:</strong> Could be a local model (Ollama) or an API call to a provider like Google.</li>
                        <li><strong>Controller:</strong> An open-source framework like <strong>OpenDevin</strong> or <strong>LangChain Agent Executor</strong> running as a local server.</li>
                        <li><strong>Perception:</strong> Tools that give the controller access to the local <strong>file system (read/write)</strong>, the ability to execute <strong>shell commands</strong>, and network access.</li>
                    </ul>
                    <p className="font-semibold text-[#00A9CE]">Advantages: Maximum control, security for sensitive data (code stays local), and direct access to local environment.</p>
                </Card>

                <Card title="Example 2: Remote-Hosted Server (SaaS)">
                    <p>A remote-hosted MCP is managed by a third-party service. You interact with it via an API, and the perception is limited to the data sources the service provides.</p>
                    <p><strong>Use Case:</strong> Atlassian RAG (Retrieval-Augmented Generation) for Jira and Confluence.</p>
                    <ul>
                        <li><strong>Model:</strong> A model chosen and managed by Atlassian.</li>
                        <li><strong>Controller:</strong> Atlassian's proprietary backend logic that handles user queries from within Jira or Confluence.</li>
                        <li><strong>Perception:</strong> The controller's "senses" are exclusively the Atlassian Graph API. It can perceive data from <strong>Jira tickets, Confluence pages, and user permissions</strong> within your Atlassian Cloud instance.</li>
                    </ul>
                    <p className="font-semibold text-[#00A9CE]">Advantages: Easy to set up, fully managed, scalable, and deeply integrated with the host platform's data and security model.</p>
                </Card>
            </div>
        </div>
    );
};

export default MCPServersPage;