import logo from "./logo.svg";
import "./App.css";

const h1Style = {
  fontSize: "30px",
  color: "#cc0000",
  textTransform: "uppercase",
};

function App() {
  return (
    <div className="App">
      <h1 style={h1Style}>My React Page</h1>
      <p className="bio">This is my first React page</p>
    </div>
  );
}

export default App;
