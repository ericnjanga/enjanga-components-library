/** Shared signal for explicit section scrolling, independent of URL hash updates. */
export const sectionNavigationEvent = 'enj:section-navigation';
let navigating = false;
export const isSectionNavigating = () => navigating;
export function setSectionNavigating(value: boolean) {
  navigating = value;
  window.dispatchEvent(new Event(sectionNavigationEvent));
}
