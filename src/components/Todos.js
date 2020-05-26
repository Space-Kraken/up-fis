import React, { Component } from "react";
import db from "../utils/Firebase";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Input } from "semantic-ui-react";
import { Row, Col, InputGroup } from "reactstrap";
import AlertDialog from "./pages/RegistroPagos/RegistroPagos";
import "./Todos.scss";

export default class Todos extends Component {
  state = {
    items: [],
    domicilio: "",
    numero: "",
    fecha: "",
    monto: "",
    ban: true,
  };

  componentDidMount() {
    db.collection("reg_pagos").onSnapshot((snapShots) => {
      this.setState({
        items: snapShots.docs.map((doc) => {
          return { id: doc.id, data: doc.data() };
        }),
      });
    });
  }
  action = (t) => {
    if (this.state.ban) {
      const { domicilio, numero, monto } = this.state;
      db.collection("reg_pagos").add({
        domicilio: domicilio,
        numero: numero,
        fecha: t,
        monto: monto,
      });
      this.setState({
        domicilio: "",
        numero: "",
        monto: "",
      });
    }
  };

  render() {
    const useStyles = makeStyles({
      table: {
        minWidth: 650,
      },
    });

    function createData(name, calories, fat) {
      return { name, calories, fat };
    }

    const rows = [
      createData("Milpa #951", "19-05-2020", 600),
      createData("Pileta #1235", "05-04-2020", 800),
      createData("Granero #974", "01-01-2020", 1600),
      createData("Huerto #117", "25-03-2020", 3700),
    ];

    const options = [
      {
        id: 0,
        value: "Milpa",
        text: "Milpa",
      },
      {
        id: 1,
        value: "Pileta",
        text: "Pileta",
      },
      {
        id: 2,
        value: "Granero",
        text: "Granero",
      },
      {
        id: 3,
        value: "Huerto",
        text: "Huerto",
      },
    ];
    let date = new Date();
    let dia = date.getDate();
    if (date.getDate() < 10) {
      dia = "0" + (date.getDate() + 0);
    }
    let mes = date.getMonth() + 1;
    if (date.getMonth() + 1 < 10) {
      mes = "0" + (date.getMonth() + 1);
    }
    let fecha = String(dia + "/" + mes + "/" + date.getFullYear());
    const { items, domicilio, numero, monto } = this.state;
    // fecha = "test";

    return (
      <div>
        <InputGroup>
          {/* <Select
                className="sel"
                fluid
                value={domicilio}
                options={options}
                placeholder="Domicilio"
                onChange={(e) => {
                  this.setState({
                    domicilio: e.target.value,
                  });
                  // console.log(e.targe.value);
                }}
              /> */}
          <Input
            label={{ icon: "location arrow" }}
            labelPosition="left corner"
            className="inp"
            type="text"
            size="mini"
            name="email"
            placeholder="Domicilio"
            value={domicilio}
            onChange={(e) => {
              this.setState({
                domicilio: e.target.value,
              });
            }}
          />
          <Input
            label={{ icon: "hashtag" }}
            labelPosition="left corner"
            className="inp"
            type="text"
            size="mini"
            name="email"
            placeholder="Numero"
            value={numero}
            onChange={(e) => {
              this.setState({
                numero: e.target.value,
              });
            }}
          />
        </InputGroup>
        <InputGroup>
          <Input
            label={{ icon: "money bill alternate outline" }}
            labelPosition="left corner"
            className="inp"
            type="text"
            size="mini"
            name="email"
            placeholder="Monto"
            value={monto}
            onChange={(e) => {
              this.setState({
                monto: e.target.value,
              });
            }}
          />
          <Input
            label={{ icon: "calendar" }}
            labelPosition="left corner"
            className="inp"
            type="text"
            size="mini"
            name="email"
            placeholder="Fecha"
            value={fecha}
          />
        </InputGroup>
        <div className="btn">
          <AlertDialog className="btn" ban={fecha} method={this.action} />
        </div>

        <br></br>
        <br></br>
        <TableContainer component={Paper}>
          <Table
            // className={classes.table}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="center">Domicilio</TableCell>
                <TableCell align="center">Numero</TableCell>
                <TableCell align="center">Fecha</TableCell>
                <TableCell align="center">Monto</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items && items !== undefined
                ? items.map((item, key) => (
                    <TableRow key={key}>
                      <TableCell align="center">
                        {item.data.domicilio}
                      </TableCell>
                      <TableCell align="center">{item.data.numero}</TableCell>
                      <TableCell align="center">{item.data.fecha}</TableCell>
                      <TableCell align="center">{item.data.monto}</TableCell>
                    </TableRow>
                  ))
                : null}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}
