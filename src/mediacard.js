import React from "react";

const MediaCard = ({ title, body, pik }) => (
  <div>
    <h2>{title} </h2>
    <p> {body} </p>
    <br />
    <p>
      <img src={pik} alt="...."></img>{" "}
    </p>
  </div>
);
/*
function Hi({ name, age }) {
    return <div> Hello {name}, you are {age} !! </div>;
} */

export default MediaCard;