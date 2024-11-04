<!-- src/App.vue -->

<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/new-post">New Post</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
nav {
  display: flex;
  gap: 1em;
  padding: 1em;
  background-color: #f0f0f0;
}
nav a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
