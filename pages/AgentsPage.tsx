import React from 'react';

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-[#2A2D3A] rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-[#00A9CE] mb-4">{title}</h2>
        <div className="text-gray-300 space-y-4 prose prose-invert max-w-none prose-p:text-gray-300 prose-li:text-gray-300 prose-strong:text-gray-100 prose-code:text-amber-300 prose-code:before:content-none prose-code:after:content-none prose-code:bg-[#34384A] prose-code:rounded prose-code:p-1 prose-code:font-mono">
            {children}
        </div>
    </div>
);

const AgentsPage: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-[#00A9CE] mb-2">AI Agents</h1>
            <p className="text-gray-400 mb-8">An AI agent is an autonomous system that perceives its environment, makes decisions, and takes actions to achieve specific goals.</p>

            <Section title="What is an Agent? The Core Loop">
                <p>
                    Most agents operate on a variation of the <strong>ReAct (Reason + Act)</strong> loop. This is a continuous cycle where the agent:
                </p>
                <ol>
                    <li><strong>Observes:</strong> Gathers information about its current state and environment (perception).</li>
                    <li><strong>Thinks:</strong> Reasons about the observations, the goal, and its available tools to form a plan or decide on the next action (model).</li>
                    <li><strong>Acts:</strong> Executes a chosen action (e.g., call a tool, run a command, respond to the user) (controller).</li>
                </ol>
                <p>This loop continues until the agent determines that the goal has been achieved.</p>
            </Section>

            <Section title="Example 1: Simple Agent with a Framework (e.g., LangChain)">
                <p>Agentic frameworks provide the building blocks to assemble agents. Here’s a conceptual look at creating a simple "research assistant" agent.</p>
                
                <h4>1. Define the Goal</h4>
                <p>The user gives a high-level objective: <code>"What were the key findings of the latest AlphaFold paper and how does it compare to previous versions?"</code></p>
                
                <h4>2. Provide Tools (Perception/Action)</h4>
                <p>We give the agent a set of capabilities, which are functions it can choose to call:</p>
                <ul>
                    <li><code>web_search(query: string)</code>: Searches the internet for information.</li>
                    <li><code>read_document(url: string)</code>: Reads the content of a specific URL, like a PDF of a research paper.</li>
                    <li><code>summarize(text: string)</code>: Summarizes a long piece of text.</li>
                </ul>

                <h4>3. The Agentic Loop in Action</h4>
                <ul>
                    <li><strong>Thought 1:</strong> "I need to find the latest AlphaFold paper. I will use the `web_search` tool."</li>
                    <li><strong>Action 1:</strong> Calls <code>web_search("latest AlphaFold paper")</code>.</li>
                    <li><strong>Observation 1:</strong> Gets back a list of search results, including a link to the paper on arXiv.</li>
                    <li><strong>Thought 2:</strong> "I have the link to the paper. Now I need to read it using the `read_document` tool."</li>
                    <li><strong>Action 2:</strong> Calls <code>read_document("https://arxiv.org/...")</code>.</li>
                    <li><strong>Observation 2:</strong> Gets the full text of the paper. It's very long.</li>
                    <li><strong>Thought 3:</strong> "The text is too long to analyze directly. I will use the `summarize` tool to extract key findings and then search for comparisons."</li>
                    <li><strong>Action 3:</strong> ...and so on, until it has gathered enough information to construct a final answer.</li>
                </ul>
            </Section>

            <Section title="Example 2: Cursor's Agent Mode">
                <p>Cursor's "Agent Mode" is a sophisticated, highly-specialized agent for software development tasks. It demonstrates an agent with deep environmental perception and a powerful set of actions.</p>
                
                <h4>Perception (The Environment)</h4>
                <p>Cursor's agent doesn't just see text; it perceives the entire development environment:</p>
                <ul>
                    <li><strong>The entire codebase:</strong> It can read any file in your project, not just the ones you have open.</li>
                    <li><strong>File structure:</strong> It understands the directory layout and relationships between files.</li>
                    <li><strong>The terminal:</strong> It can run commands (like `npm install` or `git status`) and see the output.</li>
                    <li><strong>LSP/Compiler feedback:</strong> It can perceive errors and warnings from the language server.</li>
                </ul>

                <h4>Actions (The Tools)</h4>
                <p>Its actions are developer-centric:</p>
                <ul>
                    <li><strong>Read File:</strong> Read the contents of any file.</li>
                    <li><strong>Write/Edit File:</strong> Make precise changes to one or more files. This is its primary action.</li>
                    <li><strong>Run Command:</strong> Execute a shell command in the integrated terminal.</li>
                    <li><strong>Ask User:</strong> If it's unsure how to proceed, it can ask for clarification.</li>
                </ul>

                <p>When you give it a task like <strong>"Refactor the `UserProfile` component to fetch data from the new `/v2/user` endpoint and add a loading state"</strong>, it uses this perception and action loop to read the component, find the API call, modify it, add state management logic, and potentially even check other files that use this component—all autonomously.</p>
            </Section>
        </div>
    );
};

export default AgentsPage;