<template>
  <div
    :title="item.product.title"
    class="flex justify-between items-center shrink-0 gap-2"
  >
    <h4 class="text-ellipsis whitespace-nowrap overflow-hidden mr-2">
      {{ item?.product?.title }}
    </h4>
    <p
      class="shrink-0 text-xs rounded-full text-white bg-blue-900 px-3 py-1 flex justify-center items-center"
    >
      {{ formatPrice(item?.product?.price * item.quantity) }}
    </p>
    <div class="flex shrink-0">
      <button
        @click="cart?.increaseQuantity(item)"
        class="rounded-l text-white bg-blue-900 w-6 h-6 flex justify-center items-center"
        title="Increase quantity"
      >
        +
      </button>
      <span class="bg-white h-6 px-3 text-xs flex items-center">{{
        item?.quantity
      }}</span>
      <button
        @click="cart?.decreaseQuantity(item)"
        class="rounded-r text-white bg-blue-900 w-6 h-6 flex justify-center items-center"
        title="Decrease quantity"
      >
        -
      </button>
    </div>
    <close-button
      @click="cart.removeItem(item)"
      class="font-bold hover:text-red-800"
      title="Remove item from cart"
    />
  </div>
</template>

<script lang="ts">
import { CartItem } from "../../types";
import { defineComponent } from "vue";
import useCartStore from "@/store/cart.store";
import CloseButton from "../CloseButton.vue";
import formatPrice from "@/utils/formatPrice";

export default defineComponent({
  components: { CloseButton },
  name: "CartItem",
  setup() {
    const cart = useCartStore();
    return {
      cart,
    };
  },
  methods: { formatPrice },
  props: {
    item: {
      type: Object as () => CartItem,
      required: true,
    },
  },
});
</script>
