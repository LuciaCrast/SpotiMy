import { Box } from "@mui/material";
import { LeftMenu, TopBar, Footer } from "../../components/Layouts";

import "./loggedLayout.scss";

export function LoggedLayout({ children }) {
  return (
    <Box className="logged-layout">
      <Box className="logged-layout__content">
        <Box className="logged-layout__left-menu">
          <LeftMenu />
        </Box>
        <Box className="logged-layout__children-content">
          <Box className="logged-layout__top-bar">
            <TopBar />
          </Box>
          <Box className="logged-layout__display">{children}</Box>
        </Box>
      </Box>
      <Box className="logged-layout__footer">
        <Footer />
      </Box>
    </Box>
  );
}
