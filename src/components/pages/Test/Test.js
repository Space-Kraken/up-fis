import React, { useState } from "react";
import TablaColonos from "./../TablaColonos/TablaColonos";
import Options from "./../Opions/Options";
import Lista from "./../Lista/Lista";
export default function Test() {
  const [selectedForm, setselectedForm] = useState(null);
  const handlerForm = () => {
    switch (selectedForm) {
      case "registrar":
        return <TablaColonos setselectedForm={setselectedForm} />;
      case "lista":
        return <Lista setselectedForm={setselectedForm} />;
      default:
        return <Options setselectedForm={setselectedForm} />;
    }
  };
  return <div>{handlerForm()}</div>;
}
