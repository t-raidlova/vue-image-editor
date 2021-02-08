<template>
  <header>
    <h1 @click="$router.push('/')">🎨 Vue Image Editor</h1>
    <nav>
      <ul>
        <li><router-link to="/category/gradients">gradients</router-link></li>
        <li>
          <router-link to="/category/patterns">patterns</router-link>
        </li>
        <li><router-link to="/category/basic">basic</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  font-size: 18px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  display: flex;
}

li {
  padding-left: 0.5rem;
  font-weight: 600;
}

h1 {
  cursor: pointer;
  margin: 0;
}
</style>
