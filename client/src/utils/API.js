import axios from "axios";

export default {
  // Gets a single user by id
  getUser: id => {
    return axios.get(`/api/user/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("id_token")}` },
    });
  },

  // sign up a user to our service
  signUpUser: (username, email, password) => {
    return axios.post(
      "api/signup",
      {
        username: username,
        email: email,
        password: password,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("id_token")}`,
        },
      },
    );
  },

  //Create a new widget for the user
  addUserWidget: (userID, widgetType, widgetData) => {
    return axios.post(
      "/api/user/widget",
      {
        userID: userID,
        widgetType: widgetType,
        widgetData: widgetData,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("id_token")}`,
        },
      },
    );
  },

  //Delete a specific id by id from a specific user
  deleteUserWidget: (userID, widgetID) => {
    return axios.delete("/api/user/widget", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("id_token")}`,
      },
      data: { userID: userID, widgetID: widgetID },
    });
  },

  //Edit a specific id by id from a specific user
  editUserWidget: (userID, widgetID, widgetData) => {
    return axios.put(
      "/api/user/widget",
      {
        userID: userID,
        widgetID: widgetID,
        widgetData: widgetData,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("id_token")}`,
        },
      },
    );
  },
};
