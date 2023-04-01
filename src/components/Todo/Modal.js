import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import CloseIcon from '@mui/icons-material/Close';

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    "& .MuiDialog-paperWidthSm": {
           
      backgroundColor: "white",
    },
  },
}));

export default function Modal(props) {
  const classes = useStyles();

  const { children, openPopup, Close,title,headershow } = props;
  return (
    <Dialog open={openPopup} className={classes.root}>
      {
        headershow ?
      <DialogTitle
        style={{
          backgroundColor: "#161a1d",
          height: "60px",
          padding: "0.6rem 1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontSize: "1.5rem",
              fontWeight: 100,
              fontFamily: "Nunito",
              letterSpacing: "0.1em",
              color: "white",
              marginLeft: "0.6rem",
            }}
          >
           {title}
          </div>
          <div>
            <button onClick={() => Close(false)}>cloee</button>
          </div>
        </div>
      </DialogTitle>
        :null
      }
         {
        headershow ? null:
      <div className="absolute  top-2 right-2">
        <CloseIcon style={{fontSize:"17px"}} onClick={() => Close(false)}/></div>

         }
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}
