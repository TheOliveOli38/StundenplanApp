import axios from "axios";

async function getSubjectByDays(DayID, DayIndex) {
  await axios({
    method: "get",
    url: "http://localhost:8081/Tag/getSubjectsByDay/" + 1,
  })
    .then(function (response) {
      console.log(response.data);
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default {
  getSubjectByDays,
};
