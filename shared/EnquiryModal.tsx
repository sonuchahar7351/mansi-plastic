"use client";

import { useEnquiryModal } from "@/context/EnquiryForm";
import { useState, FormEvent } from "react";

const PRODUCTS = [
  "Loft Tanks",
  "Vertical Water Storage Tanks",
  "Household Tanks",
];

export default function EnquiryModal() {
  const { isOpen, productName, closeModal } = useEnquiryModal();

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    company: "",
    product: productName ?? "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const formData = new FormData();

      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("mobile", form.mobile);
      formData.append("company", form.company);
      formData.append("product", form.product);
      formData.append("message", form.message);
      formData.append("access_key", "YOUR_ACCESS_KEY");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        alert("Message sent!");
      }
      closeModal();
    } catch (err) {
      console.error("Enquiry submit failed", err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    // Overlay — clicking outside the card closes the modal.
    <div
      className="fixed inset-0  z-50 flex items-center justify-center bg-black/50 px-4 py-10 overflow-y-auto"
      onClick={(e) => {
        e.stopPropagation();
        closeModal();
      }}
    >
      {/* Card — stop propagation so clicks inside don't close it */}
      <div
        className="w-full max-w-xl rounded-lg bg-white shadow-xl p-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4">
          <h2 className="text-xl font-semibold tracking-wide text-blue-950">
            ENQUIRE NOW
          </h2>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              closeModal();
            }}
            aria-label="Close"
            className="text-2xl leading-none text-gray-500 hover:text-gray-800"
          >
            &times;
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 px-6 py-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name*"
              required
              className="rounded border border-blue-950 px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-blue-950"
            />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email*"
              required
              className="rounded border border-blue-950 px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-blue-950"
            />
            <input
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              placeholder="Mobile Number*"
              required
              className="rounded border border-blue-950 px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-blue-950"
            />
            <input
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Company Name"
              className="rounded border border-blue-950 px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-blue-950"
            />
          </div>

          <select
            name="product"
            value={form.product}
            onChange={handleChange}
            className="w-full rounded border border-blue-950 px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-blue-950"
          >
            <option value="">Choose Product</option>
            {PRODUCTS.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Message"
            rows={4}
            className="w-full resize-y rounded border border-blue-950 px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-blue-950"
          />

          <div className="pt-2 text-center">
            <button
              type="submit"
              disabled={submitting}
              className="rounded bg-primary px-8 py-3 font-semibold text-white opacity-100 tracking-wide hover:bg-primary/80 disabled:opacity-60"
            >
              {submitting ? "SUBMITTING..." : "SUBMIT"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
