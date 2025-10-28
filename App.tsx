
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { ProductType, Signal } from './types';
import { generateSignal } from './services/geminiService';

const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductType>(ProductType.Signal);
  const [currentSignal, setCurrentSignal] = useState<Signal | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');

  const handleGenerateSignal = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setCurrentSignal(null);
    try {
      const signal = await generateSignal();
      setCurrentSignal(signal);
    } catch (err) {
      setError('Failed to generate signal. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);
  
  const handleSimulateTrade = useCallback(() => {
    if (!currentSignal) return;
    setToastMessage(`Trade simulation for ${currentSignal.asset} (${currentSignal.signal}) initiated!`);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  }, [currentSignal]);

  return (
    <div className="min-h-screen bg-brand-bg font-sans flex flex-col">
      <Header />
      <main className="flex-grow p-4 md:p-8">
        <Dashboard
          selectedProduct={selectedProduct}
          onSelectProduct={setSelectedProduct}
          currentSignal={currentSignal}
          isLoading={isLoading}
          error={error}
          onGenerateSignal={handleGenerateSignal}
          onSimulateTrade={handleSimulateTrade}
        />
      </main>
      
      {showToast && (
        <div className="fixed bottom-5 right-5 bg-brand-success text-white py-2 px-4 rounded-lg shadow-lg animate-fade-in-out">
          {toastMessage}
        </div>
      )}

      <style>{`
        @keyframes fade-in-out {
          0%, 100% { opacity: 0; transform: translateY(20px); }
          10%, 90% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-out {
          animation: fade-in-out 3s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default App;
