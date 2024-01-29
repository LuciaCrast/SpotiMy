import { useState } from "react";
import { Box, Card, CardContent, CardMedia, Slider } from "@mui/material";
import { noImage } from "../../../assets";
import { Player } from "../../Shared";
import { VolumeUp } from "@mui/icons-material";
import { VolumeDown } from "@mui/icons-material";
import "./footer.scss";

export function Footer() {
  const [volume, setVolume] = useState(20); // Valor inicial del volumen

  const handleChange = (event, newValue) => {
    // Actualizar el valor del volumen al cambiar el Slider
    setVolume(newValue);
    // Aquí  añadir lógica adicional para manejar el volumen
  };
  return (
    <Box className="footer">
      <Box className="footer__left">
        <Card className="footer__card">
          <CardMedia
            component="img"
            className="footer__cardMedia"
            image={noImage}
          />
          <CardContent>
            <h3> Song's name</h3>
          </CardContent>
        </Card>
      </Box>
      <Box className="footer__center">
        <Player />
      </Box>
      <Box className="footer__right">
        <VolumeDown />
        <Slider
          className="footer__slider"
          value={volume}
          onChange={handleChange}
          aria-labelledby="continuous-slider"
        />
        <VolumeUp />
      </Box>
    </Box>
  );
}
