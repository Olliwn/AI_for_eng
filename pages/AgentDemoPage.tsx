import React from 'react';

const AgentDemoPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto text-center mt-20">
      <div className="bg-[#2A2D3A] rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-[#00A9CE] mb-4">Agent Demonstration</h1>
        <p className="text-gray-300 text-lg">
          This is a placeholder for a custom agent demonstration.
        </p>
        <p className="text-gray-400 mt-2">
          This component will be built separately to integrate with internal APIs and showcase a live agent performing engineering tasks.
        </p>
        <div className="mt-8">
            <div className="animate-pulse flex space-x-4 justify-center">
                <div className="rounded-full bg-gray-700 h-10 w-10"></div>
                <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-gray-700 rounded"></div>
                <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-gray-700 rounded col-span-2"></div>
                    <div className="h-2 bg-gray-700 rounded col-span-1"></div>
                    </div>
                    <div className="h-2 bg-gray-700 rounded"></div>
                </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AgentDemoPage;