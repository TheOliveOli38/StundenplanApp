import axios from "axios";

async function getSubjectByDays(i, DayIndex) {
  try {
    const response = await axios({
      method: "get",
      url: "http://localhost:8081/Tag/getSubjectsByDay/" + i,
    });
    return response;
  } catch (error) {
    console.warn("Error with code:", error.response.status);
    return error.response.status;
  }
}

export default {
  getSubjectByDays,
};
