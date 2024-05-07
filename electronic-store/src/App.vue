<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
  <!-- Footer -->
</template>

<script>
  import Navbar from './components/Navbar.vue';

  export default {
    name: "App",
    components: {
      Navbar
    }
  }
</script>