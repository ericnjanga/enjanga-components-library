// CustomQuotes props type
// ----------------
  
import type { Node } from '@contentful/rich-text-types';

export interface CQ_propsType {
  quotes: CQ_quote_propsType[]; // TODO: Maybeuotes should be of tyoe SmartText?
  rotationTimer?: number; // in minutes
  className?: string;
}

export type CQ_quote_propsType = { // TODO: Maybeuotes should be of tyoe SmartText?
  sys?: {
      id: string
  },
  description: {
    json: { content: Node[] } 
  }
}; 


