import { createStore } from "vuex";

const store = createStore({
  modules: {},
  state() {
    return {
      // subjectsMontag: {
      //   std1: "Mathe",
      //   std2: "Mathe",
      //   std3: "Englisch",
      //   std4: "Englisch",
      //   std5: "Deutsch",
      //   std6: "Deutsch",
      //   std7: "",
      //   std8: "",
      //   lehrer1: "Mit",
      //   lehrer2: "Mit",
      //   lehrer3: "Gro",
      //   lehrer4: "Gro",
      //   lehrer5: "Alt",
      //   lehrer6: "Alt",
      //   lehrer7: "",
      //   lehrer8: "",
      //   raum1: "A117",
      //   raum2: "A117",
      //   raum3: "A117",
      //   raum4: "A117",
      //   raum5: "A117",
      //   raum6: "A117",
      //   raum7: "",
      //   raum8: "",
      // },
      // subjectsDienstag: {
      //   std1: "Mathe",
      //   std2: "Mathe",
      //   std3: "Englisch",
      //   std4: "Englisch",
      //   std5: "Deutsch",
      //   std6: "Deutsch",
      //   std7: "",
      //   std8: "",
      //   lehrer1: "Mit",
      //   lehrer2: "Mit",
      //   lehrer3: "Gro",
      //   lehrer4: "Gro",
      //   lehrer5: "Alt",
      //   lehrer6: "Alt",
      //   lehrer7: "",
      //   lehrer8: "",
      //   raum1: "A117",
      //   raum2: "A117",
      //   raum3: "A117",
      //   raum4: "A117",
      //   raum5: "A117",
      //   raum6: "A117",
      //   raum7: "",
      //   raum8: "",
      // },
      // subjectsMittwoch: {
      //   std1: "Mathe",
      //   std2: "Mathe",
      //   std3: "Englisch",
      //   std4: "Englisch",
      //   std5: "Deutsch",
      //   std6: "Deutsch",
      //   std7: "",
      //   std8: "",
      //   lehrer1: "Mit",
      //   lehrer2: "Mit",
      //   lehrer3: "Gro",
      //   lehrer4: "Gro",
      //   lehrer5: "Alt",
      //   lehrer6: "Alt",
      //   lehrer7: "",
      //   lehrer8: "",
      //   raum1: "A117",
      //   raum2: "A117",
      //   raum3: "A117",
      //   raum4: "A117",
      //   raum5: "A117",
      //   raum6: "A117",
      //   raum7: "",
      //   raum8: "",
      // },
      // subjectsDonnerstag: {
      //   std1: "Mathe",
      //   std2: "Mathe",
      //   std3: "Englisch",
      //   std4: "Englisch",
      //   std5: "Deutsch",
      //   std6: "Deutsch",
      //   std7: "",
      //   std8: "",
      //   lehrer1: "Mit",
      //   lehrer2: "Mit",
      //   lehrer3: "Gro",
      //   lehrer4: "Gro",
      //   lehrer5: "Alt",
      //   lehrer6: "Alt",
      //   lehrer7: "",
      //   lehrer8: "",
      //   raum1: "A117",
      //   raum2: "A117",
      //   raum3: "A117",
      //   raum4: "A117",
      //   raum5: "A117",
      //   raum6: "A117",
      //   raum7: "",
      //   raum8: "",
      // },
      // subjectsFreitag: {
      //   std1: "Mathe",
      //   std2: "Mathe",
      //   std3: "Englisch",
      //   std4: "Englisch",
      //   std5: "Deutsch",
      //   std6: "Deutsch",
      //   std7: "",
      //   std8: "",
      //   lehrer1: "Mit",
      //   lehrer2: "Mit",
      //   lehrer3: "Gro",
      //   lehrer4: "Gro",
      //   lehrer5: "Alt",
      //   lehrer6: "Alt",
      //   lehrer7: "",
      //   lehrer8: "",
      //   raum1: "A117",
      //   raum2: "A117",
      //   raum3: "A117",
      //   raum4: "A117",
      //   raum5: "A117",
      //   raum6: "A117",
      //   raum7: "",
      //   raum8: "",
      // },
      std1: {
        montagFach: "-",
        montagLehrer: "-",
        montagRaum: "-",
        dienstagFach: "Mathe",
        dienstagLehrer: "Mit",
        dienstagRaum: "A117",
        mittwochFach: "Verfügung",
        mittwochLehrer: "Alt",
        mittwochRaum: "A117",
        donnerstagFach: "Politik",
        donnerstagLehrer: "Sch",
        donnerstagRaum: "A117",
        freitagFach: "Sprachunterricht",
        freitagLehrer: "Kra",
        freitagRaum: "A117",
      },
    };
  },
  // mutations: ,
  //actions: ,
  getters: {
    getStd1Subjects(state) {
      state.std1;
    },
    // getStdDienstag(state) {
    //   state.subjectsDienstag;
    // },
    // getStdMittwoch(state) {
    //   state.subjectsMittwoch;
    // },
    // getStdDonnerstag(state) {
    //   state.subjectsDonnerstag;
    // },
    // getStdFreitag(state) {
    //   state.subjectsFreitag;
    // },
  },
});

export default store;
