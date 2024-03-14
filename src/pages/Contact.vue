<template>
    <section class="contact-section sec-padding" id="contact">
      <div class="container">
        <div class="row">
          <div class="section-title">
            <h2>contact me</h2>
          </div>
        </div>
        <div class="row">
          <div class="contact-form">
            <div>
              <div class="row">
                <div class="input-group">
                  <input
                    v-model="emailTo"
                    type="text"
                    placeholder="Email to"
                    class="input-control"
                    required
                  />
                </div>
                <div class="input-group">
                  <input
                    v-model="fromName"
                    type="text"
                    placeholder="From Name"
                    class="input-control"
                    required
                  />
                </div>
                <div class="input-group">
                  <input
                    v-model="toName"
                    type="text"
                    placeholder="To Name"
                    class="input-control"
                    required
                  />
                </div>
                <div class="input-group">
                  <textarea
                    v-model="message"
                    type="text"
                    placeholder="Message"
                    class="input-control"
                    required
                  ></textarea>
                </div>
                <div class="submit-btn">
                  <button @click="send" class="btn">send</button>
                </div>
              </div>
            </div>
          </div>
          <div class="contact-info">
            <div class="contact-info-item">
              <h3>Email</h3>
              <p>muhammad11maruf@gmail.com</p>
            </div>
            <div class="contact-info-item">
              <h3>Phone</h3>
              <p>+8801971795775</p>
            </div>
            <div class="contact-info-item">
              <h3>follow me</h3>
              <div class="social-links">
                <a href="https://www.facebook.com/3rudit3/" target="_blank"
                  ><i class="fab fa-facebook-f"></i
                ></a>
                <a href="https://github.com/MuhammadMaruf11" target="_blank"
                  ><i class="fab fa-github"></i
                ></a>
                <a
                  href="https://www.linkedin.com/in/muhammadmaruf11/"
                  target="_blank"
                  ><i class="fab fa-linkedin"></i
                ></a>
                <a href="https://hashnode.com/@muhammadmaruf" target="_blank"
                  ><i class="fa-brands fa-hashnode"></i
                ></a>
                <a
                  href="https://stackoverflow.com/users/18429141/muhammad-maruf"
                  target="_blank"
                  ><i class="fa-brands fa-stack-overflow"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      emailTo: "",
      fromName: "",
      toName: "",
      message: "",
    };
  },
  methods: {
    send() {
      // Implement your send logic here
    },
  },
};
</script>

<style scoped>
/* Add any specific styles for the Contact page here */
</style>
