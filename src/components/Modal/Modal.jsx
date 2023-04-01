import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    
    "& .MuiDialog-paperWidthSm": {
      width: "100%",
      
      backgroundColor: "white",
    },
    "& .MuiDialogTitle-root": {
      padding: "7px 24px",
    },
  },
}));

export default function Modal(props) {
  const classes = useStyles();

  const { children, isModal, setIsModal,title } = props;
  return (
    <Dialog open={isModal} className={classes.root}>
      <DialogTitle
        style={{
          backgroundColor: "#161a1d",
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
            style={{ fontSize: "16px", fontFamily: "'Montserrat', sans-serif" }}
            className="font-bold mt-2 text-white"
          >
            {title}
          </div>
          <div>
            <IconButton
              variant="contained"
              style={{color:"white",fontSize:"16px"}}
              onClick={() => setIsModal(false)}
            >
             Close
            </IconButton>
          </div>
        </div>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}
