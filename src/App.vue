<template>
  <Layout>
    <router-view />
  </Layout>
</template>

<script>
import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes"; 
import Layout from "./components/Layout.vue"; 
export default {
  name: 'App',
  components: {
    Layout // Register the Layout component
  }
};

</script>

<style>
/* Add any global styles here */
</style>
