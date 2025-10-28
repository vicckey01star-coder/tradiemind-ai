
import React from 'react';
import { BrainCircuitIcon } from './Icons';

export const Header: React.FC = () => {
  return (
    <header className="bg-brand-surface border-b border-brand-border p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <BrainCircuitIcon className="w-8 h-8 text-brand-primary" />
          <h1 className="text-xl md:text-2xl font-bold text-white">TradeMind AI</h1>
        </div>
        <div className="text-xs md:text-sm text-brand-secondary">Near-Certain / Hedged MVP</div>
      </div>
    </header>
  );
};
