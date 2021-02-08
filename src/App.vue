<template>
  <app-header></app-header>
  <router-view />
</template>

<script>
import AppHeader from "@/components/AppHeader";

export default {
  components: {
    AppHeader,
  },
};
</script>

<style>
#app {
  font-family: "Ubuntu Mono", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

li,
li a {
  text-decoration: none;
  list-style: none;
  color: inherit;
}
</style>
