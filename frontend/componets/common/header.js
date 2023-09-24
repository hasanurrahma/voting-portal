"use client";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="top ">
        <div className="ms-5 imge ">
          <img src="/image/evoting.png" alt="hg" width={80} height={80} />
        </div>
        <div className="me-4">
          <img src="/image/evoting.png" alt="hg" width={80} height={80} />
        </div>

        <ul className="manu">
          <li className="nav-item">
            <Link className="nav-link" href="/">
              HOME
            </Link>
          </li>
          <li>
            <Link className="nav-link" href="/registration">
              REGISTRATION
            </Link>
          </li>
          <li>
            <Link className="nav-link" href="/login">
              LOGIN
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
