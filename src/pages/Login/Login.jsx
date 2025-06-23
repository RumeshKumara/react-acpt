import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login attempted with:", { email, password });
  };

  const loginAction = () => {
    axios
      .post("https://student-api.acpt.lk/api/login", {
        email,
        password,
      })
      .then(function (response) {
        localStorage.setItem("token", response.data.token);
        window.location.reload(); // Reload the page to reflect the login state
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 12,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{ padding: 4, width: "100%", borderRadius: 6 }}
        >
          <Typography component="h1" variant="h4" align="center" gutterBottom>
            Login
          </Typography>
          <Box component="form" onSubmit={handleLogin} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              onClick={loginAction}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Box textAlign="center">
              <Link
                to={"/register"}
                variant="body2"
                sx={{ textDecoration: "underline", color: "primary.main" }}
              >
                Go to Register
              </Link>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}

export default Login;
