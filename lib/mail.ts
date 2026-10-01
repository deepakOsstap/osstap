import nodemailer from "nodemailer";
import { ContactFormData } from "@/app/actions/contact";

export const DEFAULT_RECEIVER_EMAIL = "d.choudhary@osstap.com";

interface SendInquiryEmailResult {
  sent: boolean;
  messageId?: string;
  error?: string;
}

/**
 * Creates a reusable nodemailer transporter configured with Gmail SMTP or custom SMTP.
 */
function createTransporter() {
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT) || 465;
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS ? process.env.SMTP_PASS.replace(/\s+/g, "") : undefined;

  if (!user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // true for 465, false for 587 or other ports
    auth: {
      user,
      pass,
    },
  });
}

/**
 * Formats inquiry data into an HTML email template.
 */
function generateInquiryHtml(data: ContactFormData, submittedAt: string) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Project Enquiry - Osstap</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #f3f4f6;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #111827;
    }
    .wrapper {
      max-width: 600px;
      margin: 30px auto;
      background: #ffffff;
      border-radius: 12px;
      overflow: hidden;
      border: 1px solid #e5e7eb;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
    }
    .header {
      background: #0b0f19;
      color: #ffffff;
      padding: 28px 32px;
      border-bottom: 3px solid #bef264;
    }
    .header h1 {
      margin: 0;
      font-size: 20px;
      font-weight: 700;
      letter-spacing: -0.02em;
    }
    .header p {
      margin: 6px 0 0 0;
      font-size: 13px;
      color: #9ca3af;
    }
    .content {
      padding: 32px;
    }
    .field-group {
      margin-bottom: 20px;
    }
    .field-label {
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #6b7280;
      margin-bottom: 4px;
    }
    .field-value {
      font-size: 15px;
      color: #111827;
      font-weight: 500;
    }
    .badge {
      display: inline-block;
      background: #f0fdf4;
      color: #166534;
      border: 1px solid #bbf7d0;
      border-radius: 6px;
      padding: 3px 10px;
      font-size: 13px;
      font-weight: 600;
    }
    .message-box {
      background: #f9fafb;
      border: 1px solid #e5e7eb;
      border-left: 4px solid #bef264;
      border-radius: 6px;
      padding: 16px;
      margin-top: 8px;
      white-space: pre-wrap;
      font-size: 14px;
      line-height: 1.6;
      color: #1f2937;
    }
    .footer {
      background: #f9fafb;
      padding: 20px 32px;
      border-top: 1px solid #e5e7eb;
      font-size: 12px;
      color: #6b7280;
      text-align: center;
    }
    .reply-hint {
      display: inline-block;
      margin-top: 8px;
      color: #4b5563;
      font-style: italic;
    }
    a {
      color: #2563eb;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>🚀 New Project Enquiry</h1>
      <p>Osstap Web Portal • Lead Notification</p>
    </div>
    <div class="content">
      <div style="display: flex; gap: 20px; flex-wrap: wrap;">
        <div class="field-group" style="flex: 1; min-width: 200px;">
          <div class="field-label">Sender Name</div>
          <div class="field-value">${escapeHtml(data.name)}</div>
        </div>
        <div class="field-group" style="flex: 1; min-width: 200px;">
          <div class="field-label">Work Email</div>
          <div class="field-value"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></div>
        </div>
      </div>

      <div style="display: flex; gap: 20px; flex-wrap: wrap;">
        <div class="field-group" style="flex: 1; min-width: 200px;">
          <div class="field-label">Company / Organization</div>
          <div class="field-value">${data.company ? escapeHtml(data.company) : '<span style="color:#9ca3af;">Not provided</span>'}</div>
        </div>
        <div class="field-group" style="flex: 1; min-width: 200px;">
          <div class="field-label">Phone / WhatsApp</div>
          <div class="field-value">${data.phone ? escapeHtml(data.phone) : '<span style="color:#9ca3af;">Not provided</span>'}</div>
        </div>
      </div>

      <div style="display: flex; gap: 20px; flex-wrap: wrap;">
        <div class="field-group" style="flex: 1; min-width: 200px;">
          <div class="field-label">Practice Area</div>
          <div class="field-value"><span class="badge">${escapeHtml(data.service)}</span></div>
        </div>
        <div class="field-group" style="flex: 1; min-width: 200px;">
          <div class="field-label">Estimated Budget</div>
          <div class="field-value">${data.budget ? escapeHtml(data.budget) : '<span style="color:#9ca3af;">Not specified</span>'}</div>
        </div>
      </div>

      <div class="field-group">
        <div class="field-label">Project Summary &amp; Goals</div>
        <div class="message-box">${escapeHtml(data.message)}</div>
      </div>
    </div>
    <div class="footer">
      <div>Received on ${escapeHtml(submittedAt)}</div>
      <div class="reply-hint">💡 Tip: You can reply directly to this email to reply back to <strong>${escapeHtml(data.email)}</strong>.</div>
    </div>
  </div>
</body>
</html>
  `.trim();
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Sends the inquiry email to the designated receiver (d.choudhary@osstap.com).
 */
export async function sendInquiryEmail(data: ContactFormData): Promise<SendInquiryEmailResult> {
  const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || DEFAULT_RECEIVER_EMAIL;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  const nowFormatted = new Date().toLocaleString("en-US", {
    dateStyle: "full",
    timeStyle: "long",
  });

  // If credentials are not yet set in environment, log helpful dev message without throwing unhandled exception
  if (!user || !pass) {
    console.warn(
      `[Mailer] SMTP_USER or SMTP_PASS is missing in environment variables. Email was NOT sent to ${receiverEmail}. Set SMTP_USER and SMTP_PASS in .env.local to enable live delivery.`
    );
    return {
      sent: false,
      error: "SMTP credentials not configured on server",
    };
  }

  const transporter = createTransporter();
  if (!transporter) {
    return {
      sent: false,
      error: "Could not initialize mail transporter",
    };
  }

  const fromEmail = process.env.CONTACT_FROM_EMAIL || `"Osstap Leads" <${user}>`;
  const subject = `[New Project Enquiry] ${data.service} - ${data.name}${data.company ? ` (${data.company})` : ""}`;

  const textBody = `
New Project Enquiry Received for Osstap:
-----------------------------------------
Name: ${data.name}
Email: ${data.email}
Company: ${data.company || "N/A"}
Phone: ${data.phone || "N/A"}
Service: ${data.service}
Budget: ${data.budget || "N/A"}
Date: ${nowFormatted}

Message:
${data.message}
-----------------------------------------
Reply directly to this email to respond to ${data.email}.
  `.trim();

  try {
    const info = await transporter.sendMail({
      from: fromEmail,
      to: receiverEmail,
      replyTo: data.email, // Allows clicking 'Reply' in Gmail to reply directly to the customer
      subject,
      text: textBody,
      html: generateInquiryHtml(data, nowFormatted),
    });

    console.log(`[Mailer] Project enquiry successfully forwarded to ${receiverEmail}. Message ID: ${info.messageId}`);
    return {
      sent: true,
      messageId: info.messageId,
    };
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.error(`[Mailer Error] Failed to send enquiry email to ${receiverEmail}:`, errorMessage);
    return {
      sent: false,
      error: errorMessage,
    };
  }
}
