/**
 * CustomQuotes:
 * ---------------
 * Rotates through a list of quotes on a timer.
 */
import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { Quotes } from "@carbon/icons-react";
import { SkeletonAnimation } from "../SkeletonAnimation";
import { CQ_propsType, CQ_quote_propsType } from "./libs/types";
import { getRandomQuote } from "./libs/functionUtils";
import { CMSRichText } from "../CMSRichText";

const CustomQuotes = ({
  className,
  quotes,
  rotationTimer = 10, // ✅ seconds (default 10s)
}: CQ_propsType) => {
  // Track only the current quote; functional updates provide the previous value.
  const [currentQuote, setCurrentQuote] = useState<
    CQ_quote_propsType | undefined
  >(quotes && quotes.length > 0 ? quotes[0] : undefined);

  /**
   * Initialize with a random quote once quotes are available.
   */
  useEffect(() => {
    if (quotes?.length > 0) {
      const initialQuote = getRandomQuote({
        quotes,
        previousQuote: undefined,
      });
      if (initialQuote) {
        setCurrentQuote(initialQuote);
      }
    }
  }, [quotes]);

  /**
   * Rotate quotes every `rotationTimer` seconds.
   * Only runs if there are 2 or more quotes.
   */
  useEffect(() => {
    if (!quotes || quotes.length <= 1) return;

    // ✅ Convert seconds → milliseconds
    const intervalMs = rotationTimer * 1000;

    const intervalId = setInterval(() => {
      setCurrentQuote((previousQuote) =>
        getRandomQuote({ quotes, previousQuote })
      );
    }, intervalMs);

    return () => clearInterval(intervalId);
  }, [quotes, rotationTimer]);

  /**
   * Show skeleton if there are no quotes yet.
   */
  if (!quotes || quotes.length === 0) {
    return <SkeletonAnimation part="body" />;
  }

  return (
    <div className={clsx(className, "custom-quotes")}>
      <Quotes className="custom-quotes__icon" />
      <blockquote className="custom-quotes__text">
        {currentQuote ? (
          <CMSRichText data={currentQuote.description} />
        ) : (
          <SkeletonAnimation part="body" />
        )}
      </blockquote>
      <hr className="custom-quotes__hr" />
    </div>
  );
};

export default CustomQuotes;
