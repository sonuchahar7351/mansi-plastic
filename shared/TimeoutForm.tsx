import { useEnquiryModal } from "@/context/EnquiryForm";
import { useEffect } from "react";

export const TimeoutForm = () => {
  const { openModal } = useEnquiryModal();

  useEffect(() => {
    const timer = setTimeout(() => {
      openModal();
    }, 5000);
    return () => clearTimeout(timer);
  }, [openModal]);
};
