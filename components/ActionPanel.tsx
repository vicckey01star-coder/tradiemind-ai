
import React from 'react';

interface ActionPanelProps {
  onGenerateSignal: () => void;
  onSimulateTrade: () => void;
  isLoading: boolean;
  isTradeable: boolean;
}

export const ActionPanel: React.FC<ActionPanelProps> = ({ 
  onGenerateSignal, 
  onSimulateTrade, 
  isLoading, 
  isTradeable 
}) => {
  return (
    <div className="mt-6 pt-6 border-t border-brand-border flex flex-col sm:flex-row items-center justify-end gap-4">
      <button
        onClick={onGenerateSignal}
        disabled={isLoading}
        className="w-full sm:w-auto px-6 py-3 font-semibold text-white bg-brand-primary rounded-lg shadow-md hover:bg-blue-500 transition-colors duration-200 disabled:bg-gray-600 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {isLoading ? 'Generating...' : 'Generate New Signal'}
      </button>
      <button
        onClick={onSimulateTrade}
        disabled={isLoading || !isTradeable}
        className="w-full sm:w-auto px-6 py-3 font-semibold text-white bg-brand-success rounded-lg shadow-md hover:bg-green-600 transition-colors duration-200 disabled:bg-gray-600/50 disabled:text-gray-400 disabled:cursor-not-allowed"
      >
        Simulate Trade
      </button>
    </div>
  );
};
