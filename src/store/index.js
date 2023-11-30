import { createStore } from "vuex";
import service from "./service.js";

const store = createStore({
  modules: {},
  state() {
    return {
      Subjects: [[], [], [], [], []],
      std1: {
        montagFach: "",
        montagLehrer: "",
        montagRaum: "",
        dienstagFach: "",
        dienstagLehrer: "",
        dienstagRaum: "",
        mittwochFach: "Verfügung",
        mittwochLehrer: "Alt",
        mittwochRaum: "A117",
        donnerstagFach: "Politik",
        donnerstagLehrer: "Sch",
        donnerstagRaum: "A117",
        freitagFach: "Sprache",
        freitagLehrer: "Kra",
        freitagRaum: "A117",
      },
      std2: {
        montagFach: "Sprache",
        montagLehrer: "Kra",
        montagRaum: "A117",
        dienstagFach: "",
        dienstagLehrer: "",
        dienstagRaum: "",
        mittwochFach: "Englisch",
        mittwochLehrer: "Gro",
        mittwochRaum: "A117",
        donnerstagFach: "Politik",
        donnerstagLehrer: "Sch",
        donnerstagRaum: "A117",
        freitagFach: "Sprache",
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
        freitagFach: "WuN",
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
        freitagFach: "WuN",
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
        freitagFach: "",
        freitagLehrer: "",
        freitagRaum: "",
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
        freitagFach: "",
        freitagLehrer: "",
        freitagRaum: "",
      },
      std7: {
        montagFach: "Sport",
        montagLehrer: "Shb",
        montagRaum: "Spo3",
        dienstagFach: "Mathe",
        dienstagLehrer: "Mit",
        dienstagRaum: "A117",
        mittwochFach: "",
        mittwochLehrer: "",
        mittwochRaum: "",
        donnerstagFach: "",
        donnerstagLehrer: "",
        donnerstagRaum: "",
        freitagFach: "",
        freitagLehrer: "",
        freitagRaum: "",
      },
      std8: {
        montagFach: "Sport",
        montagLehrer: "Shb",
        montagRaum: "Spo3",
        dienstagFach: "",
        dienstagLehrer: "",
        dienstagRaum: "",
        mittwochFach: "",
        mittwochLehrer: "",
        mittwochRaum: "",
        donnerstagFach: "",
        donnerstagLehrer: "",
        donnerstagRaum: "",
        freitagFach: "",
        freitagLehrer: "",
        freitagRaum: "",
      },
      // alleStunden: [
      //   {
      //     tage: [
      //       {
      //         fach: "Test",
      //         lehrer: "Sch",
      //         raum: "A111",
      //       },
      //       {
      //         fach: "Test",
      //         lehrer: "Sch",
      //         raum: "A111",
      //       },
      //       {
      //         fach: "Test2",
      //         lehrer: "Alt",
      //         raum: "A117",
      //       },
      //       {
      //         fach: "Test2",
      //         lehrer: "Alt",
      //         raum: "A117",
      //       },
      //       {
      //         fach: "Test3",
      //         lehrer: "Kra",
      //         raum: "A217",
      //       },
      //     ],
      //   },
      //   {
      //     tage: [
      //       {
      //         fach: "Test",
      //         lehrer: "Sch",
      //         raum: "A111",
      //       },
      //       {
      //         fach: "Test",
      //         lehrer: "Sch",
      //         raum: "A111",
      //       },
      //       {
      //         fach: "Test2",
      //         lehrer: "Alt",
      //         raum: "A117",
      //       },
      //       {
      //         fach: "Test2",
      //         lehrer: "Alt",
      //         raum: "A117",
      //       },
      //       {
      //         fach: "Test3",
      //         lehrer: "Kra",
      //         raum: "A217",
      //       },
      //     ],
      //   },
      //   {
      //     tage: [
      //       {
      //         fach: "Test",
      //         lehrer: "Sch",
      //         raum: "A111",
      //       },
      //       {
      //         fach: "Test",
      //         lehrer: "Sch",
      //         raum: "A111",
      //       },
      //       {
      //         fach: "Test2",
      //         lehrer: "Alt",
      //         raum: "A117",
      //       },
      //       {
      //         fach: "Test2",
      //         lehrer: "Alt",
      //         raum: "A117",
      //       },
      //       {
      //         fach: "Test3",
      //         lehrer: "Kra",
      //         raum: "A217",
      //       },
      //     ],
      //   },
      //   {
      //     tage: [
      //       {
      //         fach: "Test",
      //         lehrer: "Sch",
      //         raum: "A111",
      //       },
      //       {
      //         fach: "Test",
      //         lehrer: "Sch",
      //         raum: "A111",
      //       },
      //       {
      //         fach: "Test2",
      //         lehrer: "Alt",
      //         raum: "A117",
      //       },
      //       {
      //         fach: "Test2",
      //         lehrer: "Alt",
      //         raum: "A117",
      //       },
      //       {
      //         fach: "Test3",
      //         lehrer: "Kra",
      //         raum: "A217",
      //       },
      //     ],
      //   },
      //   {
      //     tage: [
      //       {
      //         fach: "Test",
      //         lehrer: "Sch",
      //         raum: "A111",
      //       },
      //       {
      //         fach: "Test",
      //         lehrer: "Sch",
      //         raum: "A111",
      //       },
      //       {
      //         fach: "Test2",
      //         lehrer: "Alt",
      //         raum: "A117",
      //       },
      //       {
      //         fach: "Test2",
      //         lehrer: "Alt",
      //         raum: "A117",
      //       },
      //       {
      //         fach: "Test3",
      //         lehrer: "Kra",
      //         raum: "A217",
      //       },
      //     ],
      //   },
      //   {
      //     tage: [
      //       {
      //         fach: "Test",
      //         lehrer: "Sch",
      //         raum: "A111",
      //       },
      //       {
      //         fach: "Test",
      //         lehrer: "Sch",
      //         raum: "A111",
      //       },
      //       {
      //         fach: "Test2",
      //         lehrer: "Alt",
      //         raum: "A117",
      //       },
      //       {
      //         fach: "Test2",
      //         lehrer: "Alt",
      //         raum: "A117",
      //       },
      //       {
      //         fach: "Test3",
      //         lehrer: "Kra",
      //         raum: "A217",
      //       },
      //     ],
      //   },
      //   {
      //     tage: [
      //       {
      //         fach: "Test",
      //         lehrer: "Sch",
      //         raum: "A111",
      //       },
      //       {
      //         fach: "Test",
      //         lehrer: "Sch",
      //         raum: "A111",
      //       },
      //       {
      //         fach: "Test2",
      //         lehrer: "Alt",
      //         raum: "A117",
      //       },
      //       {
      //         fach: "Test2",
      //         lehrer: "Alt",
      //         raum: "A117",
      //       },
      //       {
      //         fach: "Test3",
      //         lehrer: "Kra",
      //         raum: "A217",
      //       },
      //     ],
      //   },
      //   {
      //     tage: [
      //       {
      //         fach: "Test",
      //         lehrer: "Sch",
      //         raum: "A111",
      //       },
      //       {
      //         fach: "Test",
      //         lehrer: "Sch",
      //         raum: "A111",
      //       },
      //       {
      //         fach: "Test2",
      //         lehrer: "Alt",
      //         raum: "A117",
      //       },
      //       {
      //         fach: "Test2",
      //         lehrer: "Alt",
      //         raum: "A117",
      //       },
      //       {
      //         fach: "Test3",
      //         lehrer: "Kra",
      //         raum: "A217",
      //       },
      //     ],
      //   },
      // ],
    };
  },
  mutations: {
    testEdit(state) {
      state.std1.montagFach = "Edit!";
      state.std1.montagLehrer = "Hew";
      state.std1.montagRaum = "A101";
    },
    saveSubjects(state, { data, DayIndex }) {
      var newData = [];
      console.log(data);
      var tempData;
      const subjectTitel = [
        "Deutsch",
        "Englisch",
        "Mathe",
        "Erdkunde",
        "Sport",
        "Physik",
        "Chemie",
        "Biologie",
        "Geschichte",
        "Französisch",
        "Spanisch",
        "Latein",
        "Kursunterricht",
        "Verfügung",
        "Politik",
        "Wirtschaft",
        "NTW",
        "GSW",
      ];
      for (let i = 0; i < 8; i++) {
        tempData = data[i];
        newData.push(tempData);
        console.log(newData);
        let namedSubject = subjectTitel[newData[i]?.id];
        if (newData[newData.length - 1]) {
          newData[newData.length - 1].name = namedSubject;
        }
        console.log(newData);
      }
      console.log(newData);
      state.Subjects[DayIndex] = newData;
      console.log(state.Subjects[0][0]);
    },
  },
  actions: {
    testEdit({ commit }) {
      commit("testEdit");
    },
    async getSubjects({ commit }, DayIndex) {
      for (let i = 1; i < 6; i++) {
        await service.getSubjectByDays(i).then((response) => {
          console.log(response);
          DayIndex = i - 1;
          commit("saveSubjects", { data: response, DayIndex });
        });
      }
    },
  },
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
    getSubjectArray(state) {
      return state.Subjects;
    },
    // getAllHours: (state) => () => {
    //   return state.alleStunden;
    // },
  },
});

export default store;
