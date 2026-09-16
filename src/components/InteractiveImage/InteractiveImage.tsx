'use client';

import {
  useContext,
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type MouseEvent,
} from 'react';
import clsx from 'clsx';
import { LinkContext } from '../../provider/LinkProvider';

export interface InteractiveImageProps
  extends Omit<ComponentPropsWithoutRef<'a'>, 'children'> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  interactionLabel?: string;
}

/** Image interaction using the application's LinkProvider, or a native anchor. */
export function InteractiveImage({
  src,
  alt,
  width,
  height,
  href,
  interactionLabel = 'Explore',
  className,
  target,
  rel,
  onClick,
  ...props
}: InteractiveImageProps) {
  const Link = useContext(LinkContext) ?? 'a';
  const ref = useRef<HTMLAnchorElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const replaying = useRef(false);
  const [rippling, setRippling] = useState(false);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    []
  );

  function updatePointer(clientX: number, clientY: number) {
    const node = ref.current;
    if (!node) return;
    const bounds = node.getBoundingClientRect();
    node.style.setProperty('--pointer-x', `${clientX - bounds.left}px`);
    node.style.setProperty('--pointer-y', `${clientY - bounds.top}px`);
  }

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (replaying.current) return;
    onClick?.(event);
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      props.download !== undefined
    )
      return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    if (event.detail === 0) {
      ref.current?.style.setProperty('--pointer-x', '50%');
      ref.current?.style.setProperty('--pointer-y', '50%');
    } else updatePointer(event.clientX, event.clientY);
    setRippling(true);
    // New tabs retain native activation and popup behavior.
    if (target && target !== '_self') return;
    event.preventDefault();
    if (timer.current) return;
    timer.current = setTimeout(() => {
      timer.current = null;
      setRippling(false);
      replaying.current = true;
      try {
        ref.current?.click();
      } finally {
        replaying.current = false;
      }
    }, 480);
  }

  const content = (
    <>
      <img src={src} alt={alt} width={width} height={height} />
      {href && (
        <span className="enj-interactive-image__label" aria-hidden="true">
          {interactionLabel}
          <span>↗</span>
        </span>
      )}
      {href && (
        <span className="enj-interactive-image__ripple" aria-hidden="true" />
      )}
    </>
  );
  const classes = clsx('enj-interactive-image', className);
  if (!href)
    return (
      <div className={classes} data-interactive="false">
        {content}
      </div>
    );
  return (
    <Link
      {...props}
      ref={ref}
      href={href}
      target={target}
      rel={rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined)}
      aria-label={props['aria-label'] ?? interactionLabel}
      className={classes}
      data-interactive="true"
      data-rippling={rippling ? 'true' : 'false'}
      onClick={handleClick}
      onPointerMove={(event) => {
        updatePointer(event.clientX, event.clientY);
        props.onPointerMove?.(event);
      }}
      onAnimationEnd={(event) => {
        setRippling(false);
        props.onAnimationEnd?.(event);
      }}
    >
      {content}
    </Link>
  );
}
