<template>
  <div class="backdrop" @click="closeDialog"></div>
  <div id="test" class="mdl-shadow--4dp">
    <h3>Info zum Fach</h3>
    <p><strong>Fach: </strong>{{ info.name }}</p>
    <p><strong>Lehrkraft: </strong>{{ info.lehrkraft }}</p>
    <p><strong>Raum: </strong>{{ info.raum }}</p>
    <button @click="closeDialog" class="mdl-button">Close</button>
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
  background-color: rgba(0, 0, 0, 0.75);
}
</style>
