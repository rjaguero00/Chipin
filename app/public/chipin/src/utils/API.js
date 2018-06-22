import axios from "axios";

export default {
  // Gets all books
  getActivities: function() {
    return axios.get("/api/activities");
  },
  // Gets the book with the given id
  getActivity: function(id) {
    return axios.get("/api/activities/" + id);
  },
  // Deletes the book with the given id
  deleteActivity: function(id) {
    return axios.delete("/api/activities/" + id);
  },
  // Saves a book to the database
  saveActivity: function(activityData) {
    return axios.post("/api/activities", activityData);
  }
};
