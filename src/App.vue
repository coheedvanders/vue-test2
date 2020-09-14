<template>
  <div id="app">
    <component :is=layout>
      <router-view/>
    </component>
  </div>
</template>

<script>
const default_layout = "main";
export default {
  components:{
    
  },
  computed: {
    layout(){
      return (this.$route.meta.layout || default_layout) +  '-layout';
    }
  }
}
</script>

<style>

</style>
