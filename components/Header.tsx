import React from 'react';
import { NavLink } from 'react-router-dom';
import { BrainIcon } from './IconComponents';

const Header: React.FC = () => {
  const navItems = [
    { path: '/capabilities', label: 'Capabilities' },
    { path: '/prompt-engineering', label: 'Prompting' },
    { path: '/context-engineering', label: 'Context' },
    { path: '/internal-data', label: 'Internal Data' },
    { path: '/mcp-servers', label: 'MCP Servers' },
    { path: '/agents', label: 'Agents' },
    { path: '/agent-demo', label: 'Agent Demo' },
  ];

  const linkClasses = "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ease-in-out";
  const activeLinkClasses = "bg-[#00A9CE] text-white shadow-md";
  const inactiveLinkClasses = "text-gray-300 hover:bg-[#2A2D3A] hover:text-[#00A9CE]";

  return (
    <header className="bg-[#181B24]/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-[#00A9CE]">
               <BrainIcon className="h-8 w-8" />
            </div>
            <div className="ml-4 text-gray-100 text-lg font-bold">
              AI in Engineering
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
        <div className="md:hidden overflow-x-auto py-2">
            <div className="flex items-baseline space-x-2 px-2">
               {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => `flex-shrink-0 ${linkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;