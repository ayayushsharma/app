import axios from "axios";

const API_URL = "http://localhost:3000/api/v1/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = () => {
  return axios.get(API_URL + "user");
};

const getCreatorBoard = () => {
  return axios.get(API_URL + "creator");
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin");
};

const UserService = {
  getPublicContent,
  getUserBoard,
  getCreatorBoard,
  getAdminBoard,
}

export default UserService;
