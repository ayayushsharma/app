import axios from "axios";
const API_URL = "http://localhost:3000/api/v1/survey/";

const listAllSurvey = () => {
  return axios.get(API_URL + "all")
    .then((response) => {
      if (response.data)
        return response.data;
    });
};

const listAllofUserSurvey = (userId) => {
  return axios
    .get(API_URL + `all/${userId}`)
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    });
};

const postUserSurvey = (userId, title) => {
  return axios
    .post(API_URL + `${userId}`)
    .then((response) => {
      if (response.data.username) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};


const SurveyService = {
  listAllSurvey,
  listAllofUserSurvey,
}

export default SurveyService;
