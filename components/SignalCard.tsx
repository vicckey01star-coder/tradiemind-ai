
import React from 'react';
import { ProductType, Signal } from '../types';
import { ArrowUpIcon, ArrowDownIcon, ShieldCheckIcon } from './Icons';

interface SignalCardProps {
  signal: Signal;
  productType: ProductType;
}

const getSignalStyles = (signal: 'BUY' | 'SELL' | 'HOLD') => {
  switch (signal) {
    case 'BUY':
      return {
        bg: 'bg-green-500/10',
        text: 'text-brand-success',
        border: 'border-brand-success',
        icon: <ArrowUpIcon className="w-5 h-5" />,
      };
    case 'SELL':
      return {
        bg: 'bg-red-500/10',
        text: 'text-brand-danger',
        border: 'border-brand-danger',
        icon: <ArrowDownIcon className="w-5 h-5" />,
      };
    default:
      return {
        bg: 'bg-gray-500/10',
        text: 'text-brand-secondary',
        border: 'border-brand-secondary',
        icon: <span className="font-bold">-</span>,
      };
  }
};

const ConfidenceBar: React.FC<{ value: number }> = ({ value }) => {
    const percentage = Math.round(value * 100);
    const color = percentage > 75 ? 'bg-brand-success' : percentage > 50 ? 'bg-yellow-500' : 'bg-brand-danger';
    return (
        <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div className={`${color} h-2.5 rounded-full`} style={{ width: `${percentage}%` }}></div>
        </div>
    );
};


export const SignalCard: React.FC<SignalCardProps> = ({ signal, productType }) => {
  const styles = getSignalStyles(signal.signal);
  
  return (
    <div className="animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {/* Left Column */}
            <div>
                <h3 className="text-3xl font-bold text-white">{signal.asset}</h3>
                <div className={`mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full text-lg font-bold ${styles.bg} ${styles.text}`}>
                    {styles.icon}
                    <span>{signal.signal}</span>
                </div>
                
                <div className="mt-4">
                    <label className="text-sm font-medium text-brand-secondary">AI Confidence</label>
                    <div className="flex items-center gap-3 mt-1">
                        <ConfidenceBar value={signal.confidence} />
                        <span className="text-lg font-semibold text-white">{`${(signal.confidence * 100).toFixed(0)}%`}</span>
                    </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-4 text-center">
                    <div>
                        <p className="text-sm text-brand-secondary">Expected Move</p>
                        <p className="text-lg font-semibold text-white">{signal.expectedMove}%</p>
                    </div>
                    <div>
                        <p className="text-sm text-brand-secondary">Timeframe</p>
                        <p className="text-lg font-semibold text-white">{signal.timeframe}</p>
                    </div>
                </div>
            </div>

            {/* Right Column */}
            <div className={`p-4 rounded-lg border ${productType === ProductType.AutoHedged ? 'border-brand-primary shadow-lg bg-blue-500/5' : 'border-brand-border'}`}>
                <div className="flex items-center gap-2">
                    <ShieldCheckIcon className="w-6 h-6 text-brand-primary" />
                    <h4 className="text-lg font-bold text-white">Hedging Strategy</h4>
                </div>
                <p className="mt-2 text-sm text-brand-secondary">
                    {productType === ProductType.AutoHedged 
                        ? 'For this auto-hedged trade, the following protection is applied:'
                        : 'A protective hedge is recommended to limit downside risk:'
                    }
                </p>
                <div className="mt-3 space-y-2">
                    <div className="flex justify-between items-center">
                        <span className="font-medium text-brand-secondary">Type:</span>
                        <span className="font-semibold text-white">{signal.recommendedHedge}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-medium text-brand-secondary">Estimated Cost:</span>
                        <span className="font-semibold text-white">{signal.hedgeCost}%</span>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-brand-border">
            <h4 className="font-semibold text-white">AI Reasoning</h4>
            <p className="text-sm text-brand-secondary italic mt-1">{signal.reasoning}</p>
        </div>
        
        <style>{`
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in {
                animation: fadeIn 0.5s ease-out forwards;
            }
        `}</style>
    </div>
  );
};
