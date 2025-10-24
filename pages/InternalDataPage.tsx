import React from 'react';
import { BrainIcon, EyeIcon, HandRaisedIcon, BoltIcon, MagnifyingGlassIcon, LockClosedIcon, MemoryChipIcon, ArrowPathIcon } from '../components/IconComponents';


const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-[#2A2D3A] rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-[#00A9CE] mb-4">{title}</h2>
        <div className="text-gray-300 space-y-4 prose prose-invert max-w-none prose-p:text-gray-300 prose-li:text-gray-300 prose-strong:text-gray-100">
            {children}
        </div>
    </div>
);

const FullRAGPipelineDiagram: React.FC = () => {
    const ingestSteps = [
        { name: 'Ingest', service: 'Cloud Storage' },
        { name: 'Chunk & Clean', service: 'Cloud Functions' },
        { name: 'Embed', service: 'Vertex AI Embeddings API' },
        { name: 'Index', service: 'Vertex AI Vector Search' },
    ];
    const retrievalSteps = [
        { name: 'Search', service: 'User Query' },
        { name: 'Augment & Generate', service: 'Gemini' },
    ];
    return (
         <div className="bg-[#1C1F2A] p-6 rounded-lg my-6">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
                {/* Ingestion Pipeline */}
                {ingestSteps.map((step, index) => (
                     <React.Fragment key={step.name}>
                        <div className="text-center w-40">
                            <h4 className="font-bold text-white">{step.name}</h4>
                            <p className="text-xs text-gray-400 mt-1 bg-[#2A2D3A] p-1 rounded">{step.service}</p>
                        </div>
                        {index < ingestSteps.length - 1 && (
                            <div className="text-2xl text-[#00A9CE] font-mono transform rotate-90 md:rotate-0">→</div>
                        )}
                    </React.Fragment>
                ))}
                
                {/* Vertical Separator */}
                <div className="h-16 w-0.5 bg-gray-600 mx-4 hidden md:block" />

                 {/* Retrieval Pipeline */}
                {retrievalSteps.map((step, index) => (
                     <React.Fragment key={step.name}>
                        <div className="text-center w-40">
                            <h4 className="font-bold text-white">{step.name}</h4>
                             <p className="text-xs text-gray-400 mt-1 bg-[#2A2D3A] p-1 rounded">{step.service}</p>
                        </div>
                        {index < retrievalSteps.length - 1 && (
                            <div className="text-2xl text-[#00A9CE] font-mono transform rotate-90 md:rotate-0">→</div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};


const InternalDataPage: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-[#00A9CE] mb-2">Unlocking Internal Data</h1>
            <p className="text-gray-400 mb-8">Your proprietary data is your biggest competitive advantage in the AI era. The challenge is making it accessible to your AI systems.</p>

            <Section title="The Problem: Your Most Valuable Data is Siloed">
                <p>
                    Most of an organization's critical knowledge is scattered across various internal platforms, locked in formats that are difficult for an AI to consume directly. This data—from technical documentation and project histories to codebase logic—represents a massive, untapped resource.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center my-6">
                    <div className="bg-[#1C1F2A] p-4 rounded-lg">Confluence & Wikis</div>
                    <div className="bg-[#1C1F2A] p-4 rounded-lg">Jira & Issue Trackers</div>
                    <div className="bg-[#1C1F2A] p-4 rounded-lg">Slack & Teams</div>
                    <div className="bg-[#1C1F2A] p-4 rounded-lg">Git Repositories</div>
                    <div className="bg-[#1C1F2A] p-4 rounded-lg">Shared Drives</div>
                    <div className="bg-[#1C1F2A] p-4 rounded-lg">Databases</div>
                </div>
            </Section>

            <Section title="The Solution: Treat the LLM as a New User">
                <p>
                    The key mental model shift is to start treating the LLM as a new type of user—an automated one that requires programmatic access to your data. To serve this new "user," we must make our internal data <strong>AI-accessible</strong> through a process of ingestion, transformation, and indexing.
                </p>
                <p>
                    This pipeline is the foundation of nearly all modern RAG (Retrieval-Augmented Generation) systems.
                </p>
            </Section>

            <div className="bg-[#2A2D3A] rounded-lg shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-bold text-[#00A9CE] mb-4">What This Means: Building the AI Data Pipeline</h2>
                <div className="text-gray-300 space-y-4 prose prose-invert max-w-none prose-p:text-gray-300">
                    <p>
                        Building a technical pipeline is only half the battle. To truly leverage internal knowledge, we must also foster a cultural shift in how we create and manage data. This means treating our AI systems as a primary "customer" for the information we produce.
                    </p>
                    <p>
                        This requires a conscious move towards more <strong>ingestion-friendly formats</strong>. For example, instead of embedding a screenshot of a diagram in a wiki page (which requires complex and often inaccurate OCR to parse), teams should use structured, text-based formats like Mermaid or Draw.io files. Data that is "born" AI-friendly is vastly more valuable than data that has to be forced through complex cleaning processes.
                    </p>
                    <p>
                        The diagram below illustrates the full, end-to-end RAG (Retrieval-Augmented Generation) pipeline that consumes this data, using Google Cloud services as a reference architecture.
                    </p>
                </div>
                 <FullRAGPipelineDiagram />
            </div>
        </div>
    );
};

export default InternalDataPage;
