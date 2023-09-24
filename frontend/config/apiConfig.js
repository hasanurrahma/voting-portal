const apiConfig = {
  HOST: "http://localhost:8000", // base url

  CREATE_STUDENT: "/api/v1/createStudent",
  FETCH_STUDENT1: "/api/v2/finddata",

  DELETE_STUDENT1: "/api/v2/deleteuser/",

  // post CRUD operation

  POST_ENTRY: "/api/v1/Admin/post",
  FETCH_POST: "/api/v1/admin/finddata",
  DELETE_POST: "/api/v1/admin/deleteuser/",
  EDIT_POST_DETAILS: "/api/v1//admin/update/",
  FETCH_CANDIDATE_DETAILS: "/api/v1/admin/finddata",
  FETCH_STUDENT_DETAILS: "/api/v2/finddata",
  CREATE_STUDENT_REGISTER: "/api/v2/createStudent",
  STUDENT_REGISTER: "/api/v1/registration",

  SEARCH_CANDIDATE: "/joined-data",
  // --------------Candidate Entry--------------
  CANDIDATEAPI: "/api/v3/candidateEntry",
  CANDIDATE_FATCH: "/api/v3/candidatefatch",
  CANDIDATE_DELETE: "/api/v3/candidatedelete/",
  //-----------------Student login---------------
  STUDENT_LOGIN: "api/v1/Candidate/login",
};

export default apiConfig;
