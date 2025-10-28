
import { GoogleGenAI, Type } from "@google/genai";
import { Signal } from '../types';

const API_KEY = process.env.API_KEY;
if (!API_KEY) {
  // This is a fallback for development environments where the key might not be set.
  // In a real production environment, this should throw an error or be handled securely.
  console.warn("API_KEY environment variable not set. Using placeholder.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const signalSchema = {
  type: Type.OBJECT,
  properties: {
    asset: { type: Type.STRING, description: 'The financial instrument, e.g., "EUR/USD" or "BTC/USD".' },
    signal: { type: Type.STRING, description: 'The trading signal: "BUY", "SELL", or "HOLD".', enum: ["BUY", "SELL", "HOLD"]},
    confidence: { type: Type.NUMBER, description: 'The model\'s confidence in this signal, from 0.0 to 1.0.' },
    expectedMove: { type: Type.NUMBER, description: 'The expected price move in percentage, e.g., 0.5 for 0.5%.' },
    timeframe: { type: Type.STRING, description: 'The timeframe for the prediction, e.g., "15m", "1h", "4h".' },
    recommendedHedge: { type: Type.STRING, description: 'The recommended hedging strategy, e.g., "Protective Put Option".' },
    hedgeCost: { type: Type.NUMBER, description: 'The estimated cost of the hedge as a percentage of the position, e.g., 0.1 for 0.1%.' },
    reasoning: { type: Type.STRING, description: 'A brief, 1-2 sentence reasoning for the signal based on technical or market indicators.' },
  },
  required: ['asset', 'signal', 'confidence', 'expectedMove', 'timeframe', 'recommendedHedge', 'hedgeCost', 'reasoning'],
};

export const generateSignal = async (): Promise<Signal> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "Act as the TradeMind AI Signal Engine. Generate a single, realistic short-term trading signal for a popular financial asset (like a major FX pair, cryptocurrency, or stock index). Provide all required fields in the JSON schema.",
      config: {
        responseMimeType: "application/json",
        responseSchema: signalSchema,
      },
    });

    const text = response.text.trim();
    const signalData = JSON.parse(text);
    
    // Basic validation to ensure the response shape matches the Signal interface
    if (typeof signalData.confidence !== 'number' || typeof signalData.asset !== 'string') {
        throw new Error("Invalid response format from Gemini API");
    }

    return signalData as Signal;
  } catch (error) {
    console.error("Error generating signal from Gemini:", error);
    throw new Error("Failed to communicate with the AI Signal Engine.");
  }
};
