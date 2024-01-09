import { Button, Grid, TextField, Box } from "@mui/material";
import { useFormik } from "formik";
import { initialValues, validateForm } from "./LoginForm.data";
import { Auth } from "../../../Api";

const auth = new Auth();

export function LoginForm({ openRegister, goBack }) {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validateForm(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await auth.login(formValue.email, formValue.password);
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <Box className="register-container">
      <h1>Bienvenido/a de nuevo</h1>
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
        <Button type="submit">Iniciar Sesión</Button>
      </form>
      <Button onClick={goBack}>Atrás</Button>
      <Button onClick={openRegister}>Regístrate</Button>
    </Box>
  );
}
