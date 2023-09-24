"use client";
import React, { useEffect, useState } from "react";
import studentService from "@/service/student";
import { toast } from "react-toastify";

const Post = () => {
  const post = [
    "POST/1",
    "POST/2",
    "POST/3",
    "POST/4",
    "POST/5",
    "POST/6",
    "POST/7",
    "POST/8",
    "POST/9",
    "POST/10",
    "POST/11",
    "POST/12",
    "POST/13",
    "POST/14",
    "POST/15",
    "POST/16",
  ];
  const PostName = [
    "President",
    "Vice President",
    "General Secretary",
    "Assistant General Secretary",
    "Cultural Secretary",
    "Literary & Magazine Secretary",
    "Debating & Symp. Secretary",
    "Major Games Secretary",
  ];
  const [id, setId] = useState("");
  const [Name, setName] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchStudent();
  }, []);

  // ----------add post deteails----------
  const PostEntry = async (e) => {
    e.preventDefault();

    let payload = {
      Post_Id: id,
      Post_Name: Name,
    };

    let data = await studentService.PostEntry(payload);

    if (data) {
      toast.success("Successfully");
      fetchStudent();
      setId("");
      setName("");
    } else {
      toast.error("something went wrong!");
    }
  };

  // fetch data----
  const fetchStudent = async () => {
    let res = await studentService.fetchPost();
    if (res) {
      setData(res);
    } else {
      alert("something went wrong!");
    }
  };
  // -----------Delete post details-----------
  const deletepost1 = async (item) => {
    console.log(item.id);
    let res = await studentService.deleteStudent12(item._id);
    if (res) {
      toast.success("Delete successfully");
      fetchStudent();
    } else {
      alert("something went wrong!");
    }
  };
  const handleDeptChange = (e) => {
    const newpost = e.target.value;

    setId(newpost);
  };
  const handleSemChange = (e) => {
    const newPostName = e.target.value;
    setName(newPostName);
  };

  return (
    <div className="post">
      <h5>By,Hasanur Rahman</h5>
      <h4>Post Entry Form</h4>
      <div className="Registration12">
        <form className="Form">
          <div className="maindiv row">
            <div>
              <dl>
                <dt className="fs-5 m-2">POST ID</dt>
                <dd>
                  <select
                    className="input12"
                    value={id}
                    onChange={handleDeptChange}
                  >
                    <option>-------------------POST-------------------</option>
                    {post.map((item, i) => {
                      return (
                        <option key={i} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </dd>
              </dl>
            </div>
            <div>
              <dl>
                <dt className="fs-5 m-2">Post Name</dt>
                <dd>
                  <select
                    className="input12"
                    value={Name}
                    onChange={handleSemChange}
                  >
                    <option>---------------POST NAME---------------</option>
                    {PostName.map((item, i) => {
                      return (
                        <option key={i} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </dd>
              </dl>
            </div>

            <div className="col-12 text-center">
              <button
                className="btn btn-primary"
                type="Submit"
                onClick={PostEntry}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="table">
        <table className="table table-striped-columns text-center">
          <thead>
            <tr>
              <th scope="col">Post Id</th>
              <th>Post Name</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => {
              return (
                <tr key={i}>
                  <th>{item.Post_Id}</th>
                  <th>{item.Post_Name}</th>
                  <th>
                    {
                      <button
                        className="btn btn-primary"
                        onClick={() => deletepost1(item)}
                      >
                        Delete
                      </button>
                    }
                  </th>
                  <th>{<button className="btn btn-primary">Edit</button>}</th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Post;
