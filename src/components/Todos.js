import React, { Component } from "react";
import db from "../utils/Firebase";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Input } from "semantic-ui-react";
import { InputGroup } from "reactstrap";
import AlertDialog from "./pages/RegistroPagos/RegistroPagos";
import AlertDialog2 from "./pages/RegistroPagos/Informacion/RegistroPagos2";
import Snackbar from "@material-ui/core/Snackbar";
import "./Todos.scss";

export default class Todos extends Component {
  state = {
    items: [],
    domicilio: "",
    TemDomicilio: "",
    numero: "",
    TemNumero: "",
    fecha: "",
    TemFecha: "",
    monto: "",
    TemMonto: "",
    ban: false,
    edit: false,
    idkey: "",
    snak: false,
    del: false,
    inpDomErr: false,
    inpNumErr: false,
    inpMonErr: false,
    err: false,
    noModified: false,
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
          TemMonto: doc.data().monto,
          TemFecha: doc.data().fecha,
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
  getTodo2 = (id) => {
    db.collection("reg_pagos")
      .doc(id)
      .get()
      .then((doc) => {
        console.log(doc.data().domicilio);
        this.setState({
          TemDomicilio: doc.data().domicilio,
          TemNumero: doc.data().numero,
          TemMonto: doc.data().monto,
          TemFecha: doc.data().fecha,
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
  setError = () => {
    this.setState({
      inpDomErr: true,
      inpMonErr: true,
      inpNumErr: true,
      err: true,
    });
  };
  setModifyWarn = () => {
    this.setState({
      noModified: true,
    });
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
        ban: false,
        snak: true,
        inpDomErr: false,
        inpMonErr: false,
        inpNumErr: false,
        TemMonto: "",
        TemFecha: "",
        err: false,
      });
    } else {
      this.setState({
        monto: "",
        snak: true,
        edit: false,
        ban: false,
        snak: true,
        inpDomErr: false,
        inpMonErr: false,
        inpNumErr: false,
        TemMonto: "",
        TemFecha: "",
        err: false,
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
      snak: true,
      edit: false,
    });
    // console.log(mon + "it works");
  };
  delete = (mon) => {
    db.collection("reg_pagos")
      .doc(mon)
      .delete()
      .then(() => {
        console.log("actualizado");
      })
      .catch((error) => {
        console.log(error);
      });
    this.setState({
      del: true,
    });
    // this.setState({
    //   domicilio: "",
    //   numero: "",
    //   monto: "",
    //   snak: true,
    //   edit: false,
    // });
    // console.log(mon + "it works");
  };
  closeSnak = () => {
    this.setState({
      snak: false,
    });
    setTimeout(() => {
      this.setState({
        del: false,
        ban: true,
        err: false,
        noModified: false,
      });
    }, 100);
  };
  render() {
    // const classes = useStyles();
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
    const {
      items,
      domicilio,
      numero,
      fecha,
      monto,
      TemDomicilio,
      TemMonto,
      TemFecha,
      TemNumero,
    } = this.state;
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
            error={this.state.inpDomErr}
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
            error={this.state.inpNumErr}
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
            error={this.state.inpNumErr}
            type="number"
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
            oldMon={this.state.TemMonto}
            oldfecha={this.state.TemFecha}
            setError={this.setError}
            setModifyWarn={this.setModifyWarn}
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
            size="medium"
            // aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="center">Domicilio</TableCell>
                <TableCell align="center">Numero</TableCell>
                <TableCell align="center">Fecha</TableCell>
                <TableCell align="center">Monto</TableCell>
                <TableCell align="center">Accion</TableCell>
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
                        <IconButton
                          onClick={() => this.getTodo(item.id)}
                          aria-label="delete"
                          size="small"
                        >
                          <EditIcon fontSize="small" color="primary" />
                        </IconButton>
                        {/* <IconButton
                            onClick={() => this.delete(item.id)}
                            aria-label="delete"
                            size="small"
                          >
                            <DeleteIcon fontSize="small" color="error" />
                          </IconButton> */}
                        <AlertDialog2
                          itemId={item.id}
                          className="btn"
                          dom={TemDomicilio}
                          num={TemNumero}
                          monto={TemMonto}
                          fecha={TemFecha}
                          method={this.delete}
                          getTodo={this.getTodo2}
                          whos={this.state.idkey}
                        />

                        {/* <Button
                          color="primary"
                          variant="outlined"
                          onClick={() => this.getTodo(item.id)}
                        >
                          Editar
                        </Button> */}
                      </TableCell>
                      {/* <TableCell align="center">
                        
                      </TableCell> */}
                    </TableRow>
                  ))
                : null}
            </TableBody>
          </Table>
        </TableContainer>
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={this.state.snak}
          autoHideDuration={2000}
          onClose={this.closeSnak}
          message={
            this.state.ban
              ? "Se modifico el registro con exito"
              : "Se ha insertado un nuevo registro"
          }
        />
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={this.state.del}
          autoHideDuration={2000}
          onClose={this.closeSnak}
          message="Se ha eliminado un registro"
        />
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={this.state.err}
          autoHideDuration={2000}
          onClose={this.closeSnak}
          message="Porfavor llene todos los campos"
        />
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={this.state.noModified}
          autoHideDuration={2000}
          onClose={this.closeSnak}
          message="No se ha modificado ningun campo"
        />
      </div>
    );
  }
}
