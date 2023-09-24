import CandidateDetilas from "@/componets/common/CandidateDetilas";
import HeaderAdmin from "@/componets/common/HeaderAdmin";
import React from "react";

const CandidateDashboard = () => {
  return (
    <div>
      <HeaderAdmin keyValue={"Cand"} />
      <CandidateDetilas />
    </div>
  );
};

export default CandidateDashboard;
