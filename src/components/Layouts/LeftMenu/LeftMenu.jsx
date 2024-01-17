import {
  Box,
  MenuList,
  MenuItem,
  Divider,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Home, Group, FolderShared, AddCircle } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./leftMenu.scss";

export function LeftMenu() {
  return (
    <Box className="left-menu">
      <MenuList id="simple-menu" className="left-menu__navigation" open>
        <Link to="/">
          <MenuItem>
            <ListItemIcon>
              <Home fontSize="small" />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </MenuItem>
        </Link>
        <Divider />
        <Link to="/artists">
          <MenuItem>
            <ListItemIcon>
              <Group fontSize="small" />
            </ListItemIcon>
            <ListItemText>Artists</ListItemText>
          </MenuItem>
        </Link>
        <Divider />
        <Link to="/albums">
          <MenuItem>
            <ListItemIcon>
              <FolderShared fontSize="small" />
            </ListItemIcon>
            <ListItemText>Albums</ListItemText>
          </MenuItem>
        </Link>
        <Divider />
      </MenuList>
      <MenuList className="left-menu__adds">
        <MenuItem onClick={() => console.log("Subir Canción")}>
          <ListItemText>New song</ListItemText>
          <ListItemIcon>
            <AddCircle fontSize="small" />
          </ListItemIcon>
        </MenuItem>
        <MenuItem onClick={() => console.log("Subir Album")}>
          <ListItemText>New album</ListItemText>
          <ListItemIcon>
            <AddCircle fontSize="small" />
          </ListItemIcon>
        </MenuItem>
        <MenuItem onClick={() => console.log("Subir Artista")}>
          <ListItemText>New artist</ListItemText>
          <ListItemIcon>
            <AddCircle fontSize="small" />
          </ListItemIcon>
        </MenuItem>
      </MenuList>
    </Box>
  );
}
