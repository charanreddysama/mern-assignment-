import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';

/*
  Validate payment method
*/
export function validatePaymentMethod(method) {
  return ['card', 'upi', 'cod'].includes(method);
}

/*
  Process payment and generate order summary
*/
export function processPayment(paymentMethod, couponCode = null) {
  if (!validatePaymentMethod(paymentMethod)) {
    return { status: 'failed', message: 'Invalid payment method' };
  }

  const items = getCartItems();
  const subtotal = getCartTotal();

  let discount = 0;
  let total = subtotal;

  if (couponCode) {
    const discountData = applyDiscount(subtotal, couponCode, items);
    discount = discountData.discount;
    total = discountData.finalTotal;
  }

  // Reduce stock for each product
  items.forEach(item => {
    reduceStock(item.id, item.quantity);
  });

  // Clear cart after payment
  clearCart();

  return {
    orderId: generateOrderId(),
    items,
    subtotal,
    discount,
    total,
    paymentMethod,
    status: 'success',
    message: 'Payment completed successfully'
  };
}

/*
  Generate unique order ID
*/
function generateOrderId() {
  return 'ORD' + Date.now();
}