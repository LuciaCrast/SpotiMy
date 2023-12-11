import React from "react";
import { useState } from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import "./registerForm.scss";

export function RegisterForm({ goBack }) {
  const [emailValue, setEmailValue] = useState("");
  const [errors, setErrors] = useState({
    email: false,
    // Otros campos que puedan tener errores
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validar el formato del correo electrónico
    const isEmailValid = validateEmail(emailValue);

    setErrors({
      email: !isEmailValid,
      // Otros campos que puedan tener errores
    });

    if (isEmailValid) {
      // Realizar acciones adicionales si el formulario es válido
    }
  };

  const validateEmail = (email) => {
    // Expresión regular para verificar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <Box className="register-container">
      <h1>Crea tu cuenta gratis</h1>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              error={errors.email}
              onChange={(e) => setEmailValue(e.target.value)}
              required
              label="Email"
              fullWidth
              id="outlined-size-small"
              helperText={errors.email ? "Incorrect entry" : ""}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              label="Name"
              id="outlined-size-small"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              label="Last Name"
              id="outlined-size-small"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              label="Password"
              type="password"
              fullWidth
              id="outlined-size-small"
            />
          </Grid>
        </Grid>
        <Button type="submit">Submit</Button>
      </form>

      <Button onClick={goBack}>Atrás</Button>
    </Box>
  );
}
