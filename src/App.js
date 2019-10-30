import React from "react";
import "./App.css";

import MainCardComponent from "./components/MainCardComponent";
import CardComponent from "./components/CardComponent";
import CardInfoComponent from "./components/CardInfoComponent";

function App() {
  return (
    <div className="container">
      <MainCardComponent>
        <CardInfoComponent />
        <CardComponent num={523} word={"Posts"} />
        <CardComponent num={1387} word={"Likes"} />
        <CardComponent num={146} word={"Follower"} />
      </MainCardComponent>
    </div>
  );
}

export default App;
