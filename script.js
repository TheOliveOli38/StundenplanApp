var Days; // Array von Day-Objekten
var Subjects = [[],[],[],[],[]] // Array von Subject-Objekten
var MontagSubjects = [] // Subjects für alle Tage
var DienstagSubjects = []
var MittwochSubjects = []
var DonnerstagSubjects = []
var FreitagSubjects = []
var DaysSubjects = [MontagSubjects, DienstagSubjects, MittwochSubjects, DonnerstagSubjects, FreitagSubjects] // Gruppierung der Tag-Subjects
const subjectTitel = ["Deutsch","Englisch","Mathe","Erdkunde","Sport","Physik","Chemie","Biologie","Geschichte","Französisch","Spanisch","Latein","Kursunterricht","Verfügung","Politik","Wirtschaft","NTW","GSW"] // Liste aller Subjects
const dayTitel = ["Montag","Dienstag","Mittwoch","Donnerstag","Freitag"] // Liste aller Tage
var SelectedDay;


// Get Subjects for every day
for (let i = 0; i < 8; i++) {
    MontagSubjects.push(document.getElementById("stunde" + (i+1) + "Montag"));
}

for (let i = 0; i < 8; i++) {
    DienstagSubjects.push(document.getElementById("stunde" + (i+1) + "Dienstag"));
}

for (let i = 0; i < 8; i++) {
    MittwochSubjects.push(document.getElementById("stunde" + (i+1) + "Mittwoch"));
}

for (let i = 0; i < 8; i++) {
    DonnerstagSubjects.push(document.getElementById("stunde" + (i+1) + "Donnerstag"));
}

for (let i = 0; i < 8; i++) {
    FreitagSubjects.push(document.getElementById("stunde" + (i+1) + "Freitag"));
}
console.log(MontagSubjects);
console.log(DienstagSubjects);
console.log(MittwochSubjects);
console.log(DonnerstagSubjects);
console.log(FreitagSubjects);
getUserDays(2);

async function loop() {
    for (let i = 0; i < Days.length; i++) {
        // execute getSubjecByDays Days[i]
        await getSubjectByDays(Days[i].id, i);
    }    
}

// Holt alle Days für einen User aus der Datenbank
async function getUserDays(UserID) {
    await axios({
        method: 'get',
        url: 'http://localhost:8081/Tag/getDaysByUserID/' + UserID,
    })
    .then(function (response){
        Days=response.data;
        console.log(Days);
        loop();
    })
    .catch(function (error){
        console.log(error);
    })
}

// Holt alle Subjects für einen Day aus der Datenbank
async function getSubjectByDays(DaysID, DayIndex)
{
    await axios({
        method: 'get',
        url: 'http:localhost:8081/Tag/getSubjectsByDay/' + DaysID,
    })
    .then(function (response){
        Subjects[DayIndex] = response.data;
        console.log(Subjects);
        if(DayIndex = 4) {
            setStundenplanData();
        }
    })
    .catch(function (error){
        console.log(error);
    })
}

// Einsetzen der Daten in den Stundenplan
function setStundenplanData()
{
    for (let i = 0; i < 5; i++) {
        console.log(i);
        for (let j = 0; j < 8; j++) {
            console.log(j);
            if (Subjects[i][j]!=null)
            {
                DaysSubjects[i][j].innerHTML = subjectTitel[Subjects[i][j].name-1] + "<br>" + Subjects[i][j].lehrkraft + " | " + Subjects[i][j].raum;
            }
            if(Subjects[i][j]==null)
            {
                DaysSubjects[i][j].innerHTML = "&nbsp;";
            }
        }
    }
}

async function editDay(SelectedDay) {
    
}

function getRadioValue() {
    SelectedDay = document.querySelector('input[name="day"]:checked').value;
}