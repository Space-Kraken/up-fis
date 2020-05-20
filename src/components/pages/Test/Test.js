import React, { useState } from "react";
import TablaColonos from "./../TablaColonos/TablaColonos";
import Options from "./../Opions/Options";

export default function Test() {
  const [selectedForm, setselectedForm] = useState(null);
  const handlerForm = () => {
    switch (selectedForm) {
      case "registrar":
        return <TablaColonos setselectedForm={setselectedForm} />;
      default:
        return <Options setselectedForm={setselectedForm} />;
    }
  };
  return <div>{handlerForm()}</div>;
}
