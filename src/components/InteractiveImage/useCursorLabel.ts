import { useEffect, type RefObject } from 'react';

/** One time-based animation follows the latest pointer target without restarting. */
export function useCursorLabel(
  controlRef: RefObject<HTMLElement | null>,
  labelRef: RefObject<HTMLSpanElement | null>,
  enabled: boolean,
  button: boolean
) {
  useEffect(() => {
    const control = controlRef.current;
    const label = labelRef.current;
    if (!enabled || !control || !label) return;
    const motion = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    let inside = false;
    let clientX = 0;
    let clientY = 0;
    let x = 0;
    let y = 0;
    let frame = 0;
    let previousTime = 0;

    const tick = (time: number) => {
      frame = 0;
      const bounds = control.getBoundingClientRect();
      const targetX = inside ? clientX - bounds.left - bounds.width / 2 : 0;
      const targetY = inside ? clientY - bounds.top - bounds.height / 2 : 0;
      const elapsed = previousTime ? Math.min(time - previousTime, 64) : 1000 / 60;
      previousTime = time;
      const blend = motion?.matches ? 1 : 1 - Math.exp(-elapsed / (inside ? 55 : 85));
      x += (targetX - x) * blend;
      y += (targetY - y) * blend;
      const settled = Math.abs(targetX - x) < .1 && Math.abs(targetY - y) < .1;
      if (settled) { x = targetX; y = targetY; }
      label.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      if (!settled) frame = requestAnimationFrame(tick);
      else { previousTime = 0; label.style.willChange = ''; }
    };
    const schedule = () => {
      if (!frame) { label.style.willChange = 'transform'; frame = requestAnimationFrame(tick); }
    };
    const track = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return;
      inside = true;
      clientX = event.clientX;
      clientY = event.clientY;
      schedule();
    };
    const leave = () => { inside = false; schedule(); };
    const reposition = () => { if (inside) schedule(); };
    control.addEventListener('pointerenter', track);
    control.addEventListener('pointermove', track);
    control.addEventListener('pointerleave', leave);
    control.addEventListener('pointercancel', leave);
    window.addEventListener('scroll', reposition, true);
    window.addEventListener('resize', reposition);
    return () => {
      cancelAnimationFrame(frame);
      control.removeEventListener('pointerenter', track);
      control.removeEventListener('pointermove', track);
      control.removeEventListener('pointerleave', leave);
      control.removeEventListener('pointercancel', leave);
      window.removeEventListener('scroll', reposition, true);
      window.removeEventListener('resize', reposition);
      label.style.transform = '';
      label.style.willChange = '';
    };
  }, [controlRef, labelRef, enabled, button]);
}
