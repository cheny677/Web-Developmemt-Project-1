import React from "react";
import {
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
  Dialog,
  Button,
  Link,
} from "@material-ui/core";

export default function SignUpAlert() {
  return (
    <div>
      <Dialog
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Congratulations on your new account!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let's start by going to the Log In page and post some pictures or
            add information in your profile!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link href="/Login">
            <Button color="primary" autoFocus>
              Awesome!
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}
