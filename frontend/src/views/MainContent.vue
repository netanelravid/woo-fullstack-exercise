<template>
  <div class="main-content">
    <div class="sidebar-left">
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
    <div class="sidebar-right">
    </div>
  </div>
</template>

<style scoped lang="scss">
$light-gray: #f7f7f7;
$dark-gray: #dfdfdf;

.main-content {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  border-top: solid 2px $dark-gray;
  background: $light-gray;
  width: 100%;
  height: 100%;
}
.sidebar-left {
  grid-column: 1 / span 1;
  grid-row: 1 / span 12;
}
.main {
  grid-column: 2 / span 10;
  grid-row: 1 / span 12;
}
.sidebar-right {
  grid-column: 12 / span 1;
  grid-row: 1 / span 12;
}
</style>