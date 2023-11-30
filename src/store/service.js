import axios from "axios";

async function getSubjectByDays(i, DayIndex) {
  const response = await axios({
    method: "get",
    url: "http://localhost:8081/Tag/getSubjectsByDay/" + i,
  });
  return response.data;
}

export default {
  getSubjectByDays,
};
