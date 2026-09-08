import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes, type Ref } from 'react';
import { useContext } from 'react';
import { ButtonLinkContext } from './ButtonLinkProvider';
import clsx from 'clsx';
import { chevronRight, close } from './icons';

type Appearance = { variant?: 'primary' | 'secondary' | 'tertiary'; icon?: 'chevron-right' | 'close' };
/** Providing href renders a link using the optional ButtonLinkProvider adapter; otherwise renders a native button. */
export type ButtonProps = Appearance & (
  | (ButtonHTMLAttributes<HTMLButtonElement> & { href?: never })
  | (AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; disabled?: never })
);

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(function Button(
  { variant = 'primary', icon, className, children, ...props }, ref,
) {
  const LinkComponent = useContext(ButtonLinkContext);
  const classes = clsx('enj-button', `enj-button--${variant}`, icon && 'enj-button--with-icon', className);
  const content = <><span className="enj-button__label">{children}</span>
    {icon && <span className="enj-button__icon" style={{ maskImage: `url("${icon === 'close' ? close : chevronRight}")` }} aria-hidden="true" />}</>;
  if (props.href !== undefined) {
    const Link = LinkComponent ?? 'a';
    return <Link {...props} ref={ref as Ref<HTMLAnchorElement>} className={classes}
      rel={props.rel ?? (props.target === '_blank' ? 'noopener noreferrer' : undefined)}>{content}</Link>;
  }
  return <button {...props} type={props.type ?? 'button'} ref={ref as Ref<HTMLButtonElement>} className={classes}>{content}</button>;
});
