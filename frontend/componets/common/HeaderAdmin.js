import Link from "next/link";
import React from "react";

const HeaderAdmin = (props) => {
  return (
    <header className="container-fluid">
      <div className="HeaderAdmin1 mt-1">
        <h4 className="fw-bold ">
          Barpeta Polytechnic Students Online Voting Portal
        </h4>
        <div className="Main2">
          <div className="ms-5 imge ">
            <img src="/image/evoting.png" alt="hg" width={80} height={80} />
          </div>
          <div className="me-4">
            <img src="/image/vote.png" alt="hg" width={80} height={80} />
          </div>
        </div>
      </div>
      <div className="HeadrerNavbar">
        <ul className="nav nav-pills p-1">
          <li className="nav-item">
            <Link
              className={`nav-link ${
                props.keyValue === "dashboard" && "active"
              } fs-6`}
              href="/admin/dashboard"
            >
              Admin Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${
                props.keyValue === "postDetails" && "active"
              } fs-6`}
              href="/admin/postDetails"
            >
              Post Details
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${
                props.keyValue === "student1" && "active"
              } fs-6`}
              href="/admin/Student1"
            >
              Student Details
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${
                props.keyValue === "Cand" && "active"
              } fs-6`}
              href="/admin/CandidateDashboard"
            >
              Candiate Details
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${
                props.keyValue === "Resultdash" && "active"
              } fs-6`}
              href="/admin/ResultDash"
            >
              Result
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fs-6" href="/">
              user
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default HeaderAdmin;
