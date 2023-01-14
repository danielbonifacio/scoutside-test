<template>
  <div
    class="absolute right-0 top-0 bottom-0 lg:w-96 w-full p-4 bg-white border-l border-blue-900/10 overflow-y-auto"
    :class="{
      'translate-x-full': !open,
      'animate-slide-in': open,
    }"
  >
    <h2 class="font-bold text-2xl text-blue-900 mb-2">Cart</h2>
    <p class="font-bold text-xs text-blue-900 mb-6">
      You have {{ cart.totalCartItems }} items
    </p>

    <CloseButton
      @click="closeDrawer"
      class="font-bold uppercase absolute right-4 top-4 focus:ring focus:outline-none w-6 h-6 text-blue-600 focus:text-blue-900 hover:text-blue-900 flex items-center justify-center"
    />

    <ul class="flex flex-col gap-2 mb-4">
      <li
        v-for="item in cart.items"
        :key="item.product.title"
        tabindex="0"
        class="rounded-xl px-4 py-3 text-lg bg-blue-100 text-blue-900 hover:bg-blue-200 focus:bg-blue-200 focus:outline-none focus:ring active:bg-blue-300"
      >
        <CartItem :item="item" />
      </li>
    </ul>

    <CartSubtotal />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import useCartStore from "@/store/cart.store";
import CartItem from "./CartItem.vue";
import CloseButton from "../CloseButton.vue";
import CartSubtotal from "./CartSubtotal.vue";

export default defineComponent({
  name: "CartDrawer",
  components: { CartItem, CloseButton, CartSubtotal },
  setup() {
    const cart = useCartStore();
    const open = ref(false);

    function openDrawer() {
      open.value = true;
    }

    function closeDrawer() {
      open.value = false;
    }

    watch(
      () => cart.totalCartItems,
      () => {
        openDrawer();
      }
    );

    return {
      cart,
      open,
      openDrawer,
      closeDrawer,
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
});
</script>
