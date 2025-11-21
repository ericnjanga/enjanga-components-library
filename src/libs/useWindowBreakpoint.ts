// useWindowBreakpoint.ts
import { useEffect, useState } from 'react';
import { breakpoints } from '@carbon/layout';
import { calcRemToPx } from './helpers';

type SizeClass = 'sm' | 'md' | 'lg' | 'xlg' | 'max';

interface UseWindowBreakpointOptions {
  customBreakpoints?: Partial<Record<SizeClass, number>>;
  defaultSize?: SizeClass;
}

export const useWindowBreakpoint = (options?: UseWindowBreakpointOptions) => {
  const [size, setSize] = useState<SizeClass>(options?.defaultSize || 'max');

  const effectiveBreakpoints = {
    sm:
      options?.customBreakpoints?.sm ??
      calcRemToPx(parseInt(breakpoints?.sm?.width, 10)),
    md:
      options?.customBreakpoints?.md ??
      calcRemToPx(parseInt(breakpoints?.md?.width, 10)),
    lg:
      options?.customBreakpoints?.lg ??
      calcRemToPx(parseInt(breakpoints?.lg?.width, 10)),
    xlg:
      options?.customBreakpoints?.xlg ??
      calcRemToPx(parseInt(breakpoints?.xlg?.width, 10)),
  };

  useEffect(() => {
    // Guard for SSR / Next.js
    if (typeof window === 'undefined') return;

    const updateSize = () => {
      const width = window.innerWidth;

      if (width < effectiveBreakpoints.sm) {
        setSize('sm');
      } else if (width < effectiveBreakpoints.md) {
        setSize('md');
      } else if (width < effectiveBreakpoints.lg) {
        setSize('lg');
      } else if (width < effectiveBreakpoints.xlg) {
        setSize('xlg');
      } else {
        setSize('max');
      }
    };

    // Set initial size
    updateSize();

    window.addEventListener('resize', updateSize);

    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, [
    effectiveBreakpoints.sm,
    effectiveBreakpoints.md,
    effectiveBreakpoints.lg,
    effectiveBreakpoints.xlg,
  ]);

  return {
    activeBreakpoint: size,
  };
};
