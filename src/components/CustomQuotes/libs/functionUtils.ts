
interface getRandomQuote_propsType {
  quotes: string[]; 
  previousQuote: string;
};

interface rotateQuote_propsType {
  quotes: string[]; 
  previousQuote: string;
  getRandomQuote: (props: getRandomQuote_propsType) => string;
  setCurrentQuote: React.Dispatch<React.SetStateAction<string>>;
  setPreviousQuote: React.Dispatch<React.SetStateAction<string>>;
  currentQuote: string;
};

  // Function to get a random quote that's not the same as the previous one
export const getRandomQuote = ({ quotes, previousQuote }: getRandomQuote_propsType): string => {
  if (quotes.length === 0) return '';
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