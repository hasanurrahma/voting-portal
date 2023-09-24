import React, { useEffect, useState } from "react";
import candidateService from "@/service/candidateService";
import VotingDetails from "./VotingDetails";

const VotingPage = () => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [presidentDetails, setPresidentDetails] = useState([]);
  const [presidentName, setPresidentName] = useState("");
  const [vicePresidentName, setVicePresidentName] = useState("");
  const [generaleScretaryName, setGeneraleScretaryName] = useState("");
  const [assistantGenScretary, setAssistantGenScretary] = useState("");
  const [culturalSecretary, setCulturalSecretary] = useState("");
  const [literaryMagazine, setLiteraryMagazine] = useState("");
  const [debatingSymp, setDebatingSymp] = useState("");
  const [gameSecretary, setGameSecretary] = useState("");

  useEffect(() => {
    fatchCandidateDetails7();
  }, []);
  const fatchCandidateDetails7 = async () => {
    let res = await candidateService.fetchCandidateForm();

    if (res) {
      setData1(res);
      getCandidateDetailsFiler(res);
      getCandidateDetailsFiler1(res);
      getCandidateDetailsFiler2(res);
      getCandidateDetailsFiler3(res);
      getCandidateDetailsFiler4(res);
      getCandidateDetailsFiler5(res);
      getCandidateDetailsFiler6(res);
      getCandidateDetailsFiler7(res);
    }
  };

  const getCandidateDetailsFiler = (res) => {
    const generaleDetails = res.filter(
      (item) => item.postname1 === "President"
    );

    setPresidentName(generaleDetails);
  };
  const getCandidateDetailsFiler1 = (res) => {
    const generaleDetails = res.filter(
      (item) => item.postname1 === "Vice President"
    );

    setVicePresidentName(generaleDetails);
  };
  const getCandidateDetailsFiler2 = (res) => {
    const generaleDetails = res.filter(
      (item) => item.postname1 === "General Secretary"
    );

    setGeneraleScretaryName(generaleDetails);
  };
  const getCandidateDetailsFiler3 = (res) => {
    const generaleDetails = res.filter(
      (item) => item.postname1 === "Assistant General Secretary"
    );

    setAssistantGenScretary(generaleDetails);
  };
  const getCandidateDetailsFiler4 = (res) => {
    const generaleDetails = res.filter(
      (item) => item.postname1 === "Cultural Secretary"
    );

    setCulturalSecretary(generaleDetails);
  };
  const getCandidateDetailsFiler5 = (res) => {
    const generaleDetails = res.filter(
      (item) => item.postname1 === "Literary & Magazine Secretary"
    );

    setLiteraryMagazine(generaleDetails);
  };
  const getCandidateDetailsFiler6 = (res) => {
    const generaleDetails = res.filter(
      (item) => item.postname1 === "Debating & Symp. Secretary"
    );

    setDebatingSymp(generaleDetails);
  };
  const getCandidateDetailsFiler7 = (res) => {
    const generaleDetails = res.filter(
      (item) => item.postname1 === "Major Games Secretary"
    );
    setGameSecretary(generaleDetails);
  };

  return (
    <div>
      <div className="Voting container-fluid">
        <h1 className="Header text-danger container-fluid m-3 p-3">
          CAST YOUR VOTE
        </h1>
        <div className="container">
          {/* <form>
            <table
              align="center"
              style={{ width: "100%", height: "95%", color: "#31b0d5" }}
            >
              <div>
                {presidentDetails.length > 0 ? (
                  <div>
                    {presidentDetails.map((item) => {
                      return (
                        <div>
                          <tr>
                            <td
                              style={{
                                fontSize: "16px",
                                color: "white",
                                fontStyle: "italic",
                              }}
                            >
                              {item.postname1}
                            </td>
                            <td>
                              Name:{item.studentname1}
                              <br />
                              <img
                                src="/image/evoting.png"
                                alt="hg"
                                width={80}
                                height={80}
                              />
                              <label>
                                <input
                                  type="radio"
                                  name="selectedCandidate"
                                  value="Juhi Deka"
                                  required
                                />
                                Vote
                              </label>
                              <br />
                              Course:{item.studentDept}
                              <br />
                              Party:{item.partyname}
                            </td>
                          </tr>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div>no data</div>
                )}
              </div>
            </table>
            <button className="btn btn-primary" type="submit">
              Submit Vote
            </button>
          </form> */}

          {presidentName.length > 0 && (
            <VotingDetails name="President" candidate={presidentName} />
          )}
          {vicePresidentName.length > 0 && (
            <VotingDetails
              name="Vice President"
              candidate={vicePresidentName}
            />
          )}
          {generaleScretaryName.length > 0 && (
            <VotingDetails
              name="Gereral Secretary"
              candidate={generaleScretaryName}
            />
          )}
          {assistantGenScretary.length > 0 && (
            <VotingDetails
              name="Assistant General Secretary"
              candidate={assistantGenScretary}
            />
          )}
          {culturalSecretary.length > 0 && (
            <VotingDetails
              name="Cultural Secretary"
              candidate={culturalSecretary}
            />
          )}
          {literaryMagazine.length > 0 && (
            <VotingDetails
              name="Literary & Magazine Secretary"
              candidate={literaryMagazine}
            />
          )}
          {debatingSymp.length > 0 && (
            <VotingDetails
              name="Debating & Symp. Secretary"
              candidate={debatingSymp}
            />
          )}
          {gameSecretary.length > 0 && (
            <VotingDetails
              name="Major Games Secretary"
              candidate={gameSecretary}
            />
          )}
          <div className="SubmitVote">
            <button className="btn btn-primary">Submit your Vote ??????</button>
          </div>
          {/* <div>
            {presidentDetails.length > 0 ? (
              <div>
                {presidentDetails.map((item) => {
                  return (
                    <div>
                      <h2>{item.postname1}</h2>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div>no data</div>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default VotingPage;
