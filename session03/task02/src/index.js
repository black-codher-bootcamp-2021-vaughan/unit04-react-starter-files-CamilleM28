import React from "react";
import ReactDOM from "react-dom";
import Profile from "./Profile";

function App() {
  return <Profile name="Camille" bio="I am from birmingham" />;
}

ReactDOM.render(<App />, document.getElementById("root"));
