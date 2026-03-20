import { Resend } from "resend";
import type { Order } from "@/lib/orders";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const FROM_ADDRESS = process.env.EMAIL_FROM ?? "Rheuse <orders@rheuse.com>";

export async function sendOrderConfirmation(order: Order): Promise<void> {
  if (!resend) {
    console.log(
      `[email] Resend not configured — skipping confirmation for order ${order.id}`
    );
    return;
  }

  const itemRows = order.lineItems
    .map(
      (item) =>
        `<tr>
          <td style="padding:8px 12px;border-bottom:1px solid #eee;">${item.name}</td>
          <td style="padding:8px 12px;border-bottom:1px solid #eee;text-align:center;">${item.quantity}</td>
          <td style="padding:8px 12px;border-bottom:1px solid #eee;text-align:right;">$${(item.price * item.quantity).toFixed(2)}</td>
        </tr>`
    )
    .join("");

  const html = `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#1a1a1a;background:#f8f6f3;">
  <div style="max-width:600px;margin:0 auto;padding:32px 24px;">
    <h1 style="font-size:24px;margin:0 0 8px;">Thank you for your order!</h1>
    <p style="color:#666;margin:0 0 24px;">Order <strong>${order.id}</strong></p>

    <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
      <thead>
        <tr style="background:#f0ede8;">
          <th style="padding:8px 12px;text-align:left;font-weight:600;">Item</th>
          <th style="padding:8px 12px;text-align:center;font-weight:600;">Qty</th>
          <th style="padding:8px 12px;text-align:right;font-weight:600;">Price</th>
        </tr>
      </thead>
      <tbody>${itemRows}</tbody>
    </table>

    <table style="width:100%;margin-bottom:24px;">
      <tr>
        <td style="padding:4px 0;">Subtotal</td>
        <td style="padding:4px 0;text-align:right;">$${order.subtotal.toFixed(2)}</td>
      </tr>
      <tr>
        <td style="padding:4px 0;">Shipping</td>
        <td style="padding:4px 0;text-align:right;">${order.shipping === 0 ? "Free" : `$${order.shipping.toFixed(2)}`}</td>
      </tr>
      <tr style="font-weight:700;font-size:18px;">
        <td style="padding:8px 0;border-top:2px solid #1a1a1a;">Total</td>
        <td style="padding:8px 0;border-top:2px solid #1a1a1a;text-align:right;">$${order.total.toFixed(2)}</td>
      </tr>
    </table>

    <h2 style="font-size:16px;margin:0 0 8px;">Shipping to</h2>
    <p style="margin:0;line-height:1.6;">
      ${order.shippingAddress.firstName} ${order.shippingAddress.lastName}<br/>
      ${order.shippingAddress.address1}<br/>
      ${order.shippingAddress.address2 ? order.shippingAddress.address2 + "<br/>" : ""}
      ${order.shippingAddress.city}, ${order.shippingAddress.state} ${order.shippingAddress.zip}
    </p>

    <p style="color:#666;margin:24px 0 0;font-size:14px;">
      Questions? Reply to this email or reach us at support@rheuse.com
    </p>
    <p style="color:#999;font-size:12px;margin-top:32px;">Rheuse — Made to be kept.</p>
  </div>
</body>
</html>`;

  await resend.emails.send({
    from: FROM_ADDRESS,
    to: order.email,
    subject: `Order confirmed — ${order.id}`,
    html,
  });
}
