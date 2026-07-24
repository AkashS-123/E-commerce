import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { initialCartItems } from "../data/cartItems";
import type { CartItem } from "../types/cart";

const TAX_RATE = 0.08;
const FREE_SHIPPING_THRESHOLD = 199;
const FLAT_SHIPPING = 9.5;

interface CartContextValue {
  items: CartItem[];
  savedItems: CartItem[];
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  saveForLater: (id: string) => void;
  moveToCart: (id: string) => void;
  itemCount: number;
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(initialCartItems);
  const [savedItems, setSavedItems] = useState<CartItem[]>([]);

  function updateQuantity(id: string, quantity: number) {
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity } : item)));
  }

  function removeItem(id: string) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  function saveForLater(id: string) {
    setItems((prev) => {
      const target = prev.find((item) => item.id === id);
      if (target) setSavedItems((saved) => [...saved, target]);
      return prev.filter((item) => item.id !== id);
    });
  }

  function moveToCart(id: string) {
    setSavedItems((prev) => {
      const target = prev.find((item) => item.id === id);
      if (target) setItems((cart) => [...cart, target]);
      return prev.filter((item) => item.id !== id);
    });
  }

  const { itemCount, subtotal, shipping, tax, total } = useMemo(() => {
    const count = items.reduce((sum, item) => sum + item.quantity, 0);
    const sub = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const ship = sub === 0 || sub >= FREE_SHIPPING_THRESHOLD ? 0 : FLAT_SHIPPING;
    const taxAmount = sub * TAX_RATE;
    return {
      itemCount: count,
      subtotal: sub,
      shipping: ship,
      tax: taxAmount,
      total: sub + ship + taxAmount,
    };
  }, [items]);

  return (
    <CartContext.Provider
      value={{
        items,
        savedItems,
        updateQuantity,
        removeItem,
        saveForLater,
        moveToCart,
        itemCount,
        subtotal,
        shipping,
        tax,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
