import React, { useState, useContext } from "react";
import { AppContext } from "../../utils/AppContext";
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
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const context = useContext(AppContext);

  const handleLogin = async (payload) => {
    try {
      const url = process.env.REACT_APP_BASEURL + "/api/login";
      const token = window.sessionStorage.getItem("token");
      const response = await axios.get(url, {
        headers: token
          ? {
              Authorization: `Bearer ${token}`,
            }
          : {},
        params: payload,
      });
      if (response.data && response.data.success) {
        context.setIsLoggedIn(true);
        navigate("/");
      } else setError("Something went wrong!");
    } catch (error) {
      console.error("Error: API failed while loggin in - ", error);
    }
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      validationSchema: Yup.object({
        username: Yup.string().required("Username is required field."),
        password: Yup.string().required("Password is required field."),
      }),
      onSubmit: () => {
        handleLogin(values);
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
              label="Username"
              variant="outlined"
              fullWidth
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
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Login
            </Button>
          </Grid>
        </Grid>
        <Box display={"flex"} justifyContent={"flex-end"} mt={2}>
          <Typography sx={{ mr: 1 }}>don't have an account?</Typography>
          <a href="/signup">Sign up</a>
        </Box>
        <Typography variant="body1" sx={{ color: "red" }}>
          {error}
        </Typography>
      </Paper>
    </Container>
  );
};

export default Login;
