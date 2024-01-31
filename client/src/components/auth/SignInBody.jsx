import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import bgImage from "../../assets/images/landing-page2.jpg";
import AppIcon from "../AppIcon";
import { useNavigate } from "react-router-dom";
import { getUserTasks, login } from "../../api/services/auth";
import axios from "axios";
// import { useDispatch } from "react-redux";
import { Cookies } from "react-cookie";
import { saveUserData } from "../../utils/userData";
// import { loginSlice } from "../../store/authSlice.js";
import GoogleButton from "react-google-button";

function SignInBody() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  // const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const cookies = new Cookies();

  async function handleGoogleSignInClick() {
    try {
      const response = await axios.get("/auth/google");
      console.log(response);
    } catch (err) {
      console.log(err.message);
    }
  }

  function validateForm() {
    const newErrors = {};

    if (!userData.email) {
      newErrors.email = "Email is required";
    }
    if (!userData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  function handleChange(event) {
    const { name, value } = event.target;
    if ([name] == "confirmPassword") {
      setConfirmPassword(value);
    }
    setUserData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
    setErrors({});
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      setLoading(true);
      try {
        console.log(userData);
        const response = await login(userData);
        console.log(response);
        // const response = await getUserTasks();
        // Cookies.set("Connect.sid", response.sessionId);

        cookies.set("User.id", response.userData.id);
        const userId = cookies.get("User.id");
        console.log("User ID: " + userId);
        saveUserData({
          id: response.userData.id,
          email: response.userData.email,
          firstName: response.userData.firstName,
          lastName: response.userData.lastName || "",
        });
        // localStorage.setItem("userId", response.userData.id);
        // localStorage.setItem("userEmail", response.userData.email);
        // localStorage.setItem("userFirstName", response.userData.firstName);
        // localStorage.setItem("userLastName", response.userData.lastName);

        // dispatch(
        //   loginSlice({
        //     userId: response.userData.id,
        //     email: response.userData.email,
        //     firstName: response.userData.firstName,
        //     lastName: response.userData.lastName,
        //     googleId: response.userData.googleId,
        //   })
        // );
        navigate("/");

        console.log(response);
      } catch (error) {
        console.log("Login Error: " + error);
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    setUserData({ email: "", password: "" });
  };

  return (
    <Grid
      container
      direction="row"
      component="main"
      color="white"
      sx={{ height: "90vh" }}
    >
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.75,
        }}
      />
      <Grid item xs={12} sm={8} md={5} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <AppIcon />
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
            color="white"
          >
            <TextField
              margin="normal"
              //   color="secondary"
              //   borderColor="secondary"
              InputProps={{
                style: {
                  borderColor: "green",
                },
                focusedStyle: {
                  borderColor: "red",
                },
              }}
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              error={errors.email}
              helperText={errors.email}
              value={userData.email}
              onChange={handleChange}
              autoComplete="email"
              autoFocus
            />
            <TextField
              //   color="white"

              margin="normal"
              required
              fullWidth
              name="password"
              error={errors.password}
              helperText={errors.password}
              value={userData.password}
              onChange={handleChange}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              color="white"
              sx={
                {
                  // justifyContent: "center",
                  // width: "100%",
                }
              }
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            {/* <Grid
              container
              justifyContent="center"
              alignItems="center"
              direction="column"
              my={5}
              spacing={2}
              sx={
                {
                  //   justifyContent: "center",
                  // alignItems: "center",
                  // width: "100%",
                }
              }
            >
              <Grid item>
                <Divider
                  light
                  variant="middle"
                  //   fullWidth
                  //   width="10"
                  sx={{
                    width: 250,
                  }}
                >
                  <Typography variant="subtitle2" component="div">
                    Or
                  </Typography>
                </Divider>
              </Grid>
              <Grid item>
                <GoogleButton
                  //   label="test"
                  type="light"
                  onClick={handleGoogleSignInClick}
                />
              </Grid>
            </Grid> */}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default SignInBody;
