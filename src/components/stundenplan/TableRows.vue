<template>
  <tr v-for="index in 8" :key="index">
    <th>{{ index }}. Std</th>
    <td>{{ getSubjectByIndex(index, montagFach) }}</td>
    <td>{{ getSubjectByIndex(index, dienstagFach) }}</td>
    <td>{{ getSubjectByIndex(index, mittwochFach) }}</td>
    <td>{{ getSubjectByIndex(index, donnerstagFach) }}</td>
    <td>{{ getSubjectByIndex(index, freitagFach) }}</td>
  </tr>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters([
      "getStd1Subjects",
      // "getStdDienstag",
      // "getStdMittwoch",
      // "getStdDonnerstag",
      // "getStdFreitag",
    ]),
  },
  methods: {
    getSubjectByIndex(index, day) {
      this.$store.getters[`getStd${index}Subjects`][day];
    },
  },
};
</script>
