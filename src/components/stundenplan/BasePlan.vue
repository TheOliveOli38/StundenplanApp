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
</template>

<script>
import TableRows from "./TableRows.vue";
export default {
  components: {
    TableRows,
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
