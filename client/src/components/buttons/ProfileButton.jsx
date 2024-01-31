import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Cookies } from "react-cookie";
import { deleteUserData } from "../../utils/userData";

function ProfileButton(props) {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const cookie = new Cookies();
  function handleLogout() {
    // dispatch(logoutSlice());
    // localStorage.removeItem("userData");
    // localStorage.removeItem("userId");
    // localStorage.removeItem("userEmail");
    // localStorage.removeItem("userFirstName");
    // localStorage.removeItem("userLastName");
    deleteUserData();
    cookie.remove("User.id");
    navigate("/welcome");
  }
  return (
    <IconButton color="error" onClick={handleLogout}>
      <LogoutIcon fontSize="medium" />
    </IconButton>
    // {/* <Box component="a" href="/profile" color="white"> */}

    // </Box>
  );
}

export default ProfileButton;
