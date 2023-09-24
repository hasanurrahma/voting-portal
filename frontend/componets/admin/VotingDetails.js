import React from "react";

const VotingDetails = ({ candidate, name }) => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <div className="generale-post d-flex justify-content-between">
            <div className="generale-title">{name}</div>
            {candidate?.map((item) => (
              <div className="d-flex">
                <div>
                  <div>{item.studentname1}</div>
                  <div>photo</div>
                  <div>{item.studentDept}</div>
                  <div>{item.partyname}</div>
                </div>
                <div className="radio">
                  <input type="radio" className="ms-2 " name="xx" /> Vote
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VotingDetails;
