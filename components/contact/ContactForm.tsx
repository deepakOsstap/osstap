"use client";

import React, { useState, useTransition } from "react";
import { submitContactForm, ContactFormData } from "@/app/actions/contact";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const serviceOptions = [
  { value: "Product Engineering", label: "Product Engineering (MVP to Scale)" },
  { value: "Web Engineering", label: "Web Engineering (Next.js / React)" },
  { value: "Mobile Engineering", label: "Mobile Engineering (iOS / Android)" },
  { value: "AI & Automation", label: "AI & Automation (LLM Agents / RAG)" },
  { value: "Cloud & DevOps", label: "Cloud & DevOps (IaC / Kubernetes)" },
  { value: "Technology Consulting", label: "Technology Consulting & Architecture" },
  { value: "Dedicated Engineering Teams", label: "Dedicated Engineering Squad" },
  { value: "Other / Discovery", label: "Other / Exploring Partnership" },
];

const budgetOptions = [
  { value: "< $25,000", label: "Under $25,000" },
  { value: "$25,000 - $50,000", label: "$25,000 – $50,000" },
  { value: "$50,000 - $100,000", label: "$50,000 – $100,000" },
  { value: "$100,000+", label: "$100,000+" },
  { value: "To be determined", label: "To be determined / Ongoing Retainer" },
];

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "Product Engineering",
    budget: "$25,000 - $50,000",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isPending, startTransition] = useTransition();
  const [isSuccess, setIsSuccess] = useState(false);
  const [globalError, setGlobalError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setGlobalError(null);

    startTransition(async () => {
      try {
        const response = await submitContactForm(formData);
        if (response.success) {
          setIsSuccess(true);
        } else {
          if (response.errors) {
            setErrors(response.errors);
          }
          setGlobalError(response.message);
        }
      } catch {
        setGlobalError("A network error occurred. Please try again or email us directly.");
      }
    });
  };

  if (isSuccess) {
    return (
      <div className="p-8 sm:p-12 rounded-2xl bg-white border border-brand-border shadow-xl text-center flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 border border-emerald-100">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-3">
          Inquiry Received
        </h3>

        <p className="text-base text-brand-secondary leading-relaxed max-w-md mb-8">
          Thank you, <strong className="text-brand-dark">{formData.name}</strong>. Our senior technical team is reviewing your project details. We will reach out via <span className="font-semibold text-brand-dark">{formData.email}</span> within 24 business hours.
        </p>

        <div className="w-full max-w-md p-4 rounded-xl bg-brand-light border border-brand-border text-xs text-brand-secondary text-left space-y-2 mb-8">
          <div className="font-semibold text-brand-dark">What happens next:</div>
          <div className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-1.5" />
            <span>Architecture review of your submitted requirements.</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-1.5" />
            <span>Initial scoping consultation scheduled with a practice lead.</span>
          </div>
        </div>

        <Button
          variant="outline"
          onClick={() => {
            setIsSuccess(false);
            setFormData({
              name: "",
              email: "",
              company: "",
              phone: "",
              service: "Product Engineering",
              budget: "$25,000 - $50,000",
              message: "",
            });
          }}
        >
          Submit Another Inquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="p-8 sm:p-10 rounded-2xl bg-white border border-brand-border shadow-xl"
    >
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-brand-dark mb-2">
          Project Inquiry
        </h3>
        <p className="text-sm text-brand-secondary">
          Tell us about your technical requirements, goals, and timeline.
        </p>
      </div>

      {globalError && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-sm text-red-700 flex items-start gap-2.5">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-600" />
          <span>{globalError}</span>
        </div>
      )}

      <div className="space-y-6">
        {/* Name & Email Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-semibold uppercase tracking-wider text-brand-dark mb-2"
            >
              Full Name <span className="text-brand-accent">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Alex Vance"
              className={cn(
                "w-full px-4 py-3 text-sm rounded-lg border bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-accent",
                errors.name
                  ? "border-red-500 focus:ring-red-500"
                  : "border-brand-border focus:border-brand-accent"
              )}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-600">{errors.name}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs font-semibold uppercase tracking-wider text-brand-dark mb-2"
            >
              Work Email <span className="text-brand-accent">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="alex@company.com"
              className={cn(
                "w-full px-4 py-3 text-sm rounded-lg border bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-accent",
                errors.email
                  ? "border-red-500 focus:ring-red-500"
                  : "border-brand-border focus:border-brand-accent"
              )}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-600">{errors.email}</p>
            )}
          </div>
        </div>

        {/* Company & Phone Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="company"
              className="block text-xs font-semibold uppercase tracking-wider text-brand-dark mb-2"
            >
              Company / Organization
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="e.g. Acme Corp"
              className="w-full px-4 py-3 text-sm rounded-lg border border-brand-border bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-semibold uppercase tracking-wider text-brand-dark mb-2"
            >
              Phone / WhatsApp
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 000-0000"
              className="w-full px-4 py-3 text-sm rounded-lg border border-brand-border bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent"
            />
          </div>
        </div>

        {/* Practice Area & Budget Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="service"
              className="block text-xs font-semibold uppercase tracking-wider text-brand-dark mb-2"
            >
              Area of Interest <span className="text-brand-accent">*</span>
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 text-sm rounded-lg border border-brand-border bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent"
            >
              {serviceOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            {errors.service && (
              <p className="mt-1 text-xs text-red-600">{errors.service}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="budget"
              className="block text-xs font-semibold uppercase tracking-wider text-brand-dark mb-2"
            >
              Estimated Budget
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-3 text-sm rounded-lg border border-brand-border bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent"
            >
              {budgetOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-semibold uppercase tracking-wider text-brand-dark mb-2"
          >
            Project Summary &amp; Goals <span className="text-brand-accent">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us what you are looking to build, technical challenges, or current architecture..."
            className={cn(
              "w-full px-4 py-3 text-sm rounded-lg border bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-accent",
              errors.message
                ? "border-red-500 focus:ring-red-500"
                : "border-brand-border focus:border-brand-accent"
            )}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-600">{errors.message}</p>
          )}
        </div>

        {/* Submit Action */}
        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={isPending}
            className="w-full justify-center text-base"
          >
            {isPending ? (
              <span className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                Submitting Inquiry...
              </span>
            ) : (
              <span>Send Project Inquiry</span>
            )}
          </Button>
          <p className="mt-3 text-xs text-center text-brand-secondary font-mono">
            Direct NDA protection • Response guaranteed within 24 business hours
          </p>
        </div>
      </div>
    </form>
  );
}
