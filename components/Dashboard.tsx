
import React from 'react';
import { ProductSelector } from './ProductSelector';
import { SignalCard } from './SignalCard';
import { ActionPanel } from './ActionPanel';
import { LoadingSpinner } from './LoadingSpinner';
import { ProductType, Signal } from '../types';

interface DashboardProps {
  selectedProduct: ProductType;
  onSelectProduct: (product: ProductType) => void;
  currentSignal: Signal | null;
  isLoading: boolean;
  error: string | null;
  onGenerateSignal: () => void;
  onSimulateTrade: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  selectedProduct,
  onSelectProduct,
  currentSignal,
  isLoading,
  error,
  onGenerateSignal,
  onSimulateTrade
}) => {
  return (
    <div className="container mx-auto max-w-4xl">
      <ProductSelector selectedProduct={selectedProduct} onSelectProduct={onSelectProduct} />
      
      <div className="mt-6 bg-brand-surface rounded-lg border border-brand-border shadow-lg p-6 min-h-[350px] flex flex-col justify-between">
        <div className="flex-grow">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center h-full text-brand-secondary">
              <LoadingSpinner />
              <p className="mt-4 text-lg">Generating AI Signal...</p>
              <p className="text-sm mt-1">The model is analyzing market data.</p>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center h-full text-brand-danger">
              <p className="text-lg font-semibold">Error</p>
              <p>{error}</p>
            </div>
          ) : currentSignal ? (
            <SignalCard signal={currentSignal} productType={selectedProduct} />
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center text-brand-secondary">
              <h2 className="text-2xl font-bold text-white mb-2">Welcome to TradeMind AI</h2>
              <p className="max-w-md">Click "Generate New Signal" to get your first AI-powered trading insight with a recommended hedging strategy.</p>
            </div>
          )}
        </div>
        
        <ActionPanel
          onGenerateSignal={onGenerateSignal}
          onSimulateTrade={onSimulateTrade}
          isLoading={isLoading}
          isTradeable={!!currentSignal}
        />
      </div>
    </div>
  );
};
