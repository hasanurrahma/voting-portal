"use client";
import React, { useEffect, useState } from "react";
import studentService from "@/service/student";
import { toast } from "react-toastify";
import { Toast } from "bootstrap";

const StudentDetails = () => {
  const dept = ["CSE", "ME", "EEE", "ECE", "CE"];
  const semester = ["1st", "2nd", "3rd", "4th", "5th", "6th"];

  const pattern = /^\+[0-9]+$/;

  const [data, setData] = useState([]);
  const [input, setInput] = useState([]);
  const [student, setStudent] = useState({
    sname: "",
    sfather_name: "",
    gender: "",
    semister: "",
    dept: "",
    address: "",
    number: "",
    photo: "",
  });

  useEffect(() => {
    fetchStudent();
  }, []);
  //-------------------------------------------add data-------------------------------
  const StudentInsert = async (e) => {
    e.preventDefault();

    if (student.sname === "") {
      toast.error("please enter valid student name");
      return false;
    }
    if (student.sfather_name === "") {
      toast.error("enter valid father name");
      return false;
    }
    if (student.dept === "") {
      toast.error("enter valid dept. name");
      return false;
    }
    if (student.semister === "") {
      toast.error("enter valid semester");
      return false;
    }

    if (student.number === "") {
      toast.error("enter valid contact no");
      return false;
    } else if (student.number.length !== 10) {
      toast.error("contact no should be 10 digits");
      return false;
    }

    let payload = {
      Student_name: student.sname,
      Fathers_name: student.sfather_name,
      Gender: student.gender,
      Semester: student.semister,
      Department: student.dept,
      Address: student.address,
      Contact_no: student.number,
      photo: student.photo,
    };

    let data = await studentService.studentRegistration(payload);

    if (data) {
      toast.success("student registration successfully");
      fetchStudent();
    } else {
      toast.error("something went wrong!");
    }
  };

  // -------------------------fetch data--------------------------------
  const fetchStudent = async () => {
    let res = await studentService.fetchStudent1();
    if (res) {
      setData(res);
    } else {
      alert("something went wrong!");
    }
  };
  // -----------------------Delete data---------------------------
  const deleteStudent = async (item) => {
    console.log(item._id);
    let res = await studentService.deleteStudent(item._id);
    if (res) {
      toast.success("Delete successfully");
      fetchStudent();
    }
  };

  const gender = (value) => {
    setStudent((prev) => ({ ...prev, gender: value }));
  };

  const handleDeptChange = (e) => {
    const newDept = e.target.value;
    setStudent((prevStudent) => ({
      ...prevStudent,
      dept: newDept,
    }));
  };
  const handleSemChange = (e) => {
    const newDept = e.target.value;
    setStudent((prevStudent) => ({
      ...prevStudent,
      semister: newDept,
    }));
  };
  return (
    <div className="container">
      <div className="post">
        <h5>By,Hasanur Rahman</h5>
        <h4>Student Details Entry Form</h4>
        <div className="Registration123 container-fluid">
          <form className="Form">
            <input
              type="text"
              placeholder="Student Name"
              className="input1"
              value={student.sname}
              onChange={(e) =>
                setStudent((prev) => ({ ...prev, sname: e.target.value }))
              }
            />
            <br />
            <input
              type="text"
              placeholder="Father's Name"
              className="input1"
              value={student.sfather_name}
              name={student.sfather_name}
              onChange={(e) =>
                setStudent((prev) => ({
                  ...prev,
                  sfather_name: e.target.value,
                }))
              }
            />
            <br />
            <input
              type="radio"
              name="gender"
              value={student.gender}
              onChange={(e) => gender("male")}
            />
            <label>Male</label>
            <input
              type="radio"
              name="gender"
              value={student.gender}
              onChange={(e) => gender("female")}
            />
            <label>Female</label>
            <br />
            <select
              className="input1"
              value={student.dept}
              onChange={handleDeptChange}
            >
              <option>--Select Department</option>
              {dept.map((item, i) => {
                return (
                  <option key={i} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
            <br />
            <select
              className="input1"
              onChange={handleSemChange}
              value={student.semister}
            >
              <option>--Select Semester</option>
              {semester.map((item, i) => {
                return (
                  <option key={i} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
            <br />
            <textarea
              placeholder="Address"
              required=""
              rows="3"
              className="textarea"
              value={student.address}
              name={student.address}
              onChange={(e) =>
                setStudent((prev) => ({ ...prev, address: e.target.value }))
              }
            />
            <br />
            <input
              type="text"
              placeholder="Contact Number"
              className="input1"
              value={student.number}
              name={student.number}
              onChange={(e) =>
                setStudent((prev) => ({ ...prev, number: e.target.value }))
              }
            />
            <br />
            <input
              type="file"
              name="name"
              placeholder="Photo"
              className="input1"
            />
            <div className="col-12 text-center">
              <button
                className="btn btn-primary m-3"
                type="Submit"
                onClick={StudentInsert}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div>
          <table className="table table-hover mt-3">
            <thead>
              <tr>
                <th>Student Registration No</th>
                <th>Student Name</th>
                <th>Father's Name</th>
                <th>Gender</th>
                <th>Department</th>
                <th>Semester</th>
                <th>Address</th>
                <th>Contact no</th>
                <th>Photo</th>

                <th>Delete</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, i) => {
                return (
                  <tr key={i}>
                    <td>{item.registration_number}</td>
                    <td>{item.Student_name}</td>
                    <td>{item.Fathers_name}</td>
                    <td>{item.Gender}</td>
                    <td>{item.Department}</td>
                    <td>{item.Semester}</td>
                    <td>{item.Address}</td>
                    <td>{item.Contact_no}</td>
                    <td>{item.photo}</td>
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
                    <td>{<button className="btn btn-primary">Edit</button>}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
