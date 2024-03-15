<template>
  <div id="layout">
    <!-- Page Loader Start -->
    <div class="page-loader" style="display: none">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <!-- Page Loader End -->
    <!-- Background Circles Start -->
    <div class="bg-circles">
      <div class="circle-1"></div>
      <div class="circle-2"></div>
      <div class="circle-3"></div>
      <div class="circle-4"></div>
    </div>
    <!-- Background Circles Start -->
    <!-- Overlay Start-->
    <div class="overlay"></div>
    <!-- Overlay End-->
    <!-- Header Start-->

    <div class="main">
      <header class="header" :class="{ active: isHeaderActive }">
        <div class="">
          <div class="row flex-end">
            <button type="button" class="nav-toggler" @click="toggleNavbar">
              <span></span>
            </button>
            <nav class="nav">
              <div class="nav-inner">
                <ul>
                  <li>
                    <router-link to="/" @click.native="closeNavbar" class="nav-item link-item"
                      >Home</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/about" @click.native="closeNavbar" class="nav-item link-item"
                      >About</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/portfolio" @click.native="closeNavbar" class="nav-item link-item"
                      >Portfolio</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/contact" @click.native="closeNavbar" class="nav-item link-item"
                      >Contact</router-link
                    >
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <!-- Header End-->

      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHeaderActive: false,
    };
  },
  methods: {
    toggleNavbar() {
      this.isHeaderActive = !this.isHeaderActive;
      document.querySelector("section").classList.toggle("fade-out");
    },
     closeNavbar() {
      this.isHeaderActive = false;
      document.querySelector("section").classList.toggle("fade-out");
    }
  },
};
</script>

<style scoped>
/* Add your CSS styles here */
</style>
