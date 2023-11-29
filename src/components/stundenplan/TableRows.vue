<template>
  <tr v-for="(s, index) in std" :key="index">
    <th>{{ index + 1 }}. Std</th>
    <td>
      {{ getFachByWochentag(s, "montag") }} <br />
      {{ getLehrerByWochentag(s, "montag") }} |
      {{ getRaumByWochentag(s, "montag") }}
    </td>
    <td>
      {{ getFachByWochentag(s, "dienstag") }} <br />
      {{ getLehrerByWochentag(s, "dienstag") }} |
      {{ getRaumByWochentag(s, "dienstag") }}
    </td>
    <td>
      {{ getFachByWochentag(s, "mittwoch") }} <br />
      {{ getLehrerByWochentag(s, "mittwoch") }} |
      {{ getRaumByWochentag(s, "mittwoch") }}
    </td>
    <td>
      {{ getFachByWochentag(s, "donnerstag") }} <br />
      {{ getLehrerByWochentag(s, "donnerstag") }} |
      {{ getRaumByWochentag(s, "donnerstag") }}
    </td>
    <td>
      {{ getFachByWochentag(s, "freitag") }} <br />
      {{ getLehrerByWochentag(s, "freitag") }} |
      {{ getRaumByWochentag(s, "freitag") }}
    </td>
  </tr>
</template>

<script>
import { mapGetters } from "vuex";

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
    ]),
  },
  // methods: {
  //   getSubjectByIndex(index) {
  //     this.$store.getters[`getStd${index}Subjects`];
  //   },
  // },
};
</script>
