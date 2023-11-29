import { createStore } from "vuex";

const store = createStore({
  modules: {},
  state() {
    return {
      std1: {
        montagFach: "-",
        montagLehrer: "-",
        montagRaum: "-",
        dienstagFach: "-",
        dienstagLehrer: "-",
        dienstagRaum: "-",
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
      std2: {
        montagFach: "Sprachunterricht",
        montagLehrer: "Kra",
        montagRaum: "A117",
        dienstagFach: "-",
        dienstagLehrer: "-",
        dienstagRaum: "-",
        mittwochFach: "Englisch",
        mittwochLehrer: "Gro",
        mittwochRaum: "A117",
        donnerstagFach: "Politik",
        donnerstagLehrer: "Sch",
        donnerstagRaum: "A117",
        freitagFach: "Sprachunterricht",
        freitagLehrer: "Kra",
        freitagRaum: "A117",
      },
      std3: {
        montagFach: "Geschichte",
        montagLehrer: "Alt",
        montagRaum: "A117",
        dienstagFach: "Mathe",
        dienstagLehrer: "Mit",
        dienstagRaum: "A117",
        mittwochFach: "Verfügung",
        mittwochLehrer: "Alt",
        mittwochRaum: "A117",
        donnerstagFach: "Politik",
        donnerstagLehrer: "Sch",
        donnerstagRaum: "A117",
        freitagFach: "Werte u. Normen",
        freitagLehrer: "Kra",
        freitagRaum: "A117",
      },
      std4: {
        montagFach: "Geschichte",
        montagLehrer: "Alt",
        montagRaum: "A117",
        dienstagFach: "Mathe",
        dienstagLehrer: "Mit",
        dienstagRaum: "A117",
        mittwochFach: "Englisch",
        mittwochLehrer: "Gro",
        mittwochRaum: "A117",
        donnerstagFach: "Politik",
        donnerstagLehrer: "Sch",
        donnerstagRaum: "A117",
        freitagFach: "Werte u. Normen",
        freitagLehrer: "Kra",
        freitagRaum: "A117",
      },
      std5: {
        montagFach: "Englisch",
        montagLehrer: "Gro",
        montagRaum: "A117",
        dienstagFach: "Mathe",
        dienstagLehrer: "Mit",
        dienstagRaum: "A117",
        mittwochFach: "Verfügung",
        mittwochLehrer: "Alt",
        mittwochRaum: "A117",
        donnerstagFach: "Politik",
        donnerstagLehrer: "Sch",
        donnerstagRaum: "A117",
        freitagFach: "-",
        freitagLehrer: "-",
        freitagRaum: "-",
      },
      std6: {
        montagFach: "Englisch",
        montagLehrer: "Gro",
        montagRaum: "A117",
        dienstagFach: "Mathe",
        dienstagLehrer: "Mit",
        dienstagRaum: "A117",
        mittwochFach: "Verfügung",
        mittwochLehrer: "Alt",
        mittwochRaum: "A117",
        donnerstagFach: "Politik",
        donnerstagLehrer: "Sch",
        donnerstagRaum: "A117",
        freitagFach: "-",
        freitagLehrer: "-",
        freitagRaum: "-",
      },
      std7: {
        montagFach: "Sport",
        montagLehrer: "Shb",
        montagRaum: "Spo3",
        dienstagFach: "Mathe",
        dienstagLehrer: "Mit",
        dienstagRaum: "A117",
        mittwochFach: "-",
        mittwochLehrer: "-",
        mittwochRaum: "-",
        donnerstagFach: "-",
        donnerstagLehrer: "-",
        donnerstagRaum: "-",
        freitagFach: "-",
        freitagLehrer: "-",
        freitagRaum: "-",
      },
      std8: {
        montagFach: "Sport",
        montagLehrer: "Shb",
        montagRaum: "Spo3",
        dienstagFach: "-",
        dienstagLehrer: "-",
        dienstagRaum: "-",
        mittwochFach: "-",
        mittwochLehrer: "-",
        mittwochRaum: "-",
        donnerstagFach: "-",
        donnerstagLehrer: "-",
        donnerstagRaum: "-",
        freitagFach: "-",
        freitagLehrer: "-",
        freitagRaum: "-",
      },
    };
  },
  // mutations: ,
  //actions: ,
  getters: {
    getFachByWochentag: (state) => (std, wochentag) => {
      const stdData = state[std];
      if (stdData && stdData[wochentag + "Fach"]) {
        return stdData[wochentag + "Fach"];
      }
      return null; // Oder einen Standardwert zurückgeben, wenn das Fach nicht gefunden wurde
    },
    getLehrerByWochentag: (state) => (std, wochentag) => {
      const stdData = state[std];
      if (stdData && stdData[wochentag + "Lehrer"]) {
        return stdData[wochentag + "Lehrer"];
      }
      return null; // Oder einen Standardwert zurückgeben, wenn das Fach nicht gefunden wurde
    },
    getRaumByWochentag: (state) => (std, wochentag) => {
      const stdData = state[std];
      if (stdData && stdData[wochentag + "Raum"]) {
        return stdData[wochentag + "Raum"];
      }
      return null; // Oder einen Standardwert zurückgeben, wenn das Fach nicht gefunden wurde
    },
  },
});

export default store;
