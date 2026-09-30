"use server";

import { sendInquiryEmail } from "@/lib/mail";

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service: string;
  budget?: string;
  message: string;
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
  errors?: Partial<Record<keyof ContactFormData, string>>;
}

export async function submitContactForm(
  data: ContactFormData
): Promise<ContactFormResponse> {
  const errors: Partial<Record<keyof ContactFormData, string>> = {};

  // Basic Validation
  if (!data.name || data.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = "Please enter a valid work email address.";
  }

  if (!data.service || data.service.trim().length === 0) {
    errors.service = "Please select an area of assistance.";
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = "Please provide at least a brief summary (minimum 10 characters).";
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Please correct the highlighted fields.",
      errors,
    };
  }

  console.log("[Osstap Lead Captured]:", {
    name: data.name,
    email: data.email,
    company: data.company || "N/A",
    phone: data.phone || "N/A",
    service: data.service,
    budget: data.budget || "N/A",
    message: data.message,
    submittedAt: new Date().toISOString(),
  });

  // Forward project enquiry email to deepakc29@gmail.com
  const emailResult = await sendInquiryEmail(data);

  if (!emailResult.sent) {
    console.error("[Osstap Lead Delivery Error]:", emailResult.error);
    return {
      success: false,
      message:
        "We encountered an issue dispatching the email notification. Please contact us directly at deepakc29@gmail.com.",
    };
  }

  return {
    success: true,
    message:
      "Thank you! Your inquiry has been received. Our lead architect will review your project requirements and follow up within 24 business hours.",
  };
}
