import React from "react";
import ICard from "./ICard";

function ICardGallery() {

  const students = [
    {
      name: "Sujeet Kumar",
      rollNo: "2400320101134",
      branch: "CSE",
      college: "ABES Engineering College",
      number: "28"
    },
    {
      name: "Sidhartha",
      rollNo: "2400320101099",
      branch: "CSE",
      college: "ABES Engineering College",
      number: "28"
    },
    {
      name: "Suryansh",
      rollNo: "2400320101146",
      branch: "CSE",
      college: "ABES Engineering College",
      number: "28"
    },
    {
      name: "Rahul Sharma",
      rollNo: "2400320101150",
      branch: "CSE",
      college: "ABES Engineering College",
      number: "30"
    },
    {
      name: "Rahul Sharma",
      rollNo: "2400320101150",
      branch: "CSE",
      college: "ABES Engineering College",
      number: "30"
      //test 
      //test 2
    }
  ];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px"
      }}
    >

      {students.map((student, index) => (
        <div
          key={index}
          style={{
            border: "10px solid red",
            height: "300px",
            width: "300px"
          }}
        >

          <ICard
            name={student.name}
            rollNo={student.rollNo}
            branch={student.branch}
            college={student.college}
            number={student.number}
          />

        </div>
      ))}

    </div>
  );
}

export default ICardGallery;