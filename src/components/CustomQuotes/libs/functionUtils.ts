import { CQ_quote_propsType } from "./types";

interface getRandomQuote_propsType {
  quotes: CQ_quote_propsType[]; // TODO: Quotes should be of tyoe SmartText;
  previousQuote: CQ_quote_propsType | undefined;
}

// Function to get a random quote that's not the same as the previous one
export const getRandomQuote = ({
  quotes,
  previousQuote,
}: getRandomQuote_propsType): CQ_quote_propsType | undefined => {
  if (quotes.length === 0) return undefined; // Nothing to return
  if (quotes.length === 1) return quotes[0]; // Only one option

  // Exclude the previous quote to avoid repetition
  const availableQuotes = quotes.filter((quote) => quote !== previousQuote);

  // Pick randomly among the remaining quotes
  const randomIndex = Math.floor(Math.random() * availableQuotes.length);
  return availableQuotes[randomIndex];
};
