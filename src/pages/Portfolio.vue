<template>
  <section class="portfolio-section sec-padding" id="portfolio">
    <div class="container">
      <div class="row">
        <div class="section-title">
          <h2>Work Sample</h2>
        </div>
      </div>
      <div class="row">
        <!-- Portfolio Item Start-->
        <div
          v-for="(item, index) in portfolioItems"
          :key="index"
          class="portfolio-item"
        >
          <div class="protfolio-item-thumbnail">
            <img loading="lazy" :src="item.imageSrc" :alt="item.title" />
          </div>
          <h3 class="protfolio-item-title">{{ item.title }}</h3>
          <a
            type="button"
            class="btn view-project-btn"
            @click="showPortfolioPopup(index)"
            >view details</a
          >
        </div>
        <!-- Portfolio Item End-->
      </div>
    </div>
  </section>

  <!-- Portfolio Popup Start -->
  <div class="portfolio-popup open" v-if="popupVisible">
    <div class="pp-inner">
      <div class="pp-content">
        <div class="pp-header">
          <button class="btn pp-close" @click="hidePortfolioPopup">
            <i class="fas fa-times"></i>
          </button>
          <div class="pp-thumbnail">
            <img
              :src="portfolioItems[selectedItem].imageSrc"
              :alt="portfolioItems[selectedItem].title"
            />
          </div>
          <h3>{{ portfolioItems[selectedItem].title }}</h3>
        </div>
        <div class="pp-body">
          <!-- Render description -->
          <div class="description">
            <p>
              Features:
              {{ portfolioItems[selectedItem].details.description.features }}
            </p>
            <ul
              v-if="
                portfolioItems[selectedItem].details.description.adminActions
              "
            >
              <li
                v-for="(action, actionIndex) in portfolioItems[selectedItem]
                  .details.description.adminActions"
                :key="actionIndex"
              >
                {{ action }}
              </li>
            </ul>
          </div>

          <!-- Render general info -->
          <div class="general-info">
            <ul>
              <li>
                <u>Technologies used:</u>
                &nbsp;
                <em>
                  {{
                    portfolioItems[selectedItem].details.generalInfo
                      .technologiesUsed
                  }}</em
                >
              </li>
              <li>
                <u>Role:</u>
                &nbsp;
                {{ portfolioItems[selectedItem].details.generalInfo.role }}
              </li>
              <li
                v-if="
                  portfolioItems[selectedItem].details.generalInfo.viewOnline
                "
              >
                View Online:
                <a
                  :href="
                    portfolioItems[selectedItem].details.generalInfo.viewOnline
                      .url
                  "
                  target="_blank"
                >
                  {{
                    portfolioItems[selectedItem].details.generalInfo.viewOnline
                      .text
                  }}
                </a>
              </li>
              <li
                v-if="
                  portfolioItems[selectedItem].details.generalInfo.frontendCode
                "
              >
                Frontend Code:
                <a
                  :href="
                    portfolioItems[selectedItem].details.generalInfo
                      .frontendCode.url
                  "
                  target="_blank"
                >
                  {{
                    portfolioItems[selectedItem].details.generalInfo
                      .frontendCode.text
                  }}
                </a>
              </li>
              <li
                v-if="
                  portfolioItems[selectedItem].details.generalInfo.backendCode
                "
              >
                Backend Code:
                <a
                  :href="
                    portfolioItems[selectedItem].details.generalInfo.backendCode
                      .url
                  "
                  target="_blank"
                >
                  {{
                    portfolioItems[selectedItem].details.generalInfo.backendCode
                      .text
                  }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Portfolio Popup End -->
</template>

<script>
import { portfolioItems } from "../data/portfolioItems";

export default {
  data() {
    return {
      portfolioItems,
      popupVisible: false,
      selectedItem: null,
    };
  },
  methods: {
    showPortfolioPopup(index) {
      this.selectedItem = index;
      this.popupVisible = true;
      document.body.classList.add("hide-scrolling");
      document.querySelector("#portfolio").classList.add("fade-out");
      document.querySelector(".nav-toggler").style.display = "none";
    },
    hidePortfolioPopup() {
      this.selectedItem = null;
      this.popupVisible = false;
      document.body.classList.remove("hide-scrolling");
      document.querySelector("#portfolio").classList.remove("fade-out");
      document.querySelector(".nav-toggler").style.display = "flex";
    },
  },
};
</script>

<style scoped>
/* Add your specific styles for the portfolio section and popup here */
</style>
