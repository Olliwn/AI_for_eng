import React from 'react';
import { BrainIcon, EyeIcon, HandRaisedIcon, BoltIcon, MagnifyingGlassIcon, LockClosedIcon, MemoryChipIcon, ArrowPathIcon } from '../components/IconComponents';


const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-[#2A2D3A] rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-[#00A9CE] mb-4">{title}</h2>
        <div className="text-gray-300 space-y-4 prose prose-invert max-w-none prose-p:text-gray-300 prose-li:text-gray-300 prose-strong:text-gray-100 prose-code:text-amber-300 prose-code:before:content-none prose-code:after:content-none prose-code:bg-[#34384A] prose-code:rounded prose-code:p-1 prose-code:font-mono">
            {children}
        </div>
    </div>
);

const AgentLoopDiagram: React.FC = () => {
    return (
        <div className="my-8 flex justify-center items-center">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                {/* Observe */}
                <div className="text-center">
                    <div className="bg-[#181B24] p-4 rounded-lg w-48">
                        <EyeIcon className="w-10 h-10 text-[#00A9CE] mx-auto mb-2" />
                        <h3 className="font-bold text-lg text-white">Observe</h3>
                        <p className="text-xs text-gray-400 mt-1">Perceives its environment via tools (e.g., web search, file access).</p>
                    </div>
                </div>

                <div className="text-3xl text-[#00A9CE] font-mono transform md:-translate-y-4">→</div>

                {/* Think */}
                <div className="text-center">
                    <div className="bg-[#181B24] p-4 rounded-lg w-48">
                        <BrainIcon className="w-10 h-10 text-[#00A9CE] mx-auto mb-2" />
                        <h3 className="font-bold text-lg text-white">Think</h3>
                        <p className="text-xs text-gray-400 mt-1">Reasons about observations and goals to create a plan (LLM call).</p>
                    </div>
                </div>

                <div className="text-3xl text-[#00A9CE] font-mono transform md:translate-y-4 rotate-90 md:rotate-0">→</div>

                {/* Act */}
                <div className="text-center">
                    <div className="bg-[#181B24] p-4 rounded-lg w-48">
                        <HandRaisedIcon className="w-10 h-10 text-[#00A9CE] mx-auto mb-2" />
                        <h3 className="font-bold text-lg text-white">Act</h3>
                        <p className="text-xs text-gray-400 mt-1">Executes a chosen action by calling a tool (e.g., write file, run command).</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const AgentLoopDiagramRow: React.FC<{ step: number; thought: React.ReactNode; action: React.ReactNode; observation: React.ReactNode }> = ({ step, thought, action, observation }) => {
    const Cell: React.FC<{ type: 'Thought' | 'Action' | 'Observation'; children: React.ReactNode }> = ({ type, children }) => {
        const typeStyles = {
            Thought: { icon: <BrainIcon className="w-5 h-5" />, color: 'text-purple-400' },
            Action: { icon: <BoltIcon className="w-5 h-5" />, color: 'text-amber-400' },
            Observation: { icon: <MagnifyingGlassIcon className="w-5 h-5" />, color: 'text-teal-300' },
        };
        return (
            <div className="flex-1 bg-[#2A2D3A] p-4 rounded-lg">
                <div className="flex items-center space-x-2">
                    <span className="text-xl">{typeStyles[type].icon}</span>
                    <h4 className={`font-bold ${typeStyles[type].color}`}>{type}</h4>
                </div>
                 <div className="text-sm text-gray-300 mt-2 prose prose-invert max-w-none prose-p:m-0 prose-code:text-amber-300 prose-code:before:content-none prose-code:after:content-none prose-code:bg-[#34384A] prose-code:rounded prose-code:p-1 prose-code:font-mono">
                    {children}
                </div>
            </div>
        );
    };

    return (
        <div className="flex items-stretch space-x-4">
            <div className="flex flex-col items-center pt-2">
                <div className="w-8 h-8 rounded-full bg-[#00A9CE] text-white flex items-center justify-center font-bold">
                    {step}
                </div>
            </div>
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
                <Cell type="Thought">{thought}</Cell>
                <Cell type="Action">{action}</Cell>
                <Cell type="Observation">{observation}</Cell>
            </div>
        </div>
    );
};


const AgentsPage: React.FC = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-[#00A9CE] mb-2">AI Agents</h1>
            <p className="text-gray-400 mb-8 bg-[#2A2D3A] p-4 rounded-lg border-l-4 border-[#00A9CE]">
                An AI agent is a computational system that perceives its environment, processes inputs, makes decisions based on learned patterns, and takes actions to achieve specific goals.
            </p>

            <Section title="The Core Agentic Loop">
                 <p>
                    Most modern AI agents operate on a simple yet powerful <strong>Observe → Think → Act</strong> cycle. This loop, often implemented using a pattern like ReAct (Reason + Act), allows the agent to iteratively work towards its goal.
                </p>
                <AgentLoopDiagram />
                <p>The loop continues, chaining together observations and actions, until the agent determines that its high-level goal has been achieved.</p>
            </Section>

            <div className="bg-[#2A2D3A] rounded-lg shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-bold text-[#00A9CE] mb-4">Example: Simple Research Agent</h2>
                
                <div className="mb-6">
                    <h4 className="font-bold text-lg text-white mb-2">1. The Goal</h4>
                    <p className="bg-[#1C1F2A] p-3 rounded-lg text-gray-300">"What were the key findings of the latest AlphaFold paper and how does it compare to previous versions? Save the results to a file named 'alphafold_summary.md'."</p>
                </div>

                <div className="mb-6">
                    <h4 className="font-bold text-lg text-white mb-2">2. The Tools (API for Action)</h4>
                    <div className="bg-[#1C1F2A] p-4 rounded-lg pl-12">
                         <ul className="list-disc">
                            <li><code>web_search(query: string)</code>: Searches the internet for information.</li>
                            <li><code>read_document(url: string)</code>: Reads the content of a specific URL.</li>
                            <li><code>save_findings(findings: string, filename: string)</code>: Saves text to a local file.</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold text-lg text-white mb-2">3. The Prompt That Drives the Agent</h4>
                    <p className="text-gray-400 mb-4">To make the agent work, we send a detailed system prompt to the LLM. This prompt defines the rules, the tools, and the reasoning format (e.g., ReAct). The user's goal is appended to this prompt.</p>
                    <div className="bg-[#1C1F2A] p-4 rounded-lg text-sm text-gray-300">
                        <p className="font-bold text-gray-100">You are a research assistant. Your goal is to answer the user's question by using the tools provided.</p>
                        <p className="mt-2">You have access to the following tools:</p>
                        <ul className="list-disc pl-6 my-2 font-mono">
                            <li>web_search(query: string)</li>
                            <li>read_document(url: string)</li>
                            <li>save_findings(findings: string, filename: string)</li>
                        </ul>
                        <p>To use a tool, respond with your thought process and the tool call in the following format:</p>
                        <div className="bg-[#2A2D3A] p-2 rounded my-2 font-mono">
                            Thought: [Your reasoning here]<br/>
                            Action: `tool_name(arg1="value1", ...)`
                        </div>
                         <p>After you use a tool, you will be given an Observation. Repeat the Thought/Action cycle until you have the final answer.</p>
                         <hr class="border-gray-600 my-3" />
                         <p><strong className="text-gray-100">User's Goal:</strong> "What were the key findings of the latest AlphaFold paper... Save the results to 'alphafold_summary.md'."</p>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold text-lg text-white mb-4 mt-6">4. The Agentic Loop in Action</h4>
                    <div className="space-y-4">
                       <AgentLoopDiagramRow
                            step={1}
                            thought={<p>I need to find the latest AlphaFold paper. I will use the <code>web_search</code> tool.</p>}
                            action={<p>Calling <code>web_search("latest AlphaFold paper")</code>.</p>}
                            observation={<p>Search results returned a link to a paper on arXiv: "https://arxiv.org/..."</p>}
                        />
                        <AgentLoopDiagramRow
                            step={2}
                            thought={<p>I have the link. I will now read the paper's content using the <code>read_document</code> tool.</p>}
                            action={<p>Calling <code>read_document("https://arxiv.org/...")</code>.</p>}
                            observation={<p>The full text has been retrieved. I can now analyze it to find the key findings.</p>}
                        />
                        <AgentLoopDiagramRow
                            step={3}
                            thought={<p>I have analyzed the document and have the summary. I will use the <code>save_findings</code> tool as requested.</p>}
                            action={<p>Calling <code>save_findings(..., "alphafold_summary.md")</code>.</p>}
                            observation={<p>File saved successfully. I have completed all parts of the user's request.</p>}
                        />
                    </div>
                </div>
            </div>

            <div className="bg-[#2A2D3A] rounded-lg shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-bold text-[#00A9CE] mb-4">Example 2: Specialized Coding Agent (e.g., Cursor)</h2>
                <p className="mb-6">Specialized agents have tools and perception tailored to a specific domain, like software development. This allows them to perform complex, multi-step tasks autonomously.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                    <div>
                        <h4 className="font-bold text-lg text-white mb-2">Perception (The Environment)</h4>
                        <div className="bg-[#1C1F2A] p-4 rounded-lg pl-10">
                            <ul className="list-disc">
                                <li>The entire codebase (can read any file).</li>
                                <li>File structure and directory layout.</li>
                                <li>Terminal output (from running commands).</li>
                                <li>Linter and compiler feedback.</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-white mb-2">Actions (The Tools)</h4>
                        <div className="bg-[#1C1F2A] p-4 rounded-lg pl-10">
                             <ul className="list-disc font-mono">
                                <li>readFile(path: string)</li>
                                <li>editFile(path: string, code: string)</li>
                                <li>runCommand(command: string)</li>
                                <li>askUser(question: string)</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold text-lg text-white mb-2">The Agentic Loop in Action</h4>
                    <p className="bg-[#1C1F2A] p-3 rounded-lg text-gray-300 mb-4"><strong>Goal:</strong> "Refactor the `UserProfile` component to fetch data from the new `/v2/user` endpoint and add a loading state."</p>
                    <div className="space-y-4">
                       <AgentLoopDiagramRow
                            step={1}
                            thought={<p>First, I need to understand the component. I'll use <code>readFile</code> to see its current code.</p>}
                            action={<p>Calling <code>readFile("src/components/UserProfile.tsx")</code>.</p>}
                            observation={<p>The file content is loaded. It uses an endpoint at <code>/v1/user</code>.</p>}
                        />
                        <AgentLoopDiagramRow
                            step={2}
                            thought={<p>Now I will modify the file. I need to change the endpoint to <code>/v2/user</code> and add a <code>loading</code> state variable.</p>}
                            action={<p>Calling <code>editFile("src/components/UserProfile.tsx", ...)</code> with the updated code.</p>}
                            observation={<p>The file was modified successfully.</p>}
                        />
                        <AgentLoopDiagramRow
                            step={3}
                            thought={<p>The refactor is done. I should run the linter to check for errors. I will use the <code>runCommand</code> tool.</p>}
                            action={<p>Calling <code>runCommand("npm run lint -- --fix")</code>.</p>}
                            observation={<p>The linter finished with no errors. The task is complete.</p>}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgentsPage;