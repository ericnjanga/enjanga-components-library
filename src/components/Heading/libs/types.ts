export type HeadingLevelProps = 1 | 2 | 3 | 4 | 5 | 6;

export type HeadingProps = {
  level: HeadingLevelProps;
  children: React.ReactNode;
  className?: string;
};
