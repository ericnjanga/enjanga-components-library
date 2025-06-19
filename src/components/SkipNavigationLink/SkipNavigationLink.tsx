import clsx from "clsx";
// Styles are imported globally

const SkipNavigationLink = ({ destinationId }: { destinationId: string }) => (
  <a 
    href={`#${destinationId}`} 
    className={clsx('enj-skipLink')}
    onClick={(e) => {
      e.preventDefault();
      document.querySelector('main')?.focus();
    }}
  >
    Skip to content
  </a>
);

export default SkipNavigationLink;