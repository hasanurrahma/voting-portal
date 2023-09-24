// import React from "react";

// const Result = () => {
//   return (
//     <div className="container">
//       <div className="post">
//         <h5>By,Hasanur Rahman</h5>
//         <h4>Election Result</h4>

//       </div>
//     </div>
//   );
// };

// export default Result;
"use client";
import React, { useState } from "react";
import MyComponent from "@/service/MyComponent";

const Result = () => {
  const [resultData, setResultData] = useState([]);

  // Simulated data
  const simulatedData = [
    {
      postName: "Post 1",
      candidates: [
        { candidateName: "Candidate 1", party: "Party A", totalVote: 100 },
        { candidateName: "Candidate 2", party: "Party B", totalVote: 150 },
      ],
    },
    {
      postName: "Post 2",
      candidates: [
        { candidateName: "Candidate 3", party: "Party C", totalVote: 120 },
        { candidateName: "Candidate 4", party: "Party D", totalVote: 90 },
      ],
    },
  ];

  const downloadAsWord = () => {
    // Convert HTML content to Word document using mammoth
    const htmlContent = `
      <h2>Election Result</h2>
      <p>Date: ${new Date().toLocaleDateString()}</p>
      <h3>Winner List</h3>
      <ul>
        ${resultData
          .map((post, index) => {
            const winner = post.candidates.reduce((prev, current) =>
              current.totalVote > prev.totalVote ? current : prev
            );

            return `
            <li>
              <strong>Post Name:</strong> ${post.postName}<br />
              <strong>Candidate Name:</strong> ${winner.candidateName}<br />
              <strong>Party:</strong> ${winner.party}<br />
              <strong>Total Vote:</strong> ${winner.totalVote}
            </li>
          `;
          })
          .join("")}
      </ul>
    `;

    mammoth
      .convertToHtml(htmlContent)
      .then((result) => {
        const blob = new Blob([result.value], { type: "application/msword" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "Winner_List.doc";
        a.click();

        URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error("Error converting to Word document:", error);
      });
  };

  return (
    <div>
      <h4>Election Result</h4>
      <button onClick={downloadAsWord}>Download as Word</button>
    </div>
  );
};

export default Result;
