// @vitest-environment jsdom
import { afterEach, expect, it } from 'vitest';
import { compile } from 'sass';

const shared = compile('src/components/ScrollReveal/_ScrollReveal.scss').css;
const preview = compile('src/components/HomePage/_HomePage.scss', { loadPaths: ['node_modules'] }).css;

afterEach(() => {
  document.head.innerHTML = '';
  document.body.innerHTML = '';
  delete document.documentElement.dataset.enjReveal;
});

it.each([
  ['home styles first', preview + shared],
  ['shared styles first', shared + preview],
])('keeps the preview container visible before hydration with %s', (_, css) => {
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
  document.documentElement.dataset.enjReveal = 'enabled';
  document.body.innerHTML = '<div class="enj-scroll-reveal enj-scroll-reveal--preview"></div><div class="enj-scroll-reveal"></div>';
  const [silhouette, ordinary] = document.body.children;
  // jsdom does not implement browser CSS specificity reliably; check which
  // compiled hiding selectors can apply, then verify the cascade in a browser.
  const rules = Array.from(style.sheet!.cssRules).filter(
    (rule): rule is CSSStyleRule => 'selectorText' in rule
  );
  const hiddenBy = (element: Element) => rules.filter(rule =>
    rule.style.opacity === '0' && element.matches(rule.selectorText)
  );
  expect(hiddenBy(silhouette)).toHaveLength(0);
  expect(hiddenBy(ordinary).length).toBeGreaterThan(0);
  silhouette.setAttribute('data-reveal-ready', 'true');
  expect(hiddenBy(silhouette)).toHaveLength(0);
  expect(rules.some(rule => silhouette.matches(rule.selectorText) &&
    rule.style.transition === 'none' && rule.style.opacity === '1')).toBe(true);
});
