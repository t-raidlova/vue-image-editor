<template>
  <SwitchPage />
  <div class="card_wrapper">
    <section><CardPreview :selectedPage="selectedPage"></CardPreview></section>
    <section><CardEdit :selectedPage="selectedPage"></CardEdit></section>
  </div>
</template>

<script>
import CardPreview from "@/components/card/CardPreview.vue";
import CardEdit from "@/components/card/CardEdit.vue";
import useCurrentCard from "../composables/useCurrentCard";
import SwitchPage from "@/components/card/SwitchPage.vue";

export default {
  components: {
    CardPreview,
    CardEdit,
    SwitchPage,
  },
  setup() {
    const { selectedPage } = useCurrentCard();
    return {
      selectedPage,
    };
  },
};
</script>

<style scoped>
.card_wrapper {
  display: flex;
  background: #eee;
  box-shadow: 1px 1px 2px #ddd inset;
}

.card_wrapper > section {
  flex: 1;
  padding: 10px;
}
</style>
