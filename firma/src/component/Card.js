import React from "react";

const Card = ({ imageUrl, name, job, card }) => (
  <>
    <div id={`Card-${card + 1}`}>
      <div id="cardImage">
        <img alt="avartar" src={require(`../images/team/${imageUrl}`)} />
      </div>
      <div id="Decs">
        <div id="Job">
          <span>{job}</span>
        </div>
        <div id="Name">
          <span>{name}</span>
        </div>
      </div>
    </div>
  </>
);

export default Card;
