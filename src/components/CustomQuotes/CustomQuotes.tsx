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
  rotationTimer = 2 // minutes by default
}: CQ_propsType) => {
  // Both states allow undefined for safer initialization
  const [currentQuote, setCurrentQuote] = useState<CQ_quote_propsType | undefined>(
    quotes && quotes.length > 0 ? quotes[0] : undefined // ✅ sync init avoids flashing undefined
  );
  const [previousQuote, setPreviousQuote] = useState<CQ_quote_propsType | undefined>(undefined);

  /**
   * Initialize current quote when `quotes` changes
   * (this covers the case when quotes load async from an API or CMS)
   */
  useEffect(() => {
    if (quotes?.length > 0) {
      const initialQuote = getRandomQuote({
        quotes,
        previousQuote: undefined
      });
      if (initialQuote) {
        setCurrentQuote(initialQuote);
        setPreviousQuote(initialQuote);
      }
    }
  }, [quotes]);

  /**
   * Set up rotation interval
   * Runs only if we have 2+ quotes to rotate through
   */
  useEffect(() => {
    if (!quotes || quotes.length <= 1) return;

    // Convert minutes → ms
    const intervalMs = rotationTimer * 60 * 1000;

    const intervalId = setInterval(() => {
      rotateQuote({
        quotes,
        previousQuote,
        getRandomQuote,
        setCurrentQuote,
        setPreviousQuote,
        currentQuote
      });
    }, intervalMs);

    return () => clearInterval(intervalId);
  }, [quotes, rotationTimer, previousQuote, currentQuote]);

  /**
   * Handle empty quotes (undefined or [])
   * → Show skeleton animation placeholder
   */
  if (!quotes || quotes.length === 0) {
    return <SkeletonAnimation part="body" />;
  }

  return (
    <div className={clsx(className, 'custom-quotes')}>
      <Quotes className="custom-quotes__icon" />
      <blockquote className="custom-quotes__text">
        {currentQuote ? <CMSRichText data={currentQuote} /> : <SkeletonAnimation part="body" />}
      </blockquote>
      <hr className="custom-quotes__hr" />
    </div>
  );
};

export default CustomQuotes;