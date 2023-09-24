"use client";
import Header from "@/componets/common/header";
import HomeCmp from "@/componets/home/homeCmp";
import About from "@/componets/common/About";
import CandidateDetilas from "@/componets/common/CandidateDetilas";
import StudentDetails from "@/componets/common/StudentDetails";
import Result from "@/componets/common/Result";
import VotingPage from "@/componets/admin/VotingPage";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Header />
      {/* <HomeCmp /> */}
      {/* <About /> */}
      {/* <CandidateDetilas /> */}
      {/* <StudentDetails /> */}
      {/* <Result /> */}
      <VotingPage />
    </>
  );
}
