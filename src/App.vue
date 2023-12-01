<template>
  <the-header></the-header>
  <main class="mdl-layout__content">
    <div class="page-content" style="text-align: center">
      <info-dialog v-if="getDialogStatus == true"></info-dialog>
      <page-title></page-title>
      <base-plan></base-plan>
    </div>
  </main>
</template>

<script>
import TheHeader from "./components/header/TheHeader.vue";
import PageTitle from "./components/PageTitle.vue";
import BasePlan from "./components/stundenplan/BasePlan.vue";
import InfoDialog from "./components/stundenplan/InfoDialog.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    TheHeader,
    PageTitle,
    BasePlan,
    InfoDialog,
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
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
