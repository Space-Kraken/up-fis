import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
export default function AlertDialog2(props) {
  const { dom, num, monto, fecha, method, itemId, getTodo } = props;
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    getTodo(itemId);
    setOpen(true);
  };

  const handleClose = () => {
    // setRecourses(10);
    setOpen(false);
  };

  const handleAcept = () => {
    setOpen(false);
    method(itemId);
    // setselectedForm("lista");
  };

  return (
    <div>
      <IconButton
        // onClick={() => this.delete(item.id)}
        onClick={handleClickOpen}
        aria-label="delete"
        size="small"
      >
        <DeleteIcon fontSize="small" color="error" />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">¿Eliminar registro?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Estas a punto de eliminar el siguiente registro
            <br></br>
            {"Domimicilio: " + dom + "#" + num}
            <br></br>
            {"Monto: " + monto}
            <br></br>
            {"Fecha de pago: " + fecha}
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
