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

  addItem: (item: CartItem) => void;
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

  function addItem(item: CartItem) {
    setItems((prev) => {
      const existing = prev.find((p) => p.id === item.id);

      if (existing) {
        return prev.map((p) =>
          p.id === item.id
            ? { ...p, quantity: p.quantity + item.quantity }
            : p
        );
      }

      return [...prev, item];
    });
  }

  function updateQuantity(id: string, quantity: number) {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }

    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  }

  function removeItem(id: string) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  function saveForLater(id: string) {
    setItems((prev) => {
      const target = prev.find((item) => item.id === id);

      if (target) {
        setSavedItems((saved) => [...saved, target]);
      }

      return prev.filter((item) => item.id !== id);
    });
  }

  function moveToCart(id: string) {
    setSavedItems((prev) => {
      const target = prev.find((item) => item.id === id);

      if (target) {
        setItems((cart) => {
          const existing = cart.find((c) => c.id === target.id);

          if (existing) {
            return cart.map((c) =>
              c.id === target.id
                ? { ...c, quantity: c.quantity + target.quantity }
                : c
            );
          }

          return [...cart, target];
        });
      }

      return prev.filter((item) => item.id !== id);
    });
  }

  const { itemCount, subtotal, shipping, tax, total } = useMemo(() => {
    const count = items.reduce((sum, item) => sum + item.quantity, 0);

    const sub = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const ship =
      sub === 0 || sub >= FREE_SHIPPING_THRESHOLD
        ? 0
        : FLAT_SHIPPING;

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
        addItem,
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

  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return ctx;
}