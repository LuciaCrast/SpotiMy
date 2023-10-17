import { Box, Button, TextField } from "@mui/material";
import "./registerForm.scss";

export function RegisterForm({ openLogin, goBack }) {
  return (
    <Box className="register-container">
      <h1> Crea tu cuenta gratis</h1>
      <Box component="form">
      <TextField className="form"required label="Name" fullWidth id="outlined-size-small"/>
      <TextField className="form"/>
      <TextField className="form"/>
      <TextField className="form"/>
      <TextField className="form"/>
      <TextField className="form"/>
      <TextField className="form"/>
      </Box>
      <Button color="secondary" onClick={openLogin}>
        Login
      </Button>
      
      <Button onClick={goBack}> Atrás </Button>
    </Box>
  );
}
