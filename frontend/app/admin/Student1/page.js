import React from "react";
import HeaderAdmin from "../../../componets/common/HeaderAdmin";
import StudentDetails from "../../../componets/common/StudentDetails";

const StudentDetail = () => {
  return (
    <div>
      <HeaderAdmin keyValue={"student1"} />
      <StudentDetails />
    </div>
  );
};

export default StudentDetail;
