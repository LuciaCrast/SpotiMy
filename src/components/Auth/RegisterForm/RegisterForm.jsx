import React from "react";
import { useState } from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import { initialValues, validateForm } from "./RegisterForm.data";
import "./registerForm.scss";

export function RegisterForm({ goBack }) {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validateForm(),
    validateOnChange: false,
    onSubmit: (formValue) => {
      console.log("Register OK");
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
              error={formik.touched.email && Boolean(formik.errors.email)}
              name="email"
              value={formik.values.email}
              label="Email *"
              fullWidth
              id="outlined-size-small"
              onChange={formik.handleChange}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              error={formik.touched.username && Boolean(formik.errors.username)}
              name="username"
              value={formik.values.username}
              label="Name *"
              id="outlined-size-small"
              onChange={formik.handleChange}
              helperText={formik.touched.username && formik.errors.username}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              error={formik.touched.lastname && Boolean(formik.errors.lastname)}
              name="lastname"
              value={formik.values.lastname}
              label="Last Name *"
              id="outlined-size-small"
              onChange={formik.handleChange}
              helperText={formik.touched.lastname && formik.errors.lastname}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              error={formik.touched.password && Boolean(formik.errors.password)}
              name="password"
              value={formik.values.password}
              label="Password *"
              type="password"
              onChange={formik.handleChange}
              helperText={formik.touched.password && formik.errors.password}
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
