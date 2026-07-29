"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * Reusable hook: runs `callback` `delay` ms after the current route changes.
 * The timer resets on every pathname change, and is cleared on unmount
 * or before the next route's timer starts — so only one timer is ever
 * pending at a time.
 *
 * Not tied to the enquiry modal — pass any callback and reuse it for
 * other "do this N seconds after navigating" behaviour anywhere in the app.
 *
 * @param callback  Function to run once the delay elapses.
 * @param delay     Delay in milliseconds (default 5000 = 5s).
 * @param enabled   Set to false to disable the timer entirely (e.g. skip on
 *                  certain routes) without breaking the rules of hooks.
 */
export function useDelayedCallbackOnRouteChange(
  callback: () => void,
  delay: number = 5000,
  enabled: boolean = true,
) {
  const pathname = usePathname();

  // Keep the latest callback in a ref so the effect below doesn't need
  // `callback` in its dependency array (avoids re-triggering the timer
  // just because the caller passed a new inline function on re-render).
  const callbackRef = useRef(callback);
  useEffect(() => {
    callbackRef.current = callback;
  });

  useEffect(() => {
    if (!enabled) return;

    const timeoutId = setTimeout(() => {
      callbackRef.current();
    }, delay);

    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, delay, enabled]);
}
