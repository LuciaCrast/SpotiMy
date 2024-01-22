import { Box, Card, CardContent, CardMedia } from "@mui/material";
import { noImage } from "../../../assets";
import "./footer.scss";

export function Footer() {
  return (
    <Box className="footer">
      <Box className="footer__left">
        <Card className="footer__card">
          <CardMedia
            component="img"
            className="footer__cardMedia"
            image={noImage}
          ></CardMedia>
          <CardContent>
            <h3> Song's name</h3>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
