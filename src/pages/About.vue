<template>
  <section class="about-section sec-padding" id="about">
    <div class="container">
      <div class="row">
        <div class="section-title">
          <h2>about me</h2>
        </div>
      </div>
      <div class="row">
        <div class="about-img">
          <div class="img-box">
            <img src="/img/3rudit3.webp" alt="about img" />
          </div>
        </div>
        <div class="about-text">
          <p>
            I want to build my career by developing new skills and learning new
            technologies as a MERN stack developer. I want to be part of a group
            which innovates next generation technological solutions for mankind
            in an industry leading organization
          </p>
          <h3>Proficient with:</h3>
          <div class="skills">
            <div class="skill-item">HTML5</div>
            <div class="skill-item">CSS3</div>
            <div class="skill-item">SCSS</div>
            <div class="skill-item">Tailwind CSS</div>
            <div class="skill-item">Bootstrap</div>
            <div class="skill-item">JavaScript</div>
            <div class="skill-item">TypeScript</div>
            <div class="skill-item">React JS</div>
            <div class="skill-item">React TypeScript</div>
            <div class="skill-item">React Bootstrap</div>
            <div class="skill-item">React Redux</div>
            <div class="skill-item">NextJs</div>
            <div class="skill-item">JSON</div>
            <div class="skill-item">jQuery</div>
          </div>
          <h3>Familiar with:</h3>
          <div class="skills">
            <div class="skill-item">Redux Toolkit</div>
            <div class="skill-item">RTK Query</div>
            <div class="skill-item">Expo</div>
            <div class="skill-item">React Native</div>
            <div class="skill-item">Node Js</div>
            <div class="skill-item">Express Js</div>
            <div class="skill-item">MongoDB</div>
            <div class="skill-item">Mongoose</div>
            <div class="skill-item">REST API</div>
            <div class="skill-item">VueJs</div>
          </div>
          <h3>Tools:</h3>
          <div class="skills">
            <div class="skill-item">Git</div>
            <div class="skill-item">Github</div>
            <div class="skill-item">VS Code</div>
            <div class="skill-item">Visual Studio</div>
            <div class="skill-item">Netlify</div>
            <div class="skill-item">Vercel</div>
            <div class="skill-item">Figma</div>
            <div class="skill-item">MS Office</div>
          </div>

          <div class="about-tabs">
            <button
              type="button"
              class="tab-item"
              :class="{ active: activeTab === 'experience' }"
              @click="changeTab('experience')"
            >
              experience
            </button>
            <button
              type="button"
              class="tab-item"
              :class="{ active: activeTab === 'education' }"
              @click="changeTab('education')"
            >
              education
            </button>
          </div>

          <!-- Experience Start-->
          <div
            class="tab-content"
            :class="{ active: activeTab === 'experience' }"
            id="experience"
          >
            <div class="timeline">
              <div
                v-for="(item, index) in experiences"
                :key="index"
                class="timeline-item"
              >
                <span class="date">{{ item.date }}</span>
                <h4>{{ item.position }}</h4>
                <p>{{ item.company }}</p>
                <small>{{ item.location }}</small>
              </div>
            </div>
          </div>
          <!-- Experience End-->

          <!-- Education Start-->
          <div
            class="tab-content"
            :class="{ active: activeTab === 'education' }"
            id="education"
          >
            <div class="timeline">
              <div class="timeline-item">
                <span class="date">Running</span>
                <h4>
                  Bachelor of Business Studies -
                  <span>T and T College</span>
                </h4>
                <p>Degree<sup>1st</sup> year department of Business Study</p>
              </div>
              <div class="timeline-item">
                <span class="date">Passed - GPA 3.67</span>
                <h4>
                  Higher Secondary Certificate -
                  <span>Khilgaon Ideal College</span>
                </h4>
                <p>Department of Business Study</p>
              </div>
              <div class="timeline-item">
                <span class="date">GPA 4.19</span>
                <h4>
                  Secondary School Certificate -
                  <span>Quality Education College</span>
                </h4>
                <p>Department of Business Study</p>
              </div>
            </div>
          </div>
          <!-- Education End-->

          <router-link to="/portfolio" class="btn link-item"
            >portfolio</router-link
          >
          <router-link to="/contact" class="btn link-item"
            >contact me</router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { experiences } from "../data/experiences";
export default {
  name: "About",
  data() {
    return {
      experiences,
      activeTab: "experience",
    };
  },
  methods: {
    changeTab(tab) {
      this.activeTab = tab;
    },
  },
};
</script>

<style scoped>
/* Add any specific styles for the About page here */
</style>
