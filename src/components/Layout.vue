<template>
  <div id="layout">
    <header>
      <h1>My Awesome Website</h1>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/portfolio">Portfolio</router-link>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <p>Copyright &copy; 2024</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Layout",
};
</script>

<style scoped>
/* Add your layout styles here */
header,
footer {
  background-color: #f0f0f0;
  padding: 1rem;
}
</style>
