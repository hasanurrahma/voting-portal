"use client";
import React from "react";
import Header from "@/componets/common/header";
import RegistrationCmp from "@/componets/registration/registrationCmp";
import HeaderAdmin from "@/componets/common/HeaderAdmin";
import Post from "@/componets/common/Post";
import StudentDetails from "@/componets/common/StudentDetails";
import Login from "@/componets/common/Login";
import Result from "@/componets/common/Result";
import UserAdmin from "@/componets/common/UserAdmin";

const Registration = () => {
  return (
    <div>
      <Header />

      <RegistrationCmp />
    </div>
  );
};

export default Registration;
