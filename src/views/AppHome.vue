<template>
  <h1>🏠 Home page</h1>
  <ul class="grid_wrapper">
    <li
      v-for="category in uniqueCategories"
      :key="category"
      class="category_item"
    >
      <router-link :to="{ name: 'Category', params: { category: category } }">{{
        category
      }}</router-link>
    </li>
  </ul>
</template>

<script>
import useCategory from "@/composables/useCategory";

export default {
  setup() {
    const { uniqueCategories } = useCategory();
    return { uniqueCategories };
  },
};
</script>
