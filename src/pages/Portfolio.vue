<template>
  <section class="portfolio-section sec-padding" id="portfolio">
    <div class="container">
      <div class="row">
        <div class="section-title">
          <h2>recent work</h2>
        </div>
      </div>
      <div class="row">
        <!-- Portfolio Item Start-->
        <div v-for="(item, index) in portfolioItems" :key="index" class="portfolio-item">
          <div class="protfolio-item-thumbnail">
            <img :src="item.imageSrc" :alt="item.title">
          </div>
          <h3 class="protfolio-item-title">{{ item.title }}</h3>
          <a type="button" class="btn view-project-btn" @click="showPortfolioPopup(index)">view project</a>
        </div>
        <!-- Portfolio Item End-->
      </div>
    </div>
  </section>

  <!-- Portfolio Popup Start -->
  <div class="portfolio-popup" v-if="popupVisible">
    <div class="pp-inner">
      <button class="pp-close" @click="hidePortfolioPopup">Close</button>
      <div class="pp-thumbnail">
        <img :src="portfolioItems[selectedItem].imageSrc" :alt="portfolioItems[selectedItem].title">
      </div>
      <div class="pp-header">
        <h3>{{ portfolioItems[selectedItem].title }}</h3>
      </div>
      <div class="pp-body">
        <div v-html="portfolioItems[selectedItem].details"></div>
      </div>
    </div>
  </div>
  <!-- Portfolio Popup End -->
</template>

<script>
import { portfolioItems } from '../data/portfolioItems';

export default {
  data() {
    return {
      portfolioItems,
      popupVisible: false,
      selectedItem: null
    };
  },
  methods: {
    showPortfolioPopup(index) {
      this.selectedItem = index;
      this.popupVisible = true;
      document.body.classList.add('hide-scrolling');
    },
    hidePortfolioPopup() {
      this.selectedItem = null;
      this.popupVisible = false;
      document.body.classList.remove('hide-scrolling');
    }
  }
};
</script>

<style scoped>
/* Add your specific styles for the portfolio section and popup here */
</style>
