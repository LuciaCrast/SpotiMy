import { Box, Avatar } from "@mui/material";
import { Auth, User } from "../../../Api";
import { ArrowBackIos } from "@mui/icons-material";
import { ExitToApp } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import "./topBar.scss";

const auth = new Auth();
const user = new User();

export function TopBar() {
  const navigation = useNavigate();
  const userData = user.getMe();

  const displayName = userData.displayName || "Mi cuenta";
  const avatar = userData.photoURL;

  const goBack = () => {
    navigation(-1);
  };

  return (
    <Box className="top-bar">
      <ArrowBackIos onClick={goBack} className="top-bar__goBack" />
      <Box className="top-bar__endBar">
        <h3>¡Hello {displayName}!</h3>
        <Link to="/profile" className="top-bar__profile">
          <Avatar src={avatar} alt={displayName}></Avatar>
        </Link>
        <ExitToApp
          fontSize="large"
          className="top-bar__exit"
          onClick={auth.logout}
        />
      </Box>
    </Box>
  );
}
