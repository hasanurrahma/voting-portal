"use client";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import studentService from "@/service/student";

const RegistrationCmp = () => {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

  const register = async (e) => {
    e.preventDefault();

    if (id === "") {
      toast.error("please enter valid student Id !!!");
      return false;
    }
    if (email !== "") {
      if (emailRegex.test(email)) {
      } else {
        toast.error("please enter valid email");
        return false;
      }
    } else {
      toast.error("requied");
      return false;
    }

    let payload = {
      Student_Id: id,
      email,
      password,
    };

    let data = await studentService.createStudent(payload);

    if (data) {
      toast.success("created");
      setEmail("");
      setId("");
      setPassword("");
    } else {
      toast.error("something went wrong");
    }
  };
  return (
    <div>
      <div className="Registration1 container">
        <form className="Form">
          <h1 className="text-primary text-center m-3">STUDENT REGISTRATION</h1>
          <div className="row">
            <div className="col-12">
              <dl>
                <dt className="fs-4 m-3">Student Id/Registration No</dt>
                <dd>
                  <input
                    type="text"
                    className="form-control m-3"
                    placeholder="Enter your Registration No"
                    required
                    value={id}
                    name={id}
                    onChange={(e) => setId(e.target.value)}
                  />
                </dd>
              </dl>
            </div>
            <div className="col-12">
              <dl>
                <dt className="fs-4 m-3">Email</dt>
                <dd>
                  <input
                    type="text"
                    className="form-control m-3 "
                    placeholder="Enter your Email Id"
                    required
                    value={email}
                    name={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </dd>
              </dl>
            </div>
            <div className="col-12">
              <dl>
                <dt className="fs-4 m-3">Password</dt>
                <dd>
                  <input
                    type="text"
                    className="form-control m-3"
                    placeholder="Enter your Password"
                    required
                    value={password}
                    name={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </dd>
              </dl>
            </div>
            <div className="col-12 text-center">
              <button
                className="btn btn-primary"
                type="Submit"
                onClick={register}
              >
                Submit form
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationCmp;
