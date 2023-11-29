// var Days; // Array von Day-Objekten
// var Subjects = [[],[],[],[],[]] // Array von Subject-Objekten
// var MontagSubjects = [] // Subjects für alle Tage
// var DienstagSubjects = []
// var MittwochSubjects = []
// var DonnerstagSubjects = []
// var FreitagSubjects = []
// var DaysSubjects = [MontagSubjects, DienstagSubjects, MittwochSubjects, DonnerstagSubjects, FreitagSubjects] // Gruppierung der Tag-Subjects
// var StdSubjects = [Std1Subjects, Std2Subjects, Std3Subjects, Std4Subjects, Std5Subjects, Std6Subjects, Std7Subjects, Std8Subjects]
// const subjectTitel = ["Deutsch","Englisch","Mathe","Erdkunde","Sport","Physik","Chemie","Biologie","Geschichte","Französisch","Spanisch","Latein","Kursunterricht","Verfügung","Politik","Wirtschaft","NTW","GSW"] // Liste aller Subjects
// const dayTitel = ["Montag","Dienstag","Mittwoch","Donnerstag","Freitag"] // Liste aller Tage
// var SelectedDay;

// // Get Subjects for every day
// for (let i = 0; i < 8; i++) {
//     MontagSubjects.push(document.getElementById("stunde" + (i+1) + "Montag"));
// }

// for (let i = 0; i < 8; i++) {
//     DienstagSubjects.push(document.getElementById("stunde" + (i+1) + "Dienstag"));
// }

// for (let i = 0; i < 8; i++) {
//     MittwochSubjects.push(document.getElementById("stunde" + (i+1) + "Mittwoch"));
// }

// for (let i = 0; i < 8; i++) {
//     DonnerstagSubjects.push(document.getElementById("stunde" + (i+1) + "Donnerstag"));
// }

// for (let i = 0; i < 8; i++) {
//     FreitagSubjects.push(document.getElementById("stunde" + (i+1) + "Freitag"));
// }
// console.log(MontagSubjects);
// console.log(DienstagSubjects);
// console.log(MittwochSubjects);
// console.log(DonnerstagSubjects);
// console.log(FreitagSubjects);
// getUserDays(2);

// async function loop() {
//     for (let i = 0; i < Days.length; i++) {
//         // execute getSubjecByDays Days[i]
//         await getSubjectByDays(Days[i].id, i);
//     }
// }

// // Holt alle Days für einen User aus der Datenbank
// async function getUserDays(UserID) {
//     await axios({
//         method: 'get',
//         url: 'http://localhost:8081/Tag/getDaysByUserID/' + UserID,
//     })
//     .then(function (response){
//         Days=response.data;
//         console.log(Days);
//         loop();
//     })
//     .catch(function (error){
//         console.log(error);
//     })
// }

// // Holt alle Fächer in einer Stunde für einen User aus der Datenbank
// async function getUserDays(UserID) {
//     await axios({
//         method: 'get',
//         url: 'http://localhost:8081/Tag/getSubjectsByStdID/' + StdID,
//     })
//     .then(function (response){
//         Days=response.data;
//         console.log(Days);
//         loop();
//     })
//     .catch(function (error){
//         console.log(error);
//     })
// }

// // Holt alle Subjects für einen Day aus der Datenbank
// async function getSubjectByDays(DaysID, DayIndex)
// {
//     await axios({
//         method: 'get',
//         url: 'http://localhost:8081/Tag/getSubjectsByDay/' + DaysID,
//     })
//     .then(function (response){
//         Subjects[DayIndex] = response.data;
//         console.log(Subjects);
//         if(DayIndex = 4) {
//             setStundenplanData();
//         }
//     })
//     .catch(function (error){
//         console.log(error);
//     })
// }

// // Einsetzen der Daten in den Stundenplan
// function setStundenplanData()
// {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//         for (let j = 0; j < 8; j++) {
//             console.log(j);
//             if (Subjects[i][j]!=null)
//             {
//                 DaysSubjects[i][j].innerHTML = subjectTitel[Subjects[i][j].name-1] + "<br>" + Subjects[i][j].lehrkraft + " <br> " + Subjects[i][j].raum;
//             }
//             if(Subjects[i][j]==null)
//             {
//                 DaysSubjects[i][j].innerHTML = "&nbsp;";
//             }
//         }
//     }
// }

// async function editDay(SelectedDay) {

// }

// function getRadioValue() {
//     SelectedDay = document.querySelector('input[name="day"]:checked').value;
// }

import { createApp } from "vue";
import VueAxios from "vue-axios";
import App from "./App.vue";
import TheHeader from "./components/header/TheHeader.vue";
import BasePlan from "./components/stundenplan/BasePlan.vue";
import PageTitle from "./components/PageTitle.vue";
import store from "./store/index.js";

const app = createApp(App);

app.component("TheHeader", TheHeader);
app.component("BasePlan", BasePlan);
app.component("PageTitle", PageTitle);

app.use(store);
app.use(VueAxios);
app.mount("#app");
