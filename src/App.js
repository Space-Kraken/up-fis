import React from "react";
import "semantic-ui-css/semantic.min.css";
import Footer from "./components/Frame/Footer";
import Titlebar from "./components/Frame/Titlebar";
import TablaColonos from "./components/pages/TablaColonos/TablaColonos";
// import RegistroPagos from "./components/pages/RegistroPagos/RegistroPagos";
import "./App.scss";

function App() {
  return (
    <div className="content">
      <Titlebar />
      <div className="main-dev">
        <TablaColonos />
        {/* <RegistroPagos /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
