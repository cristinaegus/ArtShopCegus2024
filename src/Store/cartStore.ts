import { atom } from 'nanostores';

export interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

export const cartItems = atom<CartItem[]>([]);

export function addToCart(item: Omit<CartItem, 'quantity'>) {
  const currentItems = cartItems.get();
  const existingItem = currentItems.find(i => i.id === item.id);

  if (existingItem) {
    updateQuantity(item.id, existingItem.quantity + 1);
  } else {
    cartItems.set([...currentItems, { ...item, quantity: 1 }]);
  }
}

export function removeFromCart(id: string) {
  const currentItems = cartItems.get();
  cartItems.set(currentItems.filter(item => item.id !== id));
}

export function updateQuantity(id: string, quantity: number) {
  if (quantity < 1) return;
  
  const currentItems = cartItems.get();
  cartItems.set(
    currentItems.map(item => 
      item.id === id ? { ...item, quantity } : item
    )
  );
}

export function getTotal() {
  return cartItems.get().reduce((sum, item) => sum + item.price * item.quantity, 0);
}