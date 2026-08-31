import React from 'react';
import { HeaderMenuItem } from '@carbon/react';
import { HeaderGlobalAction } from '@carbon/react';
import { BrightnessContrast, Bookmark, Branch } from '@carbon/icons-react';
import Link from 'next/link';

// Sample componant using <HeaderMenuItem />
export const Navigation1 = () => {
  return (
    <>
      <HeaderMenuItem onClick={() => alert('option clicked')}>
        Option 1
      </HeaderMenuItem>
      <HeaderMenuItem onClick={() => alert('option clicked')}>
        Option 2
      </HeaderMenuItem>
      <HeaderMenuItem onClick={() => alert('option clicked')}>
        Option 3
      </HeaderMenuItem>
    </>
  );
};

// Sample componant using <Link />
export const Navigation2 = () => {
  return (
    <>
      <Link
        href=""
        passHref
        onClick={() => alert('option clicked')}
        style={{ padding: '10px 5px' }}
      >
        Option 1
      </Link>
      <Link
        href=""
        passHref
        onClick={() => alert('option clicked')}
        style={{ padding: '10px 5px' }}
      >
        Option 2
      </Link>
      <Link
        href=""
        passHref
        onClick={() => alert('option clicked')}
        style={{ padding: '10px 5px' }}
      >
        Option 3
      </Link>
    </>
  );
};

// Sample componant using <HeaderMenuItem />
export const GlobalBarItems1 = () => {
  return (
    <>
      <HeaderGlobalAction
        onClick={() => alert('option clicked')}
        aria-label="Option 1"
        tooltipAlignment="center"
        className="action-icons"
      >
        <BrightnessContrast size={20} />
      </HeaderGlobalAction>

      <HeaderGlobalAction
        onClick={() => alert('option clicked')}
        aria-label="Option 2"
        tooltipAlignment="center"
        className="action-icons"
      >
        <Bookmark size={20} />
      </HeaderGlobalAction>

      <HeaderGlobalAction
        onClick={() => alert('option clicked')}
        aria-label="Option 3"
        tooltipAlignment="center"
        className="action-icons"
      >
        <Branch size={20} />
      </HeaderGlobalAction>
    </>
  );
};

export const GlobalBarItems2 = () => {
  return (
    <>
      <Link
        href=""
        passHref
        onClick={() => alert('option clicked')}
        style={{ padding: '10px 5px' }}
      >
        Option 1
      </Link>
      <Link
        href=""
        passHref
        onClick={() => alert('option clicked')}
        style={{ padding: '10px 5px' }}
      >
        Option 2
      </Link>
      <Link
        href=""
        passHref
        onClick={() => alert('option clicked')}
        style={{ padding: '10px 5px' }}
      >
        Option 3
      </Link>
    </>
  );
};

export const SampleSVGLogo = ({
  className = '',
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    className={`sample-logo ${className}`}
    viewBox="0 0 820 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="120" height="40" rx="8" fill="#4F46E5" />
    <path d="M30 12L36 28H24L30 12Z" fill="#FFFFFF" />
    <path d="M50 12L56 28H44L50 12Z" fill="#FFFFFF" />
    <path d="M70 12L76 28H64L70 12Z" fill="#FFFFFF" />
    <text
      x="90"
      y="25"
      fontFamily="Arial"
      fontSize="16"
      fontWeight="bold"
      fill="white"
      textAnchor="middle"
    >
      LOGO
    </text>
  </svg>
);

// Sample compoment ...
export const ClickableComponent = ({
  prop1,
  prop2,
  onClickHandler,
  style,
}: {
  prop1: string;
  prop2: string;
  onClickHandler: () => void;
  style?: React.CSSProperties;
}) => (
  <span onClick={onClickHandler} style={style}>
    {prop1} {prop2}
  </span>
);
