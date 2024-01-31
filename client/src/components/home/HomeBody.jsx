import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import landingImage from "../../assets/images/landing-page.png";
import PrimaryButton from "../buttons/PrimaryButton";
import data from "../../data/dummy_data";
import TaskItem from "./TaskItem";
import CreateTask from "./CreateTask";
import { getUserData } from "../../utils/userData";
import { Cookies } from "react-cookie";
import { getTasks, updateTask } from "../../api/services/task";
import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

function HomeBody() {
  const [create, setCreate] = useState(false);
  const [userTasks, setUserTasks] = useState([]);
  // const selectUserData = state => state.auth;
  // useEffect(() => { });
  // const userData = useSelector((state) => state.auth);
  // const userData = localStorage.getItem("userData");
  const userData = getUserData();
  const navigate = useNavigate();
  const cookies = new Cookies();
  const userId = cookies.get("User.id");
  const firstName = userData.firstName;
  // const lastName = userData.lastName === "null" ? "" : userData.lastName;
  const lastName = userData.lastName;
  // const firstName = localStorage.getItem("userFirstName");
  // const lastName = localStorage.getItem("userLastName");
  console.log(firstName);

  function toggleCreate() {
    setCreate((prevValue) => {
      return !prevValue;
    });
  }

  async function gatUserTasks() {
    console.log("Getting user tasks...");
    console.log(userId);
    const response = await getTasks(userId);
    // console.log(response);
    const data = response.tasks;
    return data;
  }

  useEffect(() => {
    gatUserTasks()
      .then((tasks) => {
        console.log("Tasks: ", tasks);
        setUserTasks(tasks);
      })
      .catch((error) => console.error("Error fetching tasks", error));

    // console.log("User Tasks: ", userTasks);
    // console.log("Tasks: ");

    // console.log("Tasks: ", tasks);
  }, []);
  useEffect(() => {
    console.log("User Tasks (updated): ", userTasks);
  }, [userTasks]); // Run this effect whenever userTasks changes

  return (
    <Box
      sx={{
        position: "relative",
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
          // spacing={5}
          minHeight="80vh"
          direction="column"
          justifyContent="space-between" //main axis aligned
          alignItems="center" //cross axis aligned
          textAlign="center"
          color="white"
        >
          <Grid item my={2}>
            <Typography
              variant="h4"
              component="div"
              sx={{
                fontWeight: 500,
              }}
            >
              Hi {firstName} {lastName}!
            </Typography>

            <Typography variant="body1" component="div">
              Ready to crush some tasks?
            </Typography>
          </Grid>
          <Grid
            container
            mb={20}
            direction="column"
            justifySelf={"center"}
            alignSelf={"center"}
          >
            {!userTasks && (
              <Typography variant="body1" component="div">
                Start creating your tasks now!
              </Typography>
            )}
            {userTasks.map((task, index) => {
              return <TaskItem key={index} index={index + 1} task={task} />;
            })}
            {!create && (
              <Grid item>
                <PrimaryButton label="Create New Task" onClick={toggleCreate} />
              </Grid>
            )}

            {create && (
              <Grid item>
                <CreateTask setCreate={setCreate} create={create} />
              </Grid>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default HomeBody;
