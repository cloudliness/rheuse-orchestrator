/**
 * In-memory order store for MVP.
 * Phase 5+ will migrate to PostgreSQL.
 */

export interface OrderAddress {
  firstName: string;
  lastName: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  zip: string;
}

export interface OrderLineItem {
  sku: string;
  name: string;
  price: number;
  quantity: number;
}

export interface Order {
  id: string;
  stripeSessionId: string;
  stripePaymentIntentId?: string;
  email: string;
  shippingAddress: OrderAddress;
  lineItems: OrderLineItem[];
  subtotal: number;
  shipping: number;
  total: number;
  status: "pending" | "paid" | "shipped" | "cancelled";
  createdAt: string;
  paidAt?: string;
}

// In-memory store (replaced with DB in production)
const orders = new Map<string, Order>();

export function createOrder(order: Order): Order {
  orders.set(order.id, order);
  return order;
}

export function getOrderById(id: string): Order | undefined {
  return orders.get(id);
}

export function getOrderBySessionId(sessionId: string): Order | undefined {
  for (const order of orders.values()) {
    if (order.stripeSessionId === sessionId) return order;
  }
  return undefined;
}

export function updateOrderStatus(
  id: string,
  status: Order["status"],
  extra?: Partial<Order>
): Order | undefined {
  const order = orders.get(id);
  if (!order) return undefined;
  const updated = { ...order, status, ...extra };
  orders.set(id, updated);
  return updated;
}

export function getAllOrders(): Order[] {
  return Array.from(orders.values()).sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}
