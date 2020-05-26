import React from "react";
import "semantic-ui-css/semantic.min.css";
import Footer from "./components/Frame/Footer";
import Titlebar from "./components/Frame/Titlebar";
import TablaColonos from "./components/pages/TablaColonos/TablaColonos";
import "./App.scss";
import Todos from "./components/Todos"
function App() {
  
  return (
    <div className="content">
      <Titlebar />
      <div className="main-dev">
        <TablaColonos />
        <br/>
        <Todos/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
