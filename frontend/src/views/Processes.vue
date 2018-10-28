<template>
  <div class="processes">
    <div class="processes-header">
      <h1>Processes</h1>
      <div class="radio-group">
        <div class="radio-button-div" v-for="(item, index) in processes_statuses" :key="index">
          <input
            type="radio"
            class="radio-button"
            name="process-status"
            v-model="selected_processes_status"
            :id="'radio-button-' + index"
            :value="item.val"
            :checked="item.checked">
          <label :for="'radio-button-' + index">
          {{ item.txt }}(0)
          </label>
        </div>
      </div>
    </div>
    <div class="processes-main">
      <process/>
    </div>
  </div>
</template>

<script>
import Process from "./Process.vue"

export default {
  components: {
    Process,
  },
  data() {
    return {
      processes_statuses: [
        {
          txt: 'New',
          val: "new",
          checked: true,
        },
        {
          txt: 'Accepted',
          val: "accepted",
          checked: false,
        },
        {
          txt: 'All',
          val: "all",
          checked: false,
        },
      ],
      selected_processes_status:'',
    };
  },
};
</script>

<style scoped lang="scss">
$blue: #46ACC2;
$dark-gray: #dfdfdf;

.processes {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  width: 100%;
  height: 100%;
}
.processes-header {
  grid-column: 1 / span 12;
  grid-row: 1 / span 2;
  flex-direction: column;
  padding-top: 25px;

  @media only screen and (max-width: 768px) {
    grid-row: 1 / span 1;
  }
}
.processes-main {
  grid-column: 1 / span 12;
  grid-row: 3 / span 10;

  @media only screen and (max-width: 768px) {
    grid-row: 2 / span 11;
  }
}
.radio-group {
  display: flex;
  border-top: solid 2px $dark-gray;
  border-bottom: solid 2px $dark-gray;
  padding: 5px;

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
}
.radio-button-div {
  display: flex;
  align-items: center;
}
.radio-button {
  visibility: hidden;
}
label {
  padding: 5px;
  cursor: pointer;
}
.radio-button:checked + label {
  font-weight: 600;
  border-bottom: solid 2px $blue;
}
@media only screen and (max-width: 768px) {
  h1 {
    display: none;
  }
}
</style>