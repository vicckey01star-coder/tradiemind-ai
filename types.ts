
export enum ProductType {
  Signal = 'Signal Mode',
  AutoHedged = 'Auto-Hedged Trade',
  StructuredNote = 'Guaranteed Structured Note',
}

export interface Signal {
  asset: string;
  signal: 'BUY' | 'SELL' | 'HOLD';
  confidence: number;
  expectedMove: number;
  timeframe: string;
  recommendedHedge: string;
  hedgeCost: number;
  reasoning: string;
}
