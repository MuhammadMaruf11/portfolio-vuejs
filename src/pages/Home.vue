<template>
  <section class="home-section align-items-center" id="home">
    <div class="container">
      <div class="row align-items-center">
        <div class="home-text">
          <p>Hello I'm</p>
          <h1>Muhammad Maruf</h1>
          <h2><span class="typejs" ref="typed"></span></h2>
          <!-- <h2>Frontend Developer</h2> -->
          <router-link to="/portfolio" class="btn link-item"
            >portfolio</router-link
          >
          <a href="/resume.pdf" target="_blank" class="btn">download resume</a>
        </div>
        <div class="home-img">
          <div class="img-box">
            <img src="/img/3rudit3.webp" alt="profile-img" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Typed from "typed.js";

export default {
  name: "Home",
  mounted() {
    // Initialize Typed.js
    this.typed = new Typed(this.$refs.typed, {
      strings: [
        "Frontend Developer (React)",
        "Software Developer (MERN)",
        "Android Developer (React Native)",
      ],
      typeSpeed: 100,
      loop: true,
    });
  },
  beforeDestroy() {
    // Destroy Typed.js instance to prevent memory leaks
    this.typed.destroy();
  },
};
</script>
