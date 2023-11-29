<template>
  <tr v-for="(s, index) in std" :key="index">
    <th>{{ index + 1 }}. Std</th>
    <td @click="openDialogOnClick($event)" :id="index" style="width: 20%">
      {{ getFachByWochentag(s, "montag") }} <br />
      {{ getLehrerByWochentag(s, "montag") }} <br />
      {{ getRaumByWochentag(s, "montag") }}
    </td>
    <td :id="index + 10" style="width: 20%">
      {{ getFachByWochentag(s, "dienstag") }} <br />
      {{ getLehrerByWochentag(s, "dienstag") }} <br />
      {{ getRaumByWochentag(s, "dienstag") }}
    </td>
    <td :id="index + 20" style="width: 20%">
      {{ getFachByWochentag(s, "mittwoch") }} <br />
      {{ getLehrerByWochentag(s, "mittwoch") }} <br />
      {{ getRaumByWochentag(s, "mittwoch") }}
    </td>
    <td :id="index + 30" style="width: 20%">
      {{ getFachByWochentag(s, "donnerstag") }} <br />
      {{ getLehrerByWochentag(s, "donnerstag") }} <br />
      {{ getRaumByWochentag(s, "donnerstag") }}
    </td>
    <td :id="index + 40" style="width: 20%">
      {{ getFachByWochentag(s, "freitag") }} <br />
      {{ getLehrerByWochentag(s, "freitag") }} <br />
      {{ getRaumByWochentag(s, "freitag") }}
    </td>
  </tr>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

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
    ]),
  },
  methods: {
    openDialogOnClick(event) {
      if (event.target.id == 1) {
        this.$store.dispatch("testEdit");
      } else {
        console.log("Did not click on right object!");
      }
    },
    ...mapActions(["getSubjects"]),
  },

  async beforeMount() {
    this.getSubjects();
  },
};
</script>
