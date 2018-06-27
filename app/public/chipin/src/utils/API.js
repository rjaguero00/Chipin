import axios from "axios";

export default {
  // Gets all activity
  getActivities: function () {
    return axios.get("/api/activities");
  },
  // Gets the activity with the given id
  getActivity: function (id) {
    return axios.get("/api/activities/" + id);
  },
  // Deletes the activity with the given id
  deleteActivity: function (id) {
    return axios.delete("/api/activities/" + id);
  },
  // Saves an activity to the database
  saveActivity: function (activityData) {
    return axios.post("/api/activities", activityData);
  },
  //Login route
  getUserLogin: function () {
    return axios.get("/api/users");
  },
  //Post Events route
  postEvent: function (activityData) {
    return axios.post("/api/activities", activityData);
  },
  //Post Organization
  postOrg: function () {
    return axios.post("/api/organization");
  },
  //Post User
  postUser: function () {
    return axios.post("/api/user");
  }
};
