/**
 * CustomQuotes:
 * ---------------
 * The CustomQuotes ...
 */

import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { Quotes } from '@carbon/icons-react'; 
import { SkeletonAnimation } from '../SkeletonAnimation'; 
import { CQ_propsType, CQ_quote_propsType } from './libs/types'; 
import { getRandomQuote, rotateQuote } from './libs/functionUtils'; 
import { CMSRichText } from '../CMSRichText';

const CustomQuotes = ({ 
  className,
  quotes, 
  rotationTimer = 2 
}: CQ_propsType) => {
  const [currentQuote, setCurrentQuote] = useState<CQ_quote_propsType | undefined>(undefined);
  const [previousQuote, setPreviousQuote] = useState<CQ_quote_propsType | undefined>(undefined);

  // Initialize on component mount
  useEffect(() => {
    if (quotes.length > 0) {
      const initialQuote = getRandomQuote({
        quotes,
        previousQuote: undefined // Start with empty previous quote
      });
      setCurrentQuote(initialQuote);
      setPreviousQuote(initialQuote);
    }
  }, [quotes]); // Added quotes dependency

  // Set up rotation timer - using functional updates to avoid stale closures
  useEffect(() => {
    if (quotes.length <= 1) return;
    
    const intervalMs = rotationTimer * 60 * 1000;
    const intervalId = setInterval(() => {
      // Use functional updates to get latest state
      setCurrentQuote(prevCurrent => {
        const newQuote = getRandomQuote({
          quotes,
          previousQuote: prevCurrent
        });
        setPreviousQuote(prevCurrent); // Update previous quote
        return newQuote;
      });
    }, intervalMs);

    return () => clearInterval(intervalId);
  }, [quotes, rotationTimer]); // Removed currentQuote dependency

  // Handle empty quotes array
  if (quotes.length === 0) {
    return (
      <>
        <SkeletonAnimation part="body" />
      </>
    );
  }

  return (
    <>
      <div className={clsx(className, 'custom-quotes')}>
        <Quotes className="custom-quotes__icon" />
        <blockquote className="custom-quotes__text">
          <CMSRichText data={currentQuote} /> 
        </blockquote>
        <hr className="custom-quotes__hr" />
      </div>
    </>
  );
};

export default CustomQuotes;