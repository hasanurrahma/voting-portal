"use client";
import React, { useEffect, useState } from "react";
import candidateService from "@/service/candidateService";
import candidateapi from "@/service/CandidateApi";
import { toast } from "react-toastify";
import axios from "axios";
import apiConfig from "@/config/apiConfig";

const CandidateDetilas = () => {
  const [candidate, setCandidate] = useState([]);
  const [student, setStudent] = useState([]);
  const [postId, setPostId] = useState("");
  const [candidateId, setCandidateId] = useState("");

  const [getId, setGetId] = useState("");
  const [postName, setPostName] = useState("");
  const [stdName, setStdName] = useState("");
  const [stdDept, setStdDept] = useState("");
  const [registrationNo, setRegistrationNo] = useState("");
  const [partyName, setPartyName] = useState("");
  const [partySymbol, setPartySymbol] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [data1, setData1] = useState([]);

  useEffect(() => {
    fetchCandidateDetails();
    fetchStudentDetails();
    fatchCandidateDetails7();
  }, []);

  // fetch candidate details----
  const fetchCandidateDetails = async () => {
    let res = await candidateService.fetchCandidateDetails();
    if (res) {
      setCandidate(res);
    }
  };
  const fetchStudentDetails = async () => {
    let res = await candidateService.fetchStudentDetails();
    if (res) {
      setStudent(res);
    }
  };

  const handleSearch = (e) => {
    console.log(e);
  };

  const searchCandidate = async () => {
    setIsLoading(true);
    let res = await candidateService.searchCandidate(postId, candidateId);
    setIsLoading(false);
    if (res) {
      let pstid = "";
      let pstname = "";
      let studentName = "";
      let StudentDept = "";
      let registration_number = "";

      for (let item of res) {
        pstid = item.joinedData.Post_Id;
        pstname = item.joinedData.Post_Name;
        studentName = item.Student_name;
        StudentDept = item.Department;
        registration_number = item.registration_number;
      }
      setGetId(pstid);
      setPostName(pstname);
      setStdName(studentName);
      setStdDept(StudentDept);
      setRegistrationNo(registration_number);
    }
  };

  // ----------Add item---
  const candidateSave = async (e) => {
    e.preventDefault();

    let item = {
      candidateid: "",
      postId1: getId,
      postname1: postName,
      registartion_no: registrationNo,
      studentname1: stdName,
      studentDept: stdDept,
      partyname: partyName,
      partysymbol: partySymbol,
      image: "",
    };
    let data = await candidateapi.CandidateFrom(item);
    console.log(data);
    if (data) {
      toast.success("student registration successfully");
    } else {
      toast.error("something went wrong!");
    }
  };

  // ----------fatch candidate details---------
  const fatchCandidateDetails7 = async () => {
    let res = await candidateService.fetchCandidateForm();
    if (res) {
      setData1(res);
    }
    console.log(data1);
  };

  const deleteStudent = async (item) => {
    console.log(item._id); // Check the value of item._id
    let response = await candidateapi.deleteCandidate(item._id);
    if (response) {
      toast.success("Delete successfully");
    }
  };

  return (
    <div>
      <div className="Candidate">
        <h5>By,Hasanur Rahman</h5>
        <div className="CandidateStyle container-fluid">
          <select
            className="input1"
            onChange={(e) => setPostId(e.target.value)}
          >
            {/* <option>--Post Name --</option> */}
            {candidate.map((item, i) => {
              return (
                <option key={i} value={item._id}>
                  {item.Post_Id}/{item.Post_Name}
                </option>
              );
            })}
          </select>
          <select
            className="input1"
            onChange={(e) => setCandidateId(e.target.value)}
          >
            {/* <option>--Student Name--</option> */}
            {student.map((item, i) => {
              return (
                <option key={i} value={item._id}>
                  {item.Student_name}
                </option>
              );
            })}
          </select>
          <button className="SearchButton" onClick={searchCandidate}>
            Search Candidate
          </button>
        </div>
      </div>
      <div className="main">
        {!isLoading && getId !== "" && postName !== "" && (
          <form>
            <div className="main1">
              <label>Post Id </label>
              <input type="text" name={getId} value={getId} />
              <label>Post Name</label>
              <input type="text" name={postName} value={postName} />
              <label>Registration no</label>
              <input type="text" name={registrationNo} value={registrationNo} />
              <label>Student Name </label>
              <input type="text" name={stdName} value={stdName} />
              <label>Student Dept</label>
              <input type="text" name={stdDept} value={stdDept} />
              <label>Party_name </label>
              <input
                type="text"
                name={partyName}
                value={partyName}
                onChange={(e) => setPartyName(e.target.value)}
              />
              <label> Party Symbol</label>
              <input
                type="text"
                name={partySymbol}
                value={partySymbol}
                onChange={(e) => setPartySymbol(e.target.value)}
              />
              <label>Symbol image</label>
              <input type="file" name="image" />
            </div>
            <div className=" savebtn col-12 text-center m-2">
              <button
                className="btn btn-primary"
                type="Submit"
                onClick={candidateSave}
              >
                Save
              </button>
            </div>
          </form>
        )}
      </div>
      <div>
        <h4> Candidate Details</h4>

        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>Candidate Id</th>
              <th>Post Id</th>
              <th>Post Name</th>
              <th>Student Registration No</th>
              <th>Candidate Name</th>
              <th>Department Name</th>
              <th>Party Name</th>
              <th>Party Symbol</th>
              <th>Symbol Image</th>

              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data1.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{item.candidateid}</td>
                  <td>{item.postId1}</td>
                  <td>{item.postname1}</td>
                  <td>{item.registartion_no}</td>
                  <td>{item.studentname1}</td>
                  <td>{item.studentDept}</td>
                  <td>{item.partyname}</td>
                  <td>{item.partysymbol}</td>
                  <td>EMPTY</td>
                  <td>
                    {
                      <button
                        className="btn btn-primary"
                        onClick={() => deleteStudent(item)}
                      >
                        Delete
                      </button>
                    }
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CandidateDetilas;
