"use client";
import React, { useState } from "react";

const UserAdmin = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  return (
    <div className="container">
      <div className="post">
        <h5>By,Hasanur Rahman</h5>
        <h4 className="text-decoration-none">User Admin</h4>
        <div className="UserAdmin container-fluid">
          <form className="Form">
            <label className="fs-5">Admin Email</label>
            <br />

            <input
              type="text"
              placeholder="Enter your Email"
              className="input1"
              name={form.email}
              value={form.email}
              onChange={() => setForm({ email: e.target.value })}
            />
            <br />
            <label className="fs-5">Password</label>
            <br />
            <input
              type="text"
              placeholder="Enter Password"
              className="input1"
              name={form.password}
              value={form.password}
              onChange={() => setForm({ password: e.target.value })}
            />
            <br />

            <div className="col-12 text-center">
              <button className="btn btn-primary" type="Submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserAdmin;
