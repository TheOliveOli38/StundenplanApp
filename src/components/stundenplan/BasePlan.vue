import TableRows from './TableRows.vue';

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
    <tablerows></tablerows>
  </table>
</template>
