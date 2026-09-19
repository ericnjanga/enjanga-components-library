import { footerFixture } from '../Footer/fixtures';
import {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react';
import { LinkProvider, type LinkProps } from '../../../providers/LinkProvider';
import { PageNavbar, NavbarThemeToggle } from '../../../components/Navbar';
import { HomePage, type HomePageProps } from '../../../components/HomePage';
import { CaseStudiesPage } from '../../../components/CaseStudiesPage';
import { CaseStudyPage } from '../../../components/CaseStudyPage';
import { Button } from '../../../components/Button';
import { Footer } from '../../../components/Footer';
import '../../../components/Footer/_Footer.scss';
import { caseStudiesPageFixture } from '../CaseStudiesPage/fixtures';
import '../../../components/CaseStudyPage/_CaseStudyPage.scss';

const items = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'expertise', label: 'Expertise', href: '/#expertise' },
  { id: 'about', label: 'About', href: '/#about' },
  { id: 'case-studies', label: 'Case Studies', href: '/case-studies' },
];
const studies = caseStudiesPageFixture.caseStudies.map((study) => ({
  ...study,
  caseStudyHref: new URL(study.caseStudyHref!, 'http://preview.local').pathname,
}));
const Navigation = createContext<(href: string) => void>(() => {});

function previewUrl(href: string) {
  const destination = new URL(href, window.location.origin);
  const preview = new URL(window.location.href);
  preview.searchParams.set('route', destination.pathname);
  preview.hash = destination.hash;
  return preview.pathname + preview.search + preview.hash;
}

const PreviewLink = forwardRef<HTMLAnchorElement, LinkProps>(
  function PreviewLink({ href, onClick, ...props }, ref) {
    const navigate = useContext(Navigation);
    const internal = href.startsWith('/') && !href.startsWith('//');
    return (
      <a
        {...props}
        data-navigation-href={internal ? href : undefined}
        ref={ref}
        href={internal ? previewUrl(href) : href}
        onClick={(event) => {
          onClick?.(event);
          if (
            !internal ||
            event.defaultPrevented ||
            event.button !== 0 ||
            event.metaKey ||
            event.ctrlKey ||
            event.altKey ||
            event.shiftKey ||
            props.download != null ||
            (props.target && props.target !== '_self')
          )
            return;
          event.preventDefault();
          navigate(href);
        }}
      />
    );
  }
);

/** Preview-only router: logical routes live in a query parameter so Storybook's iframe URL stays intact. */
export function PortfolioPreview({
  home,
  initialPath = '/',
}: {
  home: HomePageProps;
  initialPath?: string;
}) {
  const [location, setLocation] = useState(() => ({
    pathname:
      new URLSearchParams(window.location.search).get('route') || initialPath,
    hash: window.location.hash,
    key: 0,
    smooth: false,
    restoreY: undefined as number | undefined,
  }));
  const [theme, setTheme] = useState<'light' | 'dark'>(() =>
    document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
  );
  const navigate = useCallback((href: string) => {
    const target = new URL(href, window.location.origin);
    window.history.replaceState(
      { ...window.history.state, previewScrollY: window.scrollY },
      ''
    );
    if (
      previewUrl(href) !==
      window.location.pathname + window.location.search + window.location.hash
    )
      window.history.pushState(
        { ...window.history.state, previewScrollY: 0 },
        '',
        previewUrl(href)
      );
    setLocation((previous) => ({
      pathname: target.pathname,
      hash: target.hash,
      key: previous.key + 1,
      smooth: previous.pathname === target.pathname,
      restoreY: undefined,
    }));
  }, []);
  useEffect(() => {
    const previousRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';
    const save = () => {
      window.history.replaceState(
        { ...window.history.state, previewScrollY: window.scrollY },
        ''
      );
    };
    window.addEventListener('scroll', save, { passive: true });
    const handleBack = () =>
      setLocation((previous) => ({
        pathname:
          new URLSearchParams(window.location.search).get('route') ||
          initialPath,
        hash: window.location.hash,
        key: previous.key + 1,
        smooth: false,
        restoreY: window.history.state?.previewScrollY ?? 0,
      }));
    window.addEventListener('popstate', handleBack);
    return () => {
      window.removeEventListener('popstate', handleBack);
      window.removeEventListener('scroll', save);
      window.history.scrollRestoration = previousRestoration;
    };
  }, [initialPath]);
  useLayoutEffect(() => {
    const frame = requestAnimationFrame(() => {
      const behavior =
        location.smooth &&
        !window.matchMedia('(prefers-reduced-motion: reduce)').matches
          ? 'smooth'
          : 'instant';
      let id = '';
      try {
        id = decodeURIComponent(location.hash.slice(1));
      } catch {
        /* Invalid hashes return to page top. */
      }
      const section = id ? document.getElementById(id) : null;
      if (location.restoreY !== undefined)
        window.scrollTo({ top: location.restoreY, behavior: 'instant' });
      else if (section) section.scrollIntoView({ behavior, block: 'start' });
      else window.scrollTo({ top: 0, behavior });
    });
    return () => cancelAnimationFrame(frame);
  }, [location]);
  const study = studies.find(
    (item) => item.caseStudyHref === location.pathname
  );
  const actions = useMemo(
    () => (
      <NavbarThemeToggle
        theme={theme}
        onThemeChange={(next) => {
          setTheme(next);
          document.documentElement.dataset.theme = next;
        }}
      />
    ),
    [theme]
  );

  return (
    <Navigation.Provider value={navigate}>
      <LinkProvider component={PreviewLink}>
        <PageNavbar
          pathname={location.pathname}
          brand="Eric Njanga"
          brandLabel="Eric Njanga home"
          items={items}
          actions={actions}
        />
        {location.pathname === '/' ? (
          <HomePage {...home} />
        ) : location.pathname === '/case-studies' ? (
          <CaseStudiesPage {...caseStudiesPageFixture} caseStudies={studies} />
        ) : study ? (
          <CaseStudyPage title={study.title}>
            <h2>Project overview</h2>
            <p>{study.description}</p>
            <Button href="/case-studies">All case studies</Button>
          </CaseStudyPage>
        ) : (
          <CaseStudyPage title="Page not found">
            <Button href="/">Return home</Button>
          </CaseStudyPage>
        )}
        <Footer {...footerFixture} />
      </LinkProvider>
    </Navigation.Provider>
  );
}
