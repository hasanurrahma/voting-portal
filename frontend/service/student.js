import axios from "axios";
import apiConfig from "@/config/apiConfig";
const studentService = {
  createStudent: async function (payload) {
    try {
      let response = await axios.post(
        apiConfig.HOST + apiConfig.STUDENT_REGISTER,
        payload
      );
      return response;
    } catch (error) {
      return false;
    }
  },

  // student entry----

  studentEntry: async function (payload) {
    try {
      let response = await axios.post(
        apiConfig.HOST + apiConfig.CREATE_STUDENT,
        payload
      );
      return response;
    } catch (error) {
      return false;
    }
  },

  // -------------------fetch student1 data-------------------------------
  fetchStudent1: async function () {
    try {
      let response = await axios.get(apiConfig.HOST + apiConfig.FETCH_STUDENT1);
      return response.data;
    } catch (error) {
      return false;
    }
  },
  //  ----------------------------fetch student1 data---------------------
  deleteStudent: async function (id) {
    try {
      let response = await axios.delete(
        apiConfig.HOST + apiConfig.DELETE_STUDENT1 + id
      );
      return response.data;
    } catch (error) {
      return false;
    }
  },
  // --------------------post Entry------------------------
  PostEntry: async function (payload) {
    try {
      let response = await axios.post(
        apiConfig.HOST + apiConfig.POST_ENTRY,
        payload
      );
      return response;
    } catch (error) {
      return false;
    }
  },

  // student registration---

  studentRegistration: async function (payload) {
    try {
      let response = await axios.post(
        apiConfig.HOST + apiConfig.CREATE_STUDENT_REGISTER,
        payload
      );
      return response;
    } catch (error) {
      return false;
    }
  },
  // --------------Fetch post data----------------------
  fetchPost: async function (id) {
    try {
      let response = await axios.get(apiConfig.HOST + apiConfig.FETCH_POST);
      return response.data;
    } catch (error) {
      return false;
    }
  },
  // --------------delete post data --------------
  deleteStudent12: async (id) => {
    try {
      let response = await axios.delete(
        apiConfig.HOST + apiConfig.DELETE_POST + id
      );
      return response.data;
    } catch (error) {
      return false;
    }
  },

  // --------------Edit Post data------------

  editPostDetails: async (id) => {
    try {
      let response = await axios.put(
        apiConfig.HOST + apiConfig.EDIT_POST_DETAILS + id
      );
      return response.data;
    } catch (error) {
      return false;
    }
  },
  //------------------
};

export default studentService;
