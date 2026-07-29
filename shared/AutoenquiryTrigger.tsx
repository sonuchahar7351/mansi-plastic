"use client";

import { useEnquiryModal } from "@/context/EnquiryForm";
import { useDelayedCallbackOnRouteChange } from "@/hooks/UseDelayedModel";

interface AutoEnquiryTriggerProps {
  /** Delay before auto-opening, in ms. Defaults to 5000 (5s). */
  delay?: number;
  /** Pass false to switch this off, e.g. on a checkout or thank-you page. */
  enabled?: boolean;
}

/**
 * Renders nothing — just wires the reusable route-change timer to the
 * enquiry modal. Mount this ONCE, next to <EnquiryModal />, in the root
 * layout so it's active across every route in the app.
 */
export default function AutoEnquiryTrigger({
  delay = 5000,
  enabled = true,
}: AutoEnquiryTriggerProps) {
  const { openModal, isOpen } = useEnquiryModal();

  useDelayedCallbackOnRouteChange(
    () => {
      // Don't force it open if the user already has it open
      // (e.g. they opened it manually before the timer fired).
      if (!isOpen) openModal();
    },
    delay,
    enabled,
  );

  return null;
}
