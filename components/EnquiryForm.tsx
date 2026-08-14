"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { productOptions } from "@/lib/data";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";

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

export default function EnquiryForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const router = useRouter();

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

  const handleChange =
    (field: keyof FormState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setSubmitted(true);
    try {
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
    } catch (err) {
      console.error("EmailJS error:", err);
      setSubmitted(false);
    } finally {
      setSubmitted(false);
    }
  };

  const inputClass = (field: keyof FormState) =>
    `w-full rounded-md border px-4 py-3 text-sm text-body placeholder:text-body/40 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-colors ${
      errors[field] ? "border-red-500" : "border-borderc"
    }`;

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-page">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow">Get In Touch</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-primary">
            Send Us an Enquiry
          </h2>
          <p className="mt-4 text-sm text-body/80">
            Tell us what you need and our team will get back to you shortly.
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto rounded-lg border border-borderc bg-section p-6 md:p-10 shadow-card">
          {submitted && (
            <div
              role="status"
              className="mb-6 flex items-center gap-3 rounded-md border border-accent/40 bg-accent/10 px-4 py-3 text-sm text-primary"
            >
              <CheckCircle2 size={20} className="text-accent shrink-0" />
              Thank you. Your enquiry has been noted, our team will reach out
              soon.
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-body mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange("name")}
                  className={inputClass("name")}
                  placeholder="Your full name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-xs text-red-600">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-body mb-2"
                >
                  Company
                </label>
                <input
                  id="company"
                  type="text"
                  value={form.company}
                  onChange={handleChange("company")}
                  className={inputClass("company")}
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-body mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange("email")}
                  className={inputClass("email")}
                  placeholder="you@company.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-xs text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-body mb-2"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange("phone")}
                  className={inputClass("phone")}
                  placeholder="+91 00000 00000"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                {errors.phone && (
                  <p id="phone-error" className="mt-1.5 text-xs text-red-600">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="product"
                  className="block text-sm font-medium text-body mb-2"
                >
                  Product
                </label>
                <select
                  id="product"
                  value={form.product}
                  onChange={handleChange("product")}
                  className={inputClass("product")}
                  aria-invalid={!!errors.product}
                  aria-describedby={
                    errors.product ? "product-error" : undefined
                  }
                >
                  <option value="">Select a product</option>
                  {productOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.product && (
                  <p id="product-error" className="mt-1.5 text-xs text-red-600">
                    {errors.product}
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-body mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={handleChange("message")}
                  rows={5}
                  className={inputClass("message")}
                  placeholder="Tell us about your requirement"
                  aria-invalid={!!errors.message}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-xs text-red-600">
                    {errors.message}
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-secondary"
            >
              Submit Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
