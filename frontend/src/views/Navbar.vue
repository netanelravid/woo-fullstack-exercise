<template>
  <header>
    <div class="container">
      <div>
        <img alt="Woo logo" src="../assets/woo-logo-80.png">
      </div>
      <div @click="toggle()" class="navbar-links-toggle">
        <i class="fas fa-bars"></i>
      </div>
      <nav :class="['navbar-links', isLinkToggled ? 'navbar-toggle-show' : '']">
        <router-link class="navbar-link" to="/">Home</router-link>
        <router-link class="navbar-link" to="/processes">Processes</router-link>
        <router-link class="navbar-link" to="/profile">Profile</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isLinkToggled: false,
    };
  },
  methods: {
    toggle() {
      this.isLinkToggled = !this.isLinkToggled;
    }
  },
};
</script>

<style scoped lang="scss">
$gray: #dadada;
$blue: #46ACC2;

header {
  height: 100%;
}
.container {
  display: flex;
  height: 100%;
  align-items: center;
}
.navbar-links-toggle {
  display: none;
}
.navbar-links {
  display: flex;

  // height: 100%;
}
.navbar-link {
  padding: 15px;
  text-decoration: none;
  // background: white;
  color: black;

  &.router-link-exact-active {
    font-weight: 600;
    border-bottom: solid 2px $blue;
  }
}

@media only screen and (max-width: 768px) {
  .container {
    align-items: stretch;
    flex-direction: column;
  }
  .navbar-links {
    display: none;
    flex-direction: column;
    text-align: center;

  }
  .navbar-links-toggle {
    display: flex;
    align-self: flex-end;
    position: absolute;
    cursor: pointer;
    border: solid 2px $gray;
    border-radius: 5px;
    margin-left: auto;
    padding: 7px;
  }
  .navbar-toggle-show {
    display: flex;
  }
}

</style>
