<template>
  <header></header>
  <main class="mdl-layout__content">
    <div class="page-content" style="text-align: center">
      <pagetitle></pagetitle>
      <stundenplan></stundenplan>
    </div>
  </main>
</template>

<script>
import Header from "./components/header/Header.vue";
import PageTitle from "./components/PageTitle.vue";
import BasePlan from "./components/stundenplan/BasePlan.vue";

export default {
  components: {
    Header,
    PageTitle,
    BasePlan,
  },
};
</script>
