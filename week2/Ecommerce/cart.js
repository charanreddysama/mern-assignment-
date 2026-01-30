import { getProductById, checkStock } from './product.js';

// Stores cart items
let cartItems = [];

/*
  Add product to cart
  - Checks product existence
  - Checks stock
  - Updates quantity if product already exists
*/
export function addToCart(productId, quantity) {
  const product = getProductById(productId);
  if (!product) return 'Product not found';

  if (!checkStock(productId, quantity)) {
    return 'Insufficient stock';
  }

  const cartItem = cartItems.find(item => item.productId === productId);

  if (cartItem) {
    cartItem.quantity += quantity;
  } else {
    cartItems.push({ productId, quantity });
  }

  return 'Item added to cart successfully';
}

/*
  Remove a product from cart using product ID
*/
export function removeFromCart(productId) {
  cartItems = cartItems.filter(item => item.productId !== productId);
  return 'Item removed from cart';
}

/*
  Update quantity of an item in cart
*/
export function updateQuantity(productId, newQuantity) {
  if (!checkStock(productId, newQuantity)) {
    return 'Insufficient stock';
  }

  const item = cartItems.find(i => i.productId === productId);
  if (!item) return 'Item not found in cart';

  item.quantity = newQuantity;
  return 'Quantity updated successfully';
}

/*
  Return cart items with product details
*/
export function getCartItems() {
  return cartItems.map(item => {
    const product = getProductById(item.productId);
    return {
      ...product,
      quantity: item.quantity,
      total: product.price * item.quantity
    };
  });
}

/*
  Calculate total price of all items in cart
*/
export function getCartTotal() {
  return getCartItems().reduce((sum, item) => sum + item.total, 0);
}

/*
  Clear all cart items after payment
*/
export function clearCart() {
  cartItems = [];
}