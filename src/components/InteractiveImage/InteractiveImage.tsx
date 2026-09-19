'use client';

import {
  useContext,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type MouseEvent,
  type MouseEventHandler,
} from 'react';
import clsx from 'clsx';
import { LibraryImage } from '../../providers/ImageProvider';
import { useCursorLabel } from './useCursorLabel';
import { LinkContext } from '../../providers/LinkProvider';

export interface InteractiveImageProps
  extends Omit<ComponentPropsWithoutRef<'a'>, 'children'> {
  src?: string;
  /** Use a real button for actions such as opening a video dialog. */
  action?: {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
  };
  sizes?: string;
  loading?: 'eager' | 'lazy';
  decoding?: 'async' | 'sync' | 'auto';
  alt: string;
  width?: number;
  height?: number;
  interactionLabel?: string;
  /** Figma image treatment: case studies reveal on hover; Home images dim. */
  variant?: 'product' | 'portrait' | 'case-study';
}

/** Image interaction using the application's LinkProvider, or a native anchor. */
export function InteractiveImage({
  src,
  action,
  loading,
  sizes,
  decoding,
  alt,
  width,
  height,
  href,
  interactionLabel = 'Explore',
  variant = 'product',
  className,
  target,
  rel,
  onClick,
  ...props
}: InteractiveImageProps) {
  const Link = useContext(LinkContext) ?? 'a';
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement | null>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  useCursorLabel(ref, labelRef, Boolean((href || action) && !action?.disabled), Boolean(action));
  const [rippling, setRippling] = useState(false);
  function updatePointer(clientX: number, clientY: number) {
    const node = ref.current;
    if (!node) return;
    const bounds = node.getBoundingClientRect();
    node.style.setProperty('--pointer-x', `${clientX - bounds.left}px`);
    node.style.setProperty('--pointer-y', `${clientY - bounds.top}px`);
  }

  function ripple(event: MouseEvent<HTMLElement>) {
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
  }

  const content = (
    <>
      {src && (
        <span className="enj-interactive-image__picture">
          <LibraryImage
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes={sizes ?? '100vw'}
            loading={loading}
            decoding={decoding}
          />
        </span>
      )}
      {(href || action) && (
        <span ref={labelRef} className="enj-interactive-image__label" aria-hidden="true">
          {interactionLabel}
        </span>
      )}
      {(href || action) && (
        <span className="enj-interactive-image__ripple" aria-hidden="true" />
      )}
    </>
  );
  const classes = clsx('enj-interactive-image', className);
  if (action)
    return (
      <button
        ref={(node) => {
          ref.current = node;
        }}
        type="button"
        className={classes}
        disabled={action.disabled}
        aria-label={props['aria-label'] ?? interactionLabel}
        data-variant={variant}
        data-interactive={action.disabled ? 'false' : 'true'}
        data-rippling={rippling ? 'true' : 'false'}
        onClick={(event) => {
          action.onClick?.(event);
          ripple(event);
        }}
        onAnimationEnd={() => setRippling(false)}
      >
        {content}
      </button>
    );
  if (!href)
    return (
      <div className={classes} data-variant={variant} data-interactive="false">
        {content}
      </div>
    );
  return (
    <Link
      {...props}
      ref={(node) => {
        ref.current = node;
      }}
      href={href}
      target={target}
      rel={rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined)}
      aria-label={props['aria-label'] ?? interactionLabel}
      className={classes}
      data-variant={variant}
      data-interactive="true"
      data-rippling={rippling ? 'true' : 'false'}
      onClick={(event) => {
        onClick?.(event);
        ripple(event);
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
