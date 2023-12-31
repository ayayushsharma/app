import axios from "axios";

const API_URL = "http://localhost:3000/api/v1/users/";

const register = (userRole, username, password) => {
  return axios.post(API_URL + "register", {
    username,
    password,
    userRole
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "login", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.username) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const getCurrentUserId = () => {
  return JSON.parse(localStorage.getItem("user")).id;
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
  getCurrentUserId,
}

export default AuthService;
