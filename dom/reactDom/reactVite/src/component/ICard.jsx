import React from "react";
import studentImage from "../../images/download.jpg";

function ICard(props) {
  return (
    <div className="id-card">

      <h2>{props.college}</h2>

      <img
        src={studentImage}
        height={100}
        width={100}
      />

      <h3>{props.name}</h3>

      <p>{props.rollNo}</p>

      <p>{props.branch}</p>

      <p>{props.number}</p>
      //test

    </div>
  );
}

export default ICard;