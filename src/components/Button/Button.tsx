import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes, type Ref } from 'react';
import clsx from 'clsx';
import { chevronRight, close } from './icons';

type Appearance = { variant?: 'primary' | 'secondary' | 'tertiary'; icon?: 'chevron-right' | 'close' };
/** Providing href renders a native link; otherwise renders a native button. */
export type ButtonProps = Appearance & (
  | (ButtonHTMLAttributes<HTMLButtonElement> & { href?: never })
  | (AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; disabled?: never })
);

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(function Button(
  { variant = 'primary', icon, className, children, ...props }, ref,
) {
  const classes = clsx('enj-button', `enj-button--${variant}`, icon && 'enj-button--with-icon', className);
  const content = <><span className="enj-button__label">{children}</span>
    {icon && <span className="enj-button__icon" style={{ maskImage: `url("${icon === 'close' ? close : chevronRight}")` }} aria-hidden="true" />}</>;
  if (props.href !== undefined) {
    return <a {...props} ref={ref as Ref<HTMLAnchorElement>} className={classes}
      rel={props.rel ?? (props.target === '_blank' ? 'noopener noreferrer' : undefined)}>{content}</a>;
  }
  return <button {...props} type={props.type ?? 'button'} ref={ref as Ref<HTMLButtonElement>} className={classes}>{content}</button>;
});
