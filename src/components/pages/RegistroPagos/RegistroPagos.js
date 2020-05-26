import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import App from "./../../../App";
export default function AlertDialog(props) {
  const { ban, method, amount, setRecourses, setselectedForm } = props;
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    // setRecourses(10);
    setOpen(false);
  };

  const handleAcept = () => {
    setOpen(false);
    method(ban);
    // setselectedForm("lista");
  };

  return (
    <div>
      <Button
        size="large"
        variant="contained"
        color="default"
        onClick={handleClickOpen}
      >
        Registrar pago
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
          {"La informacion que va a registrar es correcta?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Esta a punto de registrar el pago
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
