<template>
  <div>
  <router-link to="/card">Go to Card</router-link>
  <router-view></router-view>
  </div>
</template>
<script>
  import card from './components/card/card.vue'
  export default {
    name: "app"
  }
</script>
