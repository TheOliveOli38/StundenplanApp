<template>
  <header class="mdl-layout__header">
    <div class="mdl-layout__header-row">
      <i class="material-icons">table_chart</i>
      <span
        class="mdl-layout-title"
        style="margin-left: 5px; font-weight: bolder"
        >Stundenplan-App</span
      >
      <div class="mdl-layout-spacer"></div>
      <nav-links></nav-links>
    </div>
  </header>
</template>

<script>
import NavLinks from "./NavLinks.vue";
export default {
  components: {
    NavLinks,
  },
};
</script>
