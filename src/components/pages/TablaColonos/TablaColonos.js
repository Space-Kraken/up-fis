import React, { Component } from "react";
import { Label, Select, Button, Form, Input } from "semantic-ui-react";
import "./TablaColonos.scss";
class TablaColonos extends Component {
  render() {
    var fecha = new Date();
    const moni = Math.round(Math.random() * 500000);
    const options = [
      { key: "1", value: "Calle 1", text: "Luis cortazar" },
      { key: "2", value: "Calle 2", text: "Dr. Mora" },
    ];
    return (
      <div className="tableColonos">
        <h2>Portones de la hacienda</h2>
        <Input
          className="count"
          value={moni}
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
            label={{ icon: "money bill alternate outline" }}
            labelPosition="left corner"
            className="inp"
            type="text"
            name="email"
            placeholder="Monto"
          ></Input>
          <Input
            label={{ icon: "calendar" }}
            labelPosition="left corner"
            className="inp"
            type="text"
            name="email"
            value={
              fecha.getDay() +
              "/" +
              (fecha.getMonth() + 1) +
              "/" +
              fecha.getDate() +
              " - " +
              fecha.getHours() +
              ":" +
              fecha.getMinutes() +
              " hrs"
            }
            readOnly
          ></Input>
          <Button size="medium" className="btn">
            Aceptar
          </Button>
          {/* <Form.Button className="btn">Aceptar</Form.Button> */}
        </Form>
      </div>
    );
  }
}
export default TablaColonos;
