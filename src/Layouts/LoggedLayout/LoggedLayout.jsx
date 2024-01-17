import { Box } from "@mui/material";
import "./loggedLayout.scss";
import { LeftMenu } from "../../components/Layouts/LeftMenu/LeftMenu";

export function LoggedLayout({ children }) {
  return (
    <Box className="logged-layout">
      <Box className="logged-layout__content">
        <Box className="logged-layout__left-menu">
          <LeftMenu />
        </Box>
        <Box className="logged-layout__children-content">
          <Box className="logged-layout__top-bar">
            <p>Top Bar</p>
          </Box>
          <Box className="">{children}</Box>
        </Box>
      </Box>
      <Box className="logged-layout__footer">
        <p>Footer</p>
      </Box>
    </Box>
  );
}
