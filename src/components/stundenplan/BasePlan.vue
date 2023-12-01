<template>
  <table
    style="
      margin-left: auto;
      margin-right: auto;
      margin-top: auto;
      text-align: center;
      font-family: Roboto Slab;
      width: 98%;
      font-size: 13px;
    "
    v-show="tableIsNotEmpty == true && responseIsNotError == true"
    class="mdl-shadow--2dp"
    id="stundenplan"
  >
    <tr>
      <th>&nbsp;</th>
      <th>Mo.</th>
      <th>Di.</th>
      <th>Mi.</th>
      <th>Do.</th>
      <th>Fr.</th>
    </tr>
    <table-rows></table-rows>
  </table>
  <div
    class="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active"
    style="
      height: 64px;
      width: 64px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 5px;
      margin-bottom: 5px;
    "
    v-show="tableIsNotEmpty == false && responseIsNotError == true"
  ></div>
  <div style="text-align: center" v-show="responseIsNotError == false">
    <h2 style="color: red">
      Something went wrong... Maybe check your internet connection?
    </h2>
    <h3>
      Here is the error code in case you need it:
      <code style="color: red">{{ returnErrorStatus }}</code>
    </h3>
  </div>
</template>

<script>
import TableRows from "./TableRows.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    TableRows,
  },
  data() {
    return {
      tableIsNotEmpty: false,
      responseIsNotError: true,
    };
  },
  computed: {
    ...mapGetters([
      "getSubjectArray",
      "returnErrorStatus",
      "getRaumByWochentag",
    ]),
  },
  watch: {
    getSubjectArray: {
      handler(newValue) {
        console.log(this.tableIsNotEmpty);
        if (newValue[4][3] != null || undefined) {
          this.tableIsNotEmpty = true;
          console.log(this.tableIsNotEmpty);
        }
      },
      deep: true,
    },
    returnErrorStatus() {
      this.responseIsNotError = false;
    },
  },
};
</script>

<style>
table,
th,
td {
  border: 1px solid rgb(218, 218, 218);
  border-collapse: collapse;
}
</style>
