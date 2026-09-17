/** Runs before hydration. Only uninitialized reveals fall back after 1.5 seconds. */
export const scrollRevealBootstrap = `(function () {
  var root = document.documentElement;
  if (root.dataset.enjReveal) return;
  if (!('IntersectionObserver' in window) ||
      !window.matchMedia || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  try {
    window.setTimeout(function () {
      document.querySelectorAll('.enj-scroll-reveal:not([data-reveal-ready])').forEach(function (node) {
        node.setAttribute('data-reveal-fallback', 'true');
      });
      if (root.dataset.enjReveal === 'enabled') root.dataset.enjReveal = 'expired';
    }, 1500);
    root.dataset.enjRevealRoute = window.location.pathname;
    root.dataset.enjReveal = 'enabled';
  } catch (_) {
    root.dataset.enjReveal = 'expired';
  }
})();`;
