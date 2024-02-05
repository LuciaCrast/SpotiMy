import { Box, Button } from "@mui/material";
import { User } from "../../Api";
import { UpdateAvatar } from "../../components/Profile";
import { useState } from "react";
import { Modal } from "../../components/Shared/Modal/Modal";
import "./profile.scss";

const userController = new User();

export function Profile() {
  const [open, setOpen] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [contentModal, setContentModal] = useState(null);

  const { displayName, email } = userController.getMe();

  const handleClickOpen = (type) => {
    if (type === "displayName") {
      setTitleModal("Update Username");
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTitleModal("");
    setContentModal(null);
  };

  return (
    <>
      <Box className="profile">
        <h1>Profile Config</h1>
        <Box className="profile__avatarBox">
          <UpdateAvatar />
        </Box>
        <Box className="profile__block">
          <p> Username: {displayName || "User Name"}</p>
          <Button
            variant="contained"
            onClick={() => handleClickOpen("displayName")}
          >
            Update
          </Button>
        </Box>
        <Box className="profile__block">
          <p>Email: {email}</p>
          <Button variant="contained" onClick={() => handleClickOpen("email")}>
            Update
          </Button>
        </Box>
        <Box className="profile__block">
          <p>Contraseña: ******** </p>
          <Button
            variant="contained"
            onClick={() => handleClickOpen("pasword")}
          >
            Update
          </Button>
        </Box>
      </Box>
      <Modal
        open={open}
        handleClose={handleClose}
        children={contentModal}
        titleModal={titleModal}
      />
    </>
  );
}
