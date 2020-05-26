import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import Footer from "./components/Frame/Footer";
import Titlebar from "./components/Frame/Titlebar";
import TablaColonos from "./components/pages/TablaColonos/TablaColonos";
import Options from "./components/pages/Opions/Options";
import Test from "./components/pages/Test/Test";
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
        <Test />
        {/* <TablaColonos /> */}
        {/* <RegistroPagos /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
