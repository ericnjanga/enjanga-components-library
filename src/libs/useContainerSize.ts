/**
 * Custom hook for tracking a component's wrapper and assigning the most appropriate breakpoint.
 * -----------------------------
 */

import { useEffect, useState, useRef } from "react";
import { breakpoints } from "@carbon/layout";
import { calcRemToPx } from "./helpers";

type SizeClass = "sm" | "md" | "lg" | "xlg" | "max";

interface UseContainerSizeOptions {
  /**
   * Record<SizeClass, number> is a TypeScript utility type that creates an object type where:
   * - All keys are from SizeClass ('sm', 'md', 'lg', 'xlg', 'max')
   * - All values are number
   * All keys are from SizeClass ('sm', 'md', 'lg', 'xlg', 'max')
   * - So: { sm: number; md: number; lg: number; xlg: number; max: number; }
   *
   * Partial<...> utility type makes all properties of the object optional.
   * - So: { sm?: number; md?: number; lg?: number; xlg?: number; max?: number; }
   */
  customBreakpoints?: Partial<Record<SizeClass, number>>;
  defaultSize?: SizeClass;
}

export const useContainerSize = <T extends HTMLElement>(
  options?: UseContainerSizeOptions
) => {
  const ref = useRef<T>(null); // Container reference
  const [size, setSize] = useState<SizeClass>(options?.defaultSize || "max");

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
    xlg:
      options?.customBreakpoints?.xlg ??
      calcRemToPx(parseInt(breakpoints?.xlg?.width, 10)),
  };

  useEffect(() => {
    if (!ref.current) return;

    // Teach the observer what to do ...
    const observer = new ResizeObserver((entries) => {
      const width = entries[0].contentRect.width; // Target entry's width
      let nextSize: SizeClass;

      // Find out what's the closest possible breakpoint to container's width
      if (width < effectiveBreakpoints.sm) {
        nextSize = "sm";
      } else if (width < effectiveBreakpoints.md) {
        nextSize = "md";
      } else if (width < effectiveBreakpoints.lg) {
        nextSize = "lg";
      } else if (width < effectiveBreakpoints.xlg) {
        nextSize = "xlg";
      } else {
        nextSize = "max";
      }

      setSize((currentSize) =>
        currentSize === nextSize ? currentSize : nextSize
      );
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
    effectiveBreakpoints.xlg,
  ]);

  return {
    containerRef: ref, // Reference to component container
    activeBreakpoint: size, // Closest possible breakpoint to container's width
  };
};
