/**
 * Custom hook for tracking TileBanner's container width
 * and returning the most appropriate breakpoint.
 *
 * Breakpoints:
 *  sm  — container < 320px
 *  md  — 320px <= container < 500px
 *  lg  — container >= 500px
 */

import { useEffect, useRef, useState } from 'react';

type TBN_SizeClass = 'sm' | 'md' | 'lg';

const TBN_BREAKPOINTS = {
  sm: 320,
  md: 500,
} as const;

export const useTBNContainerSize = <T extends HTMLElement>() => {
  const containerRef = useRef<T>(null);
  const [activeBreakpoint, setActiveBreakpoint] = useState<TBN_SizeClass>('lg');

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      const width = entries[0].contentRect.width;

      console.log('Container width:', width);

      if (width < TBN_BREAKPOINTS.sm) {
        setActiveBreakpoint('sm');
      } else if (width < TBN_BREAKPOINTS.md) {
        setActiveBreakpoint('md');
      } else {
        setActiveBreakpoint('lg');
      }
    });

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return {
    containerRef,
    activeBreakpoint,
  };
};
