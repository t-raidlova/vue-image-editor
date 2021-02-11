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

<style scoped>
.category_item {
  background: linear-gradient(30deg, rgb(253, 207, 207), rgb(140, 140, 236));
  padding: 6rem 0;
}

ul {
  margin-top: 2rem;
}

li a {
  font-size: 20px;
}
</style>
