"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import candidateapi from "@/service/CandidateApi";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const loginHandle = async (e) => {
    e.preventDefault();
    //-------------------------
    let payload = {
      Post_Id: id,
      Post_Name: Name,
    };

    let data = await candidateapi.studentlogin(payload);

    if (data) {
      toast.success("Successfully");
      fetchStudent();
      setId("");
      setName("");
    } else {
      toast.error("something went wrong!");
    }
  };
  //---------------------------
  if (email === "123@gmail.com" && pass === "password") {
    router.push("/admin/dashboard");
  } else if (email === "imran@gmail.com" && pass === "pass") {
    router.push("/student-voting");
  } else {
    alert("invalid crediential");
  }

  return (
    <>
      <div className="Login-div container-fluid">
        <h1 className="text-danger text-center container-fluid fw-bold p-6">
          LOGIN
        </h1>
        <form className="Login-div1 container-fluid">
          <label className="text-primary">Email</label>
          <br />
          <input
            type="text"
            placeholder="Enter your Email"
            className="inputLogin "
            required
            value={email}
            name={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label>password</label>
          <br />
          <input
            type="text"
            placeholder="Enter your Password"
            className="inputLogin "
            required
            value={pass}
            name={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <br />
        </form>
        <div className=" container-fluid p-4 text-center">
          <button
            className="btn btn-primary"
            type="Submit"
            onClick={loginHandle}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
