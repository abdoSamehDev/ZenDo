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
import { createTask } from "../../api/services/task";
import { useNavigate } from "react-router-dom";
import { Cookies } from "react-cookie";

function CreateTask(props) {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const id = cookies.get("User.id");
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: null,
    userId: id,
  });
  const [errors, setErrors] = useState({});

  function validateForm() {
    const newErrors = {};

    if (!taskData.title) {
      newErrors.title = "Title is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
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

  async function handleCreateTask(event) {
    event.preventDefault();
    if (validateForm()) {
      console.log(taskData);
      await createTask(taskData);
      props.setCreate(false);
      setTaskData({
        title: "",
        description: "",
        dueDate: "",
        priority: null,
        userId: id,
      });
      navigate(0);
    }
  }

  return (
    <Zoom in={props.create}>
      <Card sx={{ mx: 4, my: 3, p: "20px" }}>
        <Box
          component="form"
          noValidate
          onSubmit={handleCreateTask}
          sx={{ mt: 1 }}
          color="white"
        >
          <TextField
            required
            margin="normal"
            fullWidth
            id="title"
            label="Title"
            name="title"
            error={errors.title}
            helperText={errors.title}
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
          <PrimaryButton label="Create" onClick={handleCreateTask} />
        </Box>
      </Card>
    </Zoom>
  );
}

export default CreateTask;
