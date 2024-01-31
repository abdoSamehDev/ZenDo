import {
  Box,
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Zoom,
} from "@mui/material";
import React, { useState } from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import { updateTask } from "../../api/services/task";
import { useNavigate } from "react-router-dom";

function EditTask(props) {
  const [taskData, setTaskData] = useState({
    title: props?.task?.title ?? "Title",
    description: props?.task?.description ?? "Description",
    dueDate: props?.task?.due_date ?? "yyyy-MM-dd",
    completed: props?.task?.completed ?? false,
    priority: props?.task?.priority ?? null,
  });

  const navigate = useNavigate();

  async function updateUserTask() {
    const response = await updateTask(props.task.id, taskData);
    console.log("Updated task: ");
    console.log(response);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setTaskData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  async function handleUpdateTask(event) {
    event.preventDefault();
    console.log(taskData);
    await updateUserTask();
    props.setEdit(false);

    setTaskData({
      title: props?.task?.title ?? "Title",
      description: props?.task?.description ?? "Description",
      dueDate: props?.task?.due_date ?? "yyyy-MM-dd",
      completed: props?.task?.completed ?? false,
      priority: props?.task?.priority ?? null,
    });
    navigate(0);
  }

  return (
    <Zoom in={props.edit}>
      <Card sx={{ mx: 4, my: 3, p: "20px" }}>
        <Box
          component="form"
          noValidate
          onSubmit={handleUpdateTask}
          sx={{ mt: 1 }}
          color="white"
        >
          <TextField
            margin="normal"
            fullWidth
            id="title"
            label="Title"
            name="title"
            value={taskData.title}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            fullWidth
            id="description"
            label="Description"
            name="description"
            value={taskData.description}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            fullWidth
            name="dueDate"
            value={taskData.dueDate}
            onChange={handleChange}
            // label="Due Date"
            type="date"
            id="date"
            autoComplete="date"
          />

          <FormControl fullWidth sx={{ my: 2 }}>
            <InputLabel id="demo-simple-select-label">Priority</InputLabel>
            <Select
              sx={{ borderColor: "white" }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={taskData.priority}
              label="Priority"
              name="priority"
              onChange={handleChange}
            >
              <MenuItem
                // sx={{ bgcolor: "red" }}
                value={1}
              >
                Urgent
              </MenuItem>
              <MenuItem
                // sx={{ bgcolor: "orange" }}
                value={2}
              >
                Important
              </MenuItem>
              <MenuItem value={3}>Normal</MenuItem>
            </Select>
          </FormControl>
          <PrimaryButton label="Update" onClick={handleUpdateTask} />
        </Box>
      </Card>
    </Zoom>
  );
}

export default EditTask;
