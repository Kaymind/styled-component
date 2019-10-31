import React from "react";

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
