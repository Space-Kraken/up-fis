import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Checkbox from "@material-ui/core/Checkbox";
import AlertDialog2 from "./Informacion/RegistroPagos2";
import App from "./../../../App";
export default function AlertDialog(props) {
  const {
    ban,
    dom,
    num,
    monto,
    method,
    secMet,
    modify,
    modifyM,
    datetime,
  } = props;
  const [open, setOpen] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  const olvmont = monto;
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    // setRecourses(10);
    setOpen(false);
  };

  const handleAcept = () => {
    setOpen(false);
    !modify ? method(ban, checked) : secMet(monto);
    // console.log("id: " + id + " monto: " + monto);
    // setselectedForm("lista");
  };
  const cancelModify = () => {
    modifyM();
    console.log(modify);
  };
  return (
    <div>
      <Button
        size="large"
        variant="contained"
        color="default"
        onClick={!modify ? handleClickOpen : cancelModify}
      >
        {!modify ? "Registrar pago" : "Cancelar"}
      </Button>
      <Button
        size="large"
        variant="contained"
        color="default"
        onClick={handleClickOpen}
        disabled={!modify}
      >
        Guardar cambios
      </Button>

      {/* <Button
        variant="contained"
        color="default"
        onClick={() => {
          setselectedForm(null);
        }}
      >
        Atras
      </Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {!modify ? "¿Proceder con el pago?" : "Guardar Cambios?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Porfavor confirme que la informacion es correcta
            <p>
              {!modify ? "Domimicilio: " + dom + " #" + num : null}
              <br></br>
              {!modify ? "Monto a saldar: " + monto : "Nuevo monto: " + monto}
            </p>
            {modify ? "Nueva fecha: " + datetime : null}
            {!modify ? "Realizar otro pago despues de este" : null}
            <Checkbox
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "primary checkbox" }}
              hidden={modify}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleAcept} color="primary" autoFocus>
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
