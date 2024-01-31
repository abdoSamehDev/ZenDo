import {
  Box,
  Button,
  Divider,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import bgImage from "../../assets/images/landing-page2.jpg";
import GoogleButton from "react-google-button";
import AppIcon from "../AppIcon";
import { useNavigate } from "react-router-dom";
import { register } from "../../api/services/auth";
import { Cookies } from "react-cookie";
import { saveUserData } from "../../utils/userData";

function SignUpBody() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const cookies = new Cookies();
  function handleGoogleSignUpClick() {
    navigate("/home");
  }
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const [confirmPassword, setConfirmPassword] = useState("");

  function validateForm() {
    const newErrors = {};

    if (!userData.firstName) {
      newErrors.firstName = "First name is required";
    }
    if (!userData.email) {
      newErrors.email = "Email is required";
    }
    if (!userData.password) {
      newErrors.password = "Password is required";
    }
    if (userData.password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
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
      // const jsonData = JSON.stringify(userData);
      try {
        console.log(userData);
        const response = await register(userData);
        // const response = await axios.post(
        //   "http://localhost:4000/auth/login",
        //   jsonData,
        //   {
        //     headers: {
        //       "Content-Type": "application/json",
        //       // Add any other headers if required
        //     },
        //   }
        // );
        console.log(response);
        cookies.set("User.id", response.userData.id);
        const userId = cookies.get("User.id");
        console.log("User ID: " + userId);
        saveUserData({
          id: response.userData.id,
          email: response.userData.email,
          firstName: response.userData.firstName,
          lastName: response.userData.lastName,
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
      } catch (error) {
        console.log("Register Error: " + error);
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    // console.log("User F.Name Error: " + userDataError.firstName);
    setUserData({ firstName: "", lastName: "", email: "", password: "" });
    setConfirmPassword("");
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
        md={7}
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.75,
        }}
      />
      <Grid item xs={12} md={5} elevation={6} square>
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
            Sign up
          </Typography>

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
            color="white"
          >
            <Grid container justifyContent="space-between">
              <Grid item xs={12} lg={5}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="first-name"
                  label="First Name"
                  name="firstName"
                  error={errors.firstName}
                  helperText={errors.firstName}
                  value={userData.firstName}
                  onChange={handleChange}
                  autoComplete="firstName"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} lg={5}>
                <TextField
                  margin="normal"
                  fullWidth
                  id="last-name"
                  label="Last Name"
                  name="lastName"
                  value={userData.lastName}
                  onChange={handleChange}
                  autoComplete="lastName"
                  autoFocus
                />
              </Grid>
            </Grid>
            <TextField
              margin="normal"
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
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              error={errors.confirmPassword}
              helperText={errors.confirmPassword}
              value={confirmPassword}
              onChange={handleChange}
              label="Confirm Password"
              type="password"
              id="confirm-password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/login" variant="body2">
                  {"Already a member? Sign In"}
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
            >
              <Grid item>
                <Divider
                  light
                  variant="middle"
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
                  label="Sign Up with Google"
                  type="light"
                  onClick={handleGoogleSignUpClick}
                />
              </Grid>
            </Grid> */}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default SignUpBody;
