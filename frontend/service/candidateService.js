import axios from "axios";
import apiConfig from "@/config/apiConfig";
const candidateService = {
  fetchCandidateDetails: async function (id) {
    try {
      let response = await axios.get(
        apiConfig.HOST + apiConfig.FETCH_CANDIDATE_DETAILS
      );
      return response.data;
    } catch (error) {
      return false;
    }
  },
  fetchStudentDetails: async function (id) {
    try {
      let response = await axios.get(
        apiConfig.HOST + apiConfig.FETCH_STUDENT_DETAILS
      );
      return response.data;
    } catch (error) {
      return false;
    }
  },

  searchCandidate: async function (postId, stdId) {
    try {
      let response = await axios.get(
        apiConfig.HOST +
          apiConfig.SEARCH_CANDIDATE +
          "?postId=" +
          postId +
          "&studentId=" +
          stdId
      );
      return response.data;
    } catch (error) {
      return false;
    }
  },

  // qwertyuio
  fetchCandidateForm: async function () {
    try {
      let response = await axios.get(
        apiConfig.HOST + apiConfig.CANDIDATE_FATCH
      );

      return response.data;
    } catch (error) {
      return false;
    }
  },
};

export default candidateService;
