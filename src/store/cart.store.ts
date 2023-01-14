import nth from "@/utils/nth";
import { useStorage } from "@vueuse/core";
import { defineStore } from "pinia";

const useCartStore = defineStore("cart", {
  state: () => ({
    items: useStorage<Cart.Item[]>("cart-items", []),
  }),

  getters: {
    totalCartItems(state) {
      return state.items.length;
    },
    subtotal(state) {
      return state.items.reduce((total, item) => {
        return total + item.product.price * item.quantity;
      }, 0);
    },
  },

  actions: {
    addItem() {
      this.$patch((state) => {
        const position = state.items.length + 1;
        state.items.push({
          hash: Math.random(),
          product: {
            price: 1,
            title: `${position}${nth(position)} Dummy product`,
          },
          quantity: 1,
        });
      });
    },

    removeItem(item: Cart.Item) {
      this.$patch((state) => {
        const index = state.items.findIndex((i) => i.hash === item.hash);
        state.items.splice(index, 1);
      });
    },

    increaseQuantity(item: Cart.Item) {
      this.$patch((state) => {
        const index = state.items.findIndex((i) => i.hash === item.hash);
        state.items[index].quantity++;
      });
    },
    decreaseQuantity(item: Cart.Item) {
      this.$patch((state) => {
        const index = state.items.findIndex((i) => i.hash === item.hash);

        if (state.items[index].quantity === 1) {
          return;
        }

        state.items[index].quantity--;
      });
    },

    clearCart() {
      this.$patch((state) => {
        state.items.splice(0, state.items.length);
      });
    },
  },
});

export default useCartStore;
