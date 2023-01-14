<template>
  <div class="flex justify-end gap-2">
    <p class="font-bold uppercase text-xs text-blue-900">
      Subtotal: {{ formatPrice(cart.subtotal) }}
    </p>
  </div>
</template>

<script lang="ts">
import useCartStore from "@/store/cart.store";
import formatPrice from "@/utils/formatPrice";
import { defineComponent } from "vue";

export default defineComponent({
  name: "CartSubtotal",
  methods: { formatPrice },
  setup() {
    const cart = useCartStore();
    return {
      cart,
    };
  },
});
</script>
