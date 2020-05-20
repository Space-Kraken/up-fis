import React, { Component, useState } from "react";
import { Label, Select, Button, Form, Input } from "semantic-ui-react";
import "./TablaColonos.scss";
import AlertDialog from "./../RegistroPagos/RegistroPagos";

function TablaColonos(props) {
  const [recourses, setRecourses] = useState(0);
  const { setselectedForm } = props;
  let fecha = new Date();
  var moni = 0;
  const options = [
    {
      id: 0,
      value: "test",
      text: "Milpa",
    },
    {
      id: 1,
      value: "test1",
      text: "Pileta",
    },
    {
      id: 2,
      value: "test2",
      text: "Granero",
    },
    {
      id: 3,
      value: "test",
      text: "Huerto",
    },
  ];
  return (
    <div className="tableColonos">
      <h2>Portones de la hacienda</h2>
      <Input
        className="count"
        value={recourses}
        size="mini"
        labelPosition="right"
        type="text"
        placeholder="Amount"
      >
        <Label basic>$</Label>
        <input />
      </Input>
      <h3>Registro de pagos</h3>
      <Form className="formulario">
        <Select
          className="sel"
          fluid
          options={options}
          placeholder="Domicilio"
        />
        <Input
          label={{ icon: "address card" }}
          labelPosition="left corner"
          className="inp"
          type="text"
          name="email"
          placeholder="Numero"
        ></Input>

        <Input
          id="monto"
          label={{ icon: "money bill alternate outline" }}
          labelPosition="left corner"
          className="inp"
          type="text"
          name="email"
          onChange={(text) => {
            moni = text;
          }}
          placeholder="Monto"
        ></Input>
        <Input
          label={{ icon: "calendar" }}
          labelPosition="left corner"
          className="inp"
          type="text"
          name="email"
          value={
            fecha.getDate() +
            "/" +
            (fecha.getMonth() + 1) +
            "/" +
            fecha.getFullYear() +
            " - " +
            fecha.getHours() +
            ":" +
            fecha.getMinutes() +
            " hrs"
          }
          readOnly
        ></Input>
        <AlertDialog
          amount={moni}
          setRecourses={setRecourses}
          recourses={recourses}
          setselectedForm={setselectedForm}
        />
        {/* <Form.Button className="btn">Aceptar</Form.Button> */}
      </Form>
    </div>
  );
}
export default TablaColonos;
