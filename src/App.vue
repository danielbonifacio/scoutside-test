<template>
  <div class="flex justify-center items-center h-screen gap-4">
    <CartDrawer />
    <button
      @click="cart.addItem"
      class="rounded-md bg-purple-500 text-white px-4 py-2 hover:ring hover:bg-purple-600 focus:ring"
    >
      Add To Cart
    </button>
    <button
      @click="cart.clearCart"
      class="rounded-md bg-blue-500 text-white px-4 py-2 hover:ring hover:bg-blue-600 focus:ring"
    >
      Clear Cart
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useCartStore from "@/store/cart.store";
import CartDrawer from "@/components/cart/CartDrawer.vue";

export default defineComponent({
  name: "App",
  components: { CartDrawer },
  setup() {
    const cart = useCartStore();
    return { cart };
  },
});
</script>

<style>
body,
html {
  overflow-x: hidden;
}
</style>
