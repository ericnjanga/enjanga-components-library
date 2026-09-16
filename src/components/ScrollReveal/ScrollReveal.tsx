'use client';

import {
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
} from 'react';
import clsx from 'clsx';

export type ScrollRevealProps = ComponentPropsWithoutRef<'div'>;

/** Reveals direct section/article content once; content remains visible without JS or observer support. */
export function ScrollReveal({
  children,
  className,
  ...props
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const node = ref.current;
    const motion = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    if (!node || motion?.matches || typeof IntersectionObserver === 'undefined')
      return;
    setVisible(false);
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        setVisible(true);
        observer.disconnect();
      },
      { threshold: 0.14, rootMargin: '0px 0px -8% 0px' }
    );
    const handleMotion = () => {
      if (motion?.matches) {
        setVisible(true);
        observer.disconnect();
      }
    };
    observer.observe(node);
    motion?.addEventListener('change', handleMotion);
    return () => {
      observer.disconnect();
      motion?.removeEventListener('change', handleMotion);
    };
  }, []);
  return (
    <div
      {...props}
      ref={ref}
      className={clsx('enj-scroll-reveal', className)}
      data-visible={visible ? 'true' : 'false'}
    >
      {children}
    </div>
  );
}
