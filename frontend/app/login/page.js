"use client";
import React, { useEffect } from "react";
import Header from "@/componets/common/header";
import Router from "next/router";

import Registration from "../registration/page";

import Login from "@/componets/common/Login";

const LoginPage = () => {
  return (
    <div>
      <Header />
      <Login />
    </div>
  );
};

export default LoginPage;
