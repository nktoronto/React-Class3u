import React from "react";

/* Gate Assignment */

const Gate = ({ isOpen }) => (
    <div style={
        { marginTop: "10px", marginBottom: "20px" }
    } >
    <h4 style = {
        { textDecoration: "underline" }
    } > Gate Task: </h4>
          <strong style = {
                { color: "red" }}>
            {isOpen === true ? "Danger! Floodgate is Open" : "fine!"} </strong>
    </div>
);

export default Gate;