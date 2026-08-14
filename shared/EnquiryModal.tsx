"use client";

import { useEnquiryModal } from "@/context/EnquiryForm";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";

const PRODUCTS = [
  "Loft Tanks",
  "Vertical Water Storage Tanks",
  "Household Tanks",
];

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  product: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  product: "",
  message: "",
};

type Errors = Partial<Record<keyof FormState, string>>;

export default function EnquiryModal() {
  const { isOpen, productName, closeModal } = useEnquiryModal();
  const router = useRouter();

  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const validate = (values: FormState): Errors => {
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!values.phone.trim()) {
      next.phone = "Please enter your phone number.";
    } else if (!/^[0-9+\-\s()]{7,}$/.test(values.phone)) {
      next.phone = "Please enter a valid phone number.";
    }
    if (!values.product) next.product = "Please select a product.";
    if (!values.message.trim()) next.message = "Please add a short message.";
    return next;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setSubmitted(true);
    try {
      const formData = new FormData();

      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("phone", form.phone);
      formData.append("company", form.company);
      formData.append("product", form.product);
      formData.append("message", form.message);
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: form.name,
          company: form.company || "-",
          email: form.email,
          phone: form.phone,
          product: form.product,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      setForm(initialState);
      router.push("/thank-you");
      closeModal();
    } catch (err) {
      console.error("Enquiry submit failed", err);
    } finally {
      setSubmitted(false);
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
              name="phone"
              value={form.phone}
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
              disabled={submitted}
              className="rounded bg-primary px-8 py-3 font-semibold text-white opacity-100 tracking-wide hover:bg-primary/80 disabled:opacity-60"
            >
              {submitted ? "SUBMITTING..." : "SUBMIT"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
