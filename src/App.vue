<template>
  <the-header></the-header>
  <main class="mdl-layout__content">
    <div class="page-content" style="text-align: center">
      <page-title></page-title>
      <base-plan></base-plan>
    </div>
  </main>
</template>

<script>
import TheHeader from "./components/header/TheHeader.vue";
import PageTitle from "./components/PageTitle.vue";
import BasePlan from "./components/stundenplan/BasePlan.vue";

export default {
  components: {
    TheHeader,
    PageTitle,
    BasePlan,
  },
};
</script>
