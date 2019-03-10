<template>
  <div>
    <Navbar/>
    <Header/>
    <About/>
    <Tech/>
    <Certifications/>
    <Contact/>

    <div class="container">
      <p class="created-using">Built using <i class="fab fa-vuejs" title="Vue.js"></i> Hosted on <i class="fab fa-aws" title="AWS"></i></p>
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Header from '~/components/Index/Header.vue'
import About from '~/components/Index/About.vue'
import Tech from '~/components/Index/Tech.vue'
import Certifications from '~/components/Index/Certifications.vue'
import Contact from '~/components/Index/Contact.vue'

export default {
  components: {
    Navbar, Header, About, Tech, Certifications, Contact
  }
}
</script>

<style lang="scss">
section {
  padding: 75px 0;

  &:nth-child(even) {
    background-color: #fff;
  }
}
</style>

<style scoped lang="scss">
.created-using {
  text-align: center;
  padding: 2rem 0;
  opacity: 0.6;
  font-size: 11px;
}
</style>