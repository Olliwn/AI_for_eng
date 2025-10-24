import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import CapabilitiesPage from './pages/CapabilitiesPage';
import PromptEngineeringPage from './pages/PromptEngineeringPage';
import ContextEngineeringPage from './pages/ContextEngineeringPage';
import MCPServersPage from './pages/MCPServersPage';
import AgentsPage from './pages/AgentsPage';
import AgentDemoPage from './pages/AgentDemoPage';
import InternalDataPage from './pages/InternalDataPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen font-sans">
        <Header />
        <main className="p-4 sm:p-6 md:p-8">
          <Routes>
            <Route path="/" element={<Navigate to="/capabilities" replace />} />
            <Route path="/capabilities" element={<CapabilitiesPage />} />
            <Route path="/prompt-engineering" element={<PromptEngineeringPage />} />
            <Route path="/context-engineering" element={<ContextEngineeringPage />} />
            <Route path="/internal-data" element={<InternalDataPage />} />
            <Route path="/mcp-servers" element={<MCPServersPage />} />
            <Route path="/agents" element={<AgentsPage />} />
            <Route path="/agent-demo" element={<AgentDemoPage />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
};

export default App;