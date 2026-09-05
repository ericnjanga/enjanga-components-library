import { forwardRef, type ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';
import { chevronRight, close } from './icons';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual emphasis; defaults to primary. */
  variant?: 'primary' | 'secondary' | 'tertiary';
  /** Decorative trailing icon. Keep the action's name in children. */
  icon?: 'chevron-right' | 'close';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', icon, type = 'button', className, children, ...props },
  ref,
) {
  return (
    <button
      {...props}
      ref={ref}
      type={type}
      className={clsx('enj-button', `enj-button--${variant}`, icon && 'enj-button--with-icon', className)}
    >
      <span className="enj-button__label">{children}</span>
      {icon && <span className="enj-button__icon" style={{ maskImage: `url("${icon === 'close' ? close : chevronRight}")` }} aria-hidden="true" />}
    </button>
  );
});
