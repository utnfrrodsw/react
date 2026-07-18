import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set) => ({
      items: [],
      total: 0,

      addItem: (product) =>
        set((state) => {
          const existingIndex = state.items.findIndex(
            (item) => item.id === product.id,
          );
          if (existingIndex >= 0) {
            const updatedItems = state.items.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item,
            );
            return {
              items: updatedItems,
              total: state.total + product.price,
            };
          }
          return {
            items: [...state.items, { ...product, quantity: 1 }],
            total: state.total + product.price,
          };
        }),

      removeItem: (id) =>
        set((state) => {
          const item = state.items.find((item) => item.id === id);
          if (!item) return state;
          return {
            items: state.items.filter((item) => item.id !== id),
            total: state.total - item.price * item.quantity,
          };
        }),

      clearCart: () => set({ items: [], total: 0 }),
    }),
    { name: "zustand-cart" },
  ),
);

export const useCartStats = () => {
  const items = useCartStore((s) => s.items);
  const total = useCartStore((s) => s.total);
  const count = items.reduce((acc, item) => acc + item.quantity, 0);
  return { items, total, count };
};
