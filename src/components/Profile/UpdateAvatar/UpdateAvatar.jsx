import { Box, Avatar } from "@mui/material";
import { defaultUser } from "../../../assets";
import "./updateAvatar.scss";
export function UpdateAvatar() {
  return (
    <Box className="avatar">
      <Avatar className="avatar__img" src={defaultUser} alt={defaultUser} />
    </Box>
  );
}
