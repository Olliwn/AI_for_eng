import React from 'react';
import { ModelCapability } from '../types';
import { CheckCircleIcon, MinusCircleIcon, XCircleIcon } from '../components/IconComponents';

const Capability: React.FC<{ children: React.ReactNode; icon: 'check' | 'minus' | 'cross' }> = ({ children, icon }) => (
    <div className="flex items-start space-x-2">
        {icon === 'check' && <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />}
        {icon === 'minus' && <MinusCircleIcon className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />}
        {icon === 'cross' && <XCircleIcon className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />}
        <span className="text-gray-300">{children}</span>
    </div>
);

const capabilitiesData: ModelCapability[] = [
  {
    provider: 'Google',
    modelName: 'Gemini 2.5 Pro',
    multimodality: (
        <ul className="space-y-2">
            <Capability icon="check">Text, Image, Video, Audio understanding.</Capability>
            <Capability icon="check">Native audio (speech) I/O.</Capability>
            <Capability icon="check">Video generation (Veo).</Capability>
            <Capability icon="check">Image generation (Imagen 4).</Capability>
        </ul>
    ),
    thinking: <Capability icon="check">Advanced reasoning with configurable "thinking budget". Explicitly allocates compute for complex problem-solving.</Capability>,
    apiFeatures: (
        <ul className="space-y-2">
            <Capability icon="check">Google Search Grounding.</Capability>
            <Capability icon="check">Function Calling & Tool Use.</Capability>
            <Capability icon="minus">Code Interpreter (Execution). Relies on function calls to external environments.</Capability>
            <Capability icon="check">Long context (up to 2M tokens).</Capability>
        </ul>
    ),
    cost: 'Competitive, varies by modality and usage.',
    excelsAt: 'Real-time multimodal applications, complex reasoning tasks, leveraging Google ecosystem (Search, Maps).',
  },
  {
    provider: 'OpenAI',
    modelName: 'GPT-4o',
    multimodality: (
        <ul className="space-y-2">
            <Capability icon="check">Text, Image, Audio understanding.</Capability>
            <Capability icon="check">Native multimodal I/O in a single model.</Capability>
            <Capability icon="check">Image generation (DALL-E 3).</Capability>
            <Capability icon="minus">Video understanding is nascent.</Capability>
        </ul>
    ),
    thinking: <Capability icon="minus">Implicitly strong reasoning, but not an explicit, configurable feature like Gemini's "thinking budget".</Capability>,
    apiFeatures: (
        <ul className="space-y-2">
            <Capability icon="check">Code Interpreter (sandboxed Python environment).</Capability>
            <Capability icon="check">Advanced Data Analysis.</Capability>
            <Capability icon="check">Function Calling & Tool Use.</Capability>
            <Capability icon="minus">Web search is a tool, not native grounding.</Capability>
        </ul>
    ),
    cost: 'Premium, generally higher than competitors but offers high performance.',
    excelsAt: 'Creative text generation, complex instruction following, in-API code execution and data analysis.',
  },
  {
    provider: 'Anthropic',
    modelName: 'Claude 3.5 Sonnet',
    multimodality: (
        <ul className="space-y-2">
            <Capability icon="check">Strong text & image understanding.</Capability>
            <Capability icon="check">Excellent at visual reasoning tasks (e.g., chart interpretation).</Capability>
            <Capability icon="cross">No native audio or video I/O.</Capability>
            <Capability icon="cross">No image generation capabilities.</Capability>
        </ul>
    ),
    thinking: <Capability icon="minus">Strong reasoning capabilities focused on safety and constitutional AI principles. Good at metacognition and explaining its reasoning.</Capability>,
    apiFeatures: (
        <ul className="space-y-2">
            <Capability icon="check">Function Calling & Tool Use.</Capability>
            <Capability icon="minus">"Artifacts" feature in UI, allows iterative work with generated content (code, text).</Capability>
            <Capability icon="check">Long context window (200K tokens).</Capability>
            <Capability icon="cross">No native search or code execution.</Capability>
        </ul>
    ),
    cost: 'Cost-effective, positioned as a balance between performance and price. Cheaper than Opus.',
    excelsAt: 'Enterprise applications, safety-critical tasks, document analysis, visual QA, and workflows requiring high reliability.',
  },
  {
    provider: 'x.ai',
    modelName: 'Grok-1.5V',
    multimodality: (
        <ul className="space-y-2">
            <Capability icon="check">Text & Image understanding.</Capability>
            <Capability icon="minus">Focus on understanding real-world visual data.</Capability>
            <Capability icon="cross">No audio or video I/O.</Capability>
            <Capability icon="cross">No image generation capabilities.</Capability>
        </ul>
    ),
    thinking: <Capability icon="minus">Designed for a "rebellious" and witty personality. Reasoning is geared towards real-time information and unfiltered responses.</Capability>,
    apiFeatures: (
        <ul className="space-y-2">
            <Capability icon="check">Real-time access to X (Twitter) data.</Capability>
            <Capability icon="minus">API is still in early access.</Capability>
            <Capability icon="cross">Limited tool use or function calling compared to others.</Capability>
            <Capability icon="minus">Open-source base model (Grok-1) available.</Capability>
        </ul>
    ),
    cost: 'Primarily available through X Premium subscription. API pricing not widely public.',
    excelsAt: 'Real-time information retrieval from social media, tasks requiring up-to-the-minute context, and generating engaging/controversial content.',
  },
];

const CapabilitiesPage: React.FC = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-[#00A9CE] mb-2">Frontier Model Capabilities</h1>
      <p className="text-gray-400 mb-8">A summary of capabilities beyond standard GPT-3.5-style text generation for leading AI models.</p>
      
      <div className="overflow-x-auto bg-[#2A2D3A] rounded-lg shadow-xl">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-[#181B24]/50">
            <tr>
              {['Provider', 'Model', 'Multimodality', 'Thinking', 'Key API Features', 'Cost', 'Excels At'].map(header => (
                <th key={header} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {capabilitiesData.map((model) => (
              <tr key={model.modelName} className="hover:bg-[#34384A]/50 transition-colors duration-200">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{model.provider}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-[#00A9CE]">{model.modelName}</td>
                <td className="px-6 py-4 text-sm text-gray-300 ">{model.multimodality}</td>
                <td className="px-6 py-4 text-sm text-gray-300">{model.thinking}</td>
                <td className="px-6 py-4 text-sm text-gray-300">{model.apiFeatures}</td>
                <td className="px-6 py-4 text-sm text-gray-300">{model.cost}</td>
                <td className="px-6 py-4 text-sm text-gray-300">{model.excelsAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CapabilitiesPage;