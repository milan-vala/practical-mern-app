import React from "react";
import {
  Container,
  Paper,
  Grid,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Signup = () => {
  const handleCreateUser = async (payload) => {
    try {
      const url = process.env.REACT_APP_BASEURL + "/api/signup";
      const response = await axios.post(url, payload);
      if (response.data) {
        window.sessionStorage.setItem("token", response.data);
      }
    } catch (error) {
      console.error("Error: API failed while creating user - ", error);
    }
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: Yup.object({
        username: Yup.string().required("Username is required field."),
        password: Yup.string().required("Password is required field."),
        confirmPassword: Yup.string()
          .required("Confirm password is required field.")
          .oneOf([Yup.ref("password"), null], "Password did not match."),
      }),
      onSubmit: () => {
        console.log("values =>", values);
        handleCreateUser(values);
      },
    });

  return (
    <Container
      maxWidth="sm"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" sx={{ pb: 3, fontWeight: "700" }}>
        Weather App
      </Typography>
      <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
        <img src="./weatherapp.png" alt="logo" width={100} height={100} />
        <Grid container spacing={2} mt={2}>
          <Grid item xs={12}>
            <TextField
              name="username"
              fullWidth
              label="Username"
              variant="outlined"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.username && touched.username ? true : false}
              helperText={
                errors.username && touched.username ? errors.username : ""
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.password && touched.password ? true : false}
              helperText={
                errors.password && touched.password ? errors.password : ""
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                errors.confirmPassword && touched.confirmPassword ? true : false
              }
              helperText={
                errors.confirmPassword && touched.confirmPassword
                  ? errors.confirmPassword
                  : ""
              }
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Sign up
            </Button>
          </Grid>
        </Grid>
        <Box display={"flex"} justifyContent={"flex-end"} mt={2}>
          <Typography sx={{ mr: 1 }}>Already have an account?</Typography>
          <a href="/login">Login</a>
        </Box>
      </Paper>
    </Container>
  );
};

export default Signup;
