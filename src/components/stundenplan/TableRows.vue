<template>
  <div style="background-color: aqua; width: 250px; height: 150px">
    <!-- {{ allHours }} -->
    <tr v-for="(s, index) in std" :key="index">
      <!-- <th>{{ index + 1 }}. Std</th> -->
      <td :id="index" style="width: 100%">
        <table-subject></table-subject>
        <table-teach></table-teach>
        <table-room></table-room>
      </td>
    </tr>
  </div>
  <!-- <tr v-for="(s, index) in std" :key="index">
    <th>{{ index + 1 }}. Std</th>
    <td @click="openDialogOnClick($event)" :id="index" style="width: 20%">
      {{ getSubjectArray[0][index]?.name }}<br />
      {{ getSubjectArray[0][index]?.lehrkraft }} <br />
      {{ getSubjectArray[0][index]?.raum }}
    </td>
    <td :id="index + 10" style="width: 20%">
      {{ getSubjectArray[1][index]?.name }}<br />
      {{ getSubjectArray[1][index]?.lehrkraft }} <br />
      {{ getSubjectArray[1][index]?.raum }}
    </td>
    <td :id="index + 20" style="width: 20%">
      {{ getSubjectArray[2][index]?.name }}<br />
      {{ getSubjectArray[2][index]?.lehrkraft }} <br />
      {{ getSubjectArray[2][index]?.raum }}
    </td>
    <td :id="index + 30" style="width: 20%">
      {{ getSubjectArray[3][index]?.name }}<br />
      {{ getSubjectArray[3][index]?.lehrkraft }} <br />
      {{ getSubjectArray[3][index]?.raum }}
    </td>
    <td :id="index + 40" style="width: 20%">
      {{ getSubjectArray[4][index]?.name }}<br />
      {{ getSubjectArray[4][index]?.lehrkraft }} <br />
      {{ getSubjectArray[4][index]?.raum }}
    </td>
  </tr> -->
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import TableSubject from "./TableSubject.vue";
import TableTeach from "./TableTeach.vue";
import TableRoom from "./TableRoom.vue";

export default {
  components: {
    TableSubject,
    TableTeach,
    TableRoom,
  },
  data() {
    return {
      std: ["std1", "std2", "std3", "std4", "std5", "std6", "std7", "std8"],
    };
  },
  computed: {
    ...mapGetters({
      allHours: "getAllHours",
    }),

    // ...mapGetters([
    // // "getAllHours",
    // "getFachByWochentag",
    // "getLehrerByWochentag",
    // "getRaumByWochentag",
    // "getSubjectArray",
    // ]),
  },
  methods: {
    openDialogOnClick(event) {
      if (event.target.id == 1) {
        this.$store.dispatch("testEdit");
      } else {
        console.log("Did not click on right object!");
      }
    },
    // ...mapActions(["getSubjects"]),
  },

  async beforeMount() {
    // this.getSubjects();
  },
};
</script>
