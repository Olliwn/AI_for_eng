import React from 'react';
import { CheckIcon, MinusIcon } from '../components/IconComponents';

// Model data structure
interface ModelData {
  name: string;
  provider: string;
  contextWindow: string;
  textInput: boolean;
  imageInput: boolean;
  audioInput: boolean;
  videoInput: boolean;
  imageGeneration: boolean;
  functionCalling: boolean;
  nativeCodeExecution: boolean;
  realtimeData: boolean;
  searchGrounding: boolean;
  fineTuning: boolean;
  safetyGuardrails: boolean;
  inputPrice: string;
  outputPrice: string;
  cachingPrice: string;
  strengths: string;
  notes?: string;
}

const models: ModelData[] = [
  {
    name: 'GPT-4o',
    provider: 'OpenAI',
    contextWindow: '128K',
    textInput: true,
    imageInput: true,
    audioInput: true,
    videoInput: false,
    imageGeneration: true,
    functionCalling: true,
    nativeCodeExecution: true,
    realtimeData: false,
    searchGrounding: false,
    fineTuning: true,
    safetyGuardrails: true,
    inputPrice: '$2.50',
    outputPrice: '$10.00',
    cachingPrice: 'N/A',
    strengths: 'Good baseline, but surpassed by newer models.',
    notes: 'Reference model'
  },
  {
    name: 'GPT-5',
    provider: 'OpenAI',
    contextWindow: '400K',
    textInput: true,
    imageInput: true,
    audioInput: true,
    videoInput: true,
    imageGeneration: true,
    functionCalling: true,
    nativeCodeExecution: true,
    realtimeData: false,
    searchGrounding: false,
    fineTuning: true,
    safetyGuardrails: true,
    inputPrice: '$3.00',
    outputPrice: '$15.00',
    cachingPrice: 'N/A',
    strengths: 'SOTA reasoning for complex tasks; can be slow.',
    notes: 'Next-gen reasoning'
  },
  {
    name: 'Gemini 2.5 Flash',
    provider: 'Google',
    contextWindow: '1M',
    textInput: true,
    imageInput: true,
    audioInput: true,
    videoInput: true,
    imageGeneration: true,
    functionCalling: true,
    nativeCodeExecution: true,
    realtimeData: false,
    searchGrounding: true,
    fineTuning: true,
    safetyGuardrails: true,
    inputPrice: '$0.30',
    outputPrice: '$2.50',
    cachingPrice: '$0.03',
    strengths: 'Fast, multimodal, strong value for agentic flows.',
    notes: 'Fast & economical'
  },
  {
    name: 'Gemini 2.5 Pro',
    provider: 'Google',
    contextWindow: '2M',
    textInput: true,
    imageInput: true,
    videoInput: true,
    audioInput: true,
    nativeCodeExecution: true,
    functionCalling: true,
    searchGrounding: true,
    imageGeneration: true,
    fineTuning: true,
    safetyGuardrails: true,
    inputPrice: '$1.25 - $2.50',
    outputPrice: '$10.00 - $15.00',
    cachingPrice: '$0.125 - $0.25',
    strengths: 'Solid all-rounder with advanced multimodal capabilities.',
    notes: 'Advanced reasoning'
  },
  {
    name: 'Claude 4.5 Sonnet',
    provider: 'Anthropic',
    contextWindow: '200K',
    textInput: true,
    imageInput: true,
    audioInput: false,
    videoInput: false,
    imageGeneration: false,
    functionCalling: true,
    nativeCodeExecution: false,
    realtimeData: false,
    searchGrounding: false,
    fineTuning: false,
    safetyGuardrails: true,
    inputPrice: '$15.00',
    outputPrice: '$75.00',
    cachingPrice: '$1.50 / $18.75',
    strengths: 'Top-tier for coding, enterprise use, and complex agents.',
    notes: 'Safety-focused'
  },
  {
    name: 'Haiku 4.5',
    provider: 'Anthropic',
    contextWindow: '200K',
    textInput: true,
    imageInput: true,
    audioInput: false,
    videoInput: false,
    imageGeneration: false,
    functionCalling: true,
    nativeCodeExecution: false,
    realtimeData: false,
    searchGrounding: false,
    fineTuning: false,
    safetyGuardrails: true,
    inputPrice: '$0.25',
    outputPrice: '$1.25',
    cachingPrice: '$0.03 / $0.31',
    strengths: 'Unmatched price/performance for agentic workflows.',
    notes: 'Fast & lightweight'
  },
  {
    name: 'Grok 4',
    provider: 'xAI',
    contextWindow: '256K',
    textInput: true,
    imageInput: true,
    audioInput: false,
    videoInput: false,
    imageGeneration: false,
    functionCalling: true,
    nativeCodeExecution: true,
    realtimeData: true,
    searchGrounding: true,
    fineTuning: false,
    safetyGuardrails: false,
    inputPrice: '$3.00',
    outputPrice: '$15.00',
    cachingPrice: 'N/A',
    strengths: 'Excels at math/STEM reasoning; unique real-time data.',
    notes: 'Real-time X data'
  },
  {
    name: 'Grok 4-fast',
    provider: 'xAI',
    contextWindow: '256K',
    textInput: true,
    imageInput: true,
    audioInput: false,
    videoInput: false,
    imageGeneration: false,
    functionCalling: true,
    nativeCodeExecution: true,
    realtimeData: true,
    searchGrounding: true,
    fineTuning: false,
    safetyGuardrails: false,
    inputPrice: '$0.20',
    outputPrice: '$1.50',
    cachingPrice: 'N/A',
    strengths: 'Impressive speed-to-performance ratio.',
    notes: 'Optimized speed'
  }
];

