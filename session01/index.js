// Add the code here
"use strict";

function ClickButton() {
  const [clicked, setClick] = React.useState(false);

  if (clicked) {
    return React.createElement(
      "h1",
      { className: "title" },
      "Hello World!",
      React.createElement(
        "p",
        { className: "paragraph" },
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quam metus, pharetra vel sodales eu, maximus non augue. Donec gravida felis in efficitur suscipit. Aenean et imperdiet nisi. Sed vitae."
      )
    );
  }
  return React.createElement(
    "button",
    {
      className: "main-button",
      onClick: () => setClick(true),
    },

    "Press Here"
  );
}

const domContainer = document.querySelector("#root");
ReactDOM.render(React.createElement(ClickButton), domContainer);
