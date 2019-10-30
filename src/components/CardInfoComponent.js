import React from "react";

import CardInfo from "./cardinfo.style.component";
import Button from "./Button";

const CardInfoComponent = () => {
  return (
    <CardInfo>
      <div className="name-info">
        <img
          src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
          alt=""
        />
        <h1>Jessica Potter</h1>
        <span>Visual Artist</span>
      </div>
      <div className="btn-group">
        <Button>Follow</Button>
        <Button>Message</Button>
      </div>
    </CardInfo>
  );
};

export default CardInfoComponent;
