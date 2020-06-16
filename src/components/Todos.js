import React, { Component, useState } from "react";
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
import AlertDialog2 from "./pages/RegistroPagos/Informacion/RegistroPagos2";
import "./Todos.scss";

let isEditing = false;
export default class Todos extends Component {
  state = {
    items: [],
    domicilio: "",
    numero: "",
    fecha: "",
    monto: "",
    ban: true,
    edit: false,
    idkey: "",
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
  getTodo = (id) => {
    isEditing = true;
    db.collection("reg_pagos")
      .doc(id)
      .get()
      .then((doc) => {
        console.log(doc.data().domicilio);
        this.setState({
          domicilio: doc.data().domicilio,
          numero: doc.data().numero,
          monto: doc.data().monto,
          fecha: doc.data().fecha,
          edit: true,
          idkey: id,
        });
      });
    // let olddata = db.collection("reg_pagos").doc(id);
    // var dom;
    // var num;
    // var mon;
    // olddata.get().then(function (doc) {
    //   // console.log(doc.data().domicilio);
    //   dom = doc.data().domicilio;
    //   num = doc.data().numero;
    //   mon = doc.data().monto;
    //   // loadData(dom, num, mon);
    //   console.log(dom + " " + num + " " + mon);
    // });
  };
  callback = () => {
    return <AlertDialog2 />;
  };
  setMethoh = () => {
    this.setState({
      domicilio: "",
      numero: "",
      monto: "",
      edit: false,
    });
  };
  action = (t, c) => {
    const { domicilio, numero, monto, edit } = this.state;
    !edit
      ? db.collection("reg_pagos").add({
          domicilio: domicilio,
          numero: numero,
          fecha: t,
          monto: parseInt(monto),
        })
      : this.update();
    if (!c) {
      this.setState({
        domicilio: "",
        numero: "",
        monto: "",
        edit: false,
      });
    } else {
      this.setState({
        monto: "",
      });
    }
  };
  setdates = () => {
    console.log("it works");
  };

  update = (mon) => {
    db.collection("reg_pagos")
      .doc(this.state.idkey)
      .update({
        //aqui falta la fecha para actualizar
        monto: parseInt(mon),
        fecha: this.state.fecha,
      })
      .then(() => {
        console.log("actualizado");
      })
      .catch((error) => {
        console.log(error);
      });
    this.setState({
      domicilio: "",
      numero: "",
      monto: "",
      edit: false,
    });
    // console.log(mon + "it works");
  };
  render() {
    let date = new Date();
    let dia = date.getDate();
    if (date.getDate() < 10) {
      dia = "0" + (date.getDate() + 0);
    }
    let mes = date.getMonth() + 1;
    if (date.getMonth() + 1 < 10) {
      mes = "0" + (date.getMonth() + 1);
    }
    let datetime = String(dia + "/" + mes + "/" + date.getFullYear());
    const { items, domicilio, numero, fecha, monto } = this.state;
    // fecha = "test";
    let suma = 0;
    function sumar() {
      items.map((item) => (suma += parseInt(item.data.monto)));
    }
    sumar();
    return (
      <div>
        <p>
          <strong>Total de ingresos:</strong>
        </p>

        <InputGroup>
          <Input
            label={{ icon: "dollar sing" }}
            labelPosition="left corner"
            className="inp"
            type="text"
            size="mini"
            name="email"
            placeholder="Total de ingresos"
            value={suma}
          />

          <br />
          <p>
            <strong>Registro de pago:</strong>
          </p>
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
            ref={(input) => {
              this.domInp = input;
            }}
            disabled={this.state.edit}
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
            ref={(input) => {
              this.numInp = input;
            }}
            disabled={this.state.edit}
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
            ref={(input) => {
              this.monInp = input;
            }}
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
            value={this.state.edit ? fecha : datetime}
            onChange={(e) => {
              this.setState({
                fecha: e.target.value,
              });
            }}
          />
        </InputGroup>
        <div className="btn">
          <AlertDialog
            className="btn"
            ban={datetime}
            dom={domicilio}
            num={numero}
            monto={monto}
            method={this.action}
            modifyM={this.setMethoh}
            modify={this.state.edit}
            datetime={this.state.fecha}
            whos={this.state.idkey}
            secMet={this.update}
          />
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
                      <TableCell align="center">
                        <Button
                          color="primary"
                          variant="outlined"
                          onClick={() => this.getTodo(item.id)}
                        >
                          Editar
                        </Button>
                      </TableCell>
                      <TableCell align="center">
                        {/* <Button color="secondary" variant="outlined">
                          Eliminar
                        </Button> */}
                      </TableCell>
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
