import { createStore } from "vuex";
import service from "./service.js";

const store = createStore({
  modules: {},
  state() {
    return {
      Subjects: [[], [], [], [], []],
      status: 200,
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
      dialogOpened: false,
      tempVar: null,
    };
  },
  mutations: {
    testEdit(state) {
      state.std1.montagFach = "Edit!";
      state.std1.montagLehrer = "Hew";
      state.std1.montagRaum = "A101";
    },
    changeDialogState(state) {
      if (state.dialogOpened == true) {
        state.tempVar = null;
      }
      state.dialogOpened = !state.dialogOpened;
    },
    putIdInTempVar(state, payload) {
      state.tempVar = payload;
    },
    saveSubjects(state, { data, DayIndex }) {
      var newData = [];
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
        let namedSubject = subjectTitel[newData[i]?.id];
        if (newData[newData.length - 1]) {
          newData[newData.length - 1].name = namedSubject;
        }
      }
      state.Subjects[DayIndex] = newData;
    },
    setErrorStatus(state, data) {
      state.status = data.data;
    },
  },
  actions: {
    testEdit({ commit }) {
      commit("testEdit");
    },
    putIdInTempVar({ commit }, payload) {
      commit("putIdInTempVar", payload);
    },
    changeDialogState({ commit }) {
      commit("changeDialogState");
    },
    async getSubjects({ commit }, DayIndex) {
      for (let i = 1; i < 6; i++) {
        await service.getSubjectByDays(i).then((response) => {
          if (response.status == 200 || 201) {
            DayIndex = i - 1;
            commit("saveSubjects", { data: response.data, DayIndex });
          } else if (response != 200) {
            commit("setErrorStatus", { data: response });
          }
        });
      }
    },
  },
  getters: {
    getDialogStatus(state) {
      return state.dialogOpened;
    },
    getFachByWochentag: (state) => (std, wochentag) => {
      const stdData = state[std];
      if (stdData && stdData[wochentag + "Fach"]) {
        return stdData[wochentag + "Fach"];
      }
      return null;
    },
    getLehrerByWochentag: (state) => (std, wochentag) => {
      const stdData = state[std];
      if (stdData && stdData[wochentag + "Lehrer"]) {
        return stdData[wochentag + "Lehrer"];
      }
      return null;
    },
    getRaumByWochentag: (state) => (std, wochentag) => {
      const stdData = state[std];
      if (stdData && stdData[wochentag + "Raum"]) {
        return stdData[wochentag + "Raum"];
      }
      return null;
    },
    getSubjectArray(state) {
      return state.Subjects;
    },
    returnErrorStatus(state) {
      return state.status;
    },
    getTempVar(state) {
      return state.tempVar;
    },
    findRightInfoWithId(state) {
      if (state.tempVar < 10) {
        for (let i = 0; i < 8; i++) {
          if (state.tempVar == i) {
            return state.Subjects[0][i];
          }
        }
      }
      if (state.tempVar >= 10) {
        for (let i = 0; i < 8; i++) {
          if (state.tempVar == 10 + i) {
            return state.Subjects[1][i];
          }
        }
      }
      if (state.tempVar >= 20) {
        for (let i = 0; i < 8; i++) {
          if (state.tempVar == 20 + i) {
            return state.Subjects[2][i];
          }
        }
      }
      if (state.tempVar >= 30) {
        for (let i = 0; i < 8; i++) {
          if (state.tempVar == 30 + i) {
            return state.Subjects[3][i];
          }
        }
      }
      if (state.tempVar >= 40) {
        for (let i = 0; i < 8; i++) {
          if (state.tempVar == 40 + i) {
            return state.Subjects[4][i];
          }
        }
      }
    },
  },
});

export default store;
