"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  ReactNode,
} from "react";

interface EnquiryModalContextType {
  isOpen: boolean;
  productName: string | null;
  openModal: (productName?: string) => void;
  closeModal: () => void;
  submitted?: boolean;
}

const EnquiryModalContext = createContext<EnquiryModalContextType | undefined>(
  undefined,
);

export function EnquiryModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [productName, setProductName] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  // openModal optionally accepts a product name, so a "Enquire" button
  // on a specific product card can pre-select that product in the form.
  const openModal = useCallback((product?: string) => {
    setProductName(product ?? null);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setProductName(null);
  }, []);

  // Lock background scroll while the modal is open, and restore it on close/unmount.
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Allow closing with Escape key.
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeModal]);

  return (
    <EnquiryModalContext.Provider
      value={{ isOpen, productName, openModal, closeModal }}
    >
      {children}
    </EnquiryModalContext.Provider>
  );
}

export function useEnquiryModal() {
  const context = useContext(EnquiryModalContext);
  if (!context) {
    throw new Error(
      "useEnquiryModal must be used within an EnquiryModalProvider",
    );
  }
  return context;
}
