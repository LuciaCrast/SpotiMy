import { Button } from "@mui/material";
import "./authOptions.scss";

export function AuthOptions({ openLogin, openRegister }) {
  return (
    <div className="auth-options">
      <h1>Disfruta de tu música en SpotiMy</h1>
      <Button color="secondary" onClick={openRegister} className="register">
        Registro
      </Button>
      <Button color="secondary" onClick={openLogin} className="login">
        Login
      </Button>
    </div>
  );
}
