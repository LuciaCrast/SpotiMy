import { Box, Button } from "@mui/material";
import "./authOptions.scss";

export function AuthOptions({ openLogin, openRegister }) {
  return (
    <div className="auth__options">
      <h1 className="auth__options-title">Enjoy your music in SpotiMy</h1>
      <Box className="auth__options-buttons">
        <Button
          color="primary"
          variant="contained"
          onClick={openRegister}
          className="register"
        >
          Register
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={openLogin}
          className="login"
        >
          Login
        </Button>
      </Box>
    </div>
  );
}
