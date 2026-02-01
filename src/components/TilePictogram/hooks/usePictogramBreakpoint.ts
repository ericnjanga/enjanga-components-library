import { useEffect, useRef, useState } from 'react';

// Component-specific hook: returns a ref for the wrapper and
// a class name depending on width threshold (400px).
export const usePictogramBreakpoint = (threshold = 400) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeClass, setActiveClass] = useState('enj-PictogramTile-md');

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => {
      const width = el.getBoundingClientRect().width;
      setActiveClass(width < threshold ? 'enj-PictogramTile-sm' : 'enj-PictogramTile-md');
    };

    update();
    const ro = new ResizeObserver(() => update());
    ro.observe(el);
    return () => ro.disconnect();
  }, [threshold]);

  return { containerRef, activeClass } as const;
};
