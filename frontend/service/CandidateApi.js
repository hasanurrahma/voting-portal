import axios from "axios";
import apiConfig from "@/config/apiConfig";

const candidateapi = {
  CandidateFrom: async function (payload) {
    try {
      let response = await axios.post(
        apiConfig.HOST + apiConfig.CANDIDATEAPI,
        payload
      );
      return response;
    } catch (error) {
      return false;
    }
  },

  deleteCandidate: async (id) => {
    try {
      let response = await axios.delete(
        apiConfig.HOST + apiConfig.CANDIDATE_DELETE + id
      );
      return response.data;
    } catch (error) {
      return false;
    }
  },
  studentlogin: async function (payload) {
    try {
      let response = await axios.post(
        apiConfig.HOST + apiConfig.STUDENT_LOGIN,
        payload
      );
      return response;
    } catch (error) {
      return false;
    }
  },
};

export default candidateapi;
