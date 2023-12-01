<template>
  <div class="backdrop" @click="closeDialog"></div>
  <div id="test" class="mdl-shadow--8dp">
    <h3 style="font-weight: bold">Info zum Fach</h3>
    <h4><strong>Fach: </strong>{{ info.name }}</h4>
    <h4><strong>Lehrkraft: </strong>{{ info.lehrkraft }}</h4>
    <h4><strong>Raum: </strong>{{ info.raum }}</h4>
    <br />
    <button
      @click="closeDialog"
      class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--accent"
      style="font-size: large"
    >
      Schließen
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subject: "",
      teach: "",
      room: "",
      info: "",
    };
  },
  methods: {
    closeDialog() {
      this.$store.dispatch("changeDialogState");
    },
  },

  mounted() {
    this.info = this.$store.getters["findRightInfoWithId"];
  },
};
</script>
<style scoped>
#test {
  position: fixed;
  z-index: 9;
  top: 25vh;
  left: 20vw;
  width: 60vw;
  height: 50vh;
  padding-top: 5px;
  background-color: rgb(241, 241, 241);
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
