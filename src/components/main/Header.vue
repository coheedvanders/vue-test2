<template>
  <div>
      <div>{{title}}</div>
      
      <div>
        <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String,
  },
};
</script>

<style scoped>
</style>