const CapabilitiesPage: React.FC = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-[#00A9CE] mb-2">Frontier Model Capabilities</h1>
      <p className="text-gray-400 mb-8">
        Comparison of current leading AI models with their capabilities and pricing (October 2025).
      </p>
      
      <div className="overflow-x-auto bg-[#2A2D3A] rounded-lg shadow-xl">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-[#181B24]/50">
            <tr>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider sticky left-0 bg-[#181B24]/50 z-10">
                Feature
              </th>
              {models.map((model) => (
                <th key={model.name} scope="col" className="px-4 py-3 text-center text-xs font-medium text-gray-300 uppercase tracking-wider min-w-[120px]">
                  <div className="font-bold text-[#00A9CE]">{model.name}</div>
                  <div className="text-[10px] text-gray-400 mt-1 normal-case">{model.provider}</div>
                  {model.notes && (
                    <div className="text-[9px] text-gray-500 mt-0.5 italic normal-case">{model.notes}</div>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {/* Context Window */}
            <tr className="hover:bg-[#34384A]/50 transition-colors">
              <td className="px-4 py-3 text-sm font-medium text-white sticky left-0 bg-[#2A2D3A] z-10">
                Context Window
              </td>
              {models.map((model) => (
                <td key={model.name} className="px-4 py-3 text-center text-sm text-gray-300">
                  {model.contextWindow}
                </td>
              ))}
            </tr>

            {/* Input Modalities Header */}
            <tr className="bg-[#1C1F2A]">
              <td colSpan={models.length + 1} className="px-4 py-2 text-xs font-semibold text-[#00A9CE] uppercase tracking-wider">
                Input Modalities
              </td>
            </tr>

            {/* Text Input */}
            <tr className="hover:bg-[#34384A]/50 transition-colors">
              <td className="px-4 py-3 text-sm font-medium text-white sticky left-0 bg-[#2A2D3A] z-10">
                Text
              </td>
              {models.map((model) => (
                <td key={model.name} className="px-4 py-3 text-center">
                  {model.textInput ? <CheckIcon className="w-6 h-6 mx-auto text-green-400" /> : <MinusIcon className="w-6 h-6 mx-auto text-red-400" />}
                </td>
              ))}
            </tr>

            {/* Image Input */}
            <tr className="hover:bg-[#34384A]/50 transition-colors">
              <td className="px-4 py-3 text-sm font-medium text-white sticky left-0 bg-[#2A2D3A] z-10">
                Image
              </td>
              {models.map((model) => (
                <td key={model.name} className="px-4 py-3 text-center">
                  {model.imageInput ? <CheckIcon className="w-6 h-6 mx-auto text-green-400" /> : <MinusIcon className="w-6 h-6 mx-auto text-red-400" />}
                </td>
              ))}
            </tr>

            {/* Audio Input */}
            <tr className="hover:bg-[#34384A]/50 transition-colors">
              <td className="px-4 py-3 text-sm font-medium text-white sticky left-0 bg-[#2A2D3A] z-10">
                Audio
              </td>
              {models.map((model) => (
                <td key={model.name} className="px-4 py-3 text-center">
                  {model.audioInput ? <CheckIcon className="w-6 h-6 mx-auto text-green-400" /> : <MinusIcon className="w-6 h-6 mx-auto text-red-400" />}
                </td>
              ))}
            </tr>

            {/* Video Input */}
            <tr className="hover:bg-[#34384A]/50 transition-colors">
              <td className="px-4 py-3 text-sm font-medium text-white sticky left-0 bg-[#2A2D3A] z-10">
                Video
              </td>
              {models.map((model) => (
                <td key={model.name} className="px-4 py-3 text-center">
                  {model.videoInput ? <CheckIcon className="w-6 h-6 mx-auto text-green-400" /> : <MinusIcon className="w-6 h-6 mx-auto text-red-400" />}
                </td>
              ))}
            </tr>

            {/* API Capabilities Header */}
            <tr className="bg-[#1C1F2A]">
              <td colSpan={models.length + 1} className="px-4 py-2 text-xs font-semibold text-[#00A9CE] uppercase tracking-wider">
                Capabilities & Features
              </td>
            </tr>

            {/* Image Generation */}
            <tr className="hover:bg-[#34384A]/50 transition-colors">
              <td className="px-4 py-3 text-sm font-medium text-white sticky left-0 bg-[#2A2D3A] z-10">
                Image Generation
              </td>
              {models.map((model) => (
                <td key={model.name} className="px-4 py-3 text-center">
                  {model.imageGeneration ? <CheckIcon className="w-6 h-6 mx-auto text-green-400" /> : <MinusIcon className="w-6 h-6 mx-auto text-red-400" />}
                </td>
              ))}
            </tr>

            {/* Function Calling */}
            <tr className="hover:bg-[#34384A]/50 transition-colors">
              <td className="px-4 py-3 text-sm font-medium text-white sticky left-0 bg-[#2A2D3A] z-10">
                Function Calling
              </td>
              {models.map((model) => (
                <td key={model.name} className="px-4 py-3 text-center">
                  {model.functionCalling ? <CheckIcon className="w-6 h-6 mx-auto text-green-400" /> : <MinusIcon className="w-6 h-6 mx-auto text-red-400" />}
                </td>
              ))}
            </tr>

            {/* Code Execution */}
            <tr className="hover:bg-[#34384A]/50 transition-colors">
              <td className="px-4 py-3 text-sm font-medium text-white sticky left-0 bg-[#2A2D3A] z-10">
                Native Code Execution
              </td>
              {models.map((model) => (
                <td key={model.name} className="px-4 py-3 text-center">
                  {model.nativeCodeExecution ? <CheckIcon className="w-6 h-6 mx-auto text-green-400" /> : <MinusIcon className="w-6 h-6 mx-auto text-red-400" />}
                </td>
              ))}
            </tr>

            {/* Real-time Data */}
            <tr className="hover:bg-[#34384A]/50 transition-colors">
              <td className="px-4 py-3 text-sm font-medium text-white sticky left-0 bg-[#2A2D3A] z-10">
                Real-time Data
              </td>
              {models.map((model) => (
                <td key={model.name} className="px-4 py-3 text-center">
                  {model.realtimeData ? <CheckIcon className="w-6 h-6 mx-auto text-green-400" /> : <MinusIcon className="w-6 h-6 mx-auto text-red-400" />}
                </td>
              ))}
            </tr>

            {/* Search Grounding */}
            <tr className="hover:bg-[#34384A]/50 transition-colors">
              <td className="px-4 py-3 text-sm font-medium text-white sticky left-0 bg-[#2A2D3A] z-10">
                Search Grounding
              </td>
              {models.map((model) => (
                <td key={model.name} className="px-4 py-3 text-center">
                  {model.searchGrounding ? <CheckIcon className="w-6 h-6 mx-auto text-green-400" /> : <MinusIcon className="w-6 h-6 mx-auto text-red-400" />}
                </td>
              ))}
            </tr>

            {/* Fine-Tuning */}
            <tr className="hover:bg-[#34384A]/50 transition-colors">
              <td className="px-4 py-3 text-sm font-medium text-white sticky left-0 bg-[#2A2D3A] z-10">
                Fine-Tuning API
              </td>
              {models.map((model) => (
                <td key={model.name} className="px-4 py-3 text-center">
                  {model.fineTuning ? <CheckIcon className="w-6 h-6 mx-auto text-green-400" /> : <MinusIcon className="w-6 h-6 mx-auto text-red-400" />}
                </td>
              ))}
            </tr>

            {/* Safety Guardrails */}
            <tr className="hover:bg-[#34384A]/50 transition-colors">
              <td className="px-4 py-3 text-sm font-medium text-white sticky left-0 bg-[#2A2D3A] z-10">
                Safety Guardrails
              </td>
              {models.map((model) => (
                <td key={model.name} className="px-4 py-3 text-center">
                  {model.safetyGuardrails ? <CheckIcon className="w-6 h-6 mx-auto text-green-400" /> : <MinusIcon className="w-6 h-6 mx-auto text-red-400" />}
                </td>
              ))}
            </tr>

            {/* Pricing Header */}
            <tr className="bg-[#1C1F2A]">
              <td colSpan={models.length + 1} className="px-4 py-2 text-xs font-semibold text-[#00A9CE] uppercase tracking-wider">
                Pricing (per Million Tokens)
              </td>
            </tr>

            {/* Input Price */}
            <tr className="hover:bg-[#34384A]/50 transition-colors">
              <td className="px-4 py-3 text-sm font-medium text-white sticky left-0 bg-[#2A2D3A] z-10">
                Input
              </td>
              {models.map((model) => (
                <td key={model.name} className="px-4 py-3 text-center text-sm text-gray-300 font-mono">
                  {model.inputPrice}
                </td>
              ))}
            </tr>

            {/* Output Price */}
            <tr className="hover:bg-[#34384A]/50 transition-colors">
              <td className="px-4 py-3 text-sm font-medium text-white sticky left-0 bg-[#2A2D3A] z-10">
                Output
              </td>
              {models.map((model) => (
                <td key={model.name} className="px-4 py-3 text-center text-sm text-gray-300 font-mono">
                  {model.outputPrice}
                </td>
              ))}
            </tr>

            {/* Caching Price */}
            <tr className="hover:bg-[#34384A]/50 transition-colors">
              <td className="px-4 py-3 text-sm font-medium text-white sticky left-0 bg-[#2A2D3A] z-10">
                Context Caching
              </td>
              {models.map((model) => (
                <td key={model.name} className="px-4 py-3 text-center text-sm text-gray-300 font-mono">
                  {model.cachingPrice}
                </td>
              ))}
            </tr>
            
            {/* Strengths Row */}
            <tr className="bg-[#1C1F2A]">
              <td className="px-4 py-3 text-sm font-medium text-white sticky left-0 bg-[#1C1F2A] z-10">
                Strengths
              </td>
              {models.map((model) => (
                <td key={model.name} className="px-4 py-3 text-center text-sm text-gray-300 text-pretty" style={{ minWidth: '140px' }}>
                  {model.strengths}
                </td>
              ))}
            </tr>

          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-400">
        <div className="flex items-center gap-2">
          <CheckIcon className="w-5 h-5 text-green-400" /> <span>Supported</span>
        </div>
        <div className="flex items-center gap-2">
          <MinusIcon className="w-5 h-5 text-red-400" /> <span>Not Supported</span>
        </div>
      </div>

      {/* Notes */}
      <div className="mt-8 bg-[#2A2D3A]/50 p-6 rounded-lg">
        <h3 className="text-lg font-bold text-[#00A9CE] mb-3">Notes</h3>
        <ul className="space-y-2 text-sm text-gray-300">
          <li><strong>Context Window:</strong> Maximum number of tokens (roughly 4 characters per token) the model can process in a single request.</li>
          <li><strong>Native Code Execution:</strong> Ability to run code in a sandboxed environment (e.g., GPT-4o) vs. via tool-calling.</li>
          <li><strong>Image Generation:</strong> Access to a state-of-the-art image generation model within the same ecosystem.</li>
          <li><strong>Fine-Tuning API:</strong> Availability of an API for customizing the model on your own data.</li>
          <li><strong>Safety Guardrails:</strong> Focus on Constitutional AI principles and highly configurable safety features.</li>
          <li><strong>Search Grounding:</strong> Native integration with web search to provide up-to-date information.</li>
          <li><strong>Real-time Data:</strong> Access to live data feeds (e.g., Grok's X/Twitter integration).</li>
          <li><strong>Context Caching:</strong> Reduced pricing for repeated tokens in the context (Read/Write pricing for Claude).</li>
          <li><strong>Pricing:</strong> Approximate costs as of October 2025. Gemini prices are tiered based on context size and modality. Actual pricing may vary.</li>
        </ul>
      </div>
    </div>
  );
};

export default CapabilitiesPage;