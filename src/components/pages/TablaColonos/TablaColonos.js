import React, { Component } from "react";
import { Button, Form, Input } from "semantic-ui-react";
import "./TablaColonos.scss";
class TablaColonos extends Component {
  render() {
    var fecha = new Date();
    const options = [
      { key: "1", value: "Calle 1", text: "Luis cortazar" },
      { key: "2", value: "Calle 2", text: "Dr. Mora" },
    ];
    return (
      <div className="tableColonos">
        <h1>Portones de la hacienda</h1>
        <h2>Registro de pagos</h2>
        <Form widths="equal" className="formulario">
          <Form.Select
            className="inp"
            fluid
            options={options}
            placeholder="Domicilio"
          />
          <Input
            className="inp"
            type="text"
            name="email"
            placeholder="Numero"
          ></Input>

          <Input
            className="inp"
            type="text"
            name="email"
            placeholder="Monto"
          ></Input>
          <Input
            className="inp"
            type="text"
            name="email"
            placeholder={
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
          <br />
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
