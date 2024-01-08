import React from "react";
import { useState } from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import { initialValues } from "./RegisterForm.data";
import "./registerForm.scss";

export function RegisterForm({ goBack }) {
  const formik = useFormik({
    initialValues: initialValues(),
    onSubmit: (formValue) => {
      console.log("REgister OK");
      console.log(formValue);
    },
  });

  return (
    <Box className="register-container">
      <h1>Crea tu cuenta gratis</h1>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              // error={errors.email}
              // onChange={(e) => setEmailValue(e.target.value)}
              required
              name="email"
              value={formik.values.email}
              label="Email"
              fullWidth
              id="outlined-size-small"
              onChange={formik.handleChange}
              // helperText={errors.email ? "Incorrect entry" : ""}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              name="username"
              value={formik.values.username}
              label="Name"
              id="outlined-size-small"
              onChange={formik.handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              name="lastname"
              value={formik.values.lastname}
              label="Last Name"
              id="outlined-size-small"
              onChange={formik.handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              name="password"
              value={formik.values.password}
              label="Password"
              type="password"
              onChange={formik.handleChange}
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
