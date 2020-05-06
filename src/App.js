import React from "react";
import "semantic-ui-css/semantic.min.css";
import Footer from "./components/Frame/Footer";
import Titlebar from "./components/Frame/Titlebar";
import "./App.scss";

function App() {
  return (
    <div className="content">
      <Titlebar />
      <div className="main-dev">{/* <Main /> */}</div>
      <Footer />
    </div>
  );
}

export default App;
