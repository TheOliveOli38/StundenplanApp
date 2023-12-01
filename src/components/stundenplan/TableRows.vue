<template>
  <tr v-for="(s, index) in std" :key="index">
    <th>{{ index + 1 }}. Std</th>
    <td @click="openDialogOnClick($event)" :id="index" style="width: 20%">
      {{ getSubjectArray[0][index]?.name }}<br />
      {{ getSubjectArray[0][index]?.lehrkraft }} <br />
      {{ getSubjectArray[0][index]?.raum }}
    </td>
    <td :id="index + 10" style="width: 20%" @click="openDialogOnClick($event)">
      {{ getSubjectArray[1][index]?.name }}<br />
      {{ getSubjectArray[1][index]?.lehrkraft }} <br />
      {{ getSubjectArray[1][index]?.raum }}
    </td>
    <td :id="index + 20" style="width: 20%" @click="openDialogOnClick($event)">
      {{ getSubjectArray[2][index]?.name }}<br />
      {{ getSubjectArray[2][index]?.lehrkraft }} <br />
      {{ getSubjectArray[2][index]?.raum }}
    </td>
    <td :id="index + 30" style="width: 20%" @click="openDialogOnClick($event)">
      {{ getSubjectArray[3][index]?.name }}<br />
      {{ getSubjectArray[3][index]?.lehrkraft }} <br />
      {{ getSubjectArray[3][index]?.raum }}
    </td>
    <td :id="index + 40" style="width: 20%" @click="openDialogOnClick($event)">
      {{ getSubjectArray[4][index]?.name }}<br />
      {{ getSubjectArray[4][index]?.lehrkraft }} <br />
      {{ getSubjectArray[4][index]?.raum }}
    </td>
  </tr>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      std: ["std1", "std2", "std3", "std4", "std5", "std6", "std7", "std8"],
    };
  },
  computed: {
    ...mapGetters([
      "getFachByWochentag",
      "getLehrerByWochentag",
      "getRaumByWochentag",
      "getSubjectArray",
      "getDialogStatus",
    ]),
  },
  methods: {
    openDialogOnClick(event) {
      if (event.target.innerHTML != "<br>  <br> ") {
        this.putIdInTempVar(event.target.id);
        this.changeDialogState();
      }
    },
    ...mapActions(["getSubjects", "changeDialogState", "putIdInTempVar"]),
  },

  async mounted() {
    this.getSubjects();
  },
};
</script>
