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

const Signup = () => {
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
            <TextField fullWidth label="Username" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Confirm Password"
              type="password"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth variant="contained" color="primary">
              Sign up
            </Button>
          </Grid>
        </Grid>
        <Box display={"flex"} justifyContent={"flex-end"} mt={2}>
          <Typography sx={{ mr: 1 }}>Already have an account?</Typography>
          <a href="/#">Login</a>
        </Box>
      </Paper>
    </Container>
  );
};

export default Signup;
