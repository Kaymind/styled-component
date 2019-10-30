import React from "react";
import styled from "style-component";

import Card from "./card.style.component";

const CardComponent = ({ num, word }) => {
  return (
    <Card>
      <div>{num}</div>
      <div className="word">{word}</div>
    </Card>
  );
};

export default CardComponent;
