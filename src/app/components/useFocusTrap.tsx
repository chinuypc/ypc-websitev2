import { useEffect, useRef, useCallback } from "react";

/**
 * Custom hook that traps keyboard focus within a container.
 * Used for modal dialogs, mobile menus, and other overlay components.
 *
 * - Traps Tab / Shift+Tab cycling within focusable elements
 * - Focuses the first focusable element when activated
 * - Returns focus to the trigger element when deactivated
 * - Closes on Escape key
 */
export function useFocusTrap(
  isActive: boolean,
  onClose: () => void
) {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  // Capture the element that had focus before trap activated
  useEffect(() => {
    if (isActive) {
      triggerRef.current = document.activeElement as HTMLElement;
    }
  }, [isActive]);

  // Focus first element when trap activates, restore on deactivate
  useEffect(() => {
    if (!isActive) return;

    const container = containerRef.current;
    if (!container) return;

    // Small delay to let animation render the panel
    const timer = setTimeout(() => {
      const focusables = getFocusableElements(container);
      if (focusables.length > 0) {
        focusables[0].focus();
      }
    }, 50);

    return () => {
      clearTimeout(timer);
      // Return focus to trigger when closing
      if (triggerRef.current && triggerRef.current.focus) {
        triggerRef.current.focus();
      }
    };
  }, [isActive]);

  // Handle keydown for Tab trapping and Escape
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key !== "Tab") return;

      const container = containerRef.current;
      if (!container) return;

      const focusables = getFocusableElements(container);
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey) {
        // Shift+Tab: if on first element, wrap to last
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        // Tab: if on last element, wrap to first
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    },
    [onClose]
  );

  return { containerRef, handleKeyDown };
}

function getFocusableElements(container: HTMLElement): HTMLElement[] {
  const selector = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'textarea:not([disabled])',
    'select:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
  ].join(", ");

  return Array.from(container.querySelectorAll<HTMLElement>(selector)).filter(
    (el) => el.offsetParent !== null // visible
  );
}
