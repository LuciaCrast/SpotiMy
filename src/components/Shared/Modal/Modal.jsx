import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
  TextField,
} from "@mui/material";
import "./modal.scss";

export function Modal({ open, handleClose, titleModal, size, children }) {
  return (
    <Dialog
      open={open}
      handleClose={handleClose}
      PaperProps={{
        component: "form",
        onSubmit: (event) => {
          event.preventDefault();
        },
      }}
    >
      <DialogTitle> {titleModal}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          COsas que contiene el contenido contenedor contendiente
        </DialogContentText>
        <TextField
          autoFocus
          required
          margin="dense"
          id="name"
          name="email"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit">Submit</Button>
      </DialogActions>
    </Dialog>
  );
}
