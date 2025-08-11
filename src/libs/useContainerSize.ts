import { useEffect, useState, useRef } from 'react';
import { breakpoints } from '@carbon/layout';
import { calcRemToPx } from './helpers';

type SizeClass = 'sm' | 'md' | 'lg' | 'xl' | 'max';

interface UseContainerSizeOptions {
  /**
   * Record<SizeClass, number> is a TypeScript utility type that creates an object type where:
   * - All keys are from SizeClass ('sm', 'md', 'lg', 'xl', 'max')
   * - All values are number
   * All keys are from SizeClass ('sm', 'md', 'lg', 'xl', 'max')
   * - So: { sm: number; md: number; lg: number; xl: number; max: number; }
   *
   * Partial<...> utility type makes all properties of the object optional.
   * - So: { sm?: number; md?: number; lg?: number; xl?: number; max?: number; }
   */
  customBreakpoints?: Partial<Record<SizeClass, number>>;
  defaultSize?: SizeClass;
}

export const useContainerSize = (options?: UseContainerSizeOptions) => {
  const ref = useRef<HTMLDivElement>(null); // Container reference
  const [size, setSize] = useState<SizeClass>(options?.defaultSize || 'max');

  // Set the appropriate breakpoint:
  // - Either based on the provided option
  // - Or from the current breakpoint (converted from rem to px)
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
    xl:
      options?.customBreakpoints?.xl ??
      calcRemToPx(parseInt(breakpoints?.xl?.width, 10)),
  };

  useEffect(() => {
    if (!ref.current) return;

    // Teach the observer what to do ...
    const observer = new ResizeObserver((entries) => {
      const width = entries[0].contentRect.width; // Target entry's width

      // Find out what's the closest possible breakpoint to container's width
      if (width < effectiveBreakpoints.sm) {
        setSize('sm');
      } else if (width < effectiveBreakpoints.md) {
        setSize('md');
      } else if (width < effectiveBreakpoints.lg) {
        setSize('lg');
      } else if (width < effectiveBreakpoints.xl) {
        setSize('xl');
      } else {
        setSize('max');
      }
    });

    observer.observe(ref.current); // Attach observer to the reference

    return () => {
      // Disconner observer when the component is destroyed
      observer.disconnect();
    };
  }, [
    effectiveBreakpoints.sm,
    effectiveBreakpoints.md,
    effectiveBreakpoints.lg,
    effectiveBreakpoints.xl,
  ]);

  return {
    containerRef: ref, // Reference to component container
    activeBreakpoint: size, // Closest possible breakpoint to container's width
  };
};
