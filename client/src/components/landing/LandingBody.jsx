import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import landingImage from "../../assets/images/landing-page.png";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import { useNavigate } from "react-router-dom";

function LandingBody() {
  const navigate = useNavigate();
  function handleSignInClick() {
    navigate("/login");
  }

  function handleSignUpClick() {
    navigate("/register");
  }

  return (
    <Box
      sx={{
        position: "relative",
        height: "80vh", // Set the desired height
        color: "white",
      }}
    >
      <Box
        sx={{
          backgroundImage: `url('${landingImage}')`,
          opacity: "0.1",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          filter: " blur(2px)",
        }}
      ></Box>

      <Container maxWidth="md">
        <Grid
          container
          minHeight="80vh"
          direction="column"
          justifyContent="space-evenly" //main axis aligned
          alignItems="center" //cross axis aligned
          textAlign="center"
          color="white"
        >
          <Grid item>
            <Typography
              variant="h4"
              component="div"
              sx={{
                fontWeight: 500,
              }}
            >
              Welcome to ZenDo
            </Typography>

            <Typography variant="h5" component="div">
              Your Path to Effortless Productivity
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              Ready to transform your tasks into a peaceful flow?
            </Typography>
            <Typography variant="subtitle2" component="div">
              ZenDo empowers you to achieve more with less stress. Streamline
              your projects, collaborate seamlessly, and experience the joy of
              getting things done, without the overwhelm.
            </Typography>
          </Grid>
          <Grid item>
            <Divider
              light
              sx={{
                "&::before, &::after": {
                  borderColor: "rgba(128, 128, 128, 0.5)",
                },
                width: 500,
              }}
            >
              <Typography variant="subtitle2" component="div">
                Join the ZenDo Community Today
              </Typography>
            </Divider>
          </Grid>
          <Grid
            container
            columnSpacing={2}
            rowSpacing={4}
            display="flex"
            direction={{ xs: "column", md: "row" }}
            // columns={{ xs: 12, md: 4 }}
            justifyContent="center" //main axis aligned
            alignItems={{ xs: "streched", md: "center" }} //cross axis aligned
            color="blue"
          >
            <Grid item xs={4}>
              <PrimaryButton label="Login" onClick={handleSignInClick} />
            </Grid>
            <Grid item display={{ xs: "none", md: "flex" }}>
              <Divider
                orientation="vertical"
                sx={{
                  borderColor: "rgba(128, 128, 128, 0.5)",
                  height: 50,
                }}
              />
            </Grid>
            <Grid item md={4} xs={4}>
              <SecondaryButton label="Register" onClick={handleSignUpClick} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default LandingBody;
