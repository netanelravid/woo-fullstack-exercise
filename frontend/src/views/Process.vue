<template>
  <div class="process">
    <div class="grid-position-info">
      <div class="position-title">
        Java Expert
      </div>
      <div class="position-info">
        <div class="position-info-box position-info-box-left">
          <div class="position-info-bold">
            at Burrito Burrito Taco Man
          </div>
          <div class="position-info-light position-info-creatio-date">
            9 days ago
          </div>
        </div>
        <div class="position-info-box-status-items">
          <div class="position-info-box-status">
            <div>
              <i class="fas fa-check"></i>
            </div>
            <div class="position-info-box">
              <div class="position-info-light">
                Preferred location
              </div>
              <div class="position-info-bold-small">
                Tel Aviv
              </div>
            </div>
          </div>
          <div class="position-info-box-status">
            <div>
              <i class="fas fa-check"></i>
            </div>
            <div class="position-info-box">
              <div class="position-info-light">
                Monthly salary
              </div>
              <div class="position-info-bold-small">
                ₪30,000 monthly
              </div>
            </div>
          </div>
          <div class="position-info-box-status">
            <div>
              <i class="fas fa-check"></i>
            </div>
            <div class="position-info-box">
              <div class="position-info-light">
                Technology
              </div>
              <div class="position-info-bold-small">
                4 out of 6
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid-position-tech-skills">
      <div class="position-tech-skills">
        <label class="tech-skill">
          Jave
        </label>
        <label class="tech-skill">
          Python
        </label>
        <label class="tech-skill">
          AngularJS
        </label>
      </div>
    </div>
    <div class="grid-position-status">
      <label class="position-status position-status-label-new">
        New
      </label>
      <div class="buttons">
      <a href="#" class="position-status button-accept">
        Accept
      </a>
      <a href="#" class="position-status button-reject">
        Reject
      </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
$blue: #46ACC2;
$dark-gray: #b2b7b8;
$light-gray: #f7f7f7;
$border-gray: #dfdfdf;
$check-ok-icon-green: #17c48a;;

.process {
  display: grid;
  background: white;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  border: solid 2px $border-gray;
  margin-top: 30px;
  padding: 30px 15px 25px 25px;

  @media only screen and (max-width: 768px) {
    padding: 25px 10px 10px 10px;
  }
}
.grid-position-info {
  grid-column: 1 / span 9;
  grid-row: 1 / span 9;
}
.position-title {
  color: $blue;
  font-weight: 600;
}
.position-info {
  display: flex;

  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
}
.position-info-box {
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  margin-right: 30px;

  @media only screen and (max-width: 768px) {
    margin-right: 10px;
  }
}
.position-info-creatio-date {
  @media only screen and (max-width: 768px) {
    display: none;
  }
}
.position-info-box-left {
  margin-right: 35px;
}
.position-info-bold {
  color: black;
  font-weight: 600;
}
.position-info-bold-small {
  color: black;
  font-weight: 600;
  font-size: 14px;
}
.position-info-light {
  color: $dark-gray;
  font-size: 13px;
}
.position-title, .position-info-bold, .position-info-light {
  padding-bottom: 5px;
}
.position-info-box-status-items {
  display: flex;
  height: 100px;
  flex-wrap: wrap;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
}
.position-info-box-status {
  display: flex;
  padding-bottom: 10px;
}
.fa-check {
  color: $check-ok-icon-green;
  padding: 10px 8px;
}
.grid-position-tech-skills {
  grid-column: 1 / span 9;
  grid-row: 10 / span 3;
  display: grid;

  @media only screen and (max-width: 768px) {
    display: none;
  }
}
.position-tech-skills {
  display: flex;
  align-items: center;
  height: 100%;
  flex-wrap: wrap;
}
label.tech-skill {
  padding: 5px;
  font-size: 15px;
  margin: 5px;
  background: $light-gray;
  border-radius: 15px;
  border: solid 1.25px $dark-gray;
}
.grid-position-status {
  grid-column: 10 / span 3;
  grid-row: 1 / span 12;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    grid-column: 1 / span 12;
  }
}
.position-status {
    display: flex;
    border-radius: 5px;
    color: white;

}
.position-status-label-new {
    align-content: flex-end;
    background-color: $dark-gray;
    padding: 10px 20px;
    font-size: 16px;
    margin-left: auto;
}
.buttons {
  margin-top: auto;

  @media only screen and (max-width: 768px) {
    justify-content: space-evenly;
    display: flex;
  }
}
.button-accept, .button-reject {
    text-decoration: none;
    padding: 10px 45px;
    margin-bottom: 10px;
    font-size: 16px;
    justify-content: center;
}
.button-accept {
    background-color: $check-ok-icon-green;
    margin-top: auto;
}
.button-reject {
    background-color: $dark-gray;
}

</style>