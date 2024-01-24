import { Box, Button } from "@mui/material";
import { User } from "../../Api";
import "./profile.scss";
import { UpdateAvatar } from "../../components/Profile";

const userController = new User();

export function Profile() {
  const { displayName, email } = userController.getMe();
  return (
    <Box className="profile">
      <h1>Profile Config</h1>
      <Box className="profile__block">
        <Box className="">
          <UpdateAvatar />
          <p> Username: {displayName || "User Name"}</p>
        </Box>
        <Button
          variant="contained"
          onClick={() => console.log("cambiar displeyName")}
        >
          Update
        </Button>
      </Box>
      <Box className="profile__block">
        <p>Email: {email}</p>
        <Button
          variant="contained"
          onClick={() => console.log("cambiar email")}
        >
          Update
        </Button>
      </Box>
      <Box className="profile__block">
        <p>Contraseña: ******** </p>
        <Button
          variant="contained"
          onClick={() => console.log("cambiar conttraseña")}
        >
          Update
        </Button>
      </Box>
    </Box>
  );
}
