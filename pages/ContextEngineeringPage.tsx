import React from 'react';

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-[#2A2D3A] rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-[#00A9CE] mb-4">{title}</h2>
        <div className="text-gray-300 space-y-4 prose prose-invert max-w-none prose-p:text-gray-300 prose-li:text-gray-300 prose-strong:text-gray-100 prose-code:text-amber-300 prose-code:before:content-none prose-code:after:content-none prose-code:bg-[#34384A] prose-code:rounded prose-code:p-1 prose-code:font-mono">
            {children}
        </div>
    </div>
);

const ContextBarChart: React.FC = () => {
    const data = [
        { label: "Initial Prompt", value: 10, color: "#00A9CE" },
        { label: "RAG Search Results", value: 25, color: "#4A90E2" },
        { label: "Attached Files", value: 20, color: "#50E3C2" },
        { label: "Turn 1 (History)", value: 15, color: "#B8E986" },
        { label: "Turn 2 (History)", value: 15, color: "#F8E71C" },
        { label: "Free Space", value: 15, color: "#4A4E5A" },
    ];

    const total = data.reduce((acc, curr) => acc + curr.value, 0);

    return (
        <div className="bg-[#1C1F2A] p-6 rounded-lg my-6">
            <h3 className="text-lg font-bold text-white mb-4 text-center">Context Window Breakdown (128K Tokens)</h3>
            <div className="w-full h-10 bg-[#34384A] rounded-lg flex overflow-hidden border-2 border-gray-600">
                {data.map((item, index) => {
                    const width = (item.value / total) * 100;
                    return <div key={index} style={{ width: `${width}%`, backgroundColor: item.color }} className="h-full transition-all duration-500" />;
                })}
            </div>
            <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 text-sm">
                {data.map((item, index) => (
                    <div key={index} className="flex items-center">
                        <div className="w-3 h-3 rounded-sm mr-2" style={{ backgroundColor: item.color }} />
                        <span className="text-gray-300">{item.label}</span>
                        <span className="ml-auto text-gray-400 font-mono">{item.value * 1280}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};


const ContextEngineeringPage: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-[#00A9CE] mb-2">Context Engineering</h1>
            <p className="text-gray-400 mb-8">Managing the "context window" is the most critical skill for building effective and reliable AI applications.</p>

            <Section title="What is a Context Window?">
                <p>
                    An LLM's entire "short-term memory" for a given interaction is its <strong>context window</strong>. This is a fixed-size buffer measured in tokens (pieces of words). Everything—system instructions, user prompts, conversation history, and any provided documents or RAG results—must fit into this window.
                </p>
                <p>
                    The model can only "see" and reason about the information inside this window. Once information is pushed out, it's forgotten.
                </p>
            </Section>

            <Section title="Visualizing Context Consumption">
                <p>
                    In a complex, multi-turn conversation, the context window fills up quickly. The example below shows how various sources of information consume the available tokens in a typical RAG-based application.
                </p>
                <ContextBarChart />
                <p>
                    As the conversation continues, the oldest turns must be removed to make space for new messages. This is why careful management is essential for maintaining coherent, long-running interactions.
                </p>
            </Section>

            <Section title="Key Context Management Techniques">
                <p>
                    Developers use several strategies to control what goes into the context window. The goal is always to maximize signal and minimize noise.
                </p>
                <ul>
                    <li>
                        <strong>Sliding Window:</strong> This is the simplest method, used in most basic chatbots. It keeps the last N turns of the conversation history and discards the oldest ones as the conversation grows. It's fast but prone to "forgetting" important early information.
                    </li>
                    <li>
                        <strong>Summarization:</strong> A more advanced technique where an LLM is used to periodically summarize older parts of the conversation. The summary is then included in the context instead of the full transcript, saving significant space. This preserves key information but adds latency and cost.
                    </li>
                    <li>
                        <strong>Retrieval-Augmented Generation (RAG):</strong> The most effective and common technique for complex applications. Instead of stuffing large documents into the context, RAG retrieves only the most relevant chunks of information from a knowledge base (using vector search) and adds them to the prompt. This provides the model with precise, relevant information without wasting space.
                    </li>
                </ul>
            </Section>
            
            <Section title="Why It Matters: Cost, Quality, and Speed">
                 <p>
                    Effective context engineering is not just about avoiding errors; it directly impacts the performance and efficiency of your application.
                </p>
                <ul>
                    <li><strong>Quality of Output:</strong> A well-curated context with high-relevance information (the "signal") and minimal irrelevant data (the "noise") leads to more accurate, coherent, and useful responses from the model.</li>
                    <li><strong>Cost:</strong> Every token sent to an LLM API costs money. Sending a massive, bloated context in every turn is expensive. RAG and other techniques significantly reduce the number of tokens processed, lowering operational costs.</li>
                    <li><strong>Speed:</strong> Larger contexts take longer for the model to process. By keeping the context lean and relevant, you reduce latency and improve the user experience.</li>
                </ul>
                <p>
                    Mastering context engineering is the difference between a simple demo and a production-ready, scalable AI product.
                </p>
            </Section>
        </div>
    );
};

export default ContextEngineeringPage;