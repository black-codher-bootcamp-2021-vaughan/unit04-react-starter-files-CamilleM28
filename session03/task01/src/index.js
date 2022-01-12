import React from "react";
import ReactDOM from "react-dom";

const name = "Camille";

function Profile(props) {
  if (name.toLowerCase() === "camille") {
    return (
      <main id="content" role="main" class="base">
        <h1>{name}'s React Page</h1>
        <p>I am from Birmingham</p>
      </main>
    );
  } else {
    return (
      <main id="content" role="main" class="base">
        <h1>Just a React Page</h1>
        <p>Nothing to see here!</p>
      </main>
    );
  }
}

ReactDOM.render(Profile(), document.getElementById("root"));
