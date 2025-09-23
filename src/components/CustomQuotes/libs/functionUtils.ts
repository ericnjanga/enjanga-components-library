import type { Node } from '@contentful/rich-text-types';
import { CQ_quote_propsType } from './types';

interface getRandomQuote_propsType {
  quotes: CQ_quote_propsType[]; // TODO: Quotes should be of tyoe SmartText; 
  previousQuote: CQ_quote_propsType | undefined;
};

interface rotateQuote_propsType {
  quotes: CQ_quote_propsType[]; // TODO: Quotes should be of tyoe SmartText; 
  previousQuote: CQ_quote_propsType;
  getRandomQuote: (props: getRandomQuote_propsType) => CQ_quote_propsType;
  setCurrentQuote: React.Dispatch<React.SetStateAction<CQ_quote_propsType>>;
  setPreviousQuote: React.Dispatch<React.SetStateAction<CQ_quote_propsType>>;
  currentQuote: CQ_quote_propsType;
};

  // Function to get a random quote that's not the same as the previous one
export const getRandomQuote = ({ quotes, previousQuote }: getRandomQuote_propsType): CQ_quote_propsType | undefined => {
  if (quotes.length === 0) return undefined;
  if (quotes.length === 1) return quotes[0];
  
  const availableQuotes = quotes.filter(quote => quote !== previousQuote);
  const randomIndex = Math.floor(Math.random() * availableQuotes.length);
  return availableQuotes[randomIndex];
};

// Initialize or rotate quote
export const rotateQuote = ({ quotes, previousQuote, getRandomQuote, setCurrentQuote, setPreviousQuote, currentQuote }: rotateQuote_propsType) => {
  if (quotes.length > 0) {
    const newQuote = getRandomQuote({ quotes, previousQuote });
    setPreviousQuote(currentQuote);
    setCurrentQuote(newQuote);
  }
};