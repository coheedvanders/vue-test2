<template>
  <div>
      <div>
          <Header/>
      </div>
      <div>
          <slot />
      </div>
      <div>
          <Footer />
      </div>
  </div>
</template>

<script>
import Header from "@/components/main/Header.vue"
import Footer from "@/components/main/Footer.vue"

export default {
  name: "main-layout",
  components:{
      Header,
      Footer
  }
};
</script>

<style scoped>

</style>