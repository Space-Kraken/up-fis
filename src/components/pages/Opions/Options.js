import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));
export default function Options(props) {
  const { setselectedForm } = props;
  const classes = useStyles();
  return (
    <div>
      ¿Que desea hacer?
      <br />
      <br />
      <div className={classes.root}>
        <Button
          onClick={() => {
            setselectedForm("registrar");
          }}
          variant="contained"
          color="primary"
        >
          Registrar un pago
        </Button>
        <Button variant="contained" color="primary">
          Ver historial de pagos
        </Button>
        {/* <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" color="primary" href="#contained-buttons">
          Link
        </Button> */}
      </div>
    </div>
  );
}
