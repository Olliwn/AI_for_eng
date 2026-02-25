import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import CapabilityTrajectoryPage from './pages/CapabilityTrajectoryPage';
import CapabilitiesPage from './pages/CapabilitiesPage';
import AgentsPage from './pages/AgentsPage';
import MCPServersPage from './pages/MCPServersPage';
import OpenEcosystemPage from './pages/OpenEcosystemPage';
import ContextEngineeringPage from './pages/ContextEngineeringPage';
import PromptEngineeringPage from './pages/PromptEngineeringPage';
import InternalDataPage from './pages/InternalDataPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen font-sans">
        <Header />
        <main className="p-4 sm:p-6 md:p-8">
          <Routes>
            <Route path="/" element={<Navigate to="/trajectory" replace />} />
            <Route path="/trajectory" element={<CapabilityTrajectoryPage />} />
            <Route path="/capabilities" element={<CapabilitiesPage />} />
            <Route path="/agents" element={<AgentsPage />} />
            <Route path="/mcp-servers" element={<MCPServersPage />} />
            <Route path="/open-ecosystem" element={<OpenEcosystemPage />} />
            <Route path="/context-engineering" element={<ContextEngineeringPage />} />
            <Route path="/prompt-engineering" element={<PromptEngineeringPage />} />
            <Route path="/internal-data" element={<InternalDataPage />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
};

export default App;
