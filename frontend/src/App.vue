<template>
  <div id="app">
    <div class="main-app-sidebar-left">
    </div>
    <div class="main-app-navbar">
      <navbar/>
    </div>
    <div class="main-app-main">
      <main-content/>
    </div>
    <div class="main-app-sidebar-right">
    </div>
  </div>
</template>

<script>
import Navbar from "./views/Navbar.vue"
import MainContent from "./views/MainContent.vue"

export default {
  name: "app",
  components: {
    Navbar,
    MainContent,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
}

.main-app-sidebar-left {
  grid-column: 1 / span 1;
  grid-row: 1 / span 12;
}
.main-app-navbar {
  grid-column: 2 / span 10;
  grid-row: 1 / span 1;
}
.main-app-main {
  grid-column: 2 / span 10;
  grid-row: 2 / span 11;
}
.main-app-sidebar-right {
  grid-column: 12 / span 1;
  grid-row: 1 / span 12;
}

</style>
