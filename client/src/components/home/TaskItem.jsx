import React, { useState } from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import EditTask from "./EditTask";
import {
  deleteTask,
  toggleComplete,
  updateTask,
} from "../../api/services/task";
import { useNavigate } from "react-router-dom";

function TaskItem(props) {
  const [checked, setChecked] = useState(props?.task?.completed);
  const [edit, setEdit] = useState(false);
  const navigate = useNavigate();

  async function toggleTaskCompleted() {
    const response = await toggleComplete(
      props?.task?.id,
      props?.task?.completed
    );
    console.log("Updated task: ");
    console.log(response);
  }

  async function deleteUserTask() {
    const response = await deleteTask(props?.task?.id);
    console.log("Deleted task: ");
    console.log(response);
    navigate(0);
  }

  async function handleCheck() {
    setChecked((prevValue) => {
      return !prevValue;
    });
    await toggleTaskCompleted();
  }

  function handleEdit() {
    setEdit((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <Box color="white">
      <ListItem
        color="white"
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="delete"
            color="error"
            onClick={deleteUserTask}
          >
            <DeleteIcon />
          </IconButton>
        }
        sx={{
          textDecoration: checked ? "line-through" : "none",
          color: checked ? "#A9A9A9 " : "white",
        }}
      >
        <ListItemAvatar>{props?.index ?? 1}</ListItemAvatar>
        <ListItemText
          sx={{
            width: 50,
            mr: 5,
          }}
          primary={
            <Typography
              variant="body1"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                textDecoration: checked ? "line-through" : "none",
                color: checked ? "#A9A9A9 " : "white",
              }}
            >
              {props?.task?.title ?? "Title"}
            </Typography>
          }
          secondary={
            <Typography
              variant="body2"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                fontSize: "15px",
                fontWeight: "300",
                color: "darkgrey",
                textDecoration: checked ? "line-through" : "none",
                color: checked ? "#A9A9A9 " : "white",
              }}
            >
              {props?.task?.description ?? null}
            </Typography>
          }
        />
        <ListItemText
          primary={
            <Typography
              variant="body2"
              sx={{
                textDecoration: checked ? "line-through" : "none",
                color: checked ? "#A9A9A9 " : "white",
              }}
            >
              {props?.task?.due_date ?? null}
            </Typography>
          }
        />
        <ListItemIcon>
          <IconButton color="secondary" onClick={handleEdit}>
            <EditIcon />
          </IconButton>
        </ListItemIcon>
        <ListItemIcon>
          <Checkbox checked={checked} onChange={handleCheck} />
        </ListItemIcon>
      </ListItem>
      {edit && <EditTask task={props.task} edit={edit} setEdit={setEdit} />}
    </Box>
  );
}

export default TaskItem;
